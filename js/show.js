// Movie data (same as used in script.js)
const movies = [
    {
      id: 1,
      title: "Stranger Things",
      image: "img/movie1.jpg",
      description: "A group of kids in a small town uncover a secret government experiment..."
    },
    {
      id: 2,
      title: "Money Heist",
      image: "img/movie2.jpg",
      description: "A criminal mastermind plans the biggest heist in recorded history..."
    },
    {
      id: 3,
      title: "Breaking Bad",
      image: "img/movie3.jpg",
      description: "A high school chemistry teacher turned methamphetamine producer..."
    },
    {
      id: 4,
      title: "The Witcher",
      image: "img/movie4.jpg",
      description: "A monster hunter with a mysterious past embarks on a quest to find his adopted daughter..."
    }
  ];
  
  // Function to get movie ID from URL and show its details
  function displayMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = parseInt(params.get("id"));
  
    const movie = movies.find(m => m.id === movieId);
  
    const imageEl = document.querySelector(".movie-details img");
    const titleEl = document.querySelector(".movie-details h2");
    const descEl = document.querySelector(".movie-details p.lead");
  
    if (movie && imageEl && titleEl && descEl) {
      imageEl.src = movie.image;
      imageEl.alt = movie.title;
      titleEl.innerText = movie.title;
      descEl.innerText = movie.description;
    } else {
      document.querySelector(".movie-details").innerHTML = `
        <h2 class="text-white">Movie not found</h2>
        <a href="browse.html" class="btn btn-light mt-3">Back to Browse</a>
      `;
    }
  }
  
  // Run on page load
  window.onload = displayMovieDetails;
  