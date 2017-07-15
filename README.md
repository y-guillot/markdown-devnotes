# markdown-devnotes

Fast and simple dev-note tool based one express.js and markdown

## Basic usage (alpha)

1. create markdown file in `/page` folder.
1. OPT : add resources in `/images` folder if needed.
1. OPT : build your own template and update `index.js`.
1. update `toc.md` to link your new page.
1. that's all folks

## Code rendering

- HighlightJS comes with multi-language code highlighting.
- Specific pseudo-language code render has beeen added such as :
	- _tree_ : better display of tree structure - (use tabs).
	- _debug_ : automatically add "$" sign for each new line with special css render. 

