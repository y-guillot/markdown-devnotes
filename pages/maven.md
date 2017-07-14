# Maven standalone

## Maven setup

- Ensure `JAVA_HOME` environment variable is set and points to your JDK installation.
- Download maven at https://maven.apache.org/download.cgi and unzip it .
```bash
unzip apache-maven-3.5.0-bin.zip
```
```bash
tar xzvf apache-maven-3.5.0-bin.tar.gz
```
- OPT : Setup your `PATH` environement variable to point to `/bin` 

## Maven commands

### Build archive

- __Build basic archive__
Maven create and deploy the project based on the `pom.xml` in the `target` directory which contains the final archive _(.war, .jar ...)_ and uncompressed compiled classes as well.
```bash
mvn clean package
```

Alternatively, to resolve some problems like corrupted libraries in the `.m2` folder, use the command below that force dependencies 
```bash
mvn clean package -U -C
```

- __Build archive based on external package__
Maven is able to extract project dependencies from within archive into an external `target/dependency` folder.
Perfect to deal with _Transitive dependencies_ beacause those libraries are not bundled in the archive. The final user could choose another up-to-date dependency library to test your project for exemple.
```bash
mvn clean dependency:copy-dependencies package
```

- __Add artifacts to local repository__
Deploy your maven project into the `.m2` local repository which will be reusable for other local projects. 
```bash
mvn clean install
```
@TODO : see \<dependency-management\> + \<plugin-management\> + \<modules\>