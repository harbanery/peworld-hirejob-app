# Peworld: Hire Job Implementation Based on Figma

> Peworld is a web application that facilitates job seekers in finding suitable employment opportunities and accessing detailed company information.

## Usage

This website is built using Vite + React with JavaScript, and the API management is done through the Axios library. Additionally, I use the React Dom Routes library for navigating between pages, along with Tailwind as the CSS Framework.

## Documentation

There are 7 pages that I working in progress.

1. Login Page

   ![Login Page](./public/screenshot/Login-Page.png)

2. Register Page

   Register for Worker
   ![Login Page](./public/screenshot/Register-Page.png)

   Register for Recruiter
   ![Login Page Recruiter](./public/screenshot/Register-Recruiter-Page.png)

3. Landing Page

   Landing Page before Login
   ![Landing Page](./public/screenshot/Landing-Page.png)

   Landing Page after Login
   ![Landing Page after Login](./public/screenshot/Landing-Page-After-Login.png)

4. Home Page

   ![Home Page](./public/screenshot/Home-Page.png)

   In home page, there are features for search bar.
   ![Search Bar](./public/screenshot/Search-Bar.png)

   The features of search bar includes:

   - Search Input to find the worker name.
     ![Search Skill](./public/screenshot/Home-Page-Search-Input.png)

   - Sort Bar to sort by name or location
     ![Search Skill](./public/screenshot/Home-Page-Sort-Bar.png)

   Not only search bar, there also pagination feature to find based on how much page you find the worker.
   ![Pagination](./public/screenshot/Pagination.png)

5. Worker Profile Page

   There are two pages:

   - View Profile

     This page have toolbar to view portofolio and work experience.

     When you're see portofolio:
     ![View Worker Portofolio](./public/screenshot/View-Worker-Page-Portofolio-As-Worker.png)

     And when you're see work experience:
     ![View Worker Work Experience](./public/screenshot/View-Worker-Page-WorkExp-As-Worker.png)

     This page have different button based on what role you are.

     For example this is worker profile if you're a recruiter
     ![View Worker as Recruiter](./public/screenshot/View-Worker-As-Recruiter.png)

   - Edit Profile

     In edit page, there are many section to add, edit, and also delete your biodata, work experience, skill, and portofolio
     ![Edit Worker](./public/screenshot/Edit-Worker-Page.png)

6. Recruiter or Company Profile Page
   This page also have two:

   - View Profile
     ![View Recruiter Company](./public/screenshot/View-Recruiter-Page.png)

   - Edit Profile
     ![Edit Company](./public/screenshot/Edit-Recruiter-Page.png)

7. Hire Page

   This page is to offering job to the selected worker from recruiter.
   ![Hire Page](./public/screenshot/Hire-Page.png)

   There also the notification to inform both roles that recruiter offering to worker.

   > Still work in progress.

## Performance

According to PageSpeed Insights, the desktop performance scored 97%, with minor issues regarding LCP. However, the mobile performance, at 52%, is concerning due to significant CLS and LCP issues. The absence of loading indicators on the website may be contributing to this discrepancy. To address this, I propose implementing more loading indicators for images and other elements to enhance performance in future updates. Despite these challenges, the website remains functional on both mobile and desktop platforms.

![Performance Mobile](./public/screenshot/Performance-Mobile.png)
![Performance Desktop](./public/screenshot/Performance-Desktop.png)

## Domain to Visit Pages

If you wish to view my website, please click the link provided below. Thank you very much for your interest and appreciation.

[Click Here](https://peworld-hirejob.vercel.app/)

## Reference

[Figma Template](https://www.figma.com/file/ZhfxykSA0qzko0PMs9aPOp/HireJob?type=design&node-id=67-0&mode=design&t=IX8slcJJKTGFdMcm-0)

[React + Vite](https://vitejs.dev/)

[React Dom Router](https://reactrouter.com/en/main)

[Axios](https://axios-http.com/docs/intro)

[Javascript](https://www.w3schools.com/js/)

[HTML](https://www.w3schools.com/html/)

[CSS](https://www.w3schools.com/css/)

[Tailwind](https://tailwindcss.com/)

[Vercel as Deployment](https://vercel.com/)
