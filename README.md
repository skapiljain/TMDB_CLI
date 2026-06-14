# TMDB Movie CLI

A simple command-line application that fetches movie data from The Movie Database (TMDB) API and displays it in the terminal.

## Requirements

* Node.js
* npm
* TMDB API key

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
TMDB_API_KEY=your_api_key_here
```

You can get a free API key from TMDB.

## Usage

Run the application with:

```bash
node index.js --type <category>
```

Available categories:

* `popular`
* `playing`
* `top`
* `upcoming`

Examples:

```bash
node index.js --type popular
```

```bash
node index.js --type playing
```

```bash
node index.js --type top
```

```bash
node index.js --type upcoming
```

## Example Output

```text
1. The Avengers
   Rating: 8.5
   Release Date: 2023-05-15

2. Iron Man
   Rating: 7.9
   Release Date: 2023-03-21
```

## Project Structure

```text
Movie_CLI/
├── index.js
├── package.json
├── .env
└── README.md
```

## Features

* Fetch popular movies
* Fetch currently playing movies
* Fetch top-rated movies
* Fetch upcoming movies
* Display ratings and release dates
* Store API key securely using environment variables

## Notes

Add the following to `.gitignore`:

```text
node_modules/
.env
```

Do not commit your API key to GitHub.
