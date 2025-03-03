# React List Component Demo

A simple React application built with TypeScript that demonstrates the implementation of a reusable list component with state management.

## Project Overview

This project showcases how to create reusable components in React with TypeScript, focusing on:

- Component props typing with TypeScript interfaces
- State management using React hooks
- Handling events and passing callbacks between components
- Conditional rendering

## Features

- A ListGroup component that displays items in a Bootstrap-styled list
- Selection state tracking with visual feedback
- Empty state handling
- Event handling with callback functions

## Technology Stack

- React 18.2.0
- TypeScript 4.9.3
- Bootstrap 5.2.3
- Vite 4.1.0 (for fast development and building)

## Component Structure

The application consists of the following key components:

- **App.tsx**: The main container component that provides data to child components
- **ListGroup.tsx**: A reusable component that renders a list with selectable items
- **Message.tsx**: A simple component demonstrating conditional rendering

## How to Run

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in your terminal (usually http://localhost:5173)

## Build for Production

To build the application for production:

```
npm run build
```

The built files will be in the `dist` directory.

## Learning Points

This project demonstrates:

- TypeScript integration with React
- Component composition
- Props passing and typing
- State management with hooks
- Event handling
- Bootstrap integration

## Future Enhancements

Possible improvements for this project:

- Add more component variations
- Implement form controls
- Add routing
- Implement data fetching from an API
- Add unit tests

## License

This project is available for educational purposes.
