This repository demonstrates a simple CRUD (Create, Read, Update, Delete) application built using React and Redux, integrated with a mock API server powered by json-server.

Features:
Create, Read, Update, and Delete operations on user data. Utilizes Redux for state management to ensure a single source of truth. Utilizes json-server to simulate a REST API for storing and retrieving user data.

redux-crud

Project Setup for React Redux CRUD with json-server
Clone the Repository:
git clone <repository-url>
Install Dependencies: Navigate to the project directory and install the project dependencies using yarn

Start the Development Server:

yarn start
This will launch the React app in your default web browser. You can access it at http://localhost:3000.

Run json-server for Mock API:
json-server --watch src/Userdata/db.json --port 3001
This will start the mock API server, and you can access the API at http://localhost:3001.

Contributions are welcome! If you'd like to enhance this project or fix any issues, feel free to submit pull requests. Let's learn and build together.
