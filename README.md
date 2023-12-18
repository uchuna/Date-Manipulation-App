<<<<<<< HEAD
# Vue Date Manipulation App

A simple Vue.js project showcasing date manipulation capabilities using the Composition API.

# Project Overview
This project demonstrates a date manipulation interface built with Vue.js and the Composition API. It includes functionality to display the current date, add days or months, and implements a responsive design for varying screen sizes.

# File Structure
**useDate.js:** Contains the `useDate` composable responsible for managing date manipulation logic.
**components/Index/index.vue:** Houses the main date manipulation interface.
**App.vue:** The root component that includes the `Index` component.

# Functionality:
useDate.js.

The `useDate` composable manages date-related operations:
**currentDate:** A reactive reference to the current date.
- **addDays:** Increments the date by the specified number of days.
- **addMonths:** Increments the date by the specified number of months.

# components/Index/index.vue
**Date Display:** Renders the current date using the `toDateString()` method.
- **Date Manipulation:** Provides buttons to add days or months to the current date.
- **Responsive Design:** Buttons adjust width based on different screen sizes for improved usability.
- **Background Animation:** A rainbow animation in the background enhances visual appeal.



Setup Instructions:
1. Clone Repository: Use `git clone` to clone this repository to your local machine.
2. Install Dependencies: Run npm install to install project dependencies.
3. Run the App: Execute `npm run dev` to start the app locally.
4. Access the App: Open your browser and navigate to the provided URL (usually http://localhost:5173/).

# Project Details

# Dependencies

- Utilizes Axios for HTTP requests.
- Developed with Vue.js for building the user interface.

# Styling

- Custom CSS styles are applied to manage layout, buttons, and date display.

# Usage

1. Startup: Launch the app to view the current date.
2. Manipulate Date: Click "Add Day" to increment the date by a day or "Add Month" to increase it by a month.
3. Responsive Design: Experience the responsiveness of buttons on different devices.
4. Visual Effect: Enjoy the rainbow background animation for a visual touch. 
>>>>>>> f760a060b7482da70f96ed57e35b9212286be67f
