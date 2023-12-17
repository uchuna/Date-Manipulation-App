# Vue Date Manipulation App

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

This Vue project demonstrates a simple date manipulation interface utilizing Vue.js and Composition API.

Project Structure:
App.vue: The main Vue file that contains the root component of the application. It imports and includes the Date.vue component.

components/Date.vue: Contains the date manipulation interface. It displays the current date, allows users to add days or months, and features a rainbow background animation.

Functionality:
Date.vue
Date Display: Shows the current date using the toDateString() method.
Date Manipulation: Allows users to add days or months to the current date by clicking corresponding buttons.
Responsive Design: The buttons adjust their width for different screen sizes using CSS Flexbox and media queries.
Background Animation: The body background displays a rainbow animation using CSS linear-gradient and keyframes.

App.vue
Root Component: Includes the Date.vue component.

Setup Instructions:
1. Clone Repository: Clone this repository to your local machine using git clone.
2. Install Dependencies: Run npm install to install project dependencies.
3. Run the App: Use npm run dev to run the app locally.
4. Access the App: Open your browser and visit the provided URL (usually http://localhost:5173/).

Project Setup:
Dependencies: Utilizes Axios for HTTP requests and Vue.js for building the user interface.
CSS Styling: Applies custom CSS styles for layout, buttons, and date display.

How to Use:
1. Upon running the app, the interface displays the current date.
2. Click the "Add Day" button to increment the date by one day.
3. Click the "Add Month" button to increment the date by one month.
4. Observe the responsive design of the buttons on different screen sizes.
5. Enjoy the rainbow background animation as a visual effect.
