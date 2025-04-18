// Example of movie data
const movies = [
    {
      title: "Stranger Things",
      image: "img/movie1.jpg",
      description: "A group of kids in a small town uncover a secret government experiment...",
      id: 1
    },
    {
      title: "Money Heist",
      image: "img/movie2.jpg",
      description: "A criminal mastermind plans the biggest heist in recorded history...",
      id: 2
    },
    {
      title: "Breaking Bad",
      image: "img/movie3.jpg",
      description: "A high school chemistry teacher turned methamphetamine producer...",
      id: 3
    },
    {
      title: "The Witcher",
      image: "img/movie4.jpg",
      description: "A monster hunter with a mysterious past embarks on a quest to find his adopted daughter...",
      id: 4
    }
  ];
  
  // Function to display movies on the browse page
  function displayMovies() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // Clear existing content
  
    movies.forEach(movie => {
      const movieCard = `
        <div class="col">
          <div class="card bg-dark text-white border-0">
            <img src="${movie.image}" class="card-img" alt="${movie.title}">
            <div class="card-img-overlay d-flex align-items-end p-2">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movie.description}</p>
              <a href="show.html?id=${movie.id}" class="btn btn-danger">Watch Now</a>
            </div>
          </div>
        </div>
      `;
      movieList.innerHTML += movieCard; // Append the movie card
    });
  }
  
  // Call the function to display movies when the page loads
  window.onload = displayMovies;
  