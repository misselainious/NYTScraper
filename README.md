# :newspaper: __NYTScraper__ :clipboard:
Web-Scraping app using Mongoose, Cheerio, Express and Handlebars

## Author
  - :wine_glass: [Elaine Cadman](https://github.com/misselainious)

## App Functionality
  - Users view articles scraped from the New York times.
  - Buttons allow user to:
      - Scrape for new articles,
      - Delete specific articles from list
      - Clear all articles
      - Create notes
      - View all notes.

## Description
   _scraper.NYT_ scrapes article titles, links and summaries, if available, into a mongo database and displays each article using handlebars. Another model stores user notes and allows the user to create, view or update notes on the front-end.

## Technologies used

    __Front-end__
    - Bootstrap
    - Handlebars

    __Back-end__
    - Node.js
    - express
    - Mongoose

    __Database__
    - mongo

    __Deployment__
    - heroku
