# Educase India Assignment - PopX Onboarding Flow

A responsive and interactive React application built for the Educase India assignment. This project faithfully recreates the PopX onboarding flow, featuring dynamic screens for user registration, secure login, and account settings management.

## Tech Stack

| Technology          | Badge                                                                                                                        |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| **React 19**        | ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)                |
| **React Router**    | ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)      |
| **Vite**            | ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)                       |
| **Tailwind CSS v4** | ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) |

## Folder Structure

```text
Educase-India-Assigment/
├── public/
├── src/
│   ├── assets/
│   │   └── img/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Heading.jsx
│   │   ├── Input.jsx
│   │   └── index.jsx
│   ├── pages/
│   │   ├── AccountSettings.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Registration.jsx
│   │   └── index.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── router.jsx
├── eslint.config.js
├── package.json
└── vite.config.js
```

## Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Notes

- The app uses a fixed 375px canvas centered in the viewport to match the assignment layout.
- The avatar and favicon assets live in `src/assets/img` and `public` respectively.

## Author

- Daksh Yadav
- Full-stack developer
- GitHub: 0dux
