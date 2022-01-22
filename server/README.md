# Local setup of server

- **Install packages**
  1. Go to directory of server by running following command
  ```bash
  cd server
  ```
  After coming to the server directory run following command
  ```bash
  npm install
  ```
- **Setup .env**
  1. Create a file named `.env` whose content will be like this
  ```bash
  PORT = port_no
  jwt_secret_key = any_key_of_your_choice
  dburl = your_mongodb_connection_url
  ```
  - Note -
  1. For PORT number you can choose anything like 2000, 4000, 5000 etc. apart from 3000. Since on port 3000 your frontend react application will be running.
  2. For dburl, you first need to setup your mongodb cluster, there you will find your connection url for the database.
- **Create uploads folder**
  - Create an empty folder named `uploads`\
    In the development mode, this is where all the files will be saved when you upload it to the server.
- **Start you Server**\
  To start your server, run following command
  ```bash
  npm start
  ```
