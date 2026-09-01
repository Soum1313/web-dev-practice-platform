import type { Task } from "../types/task";

const task01: Task = {
  id: "task-01",
  title: "Interactive Counter",
  description: "Modify the existing counter application.",
  track: "JavaScript",
  order: 7,
  instructions: [
    "Clicking the + button should increase the count.",
    "Clicking the - button should decrease the count.",
    "The count should never go below zero.",
    "Keep the existing HTML structure intact.",
    "The counter should update without refreshing the page.",
  ],
  topics: [{ label: "addEventListener", url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" }, { label: "textContent", url: "https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent" }],
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

const task02: Task = {
  id: "task-02",
  title: "Student Dashboard",
  description: "Modify the existing Student Dashboard: add a missing HTML id, style it with CSS, and wire up a click interaction in JavaScript.",
  order: 14,
  bank: true,
  instructions: [
    "Add id=\"studentStatus\" to the <span> that displays the student's status text (\"Active\") in index.html.",
    "Add a #studentStatus CSS rule in style.css: light green background, readable contrasting text color, at least 4px 10px padding, at least 4px border-radius, and inline-block display.",
    "Select #markCompleteBtn in script.js and attach a click event listener to it.",
    "When clicked, remove the \"hidden\" class from #actionMessage and set its text to \"Profile reviewed successfully.\"",
  ],
  topics: [{ label: "Flexbox", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" }, { label: "classList", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Student Dashboard</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Student Dashboard</h1>\n  </header>\n\n  <main class=\"container\">\n    <section class=\"profile-card\">\n      <img\n        class=\"avatar\"\n        src=\"https://api.dicebear.com/7.x/initials/svg?seed=Riya+Sharma\"\n        alt=\"Student avatar\"\n      />\n      <div class=\"profile-info\">\n        <h2>Riya Sharma</h2>\n        <p class=\"meta\">Roll No: CS2024-118</p>\n        <p class=\"meta\">\n          Status:\n          <span class=\"status-text\">Active</span>\n        </p>\n      </div>\n      <button id=\"markCompleteBtn\" class=\"btn btn-primary\">Mark Profile Reviewed</button>\n      <div id=\"actionMessage\" class=\"action-message hidden\"></div>\n    </section>\n\n    <section class=\"courses-card\">\n      <h3>Enrolled Courses</h3>\n      <ul class=\"course-list\">\n        <li>\n          <span class=\"course-name\">Web Development Fundamentals</span>\n          <span class=\"course-progress\">80%</span>\n        </li>\n        <li>\n          <span class=\"course-name\">JavaScript Essentials</span>\n          <span class=\"course-progress\">65%</span>\n        </li>\n        <li>\n          <span class=\"course-name\">Database Basics</span>\n          <span class=\"course-progress\">40%</span>\n        </li>\n      </ul>\n    </section>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 720px;\n  margin: 32px auto;\n  padding: 0 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.profile-card,\n.courses-card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: block;\n  margin-bottom: 12px;\n}\n\n.profile-info h2 {\n  margin: 0 0 4px 0;\n}\n\n.meta {\n  margin: 4px 0;\n  color: #555;\n  font-size: 14px;\n}\n\n.btn {\n  margin-top: 16px;\n  padding: 10px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #2f6fed;\n  color: #fff;\n}\n\n.btn-primary:hover {\n  background-color: #2558c0;\n}\n\n.action-message {\n  margin-top: 12px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  font-size: 14px;\n}\n\n.action-message.hidden {\n  display: none;\n}\n\n.courses-card h3 {\n  margin-top: 0;\n}\n\n.course-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.course-list li {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #eee;\n}\n\n.course-list li:last-child {\n  border-bottom: none;\n}\n\n.course-progress {\n  color: #2f6fed;\n  font-weight: 600;\n}\n\n/* ============================================\n   TODO (Student CSS objective):\n   Style the #studentStatus element once you have\n   added that ID to the status <span> in index.html.\n   See TASK.md for exact requirements.\n   ============================================ */\n",
    "script.js": "// Student Dashboard - script.js\n//\n// Some functionality below is already implemented.\n// Read TASK.md for the exact objectives you must complete.\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const courseItems = document.querySelectorAll(\".course-list li\");\n  console.log(`Loaded dashboard with ${courseItems.length} courses.`);\n\n  // TODO (Student JavaScript objective):\n  // 1. Select the \"Mark Profile Reviewed\" button (id=\"markCompleteBtn\").\n  // 2. Add a click event listener to it.\n  // 3. When clicked, update the #actionMessage element so that it:\n  //      - becomes visible (remove the \"hidden\" class)\n  //      - displays the text: \"Profile reviewed successfully.\"\n  //\n  // See TASK.md for full requirements.\n});\n",
  },
};

const task03: Task = {
  id: "task-03",
  title: "Course Registration",
  description: "Wire up the Course Registration form so submitting it validates the fields and shows a success popup, without reloading the page.",
  track: "JavaScript",
  order: 11,
  instructions: [
    "Attach a submit event listener to #registrationForm and call event.preventDefault() inside it.",
    "Block the popup (do not show it) if Full Name, Email, or Course is left empty.",
    "On a valid submission, remove the \"hidden\" class from #successModal.",
    "Set #modalMessage's text to \"Thank you, <name>! You have successfully registered.\" using the entered name.",
    "Attach a click listener to #closeModalBtn that re-adds the \"hidden\" class to #successModal.",
  ],
  topics: [{ label: "Form validation", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" }, { label: "preventDefault", url: "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault" }, { label: "classList", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Course Registration</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Course Registration</h1>\n  </header>\n\n  <main class=\"container\">\n    <form id=\"registrationForm\" class=\"reg-form\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"fullName\">Full Name</label>\n        <input type=\"text\" id=\"fullName\" name=\"fullName\" placeholder=\"Enter your full name\" />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email Address</label>\n        <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Enter your email\" />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"course\">Course</label>\n        <select id=\"course\" name=\"course\">\n          <option value=\"\">-- Select a course --</option>\n          <option value=\"web-dev\">Web Development</option>\n          <option value=\"data-science\">Data Science</option>\n          <option value=\"cloud-computing\">Cloud Computing</option>\n        </select>\n      </div>\n\n      <button type=\"submit\" id=\"submitBtn\" class=\"btn btn-primary\">Submit</button>\n    </form>\n  </main>\n\n  <!-- Success popup/modal -->\n  <div id=\"successModal\" class=\"modal-overlay hidden\">\n    <div class=\"modal-box\">\n      <h2>Registration Successful</h2>\n      <p id=\"modalMessage\"></p>\n      <button id=\"closeModalBtn\" class=\"btn btn-secondary\">Close</button>\n    </div>\n  </div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 480px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.reg-form {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.form-group {\n  margin-bottom: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-group label {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.form-group input,\n.form-group select {\n  padding: 10px 12px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 14px;\n}\n\n.form-group input:focus,\n.form-group select:focus {\n  outline: none;\n  border-color: #2f6fed;\n}\n\n.btn {\n  padding: 10px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #2f6fed;\n  color: #fff;\n  width: 100%;\n}\n\n.btn-primary:hover {\n  background-color: #2558c0;\n}\n\n.btn-secondary {\n  background-color: #e2e6ed;\n  color: #222;\n  margin-top: 16px;\n}\n\n.btn-secondary:hover {\n  background-color: #cfd5df;\n}\n\n/* Modal */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-overlay.hidden {\n  display: none;\n}\n\n.modal-box {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 28px;\n  max-width: 360px;\n  width: 90%;\n  text-align: center;\n}\n\n.modal-box h2 {\n  margin-top: 0;\n  color: #146c2e;\n}\n",
    "script.js": "// Course Registration - script.js\n//\n// DOM references are already set up for you below.\n// Read TASK.md for the exact objectives you must complete.\n\nconst registrationForm = document.getElementById(\"registrationForm\");\nconst fullNameInput = document.getElementById(\"fullName\");\nconst emailInput = document.getElementById(\"email\");\nconst courseSelect = document.getElementById(\"course\");\n\nconst successModal = document.getElementById(\"successModal\");\nconst modalMessage = document.getElementById(\"modalMessage\");\nconst closeModalBtn = document.getElementById(\"closeModalBtn\");\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Attach a \"submit\" event listener to `registrationForm`.\n// 2. Inside the listener, call event.preventDefault() to stop the\n//    default form submission (page reload).\n// 3. Check that fullNameInput, emailInput, and courseSelect all have\n//    non-empty values. If any field is empty, do NOT show the popup\n//    (you may optionally log a message to the console).\n// 4. If all fields are filled, show the success popup by removing the\n//    \"hidden\" class from `successModal`.\n// 5. Set the text of `modalMessage` to include the student's name, e.g.:\n//      \"Thank you, <name>! You have successfully registered.\"\n// 6. Attach a \"click\" event listener to `closeModalBtn` that hides the\n//    popup again by adding the \"hidden\" class back to `successModal`.\n//\n// See TASK.md for full requirements.\n",
  },
};

const task04: Task = {
  id: "task-04",
  title: "Account Settings",
  description: "Implement working ON/OFF toggle switches for the Account Settings page - each toggle should update its visual state and label independently.",
  track: "JavaScript",
  order: 8,
  instructions: [
    "Attach a click event listener to every [data-toggle] button.",
    "On each click, toggle the \"active\" class on the clicked button.",
    "Update the button's aria-pressed attribute to \"true\" when ON and \"false\" when OFF.",
    "Update the row's [data-state-text] label to \"On\" or \"Off\" to match the new state.",
    "Make sure each toggle works independently and repeated clicks correctly flip the state every time.",
  ],
  topics: [{ label: "classList.toggle", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" }, { label: "aria-pressed", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Account Settings</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Account Settings</h1>\n  </header>\n\n  <main class=\"container\">\n    <ul class=\"settings-list\">\n      <li class=\"setting-row\" data-setting=\"notifications\">\n        <div class=\"setting-info\">\n          <span class=\"setting-name\">Email Notifications</span>\n          <span class=\"setting-state\" data-state-text>Off</span>\n        </div>\n        <button class=\"toggle-btn\" type=\"button\" aria-pressed=\"false\" data-toggle>\n          <span class=\"toggle-knob\"></span>\n        </button>\n      </li>\n\n      <li class=\"setting-row\" data-setting=\"darkMode\">\n        <div class=\"setting-info\">\n          <span class=\"setting-name\">Dark Mode</span>\n          <span class=\"setting-state\" data-state-text>Off</span>\n        </div>\n        <button class=\"toggle-btn\" type=\"button\" aria-pressed=\"false\" data-toggle>\n          <span class=\"toggle-knob\"></span>\n        </button>\n      </li>\n\n      <li class=\"setting-row\" data-setting=\"jobAlerts\">\n        <div class=\"setting-info\">\n          <span class=\"setting-name\">Job Alerts</span>\n          <span class=\"setting-state\" data-state-text>Off</span>\n        </div>\n        <button class=\"toggle-btn\" type=\"button\" aria-pressed=\"false\" data-toggle>\n          <span class=\"toggle-knob\"></span>\n        </button>\n      </li>\n    </ul>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 520px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.settings-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n\n.setting-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #eee;\n}\n\n.setting-row:last-child {\n  border-bottom: none;\n}\n\n.setting-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.setting-name {\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.setting-state {\n  font-size: 13px;\n  color: #888;\n}\n\n/* Toggle button */\n.toggle-btn {\n  position: relative;\n  width: 46px;\n  height: 26px;\n  border-radius: 999px;\n  border: none;\n  background-color: #ccc;\n  cursor: pointer;\n  padding: 0;\n  transition: background-color 0.2s ease;\n}\n\n.toggle-knob {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: transform 0.2s ease;\n}\n\n/* TODO (reference only - the \"on\" visual state is driven by a class\n   toggled from JavaScript; see TASK.md for the exact class name to use) */\n.toggle-btn.active {\n  background-color: #2f9e44;\n}\n\n.toggle-btn.active .toggle-knob {\n  transform: translateX(20px);\n}\n",
    "script.js": "// Account Settings - script.js\n//\n// The toggle buttons and their state-text labels already exist in the HTML.\n// Read TASK.md for the exact objectives you must complete.\n\nconst toggleButtons = document.querySelectorAll(\"[data-toggle]\");\n\nconsole.log(`Found ${toggleButtons.length} toggle switches.`);\n\n// TODO (Student JavaScript objectives):\n//\n// For EACH button in `toggleButtons`, you need to:\n//\n// 1. Attach a \"click\" event listener.\n// 2. On click, toggle the \"active\" class on the button itself\n//    (this class already has matching CSS for the ON visual state).\n// 3. Update the button's \"aria-pressed\" attribute to match the new\n//    state (\"true\" when ON, \"false\" when OFF).\n// 4. Find the state-text label inside the same row\n//    (the sibling element with the `data-state-text` attribute, found\n//    inside the button's parent `.setting-row`) and update its text to\n//    \"On\" or \"Off\" to match the new state.\n// 5. Make sure repeated clicks correctly flip the state back and forth\n//    every time (it should not get stuck after the first click).\n//\n// See TASK.md for full requirements.\n",
  },
};

const task05: Task = {
  id: "task-05",
  title: "Student Registration Form",
  description: "Complete the Student Registration form's validation logic: implement four validator functions and wire up the submit handler using the existing showError/showSuccessState helpers.",
  track: "JavaScript",
  order: 12,
  instructions: [
    "Implement validateEmail() to require a validly formatted email address.",
    "Implement validatePhone() to require exactly 10 digits (numbers only).",
    "Implement validatePassword() to require at least 6 characters.",
    "Implement validateConfirmPassword() to require a non-empty value that exactly matches Password.",
    "Attach a submit listener that calls preventDefault() and runs all five validations on every submit.",
    "Show #formSuccess and reset the form only when every validation passes; otherwise keep it hidden.",
  ],
  topics: [{ label: "Regular Expressions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions" }, { label: "Form validation", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Student Registration</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Student Registration</h1>\n  </header>\n\n  <main class=\"container\">\n    <form id=\"registrationForm\" class=\"reg-form\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"fullName\">Full Name</label>\n        <input type=\"text\" id=\"fullName\" name=\"fullName\" placeholder=\"Enter your full name\" />\n        <span class=\"error-text\" id=\"fullNameError\"></span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email Address</label>\n        <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"e.g. name@example.com\" />\n        <span class=\"error-text\" id=\"emailError\"></span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone Number</label>\n        <input type=\"text\" id=\"phone\" name=\"phone\" placeholder=\"10-digit phone number\" />\n        <span class=\"error-text\" id=\"phoneError\"></span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"At least 6 characters\" />\n        <span class=\"error-text\" id=\"passwordError\"></span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"confirmPassword\">Confirm Password</label>\n        <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" placeholder=\"Re-enter password\" />\n        <span class=\"error-text\" id=\"confirmPasswordError\"></span>\n      </div>\n\n      <button type=\"submit\" id=\"submitBtn\" class=\"btn btn-primary\">Register</button>\n\n      <p id=\"formSuccess\" class=\"success-text hidden\">Registration successful!</p>\n    </form>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 480px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.reg-form {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.form-group {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-group label {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.form-group input {\n  padding: 10px 12px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 14px;\n}\n\n.form-group input:focus {\n  outline: none;\n  border-color: #2f6fed;\n}\n\n/* Applied via JavaScript when a field fails validation */\n.form-group input.error {\n  border-color: #d64545;\n  background-color: #fdf1f1;\n}\n\n/* Applied via JavaScript when a field passes validation */\n.form-group input.success {\n  border-color: #2f9e44;\n}\n\n.error-text {\n  display: block;\n  min-height: 16px;\n  font-size: 12px;\n  color: #d64545;\n}\n\n.success-text {\n  margin-top: 14px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  background-color: #d4f4dd;\n  color: #146c2e;\n  font-size: 14px;\n  text-align: center;\n}\n\n.success-text.hidden {\n  display: none;\n}\n\n.btn {\n  padding: 10px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #2f6fed;\n  color: #fff;\n  width: 100%;\n  margin-top: 6px;\n}\n\n.btn-primary:hover {\n  background-color: #2558c0;\n}\n",
    "script.js": "// Student Registration - script.js\n//\n// Some helper functions and one example validation are already implemented.\n// Read TASK.md for the exact objectives you must complete.\n\nconst form = document.getElementById(\"registrationForm\");\n\nconst fullNameInput = document.getElementById(\"fullName\");\nconst emailInput = document.getElementById(\"email\");\nconst phoneInput = document.getElementById(\"phone\");\nconst passwordInput = document.getElementById(\"password\");\nconst confirmPasswordInput = document.getElementById(\"confirmPassword\");\n\nconst formSuccess = document.getElementById(\"formSuccess\");\n\n// --- Helper functions (already implemented, you may reuse these) ---\n\nfunction showError(inputEl, errorEl, message) {\n  inputEl.classList.add(\"error\");\n  inputEl.classList.remove(\"success\");\n  errorEl.textContent = message;\n}\n\nfunction showSuccessState(inputEl, errorEl) {\n  inputEl.classList.add(\"success\");\n  inputEl.classList.remove(\"error\");\n  errorEl.textContent = \"\";\n}\n\n// --- Example: Full Name validation (already implemented) ---\n\nfunction validateFullName() {\n  const errorEl = document.getElementById(\"fullNameError\");\n  const value = fullNameInput.value.trim();\n\n  if (value === \"\") {\n    showError(fullNameInput, errorEl, \"Full name is required.\");\n    return false;\n  }\n\n  showSuccessState(fullNameInput, errorEl);\n  return true;\n}\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Implement `validateEmail()`:\n//    - Get the value of `emailInput`.\n//    - Check it matches a standard email format (e.g. name@domain.com).\n//    - If invalid or empty, call showError(emailInput, <its error span>,\n//      \"Please enter a valid email address.\") and return false.\n//    - If valid, call showSuccessState(...) and return true.\n//\n// 2. Implement `validatePhone()`:\n//    - The phone number must contain exactly 10 digits (numbers only).\n//    - If invalid, show an appropriate error message and return false.\n//    - If valid, show success state and return true.\n//\n// 3. Implement `validatePassword()`:\n//    - The password must be at least 6 characters long.\n//    - If invalid, show an appropriate error message and return false.\n//    - If valid, show success state and return true.\n//\n// 4. Implement `validateConfirmPassword()`:\n//    - The value must be non-empty AND match the value of `passwordInput`.\n//    - If invalid, show an appropriate error message and return false.\n//    - If valid, show success state and return true.\n//\n// 5. Attach a \"submit\" event listener to `form`:\n//    - Call event.preventDefault().\n//    - Run ALL FIVE validation functions (name, email, phone, password,\n//      confirm password) - do not short-circuit, run every one so every\n//      field shows its own error state.\n//    - If every validation function returns true, show the\n//      `formSuccess` message (remove the \"hidden\" class) and reset the form.\n//    - If any validation fails, keep `formSuccess` hidden.\n//\n// See TASK.md for full requirements.\n",
  },
};

const task06: Task = {
  id: "task-06",
  title: "Responsive Navbar",
  description: "Make the Career Portal navbar collapse into a working hamburger menu on small screens, using a CSS media query and a JavaScript click handler.",
  track: "CSS",
  order: 3,
  instructions: [
    "Add a max-width: 768px media query in style.css that makes .hamburger-btn visible.",
    "In that media query, hide .nav-links by default and stack its items vertically (column direction) when visible.",
    "Add a .nav-links.open rule that reveals the links full-width below the navbar with a background color matching the navbar.",
    "Attach a click listener to #hamburgerBtn that toggles the \"open\" class on #navLinks.",
    "Update #hamburgerBtn's aria-expanded attribute to \"true\" when open and \"false\" when closed.",
    "Ensure clicking the hamburger again closes the menu, and the desktop layout above 768px stays unaffected.",
  ],
  topics: [{ label: "Media Queries", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries" }, { label: "classList.toggle", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Career Portal</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <nav class=\"navbar\">\n    <div class=\"navbar-brand\">Career Portal</div>\n\n    <button id=\"hamburgerBtn\" class=\"hamburger-btn\" type=\"button\" aria-label=\"Toggle navigation\" aria-expanded=\"false\">\n      <span class=\"bar\"></span>\n      <span class=\"bar\"></span>\n      <span class=\"bar\"></span>\n    </button>\n\n    <ul id=\"navLinks\" class=\"nav-links\">\n      <li><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">Jobs</a></li>\n      <li><a href=\"#\">Companies</a></li>\n      <li><a href=\"#\">Resources</a></li>\n      <li><a href=\"#\">Login</a></li>\n    </ul>\n  </nav>\n\n  <main class=\"page-content\">\n    <h1>Find Your Next Opportunity</h1>\n    <p>\n      Resize the browser window to a narrow width to see the hamburger menu\n      appear. On desktop widths, all navigation links are shown directly.\n    </p>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 14px 32px;\n  position: relative;\n}\n\n.navbar-brand {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.nav-links {\n  list-style: none;\n  display: flex;\n  gap: 28px;\n  margin: 0;\n  padding: 0;\n}\n\n.nav-links a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 15px;\n}\n\n.nav-links a:hover {\n  text-decoration: underline;\n}\n\n/* Hamburger button - hidden on desktop by default */\n.hamburger-btn {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.hamburger-btn .bar {\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 2px;\n}\n\n.page-content {\n  max-width: 640px;\n  margin: 48px auto;\n  padding: 0 24px;\n  text-align: center;\n}\n\n.page-content p {\n  color: #555;\n  line-height: 1.6;\n}\n\n/* ============================================\n   TODO (Student CSS objective):\n\n   Add a media query for small screens (max-width: 768px) that:\n\n   1. Shows the hamburger button (`.hamburger-btn`) \u2014 it is hidden by\n      default above.\n   2. Changes `.nav-links` so it is hidden by default on small screens,\n      and stacks vertically (column direction) when it is visible.\n   3. Adds styling for a `.nav-links.open` state so that when JavaScript\n      adds the \"open\" class, the links become visible again, positioned\n      below the navbar (e.g. using `position: absolute` under the navbar,\n      full width, with a background color matching the navbar).\n\n   See TASK.md for exact requirements.\n   ============================================ */\n",
    "script.js": "// Career Portal - script.js\n//\n// DOM references are already set up for you below.\n// Read TASK.md for the exact objectives you must complete.\n\nconst hamburgerBtn = document.getElementById(\"hamburgerBtn\");\nconst navLinks = document.getElementById(\"navLinks\");\n\nconsole.log(\"Career Portal navbar script loaded.\");\n\n// TODO (Student JavaScript objective):\n//\n// 1. Attach a \"click\" event listener to `hamburgerBtn`.\n// 2. On each click, toggle the \"open\" class on `navLinks` (this class\n//    has matching CSS you will add for the mobile expanded state).\n// 3. Update `hamburgerBtn`'s \"aria-expanded\" attribute to match the new\n//    state (\"true\" when the menu is open, \"false\" when closed).\n// 4. Clicking the hamburger again (while the menu is open) must close it.\n//\n// See TASK.md for full requirements.\n",
  },
};

const day1Task01: Task = {
  id: "day1-01",
  title: "HTML Basics",
  description: "Practice editing basic HTML by making small text changes to the Student Portal page.",
  track: "HTML",
  order: 1,
  instructions: [
    "Change the main heading (\"Student Portal\") to a different heading of your choice.",
    "Change the welcome message paragraph to a different sentence of your choice.",
    "Add a new paragraph below the student details showing a preparation status, e.g. \"Preparation Status: In Progress\".",
    "Change the button text from \"View Profile\" to \"See My Profile\".",
  ],
  topics: [{ label: "HTML Elements", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started" }, { label: "Heading Elements", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Student Portal</title>\n</head>\n<body style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 0 16px;\">\n\n  <h1>Student Portal</h1>\n\n  <p>Welcome to the placement preparation program.</p>\n\n  <h2>Student Details</h2>\n\n  <p>Name: Ananya</p>\n  <p>Roll Number: 24AG1A05T2</p>\n  <p>Status: Active</p>\n\n  <button>View Profile</button>\n\n</body>\n</html>\n",
    "style.css": "/* This exercise does not require any CSS. */\n",
    "script.js": "// This exercise does not require any JavaScript.\n",
  },
};

const day1Task02: Task = {
  id: "day1-02",
  title: "HTML id & class Attributes",
  description: "Practice adding id and class attributes to existing HTML elements so they can be targeted individually or as a group.",
  track: "HTML",
  order: 2,
  instructions: [
    "Add id=\"studentStatus\" to the <span> that contains \"Active\".",
    "Give both buttons a shared class=\"profile-btn\".",
    "Give the \"View Profile\" button its own id=\"viewProfileBtn\" (in addition to the shared class).",
    "Give the \"Edit Profile\" button its own id=\"editProfileBtn\".",
  ],
  topics: [{ label: "id attribute", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id" }, { label: "class attribute", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Student Profile</title>\n</head>\n<body style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 0 16px;\">\n\n  <h1>Student Profile</h1>\n\n  <p>Name: Ananya</p>\n  <p>Status: <span id = \"sas\">Active</span></p>\n\n  <button >View Profile</button>\n  <button>Edit Profile</button>\n\n</body>\n</html>\n",
    "style.css": "/* This exercise does not require any CSS. */\n",
    "script.js": "// This exercise does not require any JavaScript.\n",
  },
};

const day1Task03: Task = {
  id: "day1-03",
  title: "CSS Basics",
  description: "Practice basic CSS properties by styling the Student Card page using style.css.",
  track: "CSS",
  order: 1,
  instructions: [
    "Change the colour of the <h1> heading text.",
    "Give the card (.card) a background colour.",
    "Add padding inside the card so the text isn't touching its edges.",
    "Add a border around the card.",
    "Round the corners of the card.",
    "Add margin spacing between the paragraphs inside the card.",
    "Style the button with a background colour and a text colour.",
  ],
  topics: [{ label: "CSS Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS" }, { label: "Box Model", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Student Card</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n\n  <h1>Student Card</h1>\n\n  <div class=\"card\">\n    <p>Name: Ananya</p>\n    <p>Roll Number: 24AG1A05T2</p>\n    <p>Status: Active</p>\n    <button>View Profile</button>\n  </div>\n\n</body>\n</html>\n",
    "style.css": "body {\n  font-family: Arial, sans-serif;\n  max-width: 600px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n/* TODO (Student CSS objectives):\n   Style the elements below according to TASK.md.\n   Add your rules underneath this comment. */\n",
    "script.js": "// This exercise does not require any JavaScript.\n",
  },
};

const day1Task04: Task = {
  id: "day1-04",
  title: "CSS Selectors",
  description: "Practice the three most common CSS selector types: the element selector, the ID selector, and the class selector.",
  track: "CSS",
  order: 2,
  instructions: [
    "Style all paragraphs on the page using an element selector, e.g. p { ... }.",
    "Style only the status (<span id=\"status\">) using its ID selector - this must not affect the paragraphs.",
    "Style both buttons using their shared class selector (.primary-btn).",
    "Make the status visually distinct (different background colour, bold text, or padding) so it stands out.",
  ],
  topics: [{ label: "CSS Selectors", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>CSS Selectors Practice</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n\n  <h1>Student Dashboard</h1>\n\n  <p>This is the first paragraph on the page.</p>\n  <p>This is the second paragraph on the page.</p>\n\n  <p>Status: <span id=\"status\">Active</span></p>\n\n  <button class=\"primary-btn\">Save</button>\n  <button class=\"primary-btn\">Cancel</button>\n\n</body>\n</html>\n",
    "style.css": "body {\n  font-family: Arial, sans-serif;\n  max-width: 600px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n/* TODO (Student CSS objectives):\n   Add your selector rules below, according to TASK.md.\n   You will need an element selector, an ID selector, and a class selector. */\n",
    "script.js": "// This exercise does not require any JavaScript.\n",
  },
};

const day1Task05: Task = {
  id: "day1-05",
  title: "Select an Element",
  description: "Learn how to select an HTML element from JavaScript and store it in a variable.",
  track: "JavaScript",
  order: 1,
  instructions: [
    "In script.js, select the element with id=\"message\".",
    "Store the selected element in a variable named message.",
  ],
  topics: [{ label: "getElementById", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById" }, { label: "querySelector", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Select an Element</title>\n</head>\n<body style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 0 16px;\">\n\n  <h2 id=\"message\">Hello</h2>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "/* This exercise does not require any CSS. */\n",
    "script.js": "// Task: select the element with id \"message\" and store it in a\n// variable called `message`. See TASK.md for details.\n",
  },
};

const day1Task06: Task = {
  id: "day1-06",
  title: "Change Text From JavaScript",
  description: "Learn how to select an element and change the text it displays using JavaScript.",
  track: "JavaScript",
  order: 2,
  instructions: [
    "Select the element with id=\"message\".",
    "Change its displayed text so the page shows exactly: \"Welcome to Web Development Practice\".",
  ],
  topics: [{ label: "textContent", url: "https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Change Text</title>\n</head>\n<body style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 0 16px;\">\n\n  <h2 id=\"message\">Old Message</h2>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "/* This exercise does not require any CSS. */\n",
    "script.js": "// Task: select the \"message\" element and change its displayed text.\n// See TASK.md for details.\n",
  },
};

const day1Task07: Task = {
  id: "day1-07",
  title: "Responding to Click Events",
  description: "Learn how to respond to a button click using an event listener.",
  track: "JavaScript",
  order: 3,
  instructions: [
    "Select the button with id=\"btn\" and the message element with id=\"message\".",
    "Add a click event listener to the button.",
    "When the button is clicked, change the message text from \"Waiting...\" to \"Button clicked!\"",
  ],
  topics: [{ label: "addEventListener", url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Click Event</title>\n</head>\n<body style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 0 16px;\">\n\n  <h2>Click the button</h2>\n\n  <button id=\"btn\">Click Me</button>\n\n  <p id=\"message\">Waiting...</p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "/* This exercise does not require any CSS. */\n",
    "script.js": "// Task: when the button is clicked, change the message text.\n// See TASK.md for details.\n",
  },
};

const day1Task08: Task = {
  id: "day1-08",
  title: "Showing a Popup",
  description: "Learn how to show a popup message to the user in response to a button click.",
  track: "JavaScript",
  order: 4,
  instructions: [
    "Select the \"Submit\" button (id=\"submitBtn\").",
    "Add a click event listener to it.",
    "When clicked, display a popup showing exactly: \"Registration successful!\"",
  ],
  topics: [{ label: "Window.alert()", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/alert" }, { label: "classList", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Course Registration</title>\n</head>\n<body style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 0 16px;\">\n\n  <h2>Course Registration</h2>\n\n  <p>\n    Name: <input type=\"text\" id=\"nameInput\" />\n  </p>\n\n  <button id=\"submitBtn\">Submit</button>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "/* This exercise does not require any CSS. */\n",
    "script.js": "// Task: when Submit is clicked, show a popup message.\n// See TASK.md for details.\n",
  },
};

const day1Task09: Task = {
  id: "day1-09",
  title: "Reading Input & Conditions",
  description: "Learn how to read the value typed into an input field, and use if / else to make a decision based on it.",
  track: "JavaScript",
  order: 5,
  instructions: [
    "Select the name input (id=\"nameInput\") and the \"Register\" button (id=\"registerBtn\").",
    "Add a click event listener to the Register button.",
    "When clicked, read the current value typed into the name input.",
    "If the value is empty, show a popup: \"Please enter your name.\"",
    "Otherwise, show a popup: \"Registration successful!\"",
  ],
  topics: [{ label: "HTMLInputElement", url: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement" }, { label: "if...else", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Course Registration</title>\n</head>\n<body style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 0 16px;\">\n\n  <h2>Course Registration</h2>\n\n  <p>\n    Name: <input type=\"text\" id=\"nameInput\" />\n  </p>\n\n  <button id=\"registerBtn\">Register</button>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "/* This exercise does not require any CSS. */\n",
    "script.js": "// Task: read the name input's value and show a different popup\n// depending on whether it is empty. See TASK.md for details.\n",
  },
};

const day1Task10: Task = {
  id: "day1-10",
  title: "Show / Hide Elements",
  description: "Learn how to hide and show an element using JavaScript by changing its style.display property.",
  track: "JavaScript",
  order: 6,
  instructions: [
    "Select the message (id=\"message\") and the \"Hide Message\" button (id=\"hideBtn\").",
    "Add a click event listener to the Hide Message button that hides the message.",
    "(Optional challenge) Select the \"Show Message\" button (id=\"showBtn\") and add a listener that makes the message visible again.",
  ],
  topics: [{ label: "classList", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" }, { label: "CSS display", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Show / Hide</title>\n</head>\n<body style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 0 16px;\">\n\n  <div id=\"message\">\n    <h2>Important Message</h2>\n    <p>This message should be hidden when the button is clicked.</p>\n  </div>\n\n  <button id=\"hideBtn\">Hide Message</button>\n  <button id=\"showBtn\">Show Message</button>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "/* This exercise does not require any CSS. */\n",
    "script.js": "// Task: hide the message when \"Hide Message\" is clicked.\n// Optional challenge: show it again when \"Show Message\" is clicked.\n// See TASK.md for details.\n",
  },
};

const day1Task11: Task = {
  id: "day1-11",
  title: "HTML + CSS Mini Project",
  description: "Combine everything learned about HTML attributes and CSS styling to turn the plain Student Profile Card into a properly styled card.",
  track: "HTML + CSS",
  order: 1,
  instructions: [
    "Add id=\"studentStatus\" to the status <span>.",
    "Add class=\"profile-btn\" to the button.",
    "Give the card (.card) a visible border, padding, and rounded corners.",
    "Give the status (#studentStatus) a background colour so it stands out.",
    "Style the button (.profile-btn) with a background colour and text colour.",
    "Add appropriate spacing (margin) between the elements inside the card.",
  ],
  topics: [{ label: "Flexbox", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" }, { label: "Box Model", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Student Profile Card</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n\n  <h1>Student Profile Card</h1>\n\n  <div class=\"card\">\n    <h2>Student Profile</h2>\n    <p>Name: Ananya</p>\n    <p>Roll No: 24AG1A05T2</p>\n    <p>Status: <span>Active</span></p>\n    <button>View Profile</button>\n  </div>\n\n</body>\n</html>\n",
    "style.css": "body {\n  font-family: Arial, sans-serif;\n  max-width: 600px;\n  margin: 40px auto;\n  padding: 0 16px;\n  background-color: #f4f6f9;\n}\n\nh1 {\n  color: #1f2a44;\n}\n\n.card {\n  background-color: #fff;\n}\n\n.card h2 {\n  margin-top: 0;\n}\n\n/* TODO (Student HTML + CSS objectives):\n   1. Add id=\"studentStatus\" to the status <span> in index.html.\n   2. Add class=\"profile-btn\" to the button in index.html.\n   3. Style the .card below: border, padding, rounded corners, spacing.\n   4. Style #studentStatus with a background colour.\n   5. Style .profile-btn.\n   See TASK.md for exact requirements. */\n",
    "script.js": "// This exercise does not require any JavaScript.\n",
  },
};

const day1Task12: Task = {
  id: "day1-12",
  title: "Full Project: Course Registration",
  description: "The final Day 1 exercise: combine HTML attributes, CSS styling, and JavaScript selection, events, conditions, and popups into one working Course Registration form.",
  track: "Full Project",
  order: 1,
  instructions: [
    "Give the name input id=\"studentName\", the status span id=\"status\", and the button id=\"registerBtn\".",
    "Style the status (#status) so it stands out visually (background colour and padding).",
    "Style the button (#registerBtn) with a background colour and text colour, and add spacing so the form doesn't look cramped.",
    "Select the name input, status element, and register button in script.js.",
    "Add a click event listener to the register button.",
    "If the name input is empty when clicked, show a popup: \"Please enter your name.\"",
    "Otherwise, change the status text to \"Registered\" and show a popup: \"Registration successful!\"",
  ],
  topics: [{ label: "Forms", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms" }, { label: "Flexbox", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Course Registration</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n\n  <div class=\"card\">\n    <h1>Course Registration</h1>\n\n    <p class=\"field-label\">Name:</p>\n    <input type=\"text\" />\n\n    <p class=\"field-label\">Course:</p>\n    <input type=\"text\" />\n\n    <p class=\"field-label\">Status: <span>Not Registered</span></p>\n\n    <button>REGISTER</button>\n  </div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "body {\n  font-family: Arial, sans-serif;\n  max-width: 600px;\n  margin: 40px auto;\n  padding: 0 16px;\n  background-color: #f4f6f9;\n}\n\n.card {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 24px;\n}\n\n.field-label {\n  font-weight: bold;\n  margin-bottom: 4px;\n}\n\ninput {\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 16px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  box-sizing: border-box;\n}\n\n/* TODO (Student CSS objectives):\n   4. Style the status span so it stands out.\n   5. Style the button.\n   6. Add appropriate spacing.\n   See TASK.md for exact requirements. */\n",
    "script.js": "// Task: wire up the Course Registration form.\n// See TASK.md for details.\n",
  },
};

const day3Task03: Task = {
  id: "day3-03",
  title: "FAQ Accordion",
  description: "Make each FAQ question expand and collapse its own answer independently when clicked.",
  track: "JavaScript",
  order: 10,
  instructions: [
    "Clicking a question reveals its answer.",
    "Clicking the same question again hides the answer.",
    "Each question/answer pair works independently of the others.",
    "The clicked question's arrow icon should rotate to reflect the open/closed state (the \"active\" class already has matching CSS for this).",
    "Modify the existing HTML/CSS only if needed - this task is primarily about JavaScript.",
  ],
  topics: [{ label: "classList.toggle", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>FAQ</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Frequently Asked Questions</h1>\n  </header>\n\n  <main class=\"container\">\n    <ul class=\"faq-list\">\n      <li class=\"faq-item\">\n        <button class=\"faq-question\" type=\"button\">\n          <span>What is the placement process?</span>\n          <span class=\"faq-icon\">&#9660;</span>\n        </button>\n        <p class=\"faq-answer hidden\">\n          Students go through aptitude, coding, and technical interview rounds.\n        </p>\n      </li>\n\n      <li class=\"faq-item\">\n        <button class=\"faq-question\" type=\"button\">\n          <span>What programming languages are tested?</span>\n          <span class=\"faq-icon\">&#9660;</span>\n        </button>\n        <p class=\"faq-answer hidden\">\n          Most assessments accept Java, Python, C++, or JavaScript.\n        </p>\n      </li>\n\n      <li class=\"faq-item\">\n        <button class=\"faq-question\" type=\"button\">\n          <span>How should I prepare for interviews?</span>\n          <span class=\"faq-icon\">&#9660;</span>\n        </button>\n        <p class=\"faq-answer hidden\">\n          Practice data structures, revise your projects, and rehearse common HR questions.\n        </p>\n      </li>\n    </ul>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 560px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.faq-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n\n.faq-item {\n  border-bottom: 1px solid #eee;\n}\n\n.faq-item:last-child {\n  border-bottom: none;\n}\n\n.faq-question {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: none;\n  border: none;\n  padding: 16px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  cursor: pointer;\n  color: #222;\n}\n\n.faq-question:hover {\n  background-color: #f9fafb;\n}\n\n.faq-icon {\n  transition: transform 0.2s ease;\n  color: #2f6fed;\n}\n\n.faq-question.active .faq-icon {\n  transform: rotate(180deg);\n}\n\n.faq-answer {\n  padding: 0 20px 16px;\n  margin: 0;\n  color: #555;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n.faq-answer.hidden {\n  display: none;\n}\n",
    "script.js": "// FAQ Accordion - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst faqButtons = document.querySelectorAll(\".faq-question\");\n\nconsole.log(`Found ${faqButtons.length} FAQ questions.`);\n\n// TODO (Student JavaScript objectives):\n//\n// For EACH button in `faqButtons`, you need to:\n//\n// 1. Attach a \"click\" event listener.\n// 2. Find the answer element for that question (the sibling element with\n//    class \"faq-answer\", inside the same .faq-item as the button).\n// 3. Toggle the \"hidden\" class on that answer element, so clicking shows\n//    it if it was hidden, and hides it again if it was visible.\n// 4. Toggle the \"active\" class on the button itself, so the arrow icon\n//    rotates to reflect the open/closed state (CSS for this already\n//    exists).\n// 5. Make sure each question works independently - opening one should\n//    not affect the others.\n//\n// See TASK.md for full requirements.\n",
  },
};

const day3Task04: Task = {
  id: "day3-04",
  title: "Live Character Counter",
  description: "Show a live character count as the user types into a feedback box, with a visual warning near the limit.",
  track: "JavaScript",
  order: 9,
  instructions: [
    "Select the feedback textarea (id=\"feedbackInput\") and the counter display (id=\"charCount\").",
    "Listen for the \"input\" event on the textarea.",
    "On every keystroke, update the counter to show the current length out of the 100 character limit.",
    "Add the \"warning\" class to the counter once the length reaches 90 or more (CSS for this class already exists). Remove it again if the length drops back below 90.",
  ],
  topics: [{ label: "input event", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event" }, { label: "maxlength", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Feedback</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Feedback</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"card\">\n      <label for=\"feedbackInput\">Your feedback</label>\n      <textarea id=\"feedbackInput\" rows=\"4\" maxlength=\"100\" placeholder=\"Type your feedback...\"></textarea>\n      <p class=\"char-count\">Characters: <span id=\"charCount\">0</span> / 100</p>\n    </div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 480px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\nlabel {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n\ntextarea {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: inherit;\n  resize: vertical;\n}\n\ntextarea:focus {\n  outline: none;\n  border-color: #2f6fed;\n}\n\n.char-count {\n  margin: 10px 0 0;\n  font-size: 13px;\n  color: #888;\n}\n\n.char-count.warning {\n  color: #d64545;\n  font-weight: 700;\n}\n",
    "script.js": "// Live Character Counter - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst feedbackInput = document.getElementById(\"feedbackInput\");\nconst charCount = document.getElementById(\"charCount\");\n\nconst CHARACTER_LIMIT = 100;\nconst WARNING_THRESHOLD = 90;\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Attach an \"input\" event listener to `feedbackInput`.\n// 2. On every input, read the current length of the textarea's value.\n// 3. Update `charCount`'s text to show that length.\n// 4. When the length reaches WARNING_THRESHOLD or more, add a \"warning\"\n//    class to `charCount` (CSS for this class already exists). Remove it\n//    again if the length drops back below the threshold.\n//\n// See TASK.md for full requirements.\n",
  },
};

const day5FinalSimulation: Task = {
  id: "day5-final-simulation",
  title: "Employee Leave Request",
  description: "Final Day 5 simulation: complete an unfamiliar Employee Leave Request form end-to-end, combining validation, DOM updates, and a success popup.",
  track: "Full Project",
  order: 3,
  instructions: [
    "The status <span> is missing an id - find it and give it an appropriate id so it can be targeted from CSS/JavaScript.",
    "Style the status text so it visually stands out once it changes (e.g. background colour and padding).",
    "Select the employee name input, leave type select, and reason textarea in script.js.",
    "When Submit is clicked, read all three field values.",
    "If the employee name, leave type, or reason is empty, show an appropriate error and do not submit.",
    "On a valid submission: prevent the page reload, update the status text (e.g. to \"Submitted\"), show a success popup, and clear the form fields.",
  ],
  topics: [{ label: "Forms", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms" }, { label: "Date object", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Employee Leave Request</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Employee Leave Request</h1>\n  </header>\n\n  <main class=\"container\">\n    <form id=\"leaveForm\" class=\"card\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"employeeName\">Employee Name</label>\n        <input type=\"text\" id=\"employeeName\" placeholder=\"Enter your name\" />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"leaveType\">Leave Type</label>\n        <select id=\"leaveType\">\n          <option value=\"\">-- Select --</option>\n          <option value=\"sick\">Sick Leave</option>\n          <option value=\"casual\">Casual Leave</option>\n          <option value=\"earned\">Earned Leave</option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"reason\">Reason</label>\n        <textarea id=\"reason\" rows=\"3\" placeholder=\"Reason for leave\"></textarea>\n      </div>\n\n      <p class=\"status-line\">Status: <span class=\"status-text\">Not Submitted</span></p>\n\n      <button type=\"submit\" class=\"btn btn-primary\">Submit Request</button>\n    </form>\n  </main>\n\n  <!-- Success popup -->\n  <div id=\"successModal\" class=\"modal-overlay hidden\">\n    <div class=\"modal-box\">\n      <h2>Request Submitted</h2>\n      <p id=\"modalMessage\">Your leave request has been submitted successfully.</p>\n      <button id=\"closeModalBtn\" class=\"btn btn-secondary\">Close</button>\n    </div>\n  </div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 480px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.form-group {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-group label {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: inherit;\n}\n\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #2f6fed;\n}\n\n.status-line {\n  font-size: 14px;\n  margin: 8px 0 18px;\n}\n\n/* TODO (Student CSS objective):\n   Style the status text once you have added an id to the status <span>\n   in index.html, so it visually stands out (e.g. background colour and\n   padding). See TASK.md for exact requirements. */\n\n.btn {\n  padding: 10px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #2f6fed;\n  color: #fff;\n  width: 100%;\n}\n\n.btn-primary:hover {\n  background-color: #2558c0;\n}\n\n.btn-secondary {\n  background-color: #e2e6ed;\n  color: #222;\n  margin-top: 16px;\n}\n\n.btn-secondary:hover {\n  background-color: #cfd5df;\n}\n\n.error-text {\n  display: block;\n  margin-top: -10px;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #d64545;\n}\n\n/* Modal */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-overlay.hidden {\n  display: none;\n}\n\n.modal-box {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 28px;\n  max-width: 360px;\n  width: 90%;\n  text-align: center;\n}\n\n.modal-box h2 {\n  margin-top: 0;\n  color: #146c2e;\n}\n",
    "script.js": "// Employee Leave Request - script.js\n//\n// This is the Day 5 simulation. Read the task requirement carefully,\n// find the relevant elements yourself, and implement the missing\n// behaviour. See TASK.md for the exact objectives.\n\nconst leaveForm = document.getElementById(\"leaveForm\");\nconst employeeNameInput = document.getElementById(\"employeeName\");\nconst leaveTypeSelect = document.getElementById(\"leaveType\");\nconst reasonInput = document.getElementById(\"reason\");\n\nconst statusText = document.querySelector(\".status-text\");\n\nconst successModal = document.getElementById(\"successModal\");\nconst closeModalBtn = document.getElementById(\"closeModalBtn\");\n\n// NOTE: the status <span> in index.html is missing an id - you will\n// need to add one before you can reliably select and update it from\n// here (or from CSS). See TASK.md.\n\n// TODO: implement the full submit flow -\n// - listen for \"submit\" on leaveForm and prevent the default reload\n// - validate that name, leave type, and reason are all filled in\n// - show an error and stop if anything is missing\n// - otherwise: update the status text, show the success modal, and\n//   reset the form fields\n//\n// TODO: attach a \"click\" listener to closeModalBtn that hides the modal\n// again.\n",
  },
};

const miscTask01: Task = {
  id: "misc-01",
  title: "Random Background Color",
  description: "Clicking a button changes the page background to a random colour.",
  order: 1,
  bank: true,
  instructions: [
    "Select the button (id=\"randomBtn\").",
    "Add a click event listener to it.",
    "On each click, generate a random colour (e.g. a random hex string or an rgb(...) value).",
    "Set the page's background colour to that random colour.",
  ],
  topics: [{ label: "Math.random()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Random Background</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <main class=\"center\">\n    <h1>Click to change the background</h1>\n    <button id=\"randomBtn\" class=\"btn\">Change Background</button>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  transition: background-color 0.2s ease;\n}\n\n.center {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  text-align: center;\n}\n\n.btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 6px;\n  background-color: #1f2a44;\n  color: #fff;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: #2f6fed;\n}\n",
    "script.js": "// Random Background Color - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst randomBtn = document.getElementById(\"randomBtn\");\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Add a click event listener to `randomBtn`.\n// 2. On each click, generate a random colour. One approach:\n//      const randomColor = \"#\" + Math.floor(Math.random() * 16777215).toString(16);\n// 3. Set document.body.style.backgroundColor to that random colour.\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask02: Task = {
  id: "misc-02",
  title: "Image Showcase",
  description: "Click a thumbnail swatch to display it, enlarged, in the main preview area.",
  order: 2,
  bank: true,
  instructions: [
    "Select all thumbnail swatches (class=\"thumb\") and the main preview element (id=\"mainPreview\").",
    "Add a click listener to each thumbnail.",
    "When a thumbnail is clicked, read its color from its data-color attribute (thumb.dataset.color) and apply that same colour as the main preview's background.",
    "Also update the preview's caption text (id=\"previewCaption\") to match the clicked thumbnail's label (data-label attribute).",
  ],
  topics: [{ label: "addEventListener", url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" }, { label: "src attribute", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Image Showcase</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Image Showcase</h1>\n  </header>\n\n  <main class=\"container\">\n    <div id=\"mainPreview\" class=\"preview\"></div>\n    <p id=\"previewCaption\" class=\"caption\">Select a thumbnail below</p>\n\n    <div class=\"thumbs\">\n      <div class=\"thumb\" data-color=\"#e63946\" data-label=\"Sunset Red\" style=\"background-color: #e63946;\"></div>\n      <div class=\"thumb\" data-color=\"#457b9d\" data-label=\"Ocean Blue\" style=\"background-color: #457b9d;\"></div>\n      <div class=\"thumb\" data-color=\"#2a9d8f\" data-label=\"Forest Teal\" style=\"background-color: #2a9d8f;\"></div>\n      <div class=\"thumb\" data-color=\"#e9c46a\" data-label=\"Desert Gold\" style=\"background-color: #e9c46a;\"></div>\n    </div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 480px;\n  margin: 40px auto;\n  padding: 0 16px;\n  text-align: center;\n}\n\n.preview {\n  width: 100%;\n  height: 220px;\n  border-radius: 10px;\n  background-color: #ddd;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: background-color 0.2s ease;\n}\n\n.caption {\n  margin: 12px 0 24px;\n  color: #555;\n  font-size: 14px;\n}\n\n.thumbs {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n\n.thumb {\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n\n.thumb:hover {\n  border-color: #1f2a44;\n}\n",
    "script.js": "// Image Showcase - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst thumbs = document.querySelectorAll(\".thumb\");\nconst mainPreview = document.getElementById(\"mainPreview\");\nconst previewCaption = document.getElementById(\"previewCaption\");\n\nconsole.log(`Found ${thumbs.length} thumbnails.`);\n\n// TODO (Student JavaScript objectives):\n//\n// For EACH thumbnail in `thumbs`, you need to:\n//\n// 1. Attach a \"click\" event listener.\n// 2. Read that thumbnail's colour from its data-color attribute\n//    (thumb.dataset.color) and its label from data-label.\n// 3. Set mainPreview's background colour to that colour.\n// 4. Set previewCaption's text to that label.\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask03: Task = {
  id: "misc-03",
  title: "Greeting Card Editor",
  description: "Change greeting-card text, text colour, and font size using the provided controls.",
  order: 3,
  bank: true,
  instructions: [
    "Select the greeting text element (id=\"greetingText\").",
    "Select the text input (id=\"textInput\"), colour picker (id=\"colorInput\"), and font-size slider (id=\"sizeInput\").",
    "When the text input changes, update the greeting's displayed text.",
    "When the colour input changes, update the greeting's text colour.",
    "When the size input changes, update the greeting's font size (in pixels).",
  ],
  topics: [{ label: "Template literals", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Greeting Card Editor</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Greeting Card Editor</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"card\">\n      <p id=\"greetingText\">Happy Learning!</p>\n    </div>\n\n    <div class=\"controls\">\n      <div class=\"control-group\">\n        <label for=\"textInput\">Text</label>\n        <input type=\"text\" id=\"textInput\" value=\"Happy Learning!\" />\n      </div>\n\n      <div class=\"control-group\">\n        <label for=\"colorInput\">Colour</label>\n        <input type=\"color\" id=\"colorInput\" value=\"#1f2a44\" />\n      </div>\n\n      <div class=\"control-group\">\n        <label for=\"sizeInput\">Font Size</label>\n        <input type=\"range\" id=\"sizeInput\" min=\"14\" max=\"48\" value=\"24\" />\n      </div>\n    </div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 420px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 40px 24px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n}\n\n#greetingText {\n  margin: 0;\n  font-size: 24px;\n  color: #1f2a44;\n  transition: font-size 0.1s ease, color 0.1s ease;\n}\n\n.controls {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.control-group label {\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.control-group input[type=\"text\"] {\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 14px;\n}\n",
    "script.js": "// Greeting Card Editor - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst greetingText = document.getElementById(\"greetingText\");\nconst textInput = document.getElementById(\"textInput\");\nconst colorInput = document.getElementById(\"colorInput\");\nconst sizeInput = document.getElementById(\"sizeInput\");\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Add an \"input\" event listener to `textInput` that updates\n//    greetingText's text content to match whatever was typed.\n// 2. Add an \"input\" event listener to `colorInput` that updates\n//    greetingText's text colour (style.color) to match the picked\n//    colour.\n// 3. Add an \"input\" event listener to `sizeInput` that updates\n//    greetingText's font size (style.fontSize) to match the slider's\n//    value, in pixels (e.g. \"24px\").\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask04: Task = {
  id: "misc-04",
  title: "Modal Popup",
  description: "Open and close an HTML modal with an overlay.",
  order: 4,
  bank: true,
  instructions: [
    "Select the \"Open\" button (id=\"openModalBtn\") and the modal overlay (id=\"infoModal\").",
    "Add a click listener to the Open button that reveals the modal (remove the \"hidden\" class from the overlay).",
    "Select the close button inside the modal (id=\"closeModalBtn\") and add a click listener that hides the modal again (re-add the \"hidden\" class).",
    "Clicking the overlay background itself (outside the modal box) should also close the modal.",
  ],
  topics: [{ label: "classList", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Modal Popup</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <main class=\"center\">\n    <button id=\"openModalBtn\" class=\"btn\">More Info</button>\n  </main>\n\n  <div id=\"infoModal\" class=\"modal-overlay hidden\">\n    <div class=\"modal-box\">\n      <h2>Session Details</h2>\n      <p>The next placement prep session starts at 10:00 AM.</p>\n      <button id=\"closeModalBtn\" class=\"btn btn-secondary\">Close</button>\n    </div>\n  </div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.center {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 6px;\n  background-color: #1f2a44;\n  color: #fff;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: #2f6fed;\n}\n\n.btn-secondary {\n  background-color: #e2e6ed;\n  color: #222;\n  margin-top: 16px;\n}\n\n.btn-secondary:hover {\n  background-color: #cfd5df;\n}\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-overlay.hidden {\n  display: none;\n}\n\n.modal-box {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 28px;\n  max-width: 360px;\n  width: 90%;\n  text-align: center;\n}\n\n.modal-box h2 {\n  margin-top: 0;\n  color: #1f2a44;\n}\n",
    "script.js": "// Modal Popup - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst openModalBtn = document.getElementById(\"openModalBtn\");\nconst closeModalBtn = document.getElementById(\"closeModalBtn\");\nconst infoModal = document.getElementById(\"infoModal\");\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Add a click listener to `openModalBtn` that removes the \"hidden\"\n//    class from `infoModal`.\n// 2. Add a click listener to `closeModalBtn` that adds the \"hidden\"\n//    class back to `infoModal`.\n// 3. Add a click listener to `infoModal` itself (the overlay) that also\n//    closes the modal, but ONLY when the click target is the overlay\n//    itself, not the modal box inside it (check event.target).\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask05: Task = {
  id: "misc-05",
  title: "Password Validation Form",
  description: "Validate a password and confirm-password field, including a matching-passwords check.",
  order: 5,
  bank: true,
  instructions: [
    "Select the password (id=\"password\") and confirm password (id=\"confirmPassword\") inputs, plus the form (id=\"passwordForm\").",
    "On submit, prevent the default page reload.",
    "Check that the password is at least 6 characters - show an error beside it if not.",
    "Check that confirm password is non-empty and matches password exactly - show an error beside it if not.",
    "If both checks pass, hide any errors and show a success message.",
  ],
  topics: [{ label: "Regular Expressions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions" }, { label: "Form validation", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Set Password</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Set a Password</h1>\n  </header>\n\n  <main class=\"container\">\n    <form id=\"passwordForm\" class=\"card\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" placeholder=\"At least 6 characters\" />\n        <span class=\"error-text\" id=\"passwordError\"></span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"confirmPassword\">Confirm Password</label>\n        <input type=\"password\" id=\"confirmPassword\" placeholder=\"Re-enter password\" />\n        <span class=\"error-text\" id=\"confirmPasswordError\"></span>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\">Save Password</button>\n\n      <p id=\"formSuccess\" class=\"success-text hidden\">Password saved successfully!</p>\n    </form>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 420px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.form-group {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-group label {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.form-group input {\n  padding: 10px 12px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 14px;\n}\n\n.form-group input:focus {\n  outline: none;\n  border-color: #2f6fed;\n}\n\n.form-group input.error {\n  border-color: #d64545;\n  background-color: #fdf1f1;\n}\n\n.form-group input.success {\n  border-color: #2f9e44;\n}\n\n.error-text {\n  display: block;\n  min-height: 16px;\n  font-size: 12px;\n  color: #d64545;\n}\n\n.success-text {\n  margin-top: 14px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  background-color: #d4f4dd;\n  color: #146c2e;\n  font-size: 14px;\n  text-align: center;\n}\n\n.success-text.hidden {\n  display: none;\n}\n\n.btn {\n  padding: 10px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #2f6fed;\n  color: #fff;\n  width: 100%;\n}\n\n.btn-primary:hover {\n  background-color: #2558c0;\n}\n",
    "script.js": "// Password Validation Form - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst passwordForm = document.getElementById(\"passwordForm\");\nconst passwordInput = document.getElementById(\"password\");\nconst confirmPasswordInput = document.getElementById(\"confirmPassword\");\nconst formSuccess = document.getElementById(\"formSuccess\");\n\nfunction showError(inputEl, errorEl, message) {\n  inputEl.classList.add(\"error\");\n  inputEl.classList.remove(\"success\");\n  errorEl.textContent = message;\n}\n\nfunction showSuccessState(inputEl, errorEl) {\n  inputEl.classList.add(\"success\");\n  inputEl.classList.remove(\"error\");\n  errorEl.textContent = \"\";\n}\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Attach a \"submit\" event listener to `passwordForm`.\n// 2. Call event.preventDefault() to stop the page from reloading.\n// 3. Check that passwordInput's value is at least 6 characters long.\n//    If not, call showError(passwordInput, <its error span>, \"...\")\n//    and keep formSuccess hidden.\n// 4. Check that confirmPasswordInput's value is non-empty AND matches\n//    passwordInput's value exactly. If not, call showError(...) on it\n//    and keep formSuccess hidden.\n// 5. If both checks pass, call showSuccessState(...) on both inputs and\n//    remove the \"hidden\" class from formSuccess.\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask06: Task = {
  id: "misc-06",
  title: "Quiz Page",
  description: "Let the user select an answer, validate their submission, and display whether it was correct.",
  track: "Full Project",
  order: 2,
  instructions: [
    "Select all the answer radio buttons (name=\"quizAnswer\") and the Submit button (id=\"submitQuizBtn\").",
    "On submit, check whether any option was selected at all - if not, show an error in the result element.",
    "If an option was selected, check whether its value matches the correct answer (\"paris\").",
    "Display \"Correct!\" or \"Incorrect.\" in the result element (id=\"quizResult\") accordingly, with a matching visual style.",
  ],
  topics: [{ label: "Arrays", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Quiz</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Quick Quiz</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"card\">\n      <p class=\"question\">What is the capital of France?</p>\n\n      <label class=\"option\"><input type=\"radio\" name=\"quizAnswer\" value=\"london\" /> London</label>\n      <label class=\"option\"><input type=\"radio\" name=\"quizAnswer\" value=\"paris\" /> Paris</label>\n      <label class=\"option\"><input type=\"radio\" name=\"quizAnswer\" value=\"rome\" /> Rome</label>\n      <label class=\"option\"><input type=\"radio\" name=\"quizAnswer\" value=\"berlin\" /> Berlin</label>\n\n      <button id=\"submitQuizBtn\" class=\"btn btn-primary\">Submit Answer</button>\n\n      <p id=\"quizResult\" class=\"result\"></p>\n    </div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 420px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.question {\n  font-weight: 600;\n  margin: 0 0 16px;\n}\n\n.option {\n  display: block;\n  padding: 8px 0;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.btn {\n  margin-top: 16px;\n  padding: 10px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #2f6fed;\n  color: #fff;\n  width: 100%;\n}\n\n.btn-primary:hover {\n  background-color: #2558c0;\n}\n\n.result {\n  margin: 16px 0 0;\n  font-size: 14px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\n.result.correct {\n  color: #146c2e;\n}\n\n.result.incorrect {\n  color: #d64545;\n}\n",
    "script.js": "// Quiz Page - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst answerRadios = document.querySelectorAll('input[name=\"quizAnswer\"]');\nconst submitQuizBtn = document.getElementById(\"submitQuizBtn\");\nconst quizResult = document.getElementById(\"quizResult\");\n\nconst CORRECT_ANSWER = \"paris\";\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Add a click event listener to `submitQuizBtn`.\n// 2. Find out which radio button (if any) is currently checked. You can\n//    loop over `answerRadios` and check each one's `.checked` property.\n// 3. If none is checked, set quizResult's text to something like\n//    \"Please select an answer.\" and stop.\n// 4. If one is checked, compare its `.value` to CORRECT_ANSWER.\n// 5. Set quizResult's text to \"Correct!\" or \"Incorrect.\" accordingly,\n//    and add the matching \"correct\" or \"incorrect\" class (CSS for both\n//    already exists) - remembering to remove the other class first.\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask07: Task = {
  id: "misc-07",
  title: "Search / Filter",
  description: "Filter a list of items as the user types into a search box.",
  order: 6,
  bank: true,
  instructions: [
    "Select the search input (id=\"searchInput\") and all list items (class=\"filter-item\").",
    "Listen for the \"input\" event on the search box.",
    "On every keystroke, compare the typed text (lowercased) against each item's text.",
    "Hide items that don't contain the typed text, and show items that do.",
  ],
  topics: [{ label: "Array.filter()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" }, { label: "input event", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Search Courses</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Search Courses</h1>\n  </header>\n\n  <main class=\"container\">\n    <input type=\"text\" id=\"searchInput\" class=\"search-box\" placeholder=\"Search courses...\" />\n\n    <ul class=\"filter-list\">\n      <li class=\"filter-item\">Web Development Fundamentals</li>\n      <li class=\"filter-item\">JavaScript Essentials</li>\n      <li class=\"filter-item\">Database Basics</li>\n      <li class=\"filter-item\">Data Structures & Algorithms</li>\n      <li class=\"filter-item\">Cloud Computing Basics</li>\n      <li class=\"filter-item\">Aptitude & Reasoning</li>\n    </ul>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 420px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.search-box {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n\n.search-box:focus {\n  outline: none;\n  border-color: #2f6fed;\n}\n\n.filter-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n\n.filter-item {\n  padding: 12px 16px;\n  font-size: 14px;\n  border-bottom: 1px solid #eee;\n}\n\n.filter-item:last-child {\n  border-bottom: none;\n}\n\n.filter-item.hidden {\n  display: none;\n}\n",
    "script.js": "// Search / Filter - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst searchInput = document.getElementById(\"searchInput\");\nconst filterItems = document.querySelectorAll(\".filter-item\");\n\nconsole.log(`Found ${filterItems.length} list items.`);\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Attach an \"input\" event listener to `searchInput`.\n// 2. On every keystroke, read the search box's current value and\n//    convert it to lowercase.\n// 3. Loop over `filterItems`. For each item, compare its text content\n//    (also lowercased) against the search text.\n// 4. If the item's text does NOT contain the search text, add the\n//    \"hidden\" class to it. Otherwise, make sure the \"hidden\" class is\n//    removed.\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask08: Task = {
  id: "misc-08",
  title: "Tab Navigation",
  description: "Clicking Profile / Courses / Results tabs shows the corresponding content panel.",
  order: 7,
  bank: true,
  instructions: [
    "Select all tab buttons (class=\"tab-btn\") and all content panels (class=\"tab-panel\").",
    "Add a click listener to each tab button.",
    "When a tab is clicked, hide all panels, then show only the one panel whose data-tab value matches the clicked button's data-tab value.",
    "Update the clicked tab's visual state by adding the \"active\" class to it, and removing \"active\" from the other tabs.",
  ],
  topics: [{ label: "classList", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Student Dashboard Tabs</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Student Dashboard</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"tabs\">\n      <button class=\"tab-btn active\" data-tab=\"profile\">Profile</button>\n      <button class=\"tab-btn\" data-tab=\"courses\">Courses</button>\n      <button class=\"tab-btn\" data-tab=\"results\">Results</button>\n    </div>\n\n    <div class=\"tab-panel\" data-tab=\"profile\">\n      <p>Name: Ananya</p>\n      <p>Roll Number: 24AG1A05T2</p>\n    </div>\n\n    <div class=\"tab-panel hidden\" data-tab=\"courses\">\n      <p>Web Development Fundamentals - 80%</p>\n      <p>JavaScript Essentials - 65%</p>\n    </div>\n\n    <div class=\"tab-panel hidden\" data-tab=\"results\">\n      <p>Aptitude Test: 82 / 100</p>\n      <p>Coding Test: 74 / 100</p>\n    </div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 420px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.tabs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n\n.tab-btn {\n  flex: 1;\n  padding: 10px;\n  border: none;\n  background-color: #e2e6ed;\n  color: #444;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  border-radius: 6px 6px 0 0;\n}\n\n.tab-btn.active {\n  background-color: #fff;\n  color: #1f2a44;\n  box-shadow: 0 -2px 0 #2f6fed inset;\n}\n\n.tab-panel {\n  background-color: #fff;\n  border-radius: 0 10px 10px 10px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  font-size: 14px;\n}\n\n.tab-panel p {\n  margin: 6px 0;\n}\n\n.tab-panel.hidden {\n  display: none;\n}\n",
    "script.js": "// Tab Navigation - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst tabButtons = document.querySelectorAll(\".tab-btn\");\nconst tabPanels = document.querySelectorAll(\".tab-panel\");\n\nconsole.log(`Found ${tabButtons.length} tabs and ${tabPanels.length} panels.`);\n\n// TODO (Student JavaScript objectives):\n//\n// For EACH button in `tabButtons`, you need to:\n//\n// 1. Attach a \"click\" event listener.\n// 2. Read the button's target tab name from its data-tab attribute\n//    (button.dataset.tab).\n// 3. Loop over `tabPanels` and add the \"hidden\" class to every panel.\n// 4. Find the ONE panel whose data-tab attribute matches the clicked\n//    button's data-tab, and remove the \"hidden\" class from just that\n//    one.\n// 5. Also update which tab button has the \"active\" class: remove it\n//    from all buttons, then add it to the one that was just clicked.\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask09: Task = {
  id: "misc-09",
  title: "Image Carousel",
  description: "Implement Previous/Next controls for a colour-slide carousel.",
  order: 8,
  bank: true,
  instructions: [
    "Select the Previous (id=\"prevBtn\") and Next (id=\"nextBtn\") buttons, the slide display (id=\"slideDisplay\"), and the counter text (id=\"slideCounter\").",
    "Keep track of the current slide index in a variable (the `slides` array is already provided).",
    "Clicking Next should advance to the next slide, wrapping back to the first slide after the last.",
    "Clicking Previous should go back a slide, wrapping to the last slide after the first.",
    "Update the slide display's background colour, label, and the counter text (e.g. \"Slide 2 / 4\") whenever the index changes.",
  ],
  topics: [{ label: "setInterval", url: "https://developer.mozilla.org/en-US/docs/Web/API/setInterval" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Carousel</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Featured Courses</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"carousel\">\n      <button id=\"prevBtn\" class=\"nav-btn\">&#8249;</button>\n\n      <div id=\"slideDisplay\" class=\"slide\">Web Development</div>\n\n      <button id=\"nextBtn\" class=\"nav-btn\">&#8250;</button>\n    </div>\n\n    <p id=\"slideCounter\" class=\"counter\">Slide 1 / 4</p>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 420px;\n  margin: 40px auto;\n  padding: 0 16px;\n  text-align: center;\n}\n\n.carousel {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.slide {\n  flex: 1;\n  height: 160px;\n  border-radius: 10px;\n  background-color: #457b9d;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: background-color 0.2s ease;\n}\n\n.nav-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  background-color: #1f2a44;\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\n.nav-btn:hover {\n  background-color: #2f6fed;\n}\n\n.counter {\n  margin-top: 12px;\n  font-size: 13px;\n  color: #555;\n}\n",
    "script.js": "// Image Carousel - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst slides = [\n  { label: \"Web Development\", color: \"#457b9d\" },\n  { label: \"JavaScript Essentials\", color: \"#2a9d8f\" },\n  { label: \"Database Basics\", color: \"#e9c46a\" },\n  { label: \"Cloud Computing\", color: \"#e63946\" },\n];\n\nconst prevBtn = document.getElementById(\"prevBtn\");\nconst nextBtn = document.getElementById(\"nextBtn\");\nconst slideDisplay = document.getElementById(\"slideDisplay\");\nconst slideCounter = document.getElementById(\"slideCounter\");\n\nlet currentIndex = 0;\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Write a function (e.g. `renderSlide()`) that updates slideDisplay's\n//    text and background colour to match `slides[currentIndex]`, and\n//    updates slideCounter's text to show\n//    `Slide ${currentIndex + 1} / ${slides.length}`.\n// 2. Attach a click listener to `nextBtn` that increases `currentIndex`\n//    by 1 (wrapping back to 0 after the last slide), then calls your\n//    render function.\n// 3. Attach a click listener to `prevBtn` that decreases `currentIndex`\n//    by 1 (wrapping to the last slide when going before 0), then calls\n//    your render function.\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask10: Task = {
  id: "misc-10",
  title: "Dynamic Photo Gallery",
  description: "Given a caption input and Add button, add photo cards to a gallery and allow removing them.",
  order: 9,
  bank: true,
  instructions: [
    "Select the caption input (id=\"photoCaption\") and the Add button (id=\"addPhotoBtn\").",
    "Select the gallery container (id=\"gallery\").",
    "When Add is clicked (and the caption isn't empty), create a new gallery item element and append it to the gallery.",
    "Each gallery item should include a Remove button that deletes just that item when clicked.",
    "Clear the caption input after successfully adding an item.",
  ],
  topics: [{ label: "Array.map()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" }, { label: "createElement", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Photo Gallery</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Photo Gallery</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"add-row\">\n      <input type=\"text\" id=\"photoCaption\" placeholder=\"Photo caption...\" />\n      <button id=\"addPhotoBtn\" class=\"btn btn-primary\">Add</button>\n    </div>\n\n    <div id=\"gallery\" class=\"gallery\"></div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 480px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.add-row {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.add-row input {\n  flex: 1;\n  padding: 10px 12px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 14px;\n}\n\n.btn {\n  padding: 10px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #2f6fed;\n  color: #fff;\n}\n\n.btn-primary:hover {\n  background-color: #2558c0;\n}\n\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 12px;\n}\n\n.gallery-item {\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 12px;\n  text-align: center;\n}\n\n.gallery-item .photo-placeholder {\n  height: 80px;\n  border-radius: 6px;\n  background-color: #a8c0ff;\n  margin-bottom: 8px;\n}\n\n.gallery-item .caption {\n  font-size: 13px;\n  margin: 0 0 8px;\n  word-break: break-word;\n}\n\n.gallery-item .remove-btn {\n  border: none;\n  background-color: #fdf1f1;\n  color: #d64545;\n  border-radius: 4px;\n  padding: 4px 10px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.gallery-item .remove-btn:hover {\n  background-color: #f8d7d7;\n}\n",
    "script.js": "// Dynamic Photo Gallery - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst photoCaption = document.getElementById(\"photoCaption\");\nconst addPhotoBtn = document.getElementById(\"addPhotoBtn\");\nconst gallery = document.getElementById(\"gallery\");\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Attach a click listener to `addPhotoBtn`.\n// 2. Read photoCaption's current value. If it is empty, do nothing.\n// 3. Otherwise, build a new gallery item. One approach:\n//      const item = document.createElement(\"div\");\n//      item.className = \"gallery-item\";\n//      item.innerHTML = `\n//        <div class=\"photo-placeholder\"></div>\n//        <p class=\"caption\"></p>\n//        <button class=\"remove-btn\">Remove</button>\n//      `;\n//      item.querySelector(\".caption\").textContent = photoCaption.value;\n// 4. Attach a click listener to that item's own \"Remove\" button which\n//    removes the whole item from the page (item.remove()).\n// 5. Append the new item to `gallery`.\n// 6. Clear photoCaption's value.\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask11: Task = {
  id: "misc-11",
  title: "Checklist / Mark Complete",
  description: "Clicking a checklist item should mark it complete, with a strikethrough style, and toggle back when clicked again.",
  order: 10,
  bank: true,
  instructions: [
    "Select all checklist items (class=\"checklist-item\").",
    "Add a click event listener to each item.",
    "On click, toggle a \"completed\" class on that item (CSS for the strikethrough style already exists).",
    "Each item must work independently of the others.",
    "Repeated clicks should correctly flip the item back and forth every time.",
  ],
  topics: [{ label: "classList.toggle", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Prep Checklist</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Preparation Checklist</h1>\n  </header>\n\n  <main class=\"container\">\n    <ul class=\"checklist\">\n      <li class=\"checklist-item\">\n        <span class=\"checkbox\"></span>\n        <span class=\"item-text\">Complete HTML exercises</span>\n      </li>\n      <li class=\"checklist-item\">\n        <span class=\"checkbox\"></span>\n        <span class=\"item-text\">Complete CSS exercises</span>\n      </li>\n      <li class=\"checklist-item\">\n        <span class=\"checkbox\"></span>\n        <span class=\"item-text\">Complete JavaScript exercises</span>\n      </li>\n      <li class=\"checklist-item\">\n        <span class=\"checkbox\"></span>\n        <span class=\"item-text\">Attempt a mock assessment</span>\n      </li>\n    </ul>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 420px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.checklist {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n\n.checklist-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #eee;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.checklist-item:last-child {\n  border-bottom: none;\n}\n\n.checklist-item:hover {\n  background-color: #f9fafb;\n}\n\n.checkbox {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 2px solid #ccc;\n  flex-shrink: 0;\n  position: relative;\n}\n\n.checklist-item.completed .checkbox {\n  background-color: #2f9e44;\n  border-color: #2f9e44;\n}\n\n.checklist-item.completed .checkbox::after {\n  content: \"\";\n  position: absolute;\n  left: 4px;\n  top: 0px;\n  width: 5px;\n  height: 9px;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.checklist-item.completed .item-text {\n  text-decoration: line-through;\n  color: #999;\n}\n",
    "script.js": "// Checklist / Mark Complete - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst checklistItems = document.querySelectorAll(\".checklist-item\");\n\nconsole.log(`Found ${checklistItems.length} checklist items.`);\n\n// TODO (Student JavaScript objectives):\n//\n// For EACH item in `checklistItems`, you need to:\n//\n// 1. Attach a \"click\" event listener.\n// 2. On click, toggle the \"completed\" class on that item (CSS for the\n//    checked box and strikethrough text already exists).\n// 3. Make sure each item works independently of the others.\n// 4. Make sure repeated clicks correctly flip the item back and forth\n//    every time.\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask12: Task = {
  id: "misc-12",
  title: "Fruit Selector",
  description: "Changing a dropdown selection should update the displayed fruit name and emoji.",
  order: 11,
  bank: true,
  instructions: [
    "Select the dropdown (id=\"fruitSelect\") and the display element (id=\"fruitDisplay\").",
    "Listen for the \"change\" event on the dropdown.",
    "When it changes, read the selected option's value.",
    "Update the display element's text to show the matching fruit emoji and name (a lookup object is already provided).",
  ],
  topics: [{ label: "Array methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Fruit Selector</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Fruit Selector</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"card\">\n      <label for=\"fruitSelect\">Select a fruit</label>\n      <select id=\"fruitSelect\">\n        <option value=\"apple\">Apple</option>\n        <option value=\"banana\">Banana</option>\n        <option value=\"grapes\">Grapes</option>\n        <option value=\"watermelon\">Watermelon</option>\n      </select>\n\n      <div id=\"fruitDisplay\" class=\"fruit-display\">&#127822; Apple</div>\n    </div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 360px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 24px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\nlabel {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  text-align: left;\n}\n\nselect {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 14px;\n}\n\n.fruit-display {\n  margin-top: 24px;\n  font-size: 24px;\n  font-weight: 600;\n}\n",
    "script.js": "// Fruit Selector - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst fruitSelect = document.getElementById(\"fruitSelect\");\nconst fruitDisplay = document.getElementById(\"fruitDisplay\");\n\nconst FRUIT_LOOKUP = {\n  apple: \"\\uD83C\\uDF4E Apple\",\n  banana: \"\\uD83C\\uDF4C Banana\",\n  grapes: \"\\uD83C\\uDF47 Grapes\",\n  watermelon: \"\\uD83C\\uDF49 Watermelon\",\n};\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Attach a \"change\" event listener to `fruitSelect`.\n// 2. When it fires, read the dropdown's current value\n//    (fruitSelect.value).\n// 3. Look up the matching display text in FRUIT_LOOKUP.\n// 4. Set fruitDisplay's text content to that value.\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask13: Task = {
  id: "misc-13",
  title: "Star Rating",
  description: "Hovering over stars should preview a rating, and clicking should lock it in.",
  order: 12,
  bank: true,
  instructions: [
    "Select all star elements (class=\"star\") and the rating label (id=\"ratingLabel\").",
    "Add a \"mouseover\" listener to each star that highlights it and every star before it (their combined position), to preview the hovered rating.",
    "Add a \"mouseout\" listener on the star container that restores the display to the currently saved rating (not hovered).",
    "Add a click listener to each star that saves its position as the selected rating, highlighting it and all stars before it, and updates the rating label text (e.g. \"3 / 5\").",
  ],
  topics: [{ label: "classList", url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Star Rating</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Rate Your Experience</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"card\">\n      <div id=\"starContainer\" class=\"stars\">\n        <span class=\"star\" data-value=\"1\">&#9733;</span>\n        <span class=\"star\" data-value=\"2\">&#9733;</span>\n        <span class=\"star\" data-value=\"3\">&#9733;</span>\n        <span class=\"star\" data-value=\"4\">&#9733;</span>\n        <span class=\"star\" data-value=\"5\">&#9733;</span>\n      </div>\n      <p id=\"ratingLabel\" class=\"rating-label\">No rating yet</p>\n    </div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 360px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 28px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.stars {\n  font-size: 32px;\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n}\n\n.star {\n  color: #ccc;\n  cursor: pointer;\n  transition: color 0.1s ease;\n}\n\n.star.active {\n  color: #f2c94c;\n}\n\n.rating-label {\n  margin: 14px 0 0;\n  color: #555;\n  font-size: 14px;\n}\n",
    "script.js": "// Star Rating - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst starContainer = document.getElementById(\"starContainer\");\nconst stars = document.querySelectorAll(\".star\");\nconst ratingLabel = document.getElementById(\"ratingLabel\");\n\nlet selectedRating = 0;\n\nfunction highlightUpTo(value) {\n  stars.forEach((star) => {\n    const starValue = Number(star.dataset.value);\n    star.classList.toggle(\"active\", starValue <= value);\n  });\n}\n\n// TODO (Student JavaScript objectives):\n//\n// For EACH star in `stars`, you need to:\n//\n// 1. Attach a \"mouseover\" listener that reads that star's data-value\n//    and calls highlightUpTo(value) to preview the hover rating.\n// 2. Attach a \"click\" listener that stores that star's value in\n//    `selectedRating`, calls highlightUpTo(selectedRating), and updates\n//    `ratingLabel`'s text to something like `${selectedRating} / 5`.\n//\n// Also:\n//\n// 3. Attach a \"mouseout\" listener to `starContainer` (the whole group)\n//    that calls highlightUpTo(selectedRating), so the stars fall back\n//    to the last clicked rating once the mouse leaves - rather than\n//    staying on whatever was last hovered.\n//\n// See TASK.md for full requirements.\n",
  },
};

const miscTask14: Task = {
  id: "misc-14",
  title: "Color Picker",
  description: "Changing a colour input should immediately update a preview box's background colour.",
  order: 13,
  bank: true,
  instructions: [
    "Select the colour input (id=\"colorPicker\") and the preview box (id=\"colorPreview\").",
    "Listen for the \"input\" event on the colour picker (fires continuously as the user drags/selects, not just on close).",
    "Update the preview box's background colour to match the picker's current value on every change.",
    "Also display the selected colour's hex value as text inside or below the preview box.",
  ],
  topics: [{ label: "input type=color", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Color Picker</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Color Picker</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"card\">\n      <label for=\"colorPicker\">Choose a colour</label>\n      <input type=\"color\" id=\"colorPicker\" value=\"#2f6fed\" />\n\n      <div id=\"colorPreview\" class=\"preview-box\"></div>\n      <p id=\"colorValue\" class=\"color-value\">#2f6fed</p>\n    </div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 360px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 24px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\nlabel {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\ninput[type=\"color\"] {\n  width: 100%;\n  height: 42px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.preview-box {\n  margin-top: 20px;\n  height: 100px;\n  border-radius: 8px;\n  background-color: #2f6fed;\n  transition: background-color 0.05s ease;\n}\n\n.color-value {\n  margin: 10px 0 0;\n  font-family: \"SFMono-Regular\", Consolas, monospace;\n  font-size: 14px;\n  color: #555;\n}\n",
    "script.js": "// Color Picker - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst colorPicker = document.getElementById(\"colorPicker\");\nconst colorPreview = document.getElementById(\"colorPreview\");\nconst colorValue = document.getElementById(\"colorValue\");\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Attach an \"input\" event listener to `colorPicker` (this fires\n//    continuously as the colour changes, unlike \"change\" which only\n//    fires once the picker closes).\n// 2. On every input, read `colorPicker.value` (a hex string like\n//    \"#2f6fed\").\n// 3. Set `colorPreview`'s background colour to that value.\n// 4. Set `colorValue`'s text to that same hex string.\n//\n// See TASK.md for full requirements.\n",
  },
};

const jsFund01: Task = {
  id: "jsfund-01",
  title: "Closures - Two Independent Counters",
  description: "Build two counter widgets on one page powered by a single closure-based factory function, so each keeps its own private count.",
  track: "JS Fundamentals",
  order: 1,
  instructions: [
    "Write a function createCounter() that returns an object with increment, decrement, and getValue methods.",
    "The count itself must be a variable private to createCounter() (a closure) - do NOT use a single shared/global count variable.",
    "Call createCounter() twice to power Counter A and Counter B independently.",
    "Wire Counter A's #incrementA/#decrementA buttons and #displayA text to its own counter instance.",
    "Wire Counter B's #incrementB/#decrementB buttons and #displayB text to its own counter instance.",
    "Clicking Counter A's buttons must never change Counter B's value, and vice versa.",
  ],
  topics: [{ label: "Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" }, { label: "Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Closures - Independent Counters</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Closures: Independent Counters</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"counter-card\">\n      <h2>Counter A</h2>\n      <p id=\"displayA\" class=\"count-display\">0</p>\n      <div class=\"btn-row\">\n        <button id=\"decrementA\" class=\"btn\">-</button>\n        <button id=\"incrementA\" class=\"btn\">+</button>\n      </div>\n    </div>\n\n    <div class=\"counter-card\">\n      <h2>Counter B</h2>\n      <p id=\"displayB\" class=\"count-display\">0</p>\n      <div class=\"btn-row\">\n        <button id=\"decrementB\" class=\"btn\">-</button>\n        <button id=\"incrementB\" class=\"btn\">+</button>\n      </div>\n    </div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 640px;\n  margin: 40px auto;\n  padding: 0 16px;\n  display: flex;\n  gap: 20px;\n}\n\n.counter-card {\n  flex: 1;\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 24px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.count-display {\n  font-size: 40px;\n  font-weight: 700;\n  margin: 10px 0 18px;\n}\n\n.btn-row {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.btn {\n  width: 44px;\n  height: 44px;\n  border: none;\n  border-radius: 8px;\n  background-color: #2f6fed;\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: #2558c0;\n}\n",
    "script.js": "// Closures - Two Independent Counters - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst displayA = document.getElementById(\"displayA\");\nconst displayB = document.getElementById(\"displayB\");\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Write a function `createCounter()` that returns an object:\n//      { increment, decrement, getValue }\n//    The count must live in a variable declared INSIDE createCounter,\n//    so each call to createCounter() creates its own private count\n//    (this is a closure).\n//\n// 2. Call createCounter() twice - once for Counter A, once for\n//    Counter B - and store the two returned objects in separate\n//    variables (e.g. counterA, counterB).\n//\n// 3. Attach click listeners to #incrementA/#decrementA that call\n//    counterA's increment/decrement, then update `displayA.textContent`\n//    using counterA.getValue().\n//\n// 4. Do the same for #incrementB/#decrementB with counterB and\n//    `displayB`.\n//\n// If you did this correctly, clicking Counter A's buttons will NEVER\n// change Counter B's number, and vice versa - because each counter's\n// value is private to its own closure.\n//\n// See TASK.md for full requirements.\n",
  },
};

const jsFund02: Task = {
  id: "jsfund-02",
  title: "Higher-Order Functions - Task Filter",
  description: "Render and filter a list of tasks using Array.map() and Array.filter() instead of manual for-loops.",
  track: "JS Fundamentals",
  order: 2,
  instructions: [
    "Use Array.prototype.filter() to select only tasks matching the current filter (\"all\", \"done\", or \"pending\").",
    "Use Array.prototype.map() (or forEach) to turn the filtered array into <li> elements and render them inside #taskList.",
    "Attach click listeners to the three filter buttons (#filterAll, #filterDone, #filterPending) that re-render the list with the matching filter.",
    "Highlight the active filter button with the \"active\" class.",
    "Do not use a plain for-loop or manual index-based iteration for the filtering or rendering logic.",
  ],
  topics: [{ label: "Array.filter()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" }, { label: "Array.map()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" }, { label: "Callback functions", url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Higher-Order Functions - Task Filter</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>My Tasks</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"filter-bar\">\n      <button id=\"filterAll\" class=\"filter-btn active\" data-filter=\"all\">All</button>\n      <button id=\"filterDone\" class=\"filter-btn\" data-filter=\"done\">Done</button>\n      <button id=\"filterPending\" class=\"filter-btn\" data-filter=\"pending\">Pending</button>\n    </div>\n\n    <ul id=\"taskList\" class=\"task-list\"></ul>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 420px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.filter-bar {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.filter-btn {\n  flex: 1;\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  background-color: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.filter-btn.active {\n  background-color: #2f6fed;\n  color: #fff;\n  border-color: #2f6fed;\n}\n\n.task-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.task-list li {\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n}\n\n.task-list li:last-child {\n  border-bottom: none;\n}\n\n.task-list li.done {\n  color: #888;\n  text-decoration: line-through;\n}\n",
    "script.js": "// Higher-Order Functions - Task Filter - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst tasks = [\n  { id: 1, text: \"Finish project report\", done: true },\n  { id: 2, text: \"Review pull request\", done: false },\n  { id: 3, text: \"Update resume\", done: false },\n  { id: 4, text: \"Prepare for interview\", done: true },\n  { id: 5, text: \"Read a chapter of a book\", done: false },\n];\n\nconst taskList = document.getElementById(\"taskList\");\nconst filterButtons = document.querySelectorAll(\".filter-btn\");\n\nlet currentFilter = \"all\";\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Write a function `getFilteredTasks(filter)` that uses\n//    `tasks.filter(...)` to return:\n//      - all tasks, if filter === \"all\"\n//      - only tasks where done === true, if filter === \"done\"\n//      - only tasks where done === false, if filter === \"pending\"\n//\n// 2. Write a function `renderTasks(filter)` that:\n//      - calls getFilteredTasks(filter)\n//      - uses `.map()` (or `.forEach()`) - NOT a manual for-loop - to\n//        build the list items\n//      - sets taskList.innerHTML (or appends built <li> elements) so\n//        the list on screen matches the filtered tasks\n//      - adds the \"done\" class to <li> elements for completed tasks\n//\n// 3. Attach a click listener to each button in `filterButtons` that:\n//      - reads the button's data-filter attribute\n//      - calls renderTasks(that filter)\n//      - updates which button has the \"active\" class\n//\n// 4. Call renderTasks(\"all\") once at the bottom of this file so the\n//    list shows something on first load.\n//\n// See TASK.md for full requirements.\n",
  },
};

const jsFund03: Task = {
  id: "jsfund-03",
  title: "Promises & async/await - Load Profile",
  description: "Load a user profile from a simulated delayed API call, showing a loading state until the promise resolves.",
  track: "JS Fundamentals",
  order: 3,
  instructions: [
    "Clicking #loadBtn must immediately show the text \"Loading...\" inside #status, before anything else happens.",
    "Call the provided fetchProfile() function, which returns a Promise that resolves after a short delay with a profile object.",
    "Use async/await (or .then()) to wait for the Promise to resolve.",
    "Once resolved, set #status to \"Loaded\" and display the profile's name and role inside #profileCard.",
    "If fetchProfile() rejects (it randomly can), display \"Failed to load profile. Try again.\" inside #status instead of the profile card.",
  ],
  topics: [{ label: "Promise", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" }, { label: "async function", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" }, { label: "await", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Promises - Load Profile</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>User Profile</h1>\n  </header>\n\n  <main class=\"container\">\n    <button id=\"loadBtn\" class=\"btn btn-primary\">Load Profile</button>\n    <p id=\"status\" class=\"status-text\"></p>\n    <div id=\"profileCard\" class=\"profile-card\"></div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 360px;\n  margin: 40px auto;\n  padding: 0 16px;\n  text-align: center;\n}\n\n.btn {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #2f6fed;\n  color: #fff;\n}\n\n.btn-primary:hover {\n  background-color: #2558c0;\n}\n\n.status-text {\n  margin: 14px 0;\n  font-size: 14px;\n  color: #555;\n}\n\n.profile-card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  min-height: 20px;\n}\n",
    "script.js": "// Promises & async/await - Load Profile - script.js\n//\n// A simulated API call is already provided below. Read TASK.md for the\n// exact objectives you must complete.\n\nconst loadBtn = document.getElementById(\"loadBtn\");\nconst status = document.getElementById(\"status\");\nconst profileCard = document.getElementById(\"profileCard\");\n\n// Simulated API call - already implemented, do not modify.\n// Resolves after ~800ms with a profile object, but randomly rejects\n// about 20% of the time to simulate a network failure.\nfunction fetchProfile() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() < 0.2) {\n        reject(new Error(\"Network error\"));\n      } else {\n        resolve({ name: \"Ananya Sharma\", role: \"Frontend Developer\" });\n      }\n    }, 800);\n  });\n}\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Attach a \"click\" listener to `loadBtn`.\n// 2. Immediately (synchronously, before awaiting anything) set\n//    `status.textContent` to \"Loading...\".\n// 3. Call fetchProfile() and use async/await (or .then()/.catch()) to\n//    handle the result.\n// 4. On success: set `status.textContent` to \"Loaded\" and set\n//    `profileCard.textContent` (or innerHTML) to show the profile's\n//    name and role.\n// 5. On failure (the promise rejects): set `status.textContent` to\n//    \"Failed to load profile. Try again.\" and leave profileCard empty.\n//\n// See TASK.md for full requirements.\n",
  },
};

const jsFund04: Task = {
  id: "jsfund-04",
  title: "Event Loop - Execution Order Log",
  description: "Log three different kinds of work (synchronous, setTimeout, and a resolved Promise) to the page in the order JavaScript's event loop actually runs them.",
  track: "JS Fundamentals",
  order: 4,
  instructions: [
    "Clicking #runBtn must call the three provided functions - logSync(), logTimeout(), and logMicrotask() - in that source order.",
    "Each of those functions appends its own message to #logList as a new <li> using the addLog(message) helper.",
    "Do NOT reorder the three function calls, and do NOT add any artificial delays - the correct visual order must come purely from how the event loop schedules synchronous code, timers, and promises.",
    "After all three finish, the log should read: Synchronous, Promise (microtask), Timeout (macrotask) - in that exact order.",
  ],
  topics: [{ label: "The Event Loop", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop" }, { label: "setTimeout", url: "https://developer.mozilla.org/en-US/docs/Web/API/setTimeout" }, { label: "Promise", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Event Loop - Execution Order</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Event Loop Order Log</h1>\n  </header>\n\n  <main class=\"container\">\n    <button id=\"runBtn\" class=\"btn btn-primary\">Run</button>\n    <ol id=\"logList\" class=\"log-list\"></ol>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 400px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.btn {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  background-color: #2f6fed;\n  color: #fff;\n  margin-bottom: 16px;\n}\n\n.btn:hover {\n  background-color: #2558c0;\n}\n\n.log-list {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 16px 16px 16px 36px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  min-height: 20px;\n}\n\n.log-list li {\n  padding: 4px 0;\n  font-size: 14px;\n}\n",
    "script.js": "// Event Loop - Execution Order Log - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst runBtn = document.getElementById(\"runBtn\");\nconst logList = document.getElementById(\"logList\");\n\nfunction addLog(message) {\n  const li = document.createElement(\"li\");\n  li.textContent = message;\n  logList.appendChild(li);\n}\n\n// Already implemented - do not modify these three functions.\nfunction logSync() {\n  addLog(\"Synchronous\");\n}\n\nfunction logTimeout() {\n  setTimeout(() => {\n    addLog(\"Timeout (macrotask)\");\n  }, 0);\n}\n\nfunction logMicrotask() {\n  Promise.resolve().then(() => {\n    addLog(\"Promise (microtask)\");\n  });\n}\n\n// TODO (Student JavaScript objective):\n//\n// 1. Clear #logList's contents at the start of every run (so repeated\n//    clicks don't just keep appending to old runs).\n// 2. Attach a \"click\" listener to `runBtn`.\n// 3. Inside it, call logSync(), then logTimeout(), then\n//    logMicrotask() - in that exact source order.\n//\n// Do not change the order of these calls, and do not add delays of\n// your own. If you call them in this order, the event loop's rules\n// will make the on-screen log end up as:\n//   1. Synchronous\n//   2. Promise (microtask)\n//   3. Timeout (macrotask)\n// even though logTimeout() was called before logMicrotask().\n//\n// See TASK.md for full requirements.\n",
  },
};

const jsFund05: Task = {
  id: "jsfund-05",
  title: "this Binding - Fix the Broken Handler",
  description: "A button's click handler loses its 'this' context when passed as a callback. Fix it using bind, an arrow function, or an explicit reference, without renaming the object's properties.",
  track: "JS Fundamentals",
  order: 5,
  instructions: [
    "The `player` object's showScore() method uses `this.name` and `this.score`.",
    "When showScore is attached directly as an event listener, `this` no longer refers to `player`, so the displayed text breaks (shows \"undefined\").",
    "Fix the click listener registration (not the showScore method's internal logic) so that `this` correctly refers to `player` when the button is clicked.",
    "After the fix, clicking #showScoreBtn must display \"Riya: 42\" inside #scoreOutput.",
    "You may use .bind(player), an arrow function wrapper, or call the method through player.showScore() inside a wrapper function - but do not hardcode the string \"Riya: 42\" directly.",
  ],
  topics: [{ label: "this", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" }, { label: "Function.prototype.bind()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" }, { label: "Arrow functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>this Binding</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Player Score</h1>\n  </header>\n\n  <main class=\"container\">\n    <div class=\"card\">\n      <button id=\"showScoreBtn\" class=\"btn btn-primary\">Show Score</button>\n      <p id=\"scoreOutput\" class=\"score-output\"></p>\n    </div>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 340px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.card {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 24px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.btn {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  background-color: #2f6fed;\n  color: #fff;\n}\n\n.btn:hover {\n  background-color: #2558c0;\n}\n\n.score-output {\n  margin-top: 14px;\n  font-size: 16px;\n  font-weight: 600;\n  min-height: 20px;\n}\n",
    "script.js": "// this Binding - Fix the Broken Handler - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst showScoreBtn = document.getElementById(\"showScoreBtn\");\nconst scoreOutput = document.getElementById(\"scoreOutput\");\n\n// Already implemented - do not modify this object.\nconst player = {\n  name: \"Riya\",\n  score: 42,\n  showScore: function () {\n    scoreOutput.textContent = this.name + \": \" + this.score;\n  },\n};\n\n// BUG: this line attaches showScore directly, which loses \"this\" -\n// when the button is clicked, `this` inside showScore will be the\n// button, not `player`, so `this.name`/`this.score` will be undefined.\n//\n// TODO (Student JavaScript objective):\n//\n// Replace the line below so that `this` correctly refers to `player`\n// when showScoreBtn is clicked. Do NOT change anything inside the\n// `player` object above - fix only how the listener is registered.\nshowScoreBtn.addEventListener(\"click\", player.showScore);\n\n// See TASK.md for full requirements.\n",
  },
};

const jsFund06: Task = {
  id: "jsfund-06",
  title: "Debounce - Live Search Log",
  description: "Implement a debounce() utility so a fast-typing search box only logs a search request once the user pauses, instead of on every keystroke.",
  track: "JS Fundamentals",
  order: 6,
  instructions: [
    "Implement a generic debounce(fn, delay) function that returns a new function.",
    "The returned function must delay calling fn until `delay` milliseconds have passed with no further calls.",
    "If the returned function is called again before the delay elapses, the previous pending call must be cancelled (the timer restarts).",
    "Wrap the provided logSearch(value) function with debounce(logSearch, 400) and use the wrapped version as the #searchInput's \"input\" event handler.",
    "Typing quickly must only add ONE entry to #logList (for the final value once typing pauses), not one entry per keystroke.",
  ],
  topics: [{ label: "setTimeout", url: "https://developer.mozilla.org/en-US/docs/Web/API/setTimeout" }, { label: "clearTimeout", url: "https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout" }, { label: "Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Debounce - Live Search Log</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Search Log</h1>\n  </header>\n\n  <main class=\"container\">\n    <input type=\"text\" id=\"searchInput\" placeholder=\"Type to search...\" />\n    <ul id=\"logList\" class=\"log-list\"></ul>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 400px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n#searchInput {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n\n.log-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  min-height: 20px;\n}\n\n.log-list li {\n  padding: 10px 14px;\n  border-bottom: 1px solid #eee;\n  font-size: 14px;\n}\n\n.log-list li:last-child {\n  border-bottom: none;\n}\n",
    "script.js": "// Debounce - Live Search Log - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst searchInput = document.getElementById(\"searchInput\");\nconst logList = document.getElementById(\"logList\");\n\n// Already implemented - do not modify.\nfunction logSearch(value) {\n  const li = document.createElement(\"li\");\n  li.textContent = \"Searched for: \\\"\" + value + \"\\\"\";\n  logList.appendChild(li);\n}\n\n// TODO (Student JavaScript objectives):\n//\n// 1. Implement a generic `debounce(fn, delay)` function:\n//      - It should return a NEW function.\n//      - Every time the new function is called, it should cancel any\n//        previously scheduled call (using clearTimeout) and schedule\n//        `fn` to run after `delay` milliseconds via setTimeout.\n//      - Make sure to pass along the returned function's arguments to\n//        `fn` when it eventually runs.\n//\n// 2. Create `const debouncedLogSearch = debounce(logSearch, 400);`\n//\n// 3. Attach an \"input\" event listener to `searchInput` that calls\n//    `debouncedLogSearch(searchInput.value)` on every keystroke.\n//\n// If implemented correctly, typing \"hello\" quickly should only add\n// ONE log entry (\"Searched for: \\\"hello\\\"\") after you stop typing -\n// not five entries, one per letter.\n//\n// See TASK.md for full requirements.\n",
  },
};

const jsFund07: Task = {
  id: "jsfund-07",
  title: "Scope - Fix the Loop Bug",
  description: "Five generated buttons should each report their own number when clicked, but a var-in-loop scoping bug makes them all report the same (wrong) number. Fix it using let.",
  track: "JS Fundamentals",
  order: 7,
  instructions: [
    "Five buttons are generated in a loop and appended to #buttonRow, each meant to log its own position (1 to 5) when clicked.",
    "Currently every button logs the same number (6) instead of its own, because the loop variable is declared with var, which is function-scoped and shared across all five closures.",
    "Fix ONLY the loop variable's declaration (change var to the appropriate keyword) so each button's click handler captures its own copy of the loop variable.",
    "After the fix, clicking the button labeled \"3\" must append \"Button 3 clicked\" to #logList (and similarly for every other button) - not always \"Button 6 clicked\".",
    "Do not add IIFEs, extra parameters, or restructure the loop - the fix should be a minimal change to how the loop variable is declared.",
  ],
  topics: [{ label: "Hoisting", url: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting" }, { label: "let", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let" }, { label: "Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" }],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Scope - Fix the Loop Bug</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header class=\"topbar\">\n    <h1>Number Buttons</h1>\n  </header>\n\n  <main class=\"container\">\n    <div id=\"buttonRow\" class=\"button-row\"></div>\n    <ul id=\"logList\" class=\"log-list\"></ul>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.topbar {\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 18px 32px;\n}\n\n.topbar h1 {\n  margin: 0;\n  font-size: 22px;\n}\n\n.container {\n  max-width: 420px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n\n.button-row {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.button-row button {\n  flex: 1;\n  padding: 10px;\n  border: none;\n  border-radius: 6px;\n  background-color: #2f6fed;\n  color: #fff;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.button-row button:hover {\n  background-color: #2558c0;\n}\n\n.log-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  min-height: 20px;\n}\n\n.log-list li {\n  padding: 10px 14px;\n  border-bottom: 1px solid #eee;\n  font-size: 14px;\n}\n\n.log-list li:last-child {\n  border-bottom: none;\n}\n",
    "script.js": "// Scope - Fix the Loop Bug - script.js\n//\n// Read TASK.md for the exact objectives you must complete.\n\nconst buttonRow = document.getElementById(\"buttonRow\");\nconst logList = document.getElementById(\"logList\");\n\nfunction logClick(n) {\n  const li = document.createElement(\"li\");\n  li.textContent = \"Button \" + n + \" clicked\";\n  logList.appendChild(li);\n}\n\n// BUG: `var` is function-scoped, not block-scoped, so all five\n// buttons' click handlers share the SAME `i` - by the time any button\n// is clicked, the loop has already finished and `i` is 6 for all of\n// them.\n//\n// TODO (Student JavaScript objective):\n//\n// Fix ONLY the keyword used to declare the loop variable below (one\n// small change) so each button captures its own copy of `i` and logs\n// its own correct number when clicked.\nfor (var i = 1; i <= 5; i++) {\n  const btn = document.createElement(\"button\");\n  btn.textContent = i;\n  btn.addEventListener(\"click\", function () {\n    logClick(i);\n  });\n  buttonRow.appendChild(btn);\n}\n\n// See TASK.md for full requirements.\n",
  },
};

export const tasks: Task[] = [task01, task02, task03, task04, task05, task06, day1Task01, day1Task02, day1Task03, day1Task04, day1Task05, day1Task06, day1Task07, day1Task08, day1Task09, day1Task10, day1Task11, day1Task12, day3Task03, day3Task04, day5FinalSimulation, miscTask01, miscTask02, miscTask03, miscTask04, miscTask05, miscTask06, miscTask07, miscTask08, miscTask09, miscTask10, miscTask11, miscTask12, miscTask13, miscTask14, jsFund01, jsFund02, jsFund03, jsFund04, jsFund05, jsFund06, jsFund07];

export function getTaskById(taskId: string): Task | undefined {
  return tasks.find((task) => task.id === taskId);
}
