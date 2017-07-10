# Hibernate

## JTA / JPA

ORM : object relational MApping
- Annotations ou xml
- Configuration des correspondances entre objet JAva et les tables SQL.
- 1 entité (POJO serializable) / table SQL
- 1 propriété pour 1 colonne SQL
- 1 identifiant pour une cle primaire
- 1 relation pour une cle étrangère

Resources de connection à la BDD
- Resource JDBC
- Datasource (JTA ou non)


Implémentations JPA :
- Hibernate (criteria + HQL)
- OpenJPA 
- EclipseLink
- Toplink

# Requetes JPQL
Permet d'effectuer des requetes sur les entités Java.

# EntityManager
Actions de type CRUD sur une entité.
EntityManagerFactory fournit des instances de EntityManager



TODO parseur XML excellent : JSOUP