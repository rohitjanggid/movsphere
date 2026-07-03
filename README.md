# 🎬 MovSphere - Dynamic Movie Exploration App

MovSphere is a fully responsive and feature-rich Movie Web Application built using React.jsx and Bootstrap. The application integrates the TMDB (The Movie Database) API to fetch and display real-time trending, top-rated, and action-thriller movies. It features a seamless video trailer playback system and a persistent watchlist feature driven by the browser's LocalStorage.

🔗 **Live Demo Link:** [https://movsphere.vercel.app/]

---

## 🚀 Key Features

- **Dynamic Hero Banner:** The main page automatically updates to showcase a large backdrop banner, rating, release date, and overview of the top trending or actively searched movie.
- **Real-Time Data Fetching:** Seamless asynchronous API integration with TMDB to fetch accurate movie collections, vote counts, and descriptions.
- **Sleek Layout & Transitions:** Movie categories are arranged in horizontal scrollable tracks that support both desktop navigation and touch gestures. Individual cards feature a smooth scale-up hover effect.
- **Interactive Trailer Modal:** Clicking on any movie card or the hero button dynamically retrieves the official YouTube trailer key and streams it inside a responsive iframe container. Closing the modal automatically terminates video playback to prevent background audio bleed.
- **Persistent Watchlist System:** Users can save or remove films from their personal watchlist. The application writes this state directly to the browser's `localStorage`, ensuring data persists even after a page refresh.

---

## 🛠️ Tech Stack Used

- **Frontend Framework:** React.jsx (Hooks utilized: `useState`, `useEffect`)
- **Styling & Layout:** Bootstrap 5 & Custom CSS
- **Icons:** React Icons (`io5`, `md`, `fa`)
- **API Integration:** Native Fetch API connected to TMDB (The Movie Database)
- **Data Persistence:** Browser LocalStorage API

---

## 📸 Project Architecture

```text
src/
├── components/
│   ├── Header.jsx          # Live Search Input Bar Component
│   ├── Sidebar.jsx         # Custom Side Navigation (Home / Watchlist Switching)
│   ├── FeaturedHero.jsx    # Dynamic Main Backdrop Banner & Primary Call-to-Actions
│   ├── MovieRow.jsx        # Horizontal Category Rail Wrappers
│   ├── MovieCard.jsx       # Individual Movie Thumbnails with Hover Scale and Badges
│   └── TrailerModal.jsx    # Custom Modal Popup Housing the Dynamic YouTube Iframe Player
├── App.jsx                 # Core Application State, API Integration, & Root Layout Grid
└── main.jsx                # Application Bootstrapping and Entry Point
```

---

## 💡 Future Enhancements 
- Integrate full-scale backend authentication (Firebase/Node.js) for multiple user profiles.

- Incorporate advanced carousel touch-sliders using libraries like Swiper.js.

- Design dedicated, standalone landing pages for detailed genre filter options.

---

## 👤 Author

**Rohit Jangid** 

💼 *Connect with me across my professional and social handles:*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rohitjanggid)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/rohit-jangid-831149402)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/Rohitkhati004/)
[![X (formerly Twitter)](https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white)](https://x.com/rohit_janggid)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/rohit_janggid/)

---

### ⭐ Support the Project

If you found this project helpful, well-architected, or learned something new from it, please consider giving this repository a star! It motivates me to build more open-source projects.

🌟 **[Click here to star this repository!](https://github.com/rohitjanggid/movsphere)**