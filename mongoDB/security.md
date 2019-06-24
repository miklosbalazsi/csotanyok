Print configuration file:
-------------------------
cat /etc/mongod.conf

Launch standalone mongod:
-------------------------
mongod -f /etc/mongod.conf

Connect to mongod:
------------------
mongo --host 127.0.0.1:27017

Create new user with the root role (also, named root):
------------------------------------------------------
use admin
db.createUser({
  user: "root",
  pwd: "root123",
  roles : [ "root" ]
})

Connect to mongod and authenticate as root:
-------------------------------------------
mongo --username root --password root123 --authenticationDatabase admin

Run DB stats:
-------------
db.stats()

Shutdown the server:
---------------------
use admin
db.shutdownServer()
