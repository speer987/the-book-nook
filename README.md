# Welcome to The Book Nook!

This is a fully functional app I made for people who like to read. There are several features that are available to users, with the sole focus of the app being a platform where people can save their favorite books to a bookshelf after searching for and exploring books. 

These are the technologies that I used:
- Firebase Authentication (through Google)
- Firestore
- Firebase Hosting
- Chart JS (React) 
- React
- Three Different APIs:
    - Google Books API: I used this API for the Search Page. Although Google Books has a feature that allows developers to query a users bookshelf by their Google account and display that, I decided not to use this feature because that would assume that the user uses Google Books to maintain their bookshelf. I wanted to make this app accessible for everyone, even if they don't use Google Books, so I decided to instead develop my own system for tracking three different custom bookshelves (completed, reading and to read) using Firestore and the results from the Google Books API call from a user's search on the Search page. In other words, I only used the Google Books API for search results, not for the bookshelf functionality.
    - Open Library API: Many of the books that I got from the API calls from the Google Books API did not have page numbers, so I fed the ISBNs of books from the Google Books API to The Open Library API to gain information about accurate page numbers. This was important for the graphing functionality on the Bookshelf Page.
    - The New York Times' Trending Books API: I used this API to show trending books on the Explore page. It has a very large amount of genres (I think there's about 50+), so I decided to include a dropdown on the explore page that allows people to see what books are trending in a given category on any given week.

The pages in the app are:
- Explore
- Search
- Bookshelf (works when a user is logged in)

