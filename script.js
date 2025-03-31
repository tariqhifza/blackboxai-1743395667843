// Enhanced movie data
const movies = {
    trending: [
        { 
            id: 1, 
            title: "Stranger Things", 
            image: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg",
            description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
            year: 2016,
            rating: "TV-14",
            seasons: 3,
            match: 98,
            genre: ["Sci-Fi", "Horror", "Drama"]
        },
        { 
            id: 2, 
            title: "The Crown", 
            image: "https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg",
            description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
            year: 2016,
            rating: "TV-MA",
            seasons: 4,
            match: 95,
            genre: ["Drama", "History"]
        }
    ],
    topPicks: [
        {
            id: 3,
            title: "Breaking Bad",
            image: "https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg",
            description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
            year: 2008,
            rating: "TV-MA",
            seasons: 5,
            match: 99,
            genre: ["Crime", "Drama", "Thriller"]
        },
        {
            id: 4,
            title: "KGF: Chapter 1",
            image: "https://images.pexels.com/photos/7234219/pexels-photo-7234219.jpeg",
            description: "The story of a young rebel who rises to become the king of a gold mine and the underworld.",
            year: 2018,
            rating: "UA",
            duration: "2h 35m",
            match: 97,
            genre: ["Action", "Drama"],
            free: true
        }
    ]
};

// DOM Elements
const searchInput = document.querySelector('input[type="text"]');
const loginForm = document.querySelector('#login-form');

// Event Listeners
if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
}

if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
}

// Functions
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length > 2) {
        const results = [...movies.trending, ...movies.topPicks].filter(movie => 
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.genre.some(g => g.toLowerCase().includes(searchTerm))
        );
        displaySearchResults(results);
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    
    if (email && password) {
        window.location.href = 'index.html';
    } else {
        alert('Please enter both email and password');
    }
}

function displaySearchResults(results) {
    console.log('Search results:', results);
    // Actual implementation would update the DOM with results
}

function showMovieDetails(movieId) {
    const movie = [...movies.trending, ...movies.topPicks].find(m => m.id === movieId);
    if (movie) {
        window.location.href = `movie-details.html?id=${movieId}`;
    }
}

// Initialize movie cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.movie-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const movieId = parseInt(card.dataset.movieId);
            showMovieDetails(movieId);
        });
    });
});