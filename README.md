# Gym App (made using AI)

![MIT License](https://img.shields.io/badge/license-MIT-green)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue)
![Offline Capable](https://img.shields.io/badge/Offline-Yes-brightgreen)
![Mobile First](https://img.shields.io/badge/Mobile--First-%23ff9800)
![No Dependencies](https://img.shields.io/badge/No%20Dependencies-✔️-lightgrey)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Hosted-blueviolet)
![Built With JavaScript](https://img.shields.io/badge/Built%20With-JavaScript-yellow)
![HTML5](https://img.shields.io/badge/HTML5-%23e34c26)
![CSS3](https://img.shields.io/badge/CSS3-%233572b0)

A modern, mobile-first web app to track your gym workouts—offline, installable, and private.  
> **What’s different?**  
> This project is a cleaner, restructured, and visually improved successor to [gym-app](https://github.com/TheSebitzu/gym-app). The codebase is more modular and maintainable and the CSS is cleaner.

---

## 🚀 Try it now!

👉 [Open Gym App AI on GitHub Pages](https://thesebitzu.github.io/gym-app-ai/)

---

## Features

- Simple, intuitive, and mobile-first user interface
- Fully works offline – no internet connection required after first load
- Installable PWA: add it to your homescreen and use it like a native app
- Track max weight and reps for each exercise
- A prompt appears if you submit an exercise after skipping another one
- Option to reset your progress whenever you want
- Custom dark theme and responsive CSS

---

## Screenshots

Current Exercise  
<img src="/assets/current_exercise.jpg" alt="Current Exercise" width="400" />

Day Selection  
<img src="/assets/day_select.jpg" alt="Day Select" width="400" />

Homepage  
<img src="/assets/homescreen.jpg" alt="Homepage" width="400" />

---

## Tech Stack

- **Frontend:** HTML5, CSS3 (custom, mobile-first, dark theme)
- **Logic:** JavaScript (vanilla, no frontend framework)
- **Persistence:** LocalStorage (client-side only)
- **PWA:** Service Worker, Manifest (installable & offline-capable)
- **Deployment:** [GitHub Pages](https://pages.github.com/)

---

## AI-generated Code

Most sections of this project were written with the assistance of AI tools (such as GitHub Copilot), guided by clear instructions and manual review.

---

## Suggestions & Limitations

- Adding or editing exercises is only possible by modifying the source code directly. (See `exercise_template.txt` for a quick-start template!)
- Your workout data is stored locally — there are no accounts or cloud sync.

---

## Getting Started

To run the app locally:

```bash
git clone https://github.com/TheSebitzu/gym-app-ai.git
cd gym-app-ai
# Open index.html in your browser
```

**Important for local use:**  
By default, all resource paths start with `/gym-app-ai/` (for GitHub Pages deployment).  
If you want to run the app locally (e.g., just opening `index.html`), you’ll need to change all paths that look like `/gym-app-ai/...` to `/...` in the HTML files.  
This ensures that CSS, JS, and images load correctly from your local filesystem.

**Exercise template for quick customization:**  
Want to add your own exercises?  
Check out `exercise_template.txt` for a ready-to-use format!

---

## Contributing

Pull requests are welcome — feel free to open an [issue](https://github.com/TheSebitzu/gym-app-ai/issues/new) or contact me if you have questions, suggestions, or want to report a bug.

---

## Special Thanks

Special thanks to [Jeff Nippard](https://www.youtube.com/user/icecream4PRs) for workout inspiration and helpful videos.

---

## License

This project is licensed under the MIT License.