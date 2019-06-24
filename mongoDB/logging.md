Get the logging components:
---------------------------
mongo admin --host 192.168.103.100:27000 -u m103-admin -p m103-pass --eval '
  db.getLogComponents()
'

Change the logging level:
-------------------------
mongo admin --host 192.168.103.100:27000 -u m103-admin -p m103-pass --eval '
  db.setLogLevel(0, "index")
'

Tail the log file:
------------------
tail -f /data/db/mongod.log

Update a document:
------------------
mongo admin --host 192.168.103.100:27000 -u m103-admin -p m103-pass --eval '
  db.products.update( { "sku" : 6902667 }, { $set : { "salePrice" : 39.99} } )
'

Look for instructions in the log file with grep:
------------------------------------------------
grep -R 'update' /data/db/mongod.log
