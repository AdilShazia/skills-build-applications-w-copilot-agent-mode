# Octofit Tracker

## Overview
The Octofit Tracker is a fitness application designed to help users track their activities, manage teams, and receive personalized workout suggestions. The application consists of a backend built with Django and a frontend developed using React.

## Project Structure
The project is organized into two main directories:

- **frontend/**: Contains the React application.
- **backend/**: Contains the Django backend application.

### Frontend Structure
The frontend directory includes the following files and directories:

- **node_modules/**: Contains all the installed npm packages required for the React application.
- **public/**: 
  - **favicon.ico**: The favicon for the application, displayed in the browser tab.
  - **index.html**: The main HTML file for the React application, serving as the entry point for the app.
- **src/**:
  - **App.css**: CSS styles for the main App component.
  - **App.js**: Exports the main App component, which serves as the root component of the React application.
  - **index.css**: Global CSS styles for the application.
  - **index.js**: The entry point for the React application, rendering the App component into the DOM and importing Bootstrap CSS for styling.

## Getting Started

### Prerequisites
- Node.js and npm should be installed on your machine.

### Installation
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install the required npm packages:
   ```
   npm install
   ```

### Running the Application
To start the React application, run the following command in the `frontend` directory:
```
npm start
```
This will start the development server and open the application in your default web browser.

## Backend Setup
Instructions for setting up the backend will be provided in the backend README file.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.