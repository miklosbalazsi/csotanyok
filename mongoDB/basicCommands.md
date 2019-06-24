User management commands:
-------------------------
db.createUser()
db.dropUser()

Collection management commands:
-------------------------------

db.<collection>.renameCollection()
db.<collection>.createIndex()
db.<collection>.drop()

Database management commands:
-----------------------------

db.dropDatabase()
db.createCollection()

Database status command:

db.serverStatus()

Creating index with Database Command:
-------------------------------------
db.runCommand(
  { "createIndexes": <collection> },
  { "indexes": [
    {
      "key": { "product": 1 }
    },
    { "name": "name_index" }
    ]
  }
)

Creating index with Shell Helper:
---------------------------------
db.<collection>.createIndex(
  { "product": 1 },
  { "name": "name_index" }
)

Introspect a Shell Helper:
---------------------------
db.<collection>.createIndex
