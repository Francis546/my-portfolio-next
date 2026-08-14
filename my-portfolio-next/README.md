# My Portfolio Next

This is a modern, single-page responsive developer portfolio application built with Next.js and styled using Tailwind CSS. The project features a high-contrast, pitch-black minimalist aesthetic, showcasing various sections of a developer's work and skills.

## Features

- **Responsive Design**: The application is fully responsive, ensuring a seamless experience across devices.
- **Modular Components**: Each section of the portfolio is built as a modular component, making it easy to maintain and update.
- **High-Contrast Aesthetic**: The design focuses on a minimalist approach with a pitch-black background and high-contrast elements for readability.

## Project Structure

```
my-portfolio-next
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── head.tsx
│   └── globals.css
├── components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Modal.tsx
│   └── ui
│       ├── Button.tsx
│       ├── Icon.tsx
│       └── ThemeToggle.tsx
├── hooks
│   └── useTheme.ts
├── lib
│   ├── api.ts
│   └── data.ts
├── styles
│   └── tailwind.css
├── types
│   └── index.ts
├── utils
│   └── format.ts
├── public
│   └── robots.txt
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── .eslintrc.json
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-portfolio-next
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see your portfolio in action.

## Customization

You can customize the portfolio by modifying the components in the `components` directory. Update the content in `lib/data.ts` to reflect your own projects, skills, and contact information.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.