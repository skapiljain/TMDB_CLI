# 🎬 TMDB Movie CLI

A command-line tool to fetch and display movies from **The Movie Database (TMDB) API**. Get popular, top-rated, upcoming, and now-playing movies directly in your terminal.

---

## ✨ Features

- ✅ Fetch movies by category (popular, top-rated, upcoming, now playing)
- ✅ Clean terminal output with formatted movie information
- ✅ Display movie title, rating, release date, and description
- ✅ Easy command-line interface with `--type` flag
- ✅ Environment variable support for secure API key storage

---

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **TMDB API Key** (free from [themoviedb.org](https://www.themoviedb.org/settings/api))

---

## 🚀 Installation

### 1. Clone or Download the Project
```bash
cd Movie_CLi
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` File
Create a `.env` file in the project root:
```
TMDB_API_KEY=your_actual_api_key_here
```

**Get your API key:**
1. Go to [TMDB Settings](https://www.themoviedb.org/settings/api)
2. Sign up or log in
3. Request an API key (v3 Auth)
4. Copy your key and paste in `.env`

---

## 📖 Usage

### Command Format
```bash
node index.js --type <category>
```

### Available Categories

| Category | Description |
|----------|-------------|
| `playing` | Currently playing in theaters |
| `popular` | Most popular movies |
| `top` | Top-rated movies |
| `upcoming` | Upcoming movies |

### Examples

**Get popular movies:**
```bash
node index.js --type popular
```

**Get top-rated movies:**
```bash
node index.js --type top
```

**Get now-playing movies:**
```bash
node index.js --type playing
```

**Get upcoming movies:**
```bash
node index.js --type upcoming
```

### Sample Output
```
🎬 MOVIES

1. The Avengers
   ⭐ 8.5/10 | 📅 2023-05-15
   When an unexpected enemy emerges that threatens global safety, Nick Fury decides...

2. Iron Man
   ⭐ 7.9/10 | 📅 2023-03-21
   Tony Stark is a genius engineer with a brilliant but arrogant mind. When a thief...

3. Thor
   ⭐ 7.2/10 | 📅 2023-07-08
   The powerful but arrogant god Thor is cast out of Asgard to live amongst humans...
```

---

## 📁 Project Structure

```
Movie_CLi/
├── index.js           # Main application file
├── package.json       # Project metadata & dependencies
├── .env              # API key (create this yourself)
└── README.md         # This file
```

---

## 🔧 Code Overview

### Key Functions

**`getCategory()`**
- Parses command-line arguments
- Extracts the `--type` flag value
- Returns user's movie category choice

**`categoryMap`**
- Maps user input to TMDB API endpoints
- `playing` → `now_playing`
- `popular` → `popular`
- `top` → `top_rated`
- `upcoming` → `upcoming`

**`fetchMovies(category)`**
- Calls TMDB API with the category
- Formats and displays results
- Shows: title, rating, date, description

---

## ⚠️ Troubleshooting

### Error: `API Key: undefined`
**Problem:** `.env` file not loading
**Solution:**
- Make sure `.env` file exists in project root
- Check spelling: `TMDB_API_KEY=your_key`
- Restart the terminal after creating `.env`

### Error: `ECONNRESET`
**Problem:** Connection dropped by API
**Solution:**
- Verify API key is **activated** on [TMDB website](https://www.themoviedb.org/settings/api)
- Check internet connection
- Test the API URL in browser directly
- Try a different category

### Error: `Invalid`
**Problem:** Category not recognized
**Solution:**
- Use correct category names: `playing`, `popular`, `top`, `upcoming`
- Use `--type` flag: `node index.js --type popular`
- Don't use: `node index.js popular` (without flag)

### No Output / Blank Screen
**Problem:** Fetch is running but not displaying results
**Solution:**
- Check if API returned data: Add debug `console.log(data)` in code
- Ensure `movie.overview` exists (some movies might not have it)

---

## 📌 Project Reference

- **Project Page:** [roadmap.sh/projects/tmdb-cli](https://roadmap.sh/projects/tmdb-cli)
- **TMDB API Docs:** [TMDB API Documentation](https://developer.themoviedb.org/docs)
- **TMDB Base URL:** `https://api.themoviedb.org/3/`
- **Rate Limit:** 40 requests per 10 seconds

---

## 📚 Learning Goals

This project teaches:
- ✅ Working with REST APIs
- ✅ Command-line argument parsing
- ✅ Environment variables with dotenv
- ✅ Promise handling with fetch
- ✅ JSON data manipulation
- ✅ Terminal output formatting
- ✅ Error handling

---

## 🔐 Security Notes

- **Never commit `.env`** to Git (contains your API key)
- Add `.env` to `.gitignore`:
  ```
  .env
  node_modules/
  ```
- Keep API key private

---

## 📝 Next Steps / Enhancements

- [ ] Add pagination (show more than 5 movies)
- [ ] Save favorites to a JSON file
- [ ] Add search by movie name
- [ ] Display movie genres
- [ ] Add sorting (by rating, date)
- [ ] Create interactive menu (not CLI flags)
- [ ] Add caching to reduce API calls

---

## 📄 License

Free to use and modify for learning purposes.

---

## 👨‍💻 Author

Created as a backend practice project for learning APIs, CLI tools, and Node.js fundamentals.

---

## 🤝 Contributing

Have improvements? Feel free to fork and submit pull requests!

---

**Happy coding! 🚀**
