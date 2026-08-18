import type { Task } from "../types/task";

const task01: Task = {
  id: "task-01",
  title: "Interactive Counter",
  description: "Modify the existing counter application.",
  instructions: [
    "Clicking the + button should increase the count.",
    "Clicking the - button should decrease the count.",
    "The count should never go below zero.",
    "Keep the existing HTML structure intact.",
    "The counter should update without refreshing the page.",
  ],
  starterFiles: {
    "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Counter</title>
</head>
<body>
  <main class="counter-container">
    <h1>Counter</h1>

    <div class="counter">
      <button id="decrement">-</button>
      <span id="count">0</span>
      <button id="increment">+</button>
    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>
`,
    "style.css": `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1e1e2e;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.counter-container {
  background: #292a3e;
  border-radius: 12px;
  padding: 40px 56px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

h1 {
  color: #f5f5fa;
  margin: 0 0 24px;
  font-size: 1.5rem;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.counter button {
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 8px;
  background: #6c5ce7;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background 0.15s ease;
}

.counter button:hover {
  background: #7d6bf0;
}

.counter button:active {
  transform: scale(0.96);
}

#count {
  min-width: 48px;
  color: #f5f5fa;
  font-size: 2rem;
  font-weight: 600;
}
`,
    "script.js": `// Grab references to the buttons and the count display.
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const countDisplay = document.getElementById("count");

let count = 0;

// TODO: clicking + should increase the count and update the display.
incrementButton.addEventListener("click", () => {
  console.log("increment clicked");
});

// TODO: clicking - should decrease the count, but never below zero.
decrementButton.addEventListener("click", () => {
  console.log("decrement clicked");
});
`,
  },
};

export const tasks: Task[] = [task01];

export function getTaskById(taskId: string): Task | undefined {
  return tasks.find((task) => task.id === taskId);
}
