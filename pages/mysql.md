# MySQL

## Command-Line Interface CLI

__MySQL access__ : `mysql -u username -p`
```bash
Enter password *********
Welcome to MySQL monitor ...
```
__Database select__ : `mysql> use foo_db;`
```bash
Database changed
```
__Database query example__ : `mysql> SELECT * FROM foo_db;`
```bash
+----+------------+------------+
| id | openedOn   | closedOn   |
+----+------------+------------+
|  1 | 2017-06-27 | 2017-06-27 |
+----+------------+------------+
1 row in set (0.00 sec)
```