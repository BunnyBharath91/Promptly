# Promptly

**Promptly** is a full-stack application that allows users to generate images from text prompts using DALL-E APIs. Built with the MERN stack, this application features React for the frontend, Node.js/Express for the backend, and MongoDB for data storage. Users can also download generated images and optionally publish them to a public gallery within the app.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)

## Project Overview

**Promptly** provides an intuitive interface for generating AI-based images from text prompts. Key functionalities include:
- Uploading images.
- Generating images based on text prompts using DALL-E APIs.
- Downloading the generated images.
- Optionally publishing images to a public gallery within the application.

## Features

- **Text-based Image Generation**: Create images from text prompts using the DALL-E API.
- **Image Upload and Download**: Upload images and download the generated results.
- **Public Gallery**: Publish and showcase images in a public gallery for others to view.

## Technologies Used

### Frontend
- **React.js**: For building the user interface.
- **Axios**: For making HTTP requests.
- **HTML5 & CSS3**: For structuring and styling the application.
- **JavaScript (ES6+)**: For scripting and interactivity.
- **React Router**: For handling routing within the application.

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: Database for storing user data and application content.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **DALL-E API**: For generating images based on prompts.

### Tools
- **Git & GitHub**: Version control and repository management.
- **Postman**: API testing and development.
- **Render**: Deployment platform.

## Installation and Setup

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **MongoDB**: A MongoDB instance, either locally or via a cloud service like MongoDB Atlas.
- **DALL-E API Key**: Access to the DALL-E API for image generation.

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/BunnyBharath91/Promptly.git
    cd Promptly
    ```

2. Install server dependencies:

    ```bash
    cd server
    npm install
    ```

3. Install client dependencies:

    ```bash
    cd client
    npm install
    ```

4. Create a `.env` file in the `server` directory with the following content:

    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    DALL_E_API_KEY=your_dall_e_api_key
    PORT=5000
    ```

5. Start the backend server:

    ```bash
    cd server
    npm start
    ```

6. Start the frontend:

    ```bash
    cd client
    npm start
    ```

## Project Structure

- `client/`: Contains the frontend React application.
- `server/`: Contains the backend Node.js/Express application.

## Usage

- **Frontend**: Navigate to `http://localhost:3000` to access the React application.
- **Backend**: The server will be running on `http://localhost:5000`.
