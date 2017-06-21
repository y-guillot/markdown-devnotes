
var hljs = require('highlight.js'),
fs = require('fs'),
express = require('express'),
app = express();

/* Build Markdown with highlight.js */
var md = require('markdown-it')({
    breaks: true,       // Convert '\n' in paragraphs into <br>
    linkify: true,      // Autoconvert URL-like text to links
    html: true,         // Enable HTML tags in source
    xhtmlOut: true,     // Use '/' to close single tags (<br />).
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                hljs.highlight(lang, str, true).value +
                '</code></pre>';
            } catch (__) { }
        }
        return ''; // use external default escaping
    }
});

/* Constants */
var PAGE_404 = md.render('# 404'),
    PAGE_DIR = 'pages/',
    TEMPLATE_DIR = 'template/',
    STYLE_DIR = TEMPLATE_DIR + 'styles/',
    IMG_DIR = 'images/',
    DEFAULT_TPL = 'default.html';

var FOLDER_ICO = '&#x1F4C2',
    BACK_ARROW_ICO = '';

/**
 * Read template file.
 */
 function readTemplate(tpl) {
    return fs.readFileSync(TEMPLATE_DIR + tpl, 'utf8');
}


/**
 * Template rendering.
 * TODO implement emoji replace function
 */
 function template(page, req, res, tpl = DEFAULT_TPL) {

    if (page == undefined) {
        page = req.params.name;
        if (page == 'favicon.ico') return;
        page += '.md'; // route parameter
    }

    fs.readFile(PAGE_DIR + page, 'utf8', function (err, data) {
        if (err) {
            res.send(PAGE_404); // page not exists
        } else {
            var mdRender = md.render(data);
            var tplRender = readTemplate(tpl)
                .replace('[[content]]', mdRender)
                .replace('[[folder]]', FOLDER_ICO)
                .replace('[[title]]', req.params.name);
            res.send(tplRender);    
        }
    });
}

/**
 * Send file based on Route parameters.
 * Use cases : stylesheets, images ...
 */
 function sendFile(dir, req, res) {

    var options = {
        root: __dirname + '/' + dir,
        dotfiles: 'deny'
    };
    var fileName = req.params.name; // route parameter
    
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', fileName);
        }
    });
}

/**
 * Route : default
 */
 app.get('/', function (req, res) {
    template('toc.md', req, res);
})

/**
 * Route : stylesheets
 */
 app.get('/' + STYLE_DIR + ':name', function (req, res) {
    sendFile(STYLE_DIR, req, res);
})

/**
 * Route : images
 */
 app.get('/' + IMG_DIR + ':name', function (req, res) {
    sendFile(IMG_DIR, req, res);
})

/**
 * Route : dynamic
 */
 app.get('/:name', function (req, res) {
    template(undefined, req, res, 'page.html');
})

/**
 * Run web server
 */
 app.listen(3000, function () {
    console.log('listening on port 3000');
})
