# Maven standalone

Table des matières :
-[Maven Standalone](#maven-standalone)

## Maven Standalone
### Maven installation
### Maven setup

`mvn clean package`

`mvn clean dependency:copy-dependencies package`  : copier aussi les librairies externes dans le dossier target/dependencies. Utile

`mvn clean install`   permet de mettre ses porpres projets dans son repository local dans le cas d'un projet maven avec des dépendances basées sur d'autres projets personels mavenisés mais qui ne sont bien evidemment pas sur les dépots de mavne.
Maven : Voir <dependency-management>  et <plugin-management> <modules>
Il faudra importer tous les projets dépendants du projet principal dans à la racine dans des dossiers séparés.

`mvn clean package -Dskiptests`


`mvn clean package -U -C` force à la mise à jour même si présent dans le repo local avec checksums.