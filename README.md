
# Library Management System

A full-stack Library Management System built with **React**, **Express**, and **MongoDB**

---

## Features

- User authentication (login/signup)
- Book management (view, issue, return)
- Modern React frontend with Tailwind CSS
- Node.js/Express backend with MongoDB

---

- **Frontend**: React, React Router, Tailwind CSS, Axios, React Hot Toast
- **Backend**: Express, MongoDB (Mongoose)

---

### Prerequisites
Ensure you have the following installed on your machine:
- A code editor (e.g., VS Code)
- MongoDB
- Node.js

---

### Installation Instructions

1. **Clone the Project**
   ```sh
   git clone https://github.com/Jaideep718/DevShelf-WebWizards.git
   cd DevShelf-WebWizards

2. **Frontend Setup**
   ```sh
   cd Frontend
   npm install
   npm run dev

3. **Backend Setup**
   ```sh
   cd ../Backend
   npm start

---

### Database Setup

1. Open MongoDB Compass and a new database called LMS_project is created on running npm start.

2. Within the LMS_project database, a collection named users is created.

3. Import the list.json file into the users collection:

- In MongoDB Compass, navigate to the users collection.

- Click on the "Import" button.

- Select the [list.json](https://github.com/Jaideep718/DevShelf-WebWizards/blob/main/Backend/list.json) file and import it.

4. Start the backend server again to ensure it connects to the database correctly:
    ```sh
   npm start

Running the Application

-  Navigate to the Frontend directory and run the development server:
   ```sh
   cd Frontend
   npm run dev

- Navigate to the Backend directory and start the backend server:
   ```sh
   cd Backend
   npm start

---

## License

MIT

---

## Credits

Built by [Reddy Jaideep](https://github.com/Jaideep718).