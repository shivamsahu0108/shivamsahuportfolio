# Shivam Sahu — Personal Developer Portfolio

A creative, animated and responsive personal portfolio for an independent full-stack web developer.

## Tech stack
- React 18 + Vite
- Framer Motion
- Lucide React
- Responsive custom CSS

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```
The deployable site is generated in `dist/`.

## Personalize before publishing
Edit the `profile` object at the top of `src/main.jsx`:
- Add your WhatsApp number in international format, digits only (example: `919876543210`).
- Add a public resume PDF URL if you want a resume link.
- Check that your email, LinkedIn and GitHub profile URLs are correct.

Review the `projects` array and verify descriptions, technology stacks, repository URLs and deployed demo URLs match the actual projects. Add live URLs when available.

## Deploy free on Netlify
1. Open Netlify and choose **Add new site → Import an existing project**.
2. Connect GitHub and select this repository.
3. Set build command to `npm run build`.
4. Set publish directory to `dist`.
5. Deploy.

Alternatively, run `npm run build` and drag the generated `dist` folder into Netlify Drop.

Contact uses email links and public social profiles. WhatsApp appears after you add your number. No backend or paid form service is required.
