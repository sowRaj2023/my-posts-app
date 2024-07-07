# React App with Mock API (json-server)

This project demonstrates how to integrate a React application with a mock API using json-server. The mock API allows you to simulate backend functionalities such as creating, reading, updating, and deleting posts.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd <repository-name>
Starting the Mock API
Ensure json-server is installed globally. If not, install it using:

bash
Copy code
npm install -g json-server
Start json-server with the provided db.json file:

bash
Copy code
json-server --watch db.json --port 5000
This will start the mock API server at http://localhost:5000.

Running the React Application
In a new terminal window, start the React application:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the application.

Features
Create Post: Create new posts and store them in the mock API.
View Posts: Fetch and display all posts from the mock API.
Edit Posts: Update existing posts using CRUD operations.
Delete Posts: Remove posts from the mock API.
Dependencies
react: JavaScript library for building user interfaces
react-dom: React package for DOM rendering
react-scripts: Scripts and configuration used by Create React App
json-server: Mock REST API server using a JSON file as database

Acknowledgments
json-server - For providing a simple mock API solution

Author
Sowndharya
