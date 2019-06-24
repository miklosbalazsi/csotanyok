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

Roles
=====
Authenticate as root user:
--------------------------
mongo admin -u root -p root123

Create security officer:
------------------------
db.createUser(
  { user: "security_officer",
    pwd: "h3ll0th3r3",
    roles: [ { db: "admin", role: "userAdmin" } ]
  }
)

Create database administrator:
------------------------------
db.createUser(
  { user: "dba",
    pwd: "c1lynd3rs",
    roles: [ { db: "admin", role: "dbAdmin" } ]
  }
)

Grant role to user:
-------------------
db.grantRolesToUser( "dba",  [ { db: "playground", role: "dbOwner"  } ] )

Show role privileges:
---------------------
db.runCommand( { rolesInfo: { role: "dbOwner", db: "playground" }, showPrivileges: true} )
