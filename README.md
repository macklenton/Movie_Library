#  Movie Library

A simple and interactive Movie Library application built with **React** and **Tailwind CSS**. The application allows users to manage a collection of movies by viewing movie details, adding new movies, and deleting existing ones.

This project was developed to practise React fundamentals, component-based architecture, props, state management, and dynamic rendering.

## Features

- **View Movies:** Display a collection of movies with their titles, directors, release years, and synopses.
- **Add Movies:** Add new movies to the collection using a form.
- **Delete Movies:** Remove movies from the collection.
- **Dynamic Rendering:** Automatically update the movie list when movies are added or deleted.
- **Reusable Components:** Use reusable React components to keep the application organised.
- **Responsive Design:** Tailwind CSS styling for a clean interface across different screen sizes.

## Technologies Used

- **React** – Building the user interface using reusable components.
- **JavaScript (ES6+)** – Application logic and data manipulation.
- **Tailwind CSS** – Styling and responsive layouts.
- **HTML5** – Application structure.
- **Vite** – Development server and build tool.

##  Project Structure

```text
movie_Library/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── MovieCard.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

##  Getting Started

Follow these instructions to run the project on your local machine.

### 1. Clone the Repository

```
https://github.com/macklenton/Movie_Library
```

### 2. Navigate to the Project Folder

```bash
cd movieL_library
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Vite will provide a local development URL, usually:

```text
http://localhost:5173/
```

Open the URL in your browser to use the application.

## React Concepts Practised

This project helped reinforce the following React concepts:

- **Functional Components:** Creating reusable components such as `App` and `MovieCard`.
- **Props:** Passing movie information and functions from parent components to child components.
- **useState Hook:** Managing the movie collection and updating the interface.
- **Array Methods:** Using `.map()` to render movies and `.filter()` to delete movies.
- **Event Handling:** Handling form submissions and button clicks.
- **FormData API:** Collecting and processing user input.
- **Conditional and Dynamic Rendering:** Updating displayed content based on application state.

## Future Improvements

Possible improvements for future versions include:

- Add a search feature to find movies by title.
- Add movie editing functionality.
- Filter movies by genre and release year.
- Sort movies by rating or release year.
- Store movie data in local storage so it remains available after refreshing the page.
- Integrate a movie API to retrieve real movie information and posters.

## Author

### Macklenton
Developed as a personal React learning project to strengthen front-end development skills.
