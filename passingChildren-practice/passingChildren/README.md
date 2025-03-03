# React Children Props Demo

This project demonstrates the use of children props in React components. It showcases how to pass and use children elements between React components using TypeScript.

## Project Overview

The application shows two main components:

- **Alert**: A dismissible alert component that can display any content passed as children.
- **Button**: A customizable button component that accepts text content as children.

## Features

- **Component Composition**: Learn how to compose components by passing children.
- **TypeScript Integration**: All components are built with TypeScript for type safety.
- **Bootstrap Styling**: Bootstrap is used for responsive and consistent styling.
- **Dismissible Alerts**: Alerts that can be closed with a click.

## Project Structure

```
src/
├── components/
│   ├── Alert.tsx    # Alert component that accepts children
│   └── Button.tsx   # Button component with customizable properties
├── App.tsx          # Main application component
├── main.tsx         # Entry point of the application
└── ...
```

## How It Works

The project demonstrates three key React concepts:

1. **Children Props**: Passing JSX elements as children to components
2. **Component State**: Managing visibility of alerts using React's useState
3. **Event Handling**: Handling button clicks and alert dismissals

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd passingChildren
   ```

2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn
   ```

3. Start the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173/`

## Usage Examples

### Alert Component

```tsx
<Alert onClose={() => console.log("Alert closed")}>
  This is an alert with <strong>custom content</strong>
</Alert>
```

### Button Component

```tsx
<Button color="danger" onClick={() => console.log("Button clicked")}>
  Click Me
</Button>
```

## Learning Resources

If you're new to React's children concept, here are some resources:

- [React Documentation: Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [TypeScript with React](https://www.typescriptlang.org/docs/handbook/react.html)

## License

This project is open source and available under the [MIT License](LICENSE).
