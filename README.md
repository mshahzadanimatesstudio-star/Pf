# Muhammad Shahzad — Portfolio Website

A responsive personal portfolio built with HTML, CSS, and vanilla JavaScript. The design follows a light blue/white neumorphic direction inspired by the supplied reference, with an optional dark theme.

## Files
- `index.html` — page structure and content
- `style.css` — responsive design, themes, cards, and animations
- `script.js` — mobile navigation, theme toggle, active section states, and WhatsApp form behavior
- `favicon.svg` — simple MS monogram favicon

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. For a local development server, open the folder in VS Code and use Live Server, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Personalize it
- Update biography and services in `index.html`.
- Edit skill labels and percentages in the `#skillsList` section in `index.html`.
- Replace project placeholder cards in the `#projects` section with your real project names, screenshots, descriptions, and links.
- The WhatsApp link uses `https://wa.me/923116269796`, based on the supplied number. Confirm it is the number you want public before publishing.
- Replace placeholder email/social details once you choose the public accounts you want to share.
- Change colors in the `:root` variables at the top of `style.css`.

## Contact form
The form validates its fields and prepares a WhatsApp message. It does not send an email or save messages on a server. A visitor must review and send the message in WhatsApp. For a true email form, connect a backend or a form provider and configure it securely.

## Publish free
### GitHub Pages
1. Create a GitHub repository and upload the four files.
2. In repository Settings, open Pages.
3. Choose deployment from the main branch and root folder.
4. Save and wait for GitHub Pages to publish the site.

You can also deploy the folder using a static host such as Netlify. No API keys or build step are required.

## Accuracy note
Skill percentages are displayed as supplied self-assessments. Project cards are marked “Coming Soon” because no project screenshots or project URLs have been supplied. No unverified employment history, client testimonials, or certifications are claimed.
