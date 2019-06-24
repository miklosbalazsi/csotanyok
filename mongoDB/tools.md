List mongodb binaries:
----------------------
find /usr/bin/ -name "mongo*"

Create new dbpath and launch mongod:
-----------------------------------
mkdir -p ~/first_mongod
mongod --port 30000 --dbpath ~/first_mongod --logpath ~/first_mongod/mongodb.log --fork

Use mongostat to get stats on a running mongod process:
-------------------------------------------------------
mongostat --help
mongostat --port 30000

Use mongodump to get a BSON dump of a MongoDB collection:
----------------------------------------------------------
mongodump --help
mongodump --port 30000 --db applicationData --collection products
ls dump/applicationData/
cat dump/applicationData/products.metadata.json

Use mongorestore to restore a MongoDB collection from a BSON dump:
------------------------------------------------------------------
mongorestore --drop --port 30000 dump/

Use mongoexport to export a MongoDB collection to JSON or CSV (or stdout!):
---------------------------------------------------------------------------
mongoexport --help
mongoexport --port 30000 --db applicationData --collection products
mongoexport --port 30000 --db applicationData --collection products -o products.json

Tail the exported JSON file:
----------------------------
tail products.json

Use mongoimport to create a MongoDB collection from a JSON or CSV file:
------------------------------------------------------------------------
mongoimport --port 30000 products.json
