# Shop n' Data

  # Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage]($usage)
  - [Testing](#testing)
  - [Credits](#credits)
  - [Username](#username)
  - [Email](#email)

  ## Description: 
  "Shop n' Data" is a backend for an ecommerce site that is composed of various data relating to the site's product inventory, including information about product tags and the categories they belong to. This project incorporated my knowledge regarding Object-relational mapping (ORM), MySQL and Node.js broadly. Additionally, I was able to practice using Insomnia to utilize my get/post/put and delete routes. A challenge I faced in trying to complete this project is ensuring that all of the routes functioned anddemonstrated their functionality in insomnia. Incorporating JSON in insomnia required me reviewing my class notes to ensure that each route (for categories, tags and products) were not just replicas of one another but were targeting their given set of objects. 

  ## Installation: 
  In order to install the Shop n' Data application, users must first clone my repository from github onto their own local repository. After having the files on their own computer, then they must also install MySQL. After MySQL is set up, and they have launced a server connection, then users can seed their sql files on VS Code. To seed the files, users must open an integrated terminal at their server.js file. Simply right click an select "open integrated terminal" in your file inventory. After opening an integrated terminal type "mysql -u root -p" and type and then type in your password. After launching mysql, seed your schema file by typing "source db/schema.sql". After sourcing your schema file, quit the application by typing "quit" and then type "node run seed" to seed your index.js file. After seeding your files, type "node server.js" to launch the server. 

  ## Usage: 
  After the server is launched. user's can then use Insomnia, to utilize the get(in general and by ID)/post/put and delete routes. These are demonstrated in the videos below. 


  ## Credits:
  The starter code for this project was cloned from GitHub user @Xandromus

  ## Username:

  ### If you have any questions you can reach me at: 
  asmusaliar@gmail.com <br />
  or at my Github: [Github](https://github.com/musaliyah)
