//your JS code here. If required.
// Get all squares
const squares = document.querySelectorAll(".square");

// Add event listeners
squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    squares.forEach((sq) => {
      if (sq !== square) {
        sq.style.backgroundColor = "#6F4E37"; // Coffee color
      }
    });
  });

  square.addEventListener("mouseleave", () => {
    squares.forEach((sq) => {
      sq.style.backgroundColor = "#E6E6FA"; // Lavender color reset
    });
  });
});

