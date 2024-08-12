
---

## Frontend README

```markdown
# Binary Search Tree Frontend

This is the frontend of the Binary Search Tree application, built using React. It provides a user-friendly interface for interacting with binary search trees.

## Table of Contents

1. [Introduction](#introduction)
2. [Setup and Installation](#setup-and-installation)
3. [Project Structure](#project-structure)
4. [Components Overview](#components-overview)
5. [API Integration](#api-integration)
6. [Running the Application](#running-the-application)
7. [Testing](#testing)

## Introduction

The frontend of this application allows users to input a series of numbers, generate a binary search tree, and view previously generated trees. It communicates with the backend via RESTful APIs.

## Setup and Installation

To set up and run the frontend:

1. Ensure you have Node.js and npm installed.
2. Clone the repository.
3. Navigate to the frontend directory.
4. Run `npm install` to install dependencies.

## Project Structure

The frontend project is structured as follows:
src/
├── components/
│ ├── EnterNumbers.jsx
│ ├── PreviousTrees.jsx
│ └── TreeView.jsx
├── hooks/
│ └── useFetchData.js
├── utils/
│ └── axiosInstance.js
├── App.js
└── index.js


## Components Overview

- **EnterNumbers.jsx**: Allows users to input a series of numbers and submit them to generate a binary search tree.
- **PreviousTrees.jsx**: Displays a list of all previously generated binary search trees.
- **TreeView.jsx**: Presents the binary search tree structure in a JSON format.

## API Integration

The frontend uses Axios for making HTTP requests to the backend. The Axios instance is configured in `src/utils/axiosInstance.js` to point to the backend server running on `http://localhost:8080`.

Example:

```javascript
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
});

export default axiosInstance;
```

## Running the Application
To run the application:
Navigate to the frontend directory.

##Use the following command:
```
npm start
```

The application will start on http://localhost:3000.

## Testing
To run tests for the frontend components:
```
npm test
```

