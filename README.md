<div align="center">
  <img src="./src/assets/img/header-logo.png" alt="Logo Peworld" width="300"/>
</div>

# Peworld: Hire Job Implementation

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup Environment Variables](#setup-environment-variables)
- [Usage](#usage)
  - [Documentation](#documentation)
  - [Performance](#performance)
- [Domain to Visit Pages](#domain-to-visit-pages)
- [Additional Related Resources](#additional-related-resources)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#Contact)
- [Acknowledgements](#acknowledgements)

## About The Project

**Peworld** is a dynamic web application designed to revolutionize the job search experience. It not only helps job seekers find suitable employment opportunities but also provides comprehensive and detailed information about potential employers. With **Peworld**, users can explore a wide range of job listings tailored to their skills and preferences, gain insights into company cultures and benefits, and stay updated on the latest industry trends.

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

2. Install NPM packages

   ```sh
     npm install
   ```

### Setup Environment Variables

1. Create a `.env` or `.env.local` file in your local root directory.

2. Add the following variables to the `.env` or `.env.local` file:

   ```sh
     VITE_VERCEL_URL=your_api_url
   ```

## Usage

This website is built using [Vite + React](https://vitejs.dev/) with JavaScript, and the API management is done through the [Axios](https://axios-http.com/) library. Additionally, I use the [React Dom Routes](https://reactrouter.com/en/main) library for navigating between pages, along with [Tailwind](https://tailwindcss.com/) as the CSS Framework. For state management, I utilize [React Redux](https://redux.js.org/) with [redux-persist](https://github.com/rt2zz/redux-persist) for persisting state across sessions, and [redux-thunk](https://github.com/reduxjs/redux-thunk) for handling asynchronous actions. [React-slick](https://react-slick.neostack.com/) is used for the carousel component.

To maintain code quality and consistency, I employ ESLint, which helps identify and report patterns in JavaScript code, ensuring a clean and maintainable codebase.

### Documentation

There are 7 pages that I working on:

1.  **Login Page**

    The login page can authorize both workers and recruiters.

    ![Login Page](./public/screenshots/Login-Page.png)

2.  **Register Page**

    Register for Worker

    ![Login Page](./public/screenshots/Register-Page.png)

    Register for Recruiter

    ![Login Page Recruiter](./public/screenshots/Register-Recruiter-Page.png)

3.  **Landing Page**

    ![Landing Page](./public/screenshots/Landing-Page.png)

    When you are logged in, there are differences in the navbar.

    ![Landing Page after Login](./public/screenshots/Landing-Page-After-Login.png)

4.  **Home Page**

    ![Home Page](./public/screenshots/Home-Page.png)

    In home page, there are features for search bar.

    The features of search bar includes:

    - Search Input to find the worker name.
      ![Search Skill](./public/screenshots/Home-Page-Search-Input.png)

    - Sort Bar to sort by name or location
      ![Search Skill](./public/screenshots/Home-Page-Sort-Bar.png)

    Not only search bar, there also pagination feature to find based on how much page you find the worker.

5.  **Worker Profile Page**

    There are two pages:

    - View Profile

      This page have toolbar to view portfolio and work experience.

      When you're see portfolio:

      ![View Worker Portfolio](./public/screenshots/View-Worker-Page-Portofolio-As-Worker.png)

      And when you're see work experience:

      ![View Worker Work Experience](./public/screenshots/View-Worker-Page-WorkExp-As-Worker.png)

      This page have different button based on what role you are.

      For example this is worker profile if you're a recruiter

      ![View Worker as Recruiter](./public/screenshots/View-Worker-As-Recruiter.png)

    - Edit Profile

      In edit page, there are many section to add, edit, and also delete your biodata, work experience, skill, and portfolio

      ![Edit Worker](./public/screenshots/Edit-Worker-Page.png)

6.  **Recruiter or Company Profile Page**

    This page also have two:

    - View Profile

      ![View Recruiter Company](./public/screenshots/View-Recruiter-Page.png)

    - Edit Profile

      ![Edit Company](./public/screenshots/Edit-Recruiter-Page.png)

7.  **Hire Page**

    This page is to offering job to the selected worker from recruiter.

    ![Hire Page](./public/screenshots/Hire-Page.png)

    There also the notification to inform both roles that recruiter offering to worker.

    ![Notification](./public/screenshots/Notification-After-Hire-Worker.png)

### Performance

According to the latest PageSpeed Insights results, the desktop performance scored 97%, with minor issues regarding LCP. Initially, the mobile performance was concerning at 52% due to significant CLS and LCP issues. The absence of loading indicators on the website may have contributed to this discrepancy. After updates, mobile performance saw a significant improvement, reaching 90% from the initial 52%, thereby reducing CLS and LCP issues considerably. However, there are still shortcomings in SEO, specifically 'Document does not have a meta description' and 'Image elements do not have [alt] attributes'. Additionally, the desktop performance remains the same at 97%, with the same issues as the mobile performance. Despite these challenges, the website remains functional on both mobile and desktop platforms.

<details>
  <summary>Show/Hide Image</summary>
  <br>
  <img src="./public/screenshots/Performance-Mobile.png" alt="Performance Mobile">
  <img src="./public/screenshots/Performance-Desktop.png" alt="Performance Desktop">
</details>

## Domain to Visit Pages

If you wish to view my website, please click this [link](https://peworld-hirejob.vercel.app/) right here. Thank you very much for your interest and appreciation.

## Additional Related Resources

1. Back-End Project Repository

   This back-end project for Peworld was developed by [muhammadrisano](https://github.com/muhammadrisano) using Express.js. Feel free to explore the source code, which I have forked from the original repository. It includes all the files and documentation needed to develop and run the server side of this application.

   [Back-End Project Repository Link](https://github.com/harbanery/be-peworld-hirejob-app)

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
