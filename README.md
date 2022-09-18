# Resume generator

A simple tool for generating single-page resumes as A4 webpages, that can then be exported to PDF. The original code base was written with French in mind, so a few changes might be necessary if targeting another language.

<p align="center">Output example: 
	<br>
	<br>
	<img src="./public/images/screenshot.png" width="50%">
</p>

## 🖥️ Technologies

<p align="center">
	<img alt="JavaScript" src="https://img.shields.io/badge/-javascript-fdd835?style=for-the-badge&logo=javascript&logoColor=black">
	<img alt="NPM" src="https://img.shields.io/badge/-npm-e53935?style=for-the-badge&logo=npm&logoColor=white">
	<img alt="Astro" src="https://img.shields.io/badge/-astro-fb8c00?style=for-the-badge&logo=astro&logoColor=white">
	<img alt="Vue" src="https://img.shields.io/badge/-vue-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white">
	<img alt="Tailwind CSS" src="https://img.shields.io/badge/-tailwind_css-039be5?style=for-the-badge&logo=tailwindcss&logoColor=white">
</p>

This portfolio was built using [Astro](https://astro.build/) and [Vue.js](https://vuejs.org/) frameworks, along with [Tailwind CSS](https://tailwindcss.com/) for styling.

## 📁 Project structure

This project includes the following directories and files:

- `public/*` — Static assets that are not processed during build.
- `src/components/` — Custom Astro and Vue.js components.
- `src/data/general.js` — General information about the individual, such as name and email address.
- `src/data/resume.js` — Information specific to the targeted position, such as skills, tools and previous work experience.
- `src/layouts/` — Astro components for creating reusable page templates.
- `src/pages/` — Astro components for handling routing and overall page layout.
- `html2pdf.js` — Script for converting resume from HTML to PDF.

## 🏗️ Run locally

In order to run this project, Node.js v16.15.0+ is required.

The following lines can be used to serve the resume to a built-in development server:

```bash
git clone https://github.com/poterekq/resume-generator.git
cd resume-generator
npm install
npm run dev
```

If you wish to create a custom resume, the following files must be modified: `data/general.js` and `data/resume.js`.

In order to convert the resume from HTML to PDF, you can either:
- Run `npm run convert`, which executes `html2pdf.js`. No other argument is passed. In this case, the tool assumes that the resume is currently running locally on `http://localhost:3000`. The output in written under `output/resume.pdf`.
- Run `node html2pdf.js` with two optional arguments. The first corresponds to the filename used when creating the PDF output. The second is the url of the target webpage where the resume is currently being displayed.

```bash
node html2pdf.js filename url
```