# 14-Tech-Blog
Build a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. 


TASK
It's done when the `/` homepage route renders a list of existing blog posts that include the post title and the date created.(presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment, enter a comment and click on the submit button while signed in)

Navigation links for the homepage & dashboard

Can click on any other links in the navigation

It's done when the `/login` route renders a form to log in (prompted to enter my username and password) or a form to create a new account. (sign up or sign in)

It's done when a new user can create an account on the login page and then be immediately logged in with a session. (prompted to create a username and password)

It's done when the `/profile` route renders the logged-in user's projects and a form to create a new project. (On dashboard presented with any blog posts I have already created and option to add a new blog post, click on the button to create a new blog post, prompted to enter both a title and contents for my blog post, title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post)

It's done when a logged-in user can select a "Logout" button to remove their session.(option to log out)

It's done when the API routes to create and delete posts are protected from non logged-in users. (prompted to log in again before I can add, update, or delete comments)

comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

Models
* `User`

    * `id`: primary key

    * `username`

    * `email`

    * `password`

  
  * `Post`

    * `id`: primary key

    * `title`

    * `post_text`
  * 

    * `date_created`


    * `user_id`: foreign key that references `User.id`

    
    * `Comment`

    * `id`: primary key

    * `username`

    * `post_id`
    * 

    * `comment_text`



  * Users have many projects, and projects belong to a user.

will resubmit 

