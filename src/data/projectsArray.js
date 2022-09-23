import weather_icon from '../assets/images/weather-icon.png';
import currency_icon from '../assets/images/currency-icon.png';
import todo_icon from '../assets/images/todo-icon.png';
import food_icon from '../assets/images/food-icon.png';
import landing_icon from '../assets/images/landing-icon.png';

export const projectsArray = [
    {
        id: 1,
        name: 'Weather App',
        info: 'App provides current information about weather and information about 7-days weather forecast. Contains city search, dark theme, language switch.',
        stack: 'React, SCSS, Axios, Adaptive and responsive layout',
        link: 'https://soodax.github.io/weather-app/',
        img: weather_icon
    },
    {
        id: 3,
        name: 'ToDo app',
        info: 'App provides ToDo list, where you can create/check/delete tasks. Contains tasks stats and settings. All data will be saved even after closing the browser.',
        stack: 'React, Redux Toolkit, TypeScript, Material UI, SCSS, Adaptive and responsive layout',
        link: 'https://soodax.github.io/todo-app/',
        img: todo_icon
    },
    {
        id: 2,
        name: 'Currency App',
        info: 'App provides current information about currency. Contains converter and currency chart for a certain period of time',
        stack: 'React, Material UI, SCSS, Axios, Chart.js, Adaptive and responsive layout',
        link: 'https://soodax.github.io/currency-app/',
        img: currency_icon
    },
    {
        id: 4,
        name: 'Food app',
        info: 'App provides common/branded food search and recipe search.',
        stack: 'React, Material UI, SCSS, Axios, Adaptive and responsive layout',
        link: 'https://soodax.github.io/food-app/',
        img: food_icon
    },
    {
        id: 5,
        name: 'Landing page',
        info: 'Simple landing page.',
        stack: 'HTML, SCSS',
        link: 'https://soodax.github.io/delivery-landing/',
        img: landing_icon
    },
]