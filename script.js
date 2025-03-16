let sun = document.querySelector("#sun"),
  moon = document.querySelector("#moon"),
  body = document.querySelector("body"),
  cart = document.querySelector("#cart"),
  closeShopping = document.querySelector(".closeShopping"),
  homeBg = document.querySelector(".home_bg"),
  leftArrow = document.querySelector(".leftArrow"),
  rightArrow = document.querySelector(".rightArrow"),
  list = document.querySelector(".product-right-bottom"),
  total = document.querySelector(".total"),
  quantity = document.querySelector(".quantity"),
  searchInput = document.querySelector("#mySearch"),
  categoryFilters = document.querySelectorAll(".list");

const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

const toggleTheme = () => {
  body.classList.toggle("darkLight");
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
};

sun.addEventListener("click", toggleTheme);
moon.addEventListener("click", toggleTheme);
cart.addEventListener("click", () => {
  body.classList.toggle("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});
window.onscroll = () => {
  body.classList.remove("active");
};

let books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "classic", price: 15.99 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "classic", price: 12.99 },
  { title: "1984", author: "George Orwell", genre: "fiction", price: 10.99 },
  { title: "Harry Potter", author: "J.K. Rowling", genre: "fantasy", price: 20.99 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "fantasy", price: 18.99 },
  { title: "A Brief History of Time", author: "Stephen Hawking", genre: "science", price: 22.99 }
];

displayBooks(books);

function displayBooks(filteredBooks) {
  list.innerHTML = "";
  filteredBooks.forEach((book) => {
    list.innerHTML += `
      <div class="book-card" data-item="${book.genre}"> 
          <div class="book-image">
              <img src="https://via.placeholder.com/150" alt="${book.title}" class="book-imagish" />
          </div>
          <div class="book-details">
              <div class="book-type">${book.genre}</div>
              <div class="book-title">${book.title}</div>
              <div class="book-author">${book.author}</div>
              <div class="book-price">
                  <span class="book-price-symbol">$</span>${book.price.toFixed(2)}
              </div>
              <div class="buttons">
                  <button class="addToCart">Add to cart</button>
                  <i class="ri-heart-line" id="heart"></i>
              </div>
          </div>
      </div>
    `;
  });
}

searchInput.addEventListener("input", () => {
  filterBooks();
});

categoryFilters.forEach(filter => {
  filter.addEventListener("click", function () {
    document.querySelector(".list.active").classList.remove("active");
    this.classList.add("active");
    filterBooks();
  });
});

function filterBooks() {
  let searchText = searchInput.value.toLowerCase();
  let selectedCategory = document.querySelector(".list.active").dataset.filter;
  let filteredBooks = books.filter(book =>
    (selectedCategory === "all" || book.genre === selectedCategory) &&
    book.title.toLowerCase().startsWith(searchText)
  );
  displayBooks(filteredBooks);
}
