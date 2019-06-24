#Get profiling level:

mongo newDB --host 192.168.103.100:27000 -u m103-admin -p m103-pass --authenticationDatabase admin --eval '
  db.getProfilingLevel()
'

#Set profiling level:

mongo newDB --host 192.168.103.100:27000 -u m103-admin -p m103-pass --authenticationDatabase admin --eval '
  db.setProfilingLevel(1)
'

#Show collections:

mongo newDB --host 192.168.103.100:27000 -u m103-admin -p m103-pass --authenticationDatabase admin --eval '
  db.getCollectionNames()
'

#Note: show collections only works from within the shell
#Set slowms to 0:

mongo newDB --host 192.168.103.100:27000 -u m103-admin -p m103-pass --authenticationDatabase admin --eval '
  db.setProfilingLevel( 1, { slowms: 0 } )
'

#Insert one document into a new collection:

mongo newDB --host 192.168.103.100:27000 -u m103-admin -p m103-pass --authenticationDatabase admin --eval '
  db.new_collection.insert( { "a": 1 } )
'

#Get profiling data from system.profile:

mongo newDB --host 192.168.103.100:27000 -u m103-admin -p m103-pass --authenticationDatabase admin --eval '
  db.system.profile.find().pretty()
'

#The command show collections no longer lists the system.* collections. It changed after version 4.0.
#To list all of the collection names you can run this command:

db.runCommand({listCollections: 1})
