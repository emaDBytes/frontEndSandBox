# React Router Practice Project

This project demonstrates the basic implementation of routing in a React application using React Router v6.

## Project Overview

This is a simple React application that showcases how to set up navigation between different pages without refreshing the entire application, which is one of the core features of single-page applications (SPAs).

## Features

- Setup of React Router with a main layout (App) and nested routes
- Navigation between Home, About, and Contact pages
- Implementation of outlet pattern for rendering child routes

## Technology Stack

- React 18.3.1
- React Router 6.27.0
- Vite 5.4.8 (for development and building)

## Project Structure

The routing structure is organized as follows:

- **App.jsx**: Main layout component with navigation links
- **Children routes**:
  - Home (index route)
  - About
  - Contact

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
4. Open your browser and navigate to the localhost URL shown in your terminal

## Build for Production

To build the application for production:

```
npm run build
```

The built files will be in the `dist` directory.

## Learning Points

This project demonstrates:

- Setting up React Router with `createBrowserRouter`
- Creating a layout with navigation using `Link` components
- Setting up nested routes with the `Outlet` component
- Defining an index route for the default view

## Future Enhancements

Some possible additions to extend this project:

- Add more complex routes with parameters
- Implement route-specific loading states
- Add protected routes with authentication
- Implement error pages for invalid routes

## Credits

This project was bootstrapped with [Vite](https://vitejs.dev/).
