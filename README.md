# AtrangiSwaad - Food Delivery Web Application

AtrangiSwaad is a full-stack Food Delivery Web Application that provides users with a seamless experience from placing an order to the final checkout. The application is built using a modern tech stack including React.js for the frontend, MongoDB for the database, and Node.js with Express.js for the backend. Mongoose is used as an ODM (Object-Document Mapper) for MongoDB.

## Features

1. **User-friendly Order Placement:** AtrangiSwaad allows users to easily browse through the available food items, add them to the cart, and place an order with just a few clicks.

2. **Proper Authorization and Validation:** The application ensures proper authentication and authorization of users to maintain data security. User inputs are validated on both the client and server sides to prevent any potential security issues.

3. **Single Page Checkout:** AtrangiSwaad features a single-page checkout process, making it convenient for users to review their order details, make any necessary adjustments, and complete the purchase in a streamlined manner.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose

## Getting Started

Follow these steps to set up and run AtrangiSwaad locally:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/AtrangiSwaad.git
    cd AtrangiSwaad
    ```

2. **Install Dependencies:**
    ```bash
    # Install backend dependencies
    cd backend
    npm install
    
    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3. **Configure Environment Variables:**
    - Create a `.env` file in the `backend` directory and add necessary environment variables like MongoDB connection string, JWT secret, etc.

4. **Run the Application:**
    ```bash
    # Run backend server
    cd backend
    npm start
    
    # Run frontend server
    cd ../frontend
    npm start
    ```

5. **Access the Application:**
    Open your browser and go to `http://localhost:3000` to access AtrangiSwaad.

## Contributing

If you'd like to contribute to AtrangiSwaad, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push the changes to your fork.
5. Submit a pull request with a detailed description of your changes.


## Acknowledgments

- Special thanks to the developers and contributors who have worked on the technologies used in this project.

Feel free to explore, modify, and enhance AtrangiSwaad according to your requirements. Happy coding!
