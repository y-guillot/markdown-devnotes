# Servlets

## Retour sur les requêtes Http.

Une requête Http est composée  :
- entetes : cle:valeur
- corps : Données stockées dans un certain format
- verbe/méthode :
	- Get : récupération d'une ressource
	- Post : Envoyer au serveur des données
	- Put : idem Post
	- Delete : Demande la suppression d'une ressource
	- Options : demander quelles sont les actions disponibles sur la ressource.

![Requete Http](images/http-request.png)

## Servlets - Maven - Tomcat

### Arborescence d'un projet de type Servlet sous Maven

![Maven arborescence](images/maven-servlet-arbo.png)

Le dossier `webapp` contient le front-end public à l'exception du dossier `WEB-INF` qui reste privé.
Ce dernier doit contenir l'ensemble des pages `.jsp` et fichiers importants qui ne doivent pas être accessibles publiquement.

### Architecture et fonctionnement sous Tomcat

![Tomcat architecture client serveur](images/tomcat-client-server.png)

![Requete Http](images/context-web.png)

### Best practices

Il est d'usage d'utiliser le fichier `webapp\index.jsp` comme seul fichier d'entrée et d'utiliser des méthodes de redirections directes :

1. Redirection directe : `Coyote -> Jasper(Jsp) -> Jasper(Jsp) -> Coyote` sans passer par le mécanisme de servlet.

```html
<!-- webapp\index.jsp-->
<jsp:forward page="/WEB-INF/views/private.jsp"></jsp:forward>
```
2. Redirection forcée en java dans `webapp\index.jsp` vers une URL configurée pour la servlet dans `web.xml` répondant au schéma `Coyote -> Jasper(Jsp) -> Catalina -> Jasper(Jsp) -> Coyote`

```html
<!-- webapp\index.jsp-->
<% response.sendRedirect(request.getContextPath().concat("/whateveruwant.do")); %>
```
```xml
<!-- WEB-INF\web.xml-->
<servlet>
	<servlet-name>MainServlet</servlet-name>
	<servlet-class>org.mypackage.servlet.MyServlet</servlet-class>
</servlet>
<servlet-mapping>
	<servlet-name>MainServlet</servlet-name>
	<url-pattern>*.do</url-pattern>
</servlet-mapping>
```

Il est de bon ton de ne pas utiliser de méthodes java directement dans les `.jsp` mais plutot les mécanismes des librairies `jstl`. 

### Mécanismes de routage sous Tomcat

La configuration des servlets et du mapping de routage dans le fichier `web.xml` est prioritaire sur la livraison des ressources au client.

Dans le cas où la ressource demandée par le client est directement accessible _( *.css, images, *.jsp, *.html ...)_ et sans contre-indication dans la configuration des servlets du fichier `web.xml`, cette dernière sera livrée directement par **Coyote** et optionnelement **Jasper** sans passer par **Catalina**.

### Creation d'une Servlet

A minima : 

1. Créer une classe qui hérite de `javax.servlet.http.HttpServlet`.
1. Configurer le fichier `web.xml` pour associer le routage des urls avec les classes java correspondantes.

### Mécanismes internes des Servlets

Les `attributs` sont des mecanismes internes serveur pour passer des paramètres entre servlets et pages `.jsp`.
Les `parameters` sont les données envoyées par l'utilisateur depuis son navigateur au travers des méthodes GET, POST, PUT, DELETE.

La servlet est **instanciée une seule fois** par le contenur de servlet qui gère sa durée de vie.
Ce pattern permet la connexion multiple d'utilisateurs à une ressource partagée.
Les données sont communes à tous les utilisateurs mais il est possible de créer des sessions individuelles.
