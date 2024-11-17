# Online Library System

This is a React-based Online Library System that allows users to browse, add, and view books. The application includes functionalities like searching for books by title or author, browsing books by category, adding new books, and handling a 404 error page for undefined routes.

## Features

- **Home Page**: Displays a list of book categories and popular books with navigation links.
- **Browse Books Page**: Allows filtering books by category and searching for books by title or author.
- **Book Details Page**: Displays detailed information about a selected book.
- **Add Book Page**: Allows adding a new book to the library.
- **404 Page**: Displays a custom 404 error page for undefined routes.

## Tech Stack

- **Frontend**: React, React Router DOM, React Hook Form, Redux Toolkit, Tailwind CSS.
- **State Management**: Redux for managing the state of the books list.
- **Routing**: React Router for navigating between pages.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (v7 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/online-library-system.git
   cd online-library-system
   ```

2. npm install

3. npm start

4. Open the app in your browser at http://localhost:3000

### Folder Structure

/src
/components - Card.jsx # Component to display individual book information
/data - booksData.js # Dummy data for books - browseBook.js # Data for book categories
/pages - Home.jsx # Home page - BrowseBook.jsx # Browse books page - AddBook.jsx # Add book page - NotFound.jsx # 404 error page
/redux - bookSlice.js # Redux slice for books
App.js # Main application file
index.js # Entry point of the application
/styles - tailwind.config.js # Tailwind CSS configuration

### Contributing

Fork the repository.
Create your feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
