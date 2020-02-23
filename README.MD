
node.js version 8.17.0 x64

start app

node src/index.js

auto-save
npm run dev


DB MYSQL ERROR PRIVILEGES/ACCESS DENIED on start node js
on mysqlworkbench run:
        ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourMYSQLPassword';
        flush privileges;