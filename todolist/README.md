# Todo List Application

A full-featured React task management application with a modern interface built using Material UI components, Ag-Grid, and React Router.

## Features

- Create tasks with descriptions, priority levels, and due dates
- View all tasks in a responsive, filterable grid
- Sort and filter tasks by various criteria
- Edit task details inline
- Delete completed tasks
- Color-coded priority system
- Mobile-friendly responsive design
- Client-side routing with React Router

## Demo

You can view the live demo at: [https://emadbytes.github.io/frontEndSandBox/todolist/](https://emadbytes.github.io/frontEndSandBox/todolist/)

## Screenshots

[Screenshots would go here in the actual README]

## Technologies Used

- **React** - UI library
- **Material UI** - Component library for modern design
- **Ag-Grid** - Data grid for displaying and managing todos
- **React Router** - Navigation and routing
- **Day.js** - Date handling library
- **Vite** - Build tool and development server
- **Vitest** - Testing framework
- **React Testing Library** - Component testing utilities

## Setup and Installation

### Prerequisites

- Node.js (version 18 or later recommended)
- npm or yarn

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todolist.git
   cd todolist
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173/`

## Project Structure

```bash
todolist/
├── public/ # Static assets
├── src/
│ ├── assets/ # Images and other assets
│ ├── components/ # React components
│ │ ├── Error.jsx # Error page component
│ │ ├── Home.jsx # Home page component
│ │ ├── TodoTable.jsx # Table component (legacy)
│ │ └── Todolist.jsx # Main todo app component
│ ├── tests/ # Test files
│ ├── App.css # Application styles
│ ├── App.jsx # Main application component
│ └── main.jsx # Application entry point
├── .gitignore # Git ignore file
├── eslint.config.js # ESLint configuration
├── index.html # HTML entry point
├── package.json # Project dependencies and scripts
├── README.md # Project documentation
└── vite.config.js # Vite configuration
```

## Usage

### Adding a Todo

1. Enter a description in the "Description" field
2. Select a priority from the dropdown (High, Normal, Low)
3. Select a due date using the date picker
4. Click the "Add Todo" button

### Editing a Todo

- Click directly on any field in the grid to edit it

### Deleting a Todo

1. Click on the row you want to delete to select it
2. Click the "Delete" button

### Filtering Todos

- Use the filter fields at the top of each column in the grid to filter tasks

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check for code issues
- `npm run preview` - Preview the production build locally
- `npm run test` - Run tests with Vitest
- `npm run coverage` - Run tests with coverage report
- `npm run deploy` - Deploy to GitHub Pages

## Testing

The application includes unit tests for components using Vitest and React Testing Library.
Run the tests with:

```bash
npm run test
```

Generate a coverage report with:

```bash
npm run coverage
```

## Customization

### Changing Colors and Theme

You can modify the appearance by editing:

- `src/App.css` - For basic styling
- Create a custom Material UI theme in `App.jsx` for more advanced styling

### Adding New Features

Consider adding these features to enhance the application:

- Task categories or tags
- Task completion status
- Search functionality
- Light/dark theme toggle
- User authentication
- Local storage to persist todos

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Material UI](https://mui.com/)
- [Ag-Grid](https://www.ag-grid.com/)
- [React Router](https://reactrouter.com/)
- [Haaga-Helia University of Applied Sciences](https://www.haaga-helia.fi/en)
