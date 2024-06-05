# Peworld: Hire Job Implementation Based on Figma

Peworld is a dynamic web application designed to revolutionize the job search experience. It not only helps job seekers find suitable employment opportunities but also provides comprehensive and detailed information about potential employers. With Peworld, users can explore a wide range of job listings tailored to their skills and preferences, gain insights into company cultures and benefits, and stay updated on the latest industry trends.

## Usage

This website is built using Vite + React with JavaScript, and the API management is done through the Axios library. Additionally, I use the React Dom Routes library for navigating between pages, along with Tailwind as the CSS Framework.

## Documentation

There are 7 pages that I working in progress.

1.  Login Page

    ![Login Page](./public/screenshots/Login-Page.png)

2.  Register Page

    Register for Worker
    ![Login Page](./public/screenshots/Register-Page.png)

    Register for Recruiter
    ![Login Page Recruiter](./public/screenshots/Register-Recruiter-Page.png)

3.  Landing Page

    Landing Page
    ![Landing Page](./public/screenshots/Landing-Page.png)

    Landing Page (after Login)
    ![Landing Page after Login](./public/screenshots/Landing-Page-After-Login.png)

4.  Home Page

    ![Home Page](./public/screenshots/Home-Page.png)

    In home page, there are features for search bar.
    ![Search Bar](./public/screenshots/Search-Bar.png)

    The features of search bar includes:

    - Search Input to find the worker name.
      ![Search Skill](./public/screenshots/Home-Page-Search-Input.png)

    - Sort Bar to sort by name or location
      ![Search Skill](./public/screenshots/Home-Page-Sort-Bar.png)

    Not only search bar, there also pagination feature to find based on how much page you find the worker.

5.  Worker Profile Page

    There are two pages:

    - View Profile

    This page have toolbar to view portofolio and work experience.

    When you're see portofolio:
    ![View Worker Portofolio](./public/screenshots/View-Worker-Page-Portofolio-As-Worker.png)

    And when you're see work experience:
    ![View Worker Work Experience](./public/screenshots/View-Worker-Page-WorkExp-As-Worker.png)

    This page have different button based on what role you are.

    For example this is worker profile if you're a recruiter
    ![View Worker as Recruiter](./public/screenshots/View-Worker-As-Recruiter.png)

    - Edit Profile

    In edit page, there are many section to add, edit, and also delete your biodata, work experience, skill, and portofolio
    ![Edit Worker](./public/screenshots/Edit-Worker-Page.png)

6.  Recruiter or Company Profile Page
    This page also have two:

    - View Profile
      ![View Recruiter Company](./public/screenshots/View-Recruiter-Page.png)

    - Edit Profile
      ![Edit Company](./public/screenshots/Edit-Recruiter-Page.png)

7.  Hire Page

    This page is to offering job to the selected worker from recruiter.
    ![Hire Page](./public/screenshots/Hire-Page.png)

    There also the notification to inform both roles that recruiter offering to worker.

    ![Notification](./public/screenshots/Notification-After-Hire-Worker.png)

## Performance

According to PageSpeed Insights, the desktop performance scored 97%, with minor issues regarding LCP. However, the mobile performance, at 52%, is concerning due to significant CLS and LCP issues. The absence of loading indicators on the website may be contributing to this discrepancy. To address this, I propose implementing more loading indicators for images and other elements to enhance performance in future updates. Despite these challenges, the website remains functional on both mobile and desktop platforms.

> UPDATED : After updates, mobile performance saw a significant improvement, reaching 90% from the initial 52%, thereby reducing CLS and LCP issues considerably. However, there are still shortcomings in SEO, specifically 'Document does not have a meta description' and 'Image elements do not have [alt] attributes'. Additionally, the desktop performance remains the same at 97%, with the same issues as the mobile performance.

![Performance Mobile](./public/screenshots/Performance-Mobile.png)
![Performance Desktop](./public/screenshots/Performance-Desktop.png)

## Domain to Visit Pages

If you wish to view my website, please click the link provided below. Thank you very much for your interest and appreciation.

[Click Here](https://peworld-hirejob.vercel.app/)

## Additional Resources

1. Back-End Project Repository

   This back-end project for Peworld was developed by [muhammadrisano](https://github.com/muhammadrisano) using Express.js. Feel free to explore the source code, which I have forked from the original repository. It includes all the files and documentation needed to develop and run the server side of this application.

   [Back-End Project Repository Link](https://github.com/harbanery/be-peworld-hirejob-figma)

2. API Documentation with Postman

   Access the complete API documentation for the Peworld project, also created by [muhammadrisano](https://github.com/muhammadrisano). Use Postman to test endpoints and understand the structure and functionality of the available APIs in this project.

   [Postman Link](https://documenter.getpostman.com/view/7675329/2s9YysDhDY#d67edcdf-e1ef-468b-9877-2c3e930c82a9)

## Reference

Feel free to check it out:

[Figma Template](https://www.figma.com/file/ZhfxykSA0qzko0PMs9aPOp/HireJob?type=design&node-id=67-0&mode=design&t=IX8slcJJKTGFdMcm-0)

[React + Vite](https://vitejs.dev/)

[React Dom Router](https://reactrouter.com/en/main)

[React Redux](https://redux.js.org/introduction/getting-started)

[Axios](https://axios-http.com/docs/intro)

[Javascript](https://www.w3schools.com/js/)

[HTML](https://www.w3schools.com/html/)

[CSS](https://www.w3schools.com/css/)

[Tailwind](https://tailwindcss.com/)

[Vercel as Deployment](https://vercel.com/)
