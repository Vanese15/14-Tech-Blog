# 14-Tech-Blog

Dependencies needed:

[express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views, 
[MySQL2](https://www.npmjs.com/package/mysql2) 
and 
[Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models  
create an Express.js API for your Controllers.

[dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables 
[bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, 
[express-session](https://www.npmjs.com/package/express-session) 
and 
[connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**:
[express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.
