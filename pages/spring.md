# Spring

Nouvelle API EE CDI

Les EJB (serveur d'application) sont différents des beans de Srping.
Dans Spring, le conteneur de bean est léger et embarqué dans l'archive déployée.

Modules de Spring :
- Context _(apparenté au coteneur de bean et tilise les modules Core, AOP et Bean)_


JNDI : set à fabriquer des chemins de composants java surtour utour des beans.

Dans Spring :
application-context.xml

![Spring core modules](images/spring-core-modules.png)


Dans Spring les fichiers properties sont gérées non pas avec Java.Properties class
mais ajoute une couche plus complète avec internationalisation i18n ( avec Resource Bundle : org.springframework.context.support.ResourceBundleMessageSource ) par exemple ou (Message source) qui est la surcouche des Properties de java.
Les fichiers .properties sont comme des Maps en fait.


menu.properties sera copié par maven en dehors du projet pour eviter le classpath impossible à modifier.



TODO :  checkstyle + findbugs

TODO : voir le Transaction Manager



TODO CV : Spring : Mvc, data, security



LEs BEans Srping sont par defaut des singletons !!!

@ModelAttribute  est appel a chaque fois que la classe est appelée contrairement aux @Autowired du fait du caractère singleton des controlleurs.

@ModelAttribute serait appelé une seule fois si le paramètre avait été mis en session.  Attention donc à cet aspect.


Les Converters sont a enregistrer en tant que bean dans ConversionServer d epring du Contextapplication.xml
LEs converterus sont appelés automatiquement quand nécessaire par Spring à tous les niveaux.