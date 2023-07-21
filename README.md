# React Project - CODING TASK


## How to Run the Project Locally

To run the project locally, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com) installed on your machine.
2. Clone the repository from GitHub.
3. Navigate to the project directory in your terminal or command prompt.
4. Install project dependencies by running the following command:

`npm install`

5. Once the installation is complete, start the development server with:

`npm start`

6. The application will be accessible at `http://localhost:3000` in your web browser.

## Overall Structure of the Code

The codebase follows a structured approach, where reusable components and utility functions are organized to improve maintainability. The key components and files are as follows:

### Components

All the reusable components such as buttons, tables, and modals are placed inside the `src/components` folder.

### Utils

All calculation-related functions are stored in the `utils` file within the `src` folder. This helps keep the core logic separate from the UI components.

### App.tsx

This file contains the main logic of the application, tying together different components and handling user interactions.

## State Management Approach

For this project, simple React state management has been utilized. Given the project's small size and scope, opting for Redux would have been overkill. React state management provides sufficient functionality to handle the state locally within the components.

## Use of bignumber.js for Calculations

The project employs the `bignumber.js` library for calculations involving monetary values. This library provides added precision and avoids potential issues with floating-point arithmetic, ensuring accurate and reliable results.

## User Interface Design Choices

The user interface design takes inspiration from the CinemaCal website and has been optimized for user-friendliness. Key considerations in the design include clarity, ease of use, and accessibility.

## Task Breakdown and Deliverables

The development process involved the following tasks:

1. Implemented the overall app logic in a single file (App.tsx) to ensure functionality.
2. Divided the code into different components, allowing for better code organization and reusability.
3. Conducted manual testing of the logic and calculations to ensure accuracy.
4. Applied CSS to enhance the app's visual appeal and maintain a neat design.
