STEP 01:
# Dependencies
npm init -y
It's like a config file for your project that tracks:
Creates package.json file
Project info (name, version, description)

inatall express postgress cors

npm i express pg cors

to run the index.js

nodemon index or node index.js 

STEP 02:
# Creating DATABASE using postgresql

psql -U postgres 

or

sudo -u postgres psql


psql commands

\l           -> list all the existing DB

\c db_name   -> to open the DB

\dt          -> to open the tables

STEP 03 : 
# Connecting postgres DB to server
creatinf db.js

this connects the db to server , were Pool is the class and pool is the instance of Pool ,which specifies the user,password, host, port and db to the server


STEP 04:
# Build routes with postgres queries
Using postman REST API and routing 

POST = create

GET = read

PUT = update

PATCH = partially update

DELETE = delete

