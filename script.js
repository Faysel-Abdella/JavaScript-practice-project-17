const rules = document.getElementById("rules");
const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // convention to use ctx

let score = 0;

// Create ball properties
const ball = {
  x: canvas.width / 2, // to make the ball at the center in x-axis
  y: canvas.height / 2, // to make the ball at the center in y-axis
  size: 10, // Radius of the ball
  speed: 4,
  dx: 4, // speed to x
  dy: -4, // speed to y(to top)
};

// Create paddle props
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 30,
  w: 80, // width
  h: 10,
  speed: 8,
  dx: 0, // b/c it moves only horizontally
};

// Draw ball on canvas
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2); // To create the perfect circle
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

// Draw paddle on canvas
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

// Draw every thing
function draw() {
  drawBall();
  drawPaddle();
  drawScore();
}
draw();

// Draw score on canvas
function drawScore() {
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// Rules and close event handler
rulesBtn.addEventListener("click", () => {
  rules.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  rules.classList.remove("show");
});
