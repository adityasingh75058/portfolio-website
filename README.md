# Aditya Singh Portfolio

This repository contains the source code for my personal portfolio website built with React. It showcases my projects, technical skills, certifications, and experience as a software developer. The portfolio is designed to be fast, responsive, and easy to maintain.

## Live Website

Portfolio: https://portfolio-website-puce-phi-70.vercel.app/

## About the Project

The purpose of this portfolio is to present my work and provide a central place where recruiters, hiring managers, and fellow developers can learn more about me.

The application follows a component-based architecture using React and is structured to make future updates simple. Most portfolio content can be modified without changing the UI components.

## Features

* Responsive design for desktop, tablet, and mobile devices
* Modern and clean user interface
* Interactive landing section
* About Me section
* Skills and technology stack
* Experience timeline
* Featured projects
* Certifications
* Currently learning section
* Contact section with social links
* Smooth scrolling and simple animations
* Easy content management

## Tech Stack

**Frontend**

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3

**Development Tools**

* Git
* GitHub
* VS Code
* Vercel

## Project Structure

```text
aditya-portfolio/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── styles/
│   ├── App.jsx
│   └── index.js
│
├── package.json
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/adityasingh75058/portfolio-website.git
```

Move into the project directory:

```bash
cd portfolio-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## Build for Production

To create an optimized production build:

```bash
npm run build
```

The production-ready files will be generated inside the `build` directory.

## Updating Portfolio Content

Most of the portfolio information is stored in:

```text
src/data/index.js
```

From there, you can update:

* Personal information
* Skills
* Projects
* Experience
* Certifications
* Social links
* Contact details

without modifying the UI components.

## Deployment

This project can be deployed on any static hosting platform.

### Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Deploy using the default Create React App configuration.

### GitHub Pages

Install the deployment package:

```bash
npm install --save-dev gh-pages
```

Update `package.json`:

```json
"homepage": "https://adityasingh75058.github.io/portfolio-website"
```

Add the following scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Deploy the project:

```bash
npm run deploy
```

## Future Improvements

* Dark and light theme toggle
* Blog section
* Project filtering
* Resume preview
* Contact form with backend integration
* Performance optimization
* Accessibility improvements

## Contact

**Aditya Singh**

GitHub: https://github.com/adityasingh75058

LinkedIn: https://www.linkedin.com/in/contact-aditya-singh75/

Email: adityasingh75058@gmail.com

---

If you have any suggestions or feedback about this project, feel free to connect with me on LinkedIn or open an issue in this repository.
