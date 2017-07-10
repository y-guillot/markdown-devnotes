# Tomcat


## Configuration

Configurer le fichier _conf/tomcat-users.xml_ comme suit :
```bash
<role rolename="tomcat"/>
<role rolename="manager-gui"/>
<role rolename="admin-gui"/>
<user username="tomcat" password="tomcat" roles="tomcat,manager-gui,admin-gui"/>
```

## Les dossiers de Tomcat
- work :
  - contient l'ensemble des projets déployés
- log :
  - localhost contient les logs de services de tomcat
  - le fichier catalina contient les logs complets
  - le localhost_access contient tous les logs des accès http
- lib :
  - toutes les librairies embarquées dans Tomcat 
- conf :
  - catatina.properties on peut changer le common.loader pour spécifier un dossier "ext" qui sera placé dans lib pour mettre manuellemennt les librairies qui doivent être chargées avant de déployer l'application.
  - context.xml ne devrait pas être touché. On peut en créer un dans le dossier WEB-INF de notre projet ( a confirmer )
- bin (contient les executables) :
  - les ficheirs startup.sh et shutdown.sh permettent de lancer/arreter l'application
- webapps (contient tous les éléments fron-end des projets publiés)
  - ROOT correspond au contenu de la page d'accueil par defaut de Tomcat

##  Command tools

Permettre de lire le fichier de sortie quand on a lancé Tomcat en mode service et qu'on a plus les infos de logs :
```bash
$ tail -f catalina.out
```
## Déploiement
Déposer l'application `*.war` dans le dossier `webapp` de Tomcat

ou faire un deploy.bat
 ```bash
 REM script windows batch
 REM echo permet d'afficher le contenu du code et @ evite d'afficher cette ligne de code précisément.
 @echo off
 mvn clean package && xcopy /Y /Q source\*.war dest
 @echo on
 ```

## Eclipse deploiement et configuration
 D:\workspaces\learning\.metadata\.plugins\org.eclipse.wst.server.core
 En cas de problème supprimer les dossiers `tmp0`, `work` et le contenu du dossier `temp` seulement.



 ## configurer Tomcat pour UTF8