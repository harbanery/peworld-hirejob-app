<div align="center">
  <img src="./src/assets/img/header-logo.png" alt="Logo Peworld" width="250"/>
</div>

# Peworld: Hire Job Implementation

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup Environment Variables](#setup-environment-variables)
  - [Running the Application](#running-the-application)
  - [Test Accounts](#test-accounts)
- [Usage](#usage)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Performance](#performance)
  - [Project Related](#project-related)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#Contact)
- [Acknowledgements](#acknowledgements)

## About The Project

**Peworld** is a dynamic web application designed to revolutionize the job search experience. It not only helps job seekers find suitable employment opportunities but also provides comprehensive and detailed information about potential employers. With **Peworld**, users can explore a wide range of job listings tailored to their skills and preferences, gain insights into company cultures and benefits, and stay updated on the latest industry trends.

### Built With

- [**Vite**](https://vitejs.dev/)
- [**React.js**](https://reactjs.org/)
- [**Tailwind CSS**](https://tailwindcss.com/)
- [**Redux**](https://redux.js.org/)
- [**Node.js**](https://nodejs.org/en)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm

  ```sh
    npm install npm@latest -g
  ```

### Installation

1. Clone Repo

   ```sh
     git clone https://github.com/harbanery/peworld-hirejob-app.git
   ```

2. Go to folder directory

   ```bash
   cd peworld-hirejob-app
   ```

3. Install NPM packages

   ```sh
     npm install
   ```

### Setup Environment Variables

1. Create a `.env` or `.env.local` file in your local root directory.

2. Add the following variables to the `.env` or `.env.local` file:

   ```sh
     VITE_VERCEL_URL=your_api_url
   ```

### Running the Application

1. Start the development server:

   ```sh
    npm run dev
   ```

2. Open your browser and locally navigate to:

   ```sh
   http://localhost:5173
   ```

### Test Accounts

Use the following test accounts to log in and explore the application:

1. Recruiter Account

   ```json
   {
     "email": "talent.acquisition@gmail.com",
     "password": "Tal3ntAqc!s1t1on"
   }
   ```

2. Worker Account

   ```json
   {
     "email": "alex.taylor123@gmail.com",
     "password": "Al3xT@yl0r456"
   }
   ```

## Usage

### Features

- **User Authentication and Authorization**
- **Job Listing and Search Functionality**
- **Profile Management for Both Job Seekers and Recruiters**
- **Api Management** with [**Axios**](https://axios-http.com/)
- **Pages Navigation** with [**React Routes**](https://reactrouter.com/en/main)
- **State Management**: Utilizes [React Redux](https://redux.js.org/) with [redux-persist](https://github.com/rt2zz/redux-persist) for persisting state across sessions, and [redux-thunk](https://github.com/reduxjs/redux-thunk) for handling asynchronous actions.
- **Carousel Component**: Implemented using [React-slick](https://react-slick.neostack.com/).
- **Code Quality**: Ensured by employing ESLint, which helps identify and report patterns in JavaScript code, ensuring a clean and maintainable codebase.

### Screenshots

There are 7 pages that I working on:

1.  **Login Page**

    The login page can authorize both workers and recruiters.

    <details>
      <summary>Show/Hide Image</summary>
      <br>
      <img src="./public/screenshots/Login-Page.png" alt="Login Page">
    </details>

2.  **Register Page**

    Register for Worker

    <details>
      <summary>Show/Hide Image</summary>
      <br>
      <img src="./public/screenshots/Register-Page.png" alt="Register Worker Page">
    </details>

    Register for Recruiter

    <details>
      <summary>Show/Hide Image</summary>
      <br>
      <img src="./public/screenshots/Register-Recruiter-Page.png" alt="Register Recruiter Page">
    </details>

3.  **Landing Page**

    <details>
      <summary>Show/Hide Image</summary>
      <br>
      <img src="./public/screenshots/Landing-Page.png" alt="Landing Page">
    </details>

    When you are logged in, there are differences in the navbar.

    <details>
      <summary>Show/Hide Image</summary>
      <br>
      <img src="./public/screenshots/Landing-Page-After-Login.png" alt="Landing Page after Login">
    </details>

4.  **Home Page**

    <details>
      <summary>Show/Hide Image</summary>
      <br>
      <img src="./public/screenshots/Home-Page.png" alt="Home Page">
    </details>

    In home page, there are features for search bar.

    The features of search bar includes:

    - Search Input to find the worker name.

      <details>
        <summary>Show/Hide Image</summary>
        <br>
        <img src="./public/screenshots/Home-Page-Search-Input.png" alt="Search Workers Input">
      </details>

    - Sort Bar to sort by name or location

      <details>
        <summary>Show/Hide Image</summary>
        <br>
        <img src="./public/screenshots/Home-Page-Sort-Bar.png" alt="Sort Bar">
      </details>

    Not only search bar, there also pagination feature to find based on how much page you find the worker.

5.  **Worker Profile Page**

    There are two pages:

    - View Profile

      This page have toolbar to view portfolio and work experience.

      When you're see portfolio:

      <details>
        <summary>Show/Hide Image</summary>
        <br>
        <img src="./public/screenshots/View-Worker-Page-Portofolio-As-Worker.png" alt="View Worker Portfolio">
      </details>

      And when you're see work experience:

      <details>
        <summary>Show/Hide Image</summary>
        <br>
        <img src="./public/screenshots/View-Worker-Page-WorkExp-As-Worker.png" alt="View Worker Work Experience">
      </details>

      This page have different button based on what role you are.

      For example this is worker profile if you're a recruiter

      <details>
        <summary>Show/Hide Image</summary>
        <br>
        <img src="./public/screenshots/View-Worker-As-Recruiter.png" alt="View Worker as Recruiter">
      </details>

    - Edit Profile

      In edit page, there are many section to add, edit, and also delete your biodata, work experience, skill, and portfolio

      <details>
        <summary>Show/Hide Image</summary>
        <br>
        <img src="./public/screenshots/Edit-Worker-Page.png" alt="Edit Worker">
      </details>

6.  **Recruiter or Company Profile Page**

    This page also have two:

    - View Profile

      <details>
        <summary>Show/Hide Image</summary>
        <br>
        <img src="./public/screenshots/View-Recruiter-Page.png" alt="View Recruiter">
      </details>

    - Edit Profile

      <details>
        <summary>Show/Hide Image</summary>
        <br>
        <img src="./public/screenshots/Edit-Recruiter-Page.png" alt="Edit Recruiter">
      </details>

7.  **Hire Page**

    This page is to offering job to the selected worker from recruiter.

    <details>
      <summary>Show/Hide Image</summary>
      <br>
      <img src="./public/screenshots/Hire-Page.png" alt="Hire Page">
    </details>

    There also the notification to inform both roles that recruiter offering to worker.

    <details>
      <summary>Show/Hide Image</summary>
      <br>
      <img src="./public/screenshots/Notification-After-Hire-Worker.png" alt="Notification Hire">
    </details>

### Performance

According to the latest PageSpeed Insights results, the desktop performance scored 97%, with minor issues regarding LCP. Initially, the mobile performance was concerning at 52% due to significant CLS and LCP issues. The absence of loading indicators on the website may have contributed to this discrepancy. After updates, mobile performance saw a significant improvement, reaching 90% from the initial 52%, thereby reducing CLS and LCP issues considerably. However, there are still shortcomings in SEO, specifically 'Document does not have a meta description' and 'Image elements do not have [alt] attributes'. Additionally, the desktop performance remains the same at 97%, with the same issues as the mobile performance. Despite these challenges, the website remains functional on both mobile and desktop platforms.

<details>
  <summary>Show/Hide Image</summary>
  <br>
  <img src="./public/screenshots/Performance-Mobile.png" alt="Performance Mobile">
  <img src="./public/screenshots/Performance-Desktop.png" alt="Performance Desktop">
</details>

### Project Related

If you wish to view my website, please click this link below. Thank you very much for your interest and appreciation.

- [`Front-End Demonstration Link`](https://peworld-hirejob.vercel.app/)

Also feel free to explore the source code, which I have forked from the original repository. It includes all the files and documentation needed to develop and run the server side of this application.

- [`Back-End Project Repository Link`](https://github.com/harbanery/be-peworld-hirejob-app)

<!-- ## Domain to Visit Pages

If you wish to view my website, please click this [link](https://peworld-hirejob.vercel.app/) right here. Thank you very much for your interest and appreciation.

## Additional Related Resources

1. Back-End Project Repository

   This back-end project for Peworld was developed by [muhammadrisano](https://github.com/muhammadrisano) using Express.js. Feel free to explore the source code, which I have forked from the original repository. It includes all the files and documentation needed to develop and run the server side of this application.

   [Back-End Project Repository Link](https://github.com/harbanery/be-peworld-hirejob-app) -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/harbanery/peworld-hirejob-app/blob/main/LICENSE) for more information.

## Contact

If you have any questions or inquiries regarding this project, feel free to contact me at ryusuf05@gmail.com

## Acknowledgements

Feel free to check it out:

- [Vercel as Deployment](https://vercel.com/)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com/)
- [GitHub Pages](https://pages.github.com/)
- [Javascript](https://www.w3schools.com/js/)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
