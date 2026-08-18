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

const task02: Task = {
  id: "task-02",
  title: "Student Dashboard",
  description: "Modify the existing Student Dashboard: add a missing HTML id, style it with CSS, and wire up a click interaction in JavaScript.",
  instructions: [
    "Add id=\"studentStatus\" to the <span> that displays the student's status text (\"Active\") in index.html.",
    "Add a #studentStatus CSS rule in style.css: light green background, readable contrasting text color, at least 4px 10px padding, at least 4px border-radius, and inline-block display.",
    "Select #markCompleteBtn in script.js and attach a click event listener to it.",
    "When clicked, remove the \"hidden\" class from #actionMessage and set its text to \"Profile reviewed successfully.\"",
  ],
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
  instructions: [
    "Attach a submit event listener to #registrationForm and call event.preventDefault() inside it.",
    "Block the popup (do not show it) if Full Name, Email, or Course is left empty.",
    "On a valid submission, remove the \"hidden\" class from #successModal.",
    "Set #modalMessage's text to \"Thank you, <name>! You have successfully registered.\" using the entered name.",
    "Attach a click listener to #closeModalBtn that re-adds the \"hidden\" class to #successModal.",
  ],
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
  instructions: [
    "Attach a click event listener to every [data-toggle] button.",
    "On each click, toggle the \"active\" class on the clicked button.",
    "Update the button's aria-pressed attribute to \"true\" when ON and \"false\" when OFF.",
    "Update the row's [data-state-text] label to \"On\" or \"Off\" to match the new state.",
    "Make sure each toggle works independently and repeated clicks correctly flip the state every time.",
  ],
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
  instructions: [
    "Implement validateEmail() to require a validly formatted email address.",
    "Implement validatePhone() to require exactly 10 digits (numbers only).",
    "Implement validatePassword() to require at least 6 characters.",
    "Implement validateConfirmPassword() to require a non-empty value that exactly matches Password.",
    "Attach a submit listener that calls preventDefault() and runs all five validations on every submit.",
    "Show #formSuccess and reset the form only when every validation passes; otherwise keep it hidden.",
  ],
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
  instructions: [
    "Add a max-width: 768px media query in style.css that makes .hamburger-btn visible.",
    "In that media query, hide .nav-links by default and stack its items vertically (column direction) when visible.",
    "Add a .nav-links.open rule that reveals the links full-width below the navbar with a background color matching the navbar.",
    "Attach a click listener to #hamburgerBtn that toggles the \"open\" class on #navLinks.",
    "Update #hamburgerBtn's aria-expanded attribute to \"true\" when open and \"false\" when closed.",
    "Ensure clicking the hamburger again closes the menu, and the desktop layout above 768px stays unaffected.",
  ],
  starterFiles: {
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Career Portal</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <nav class=\"navbar\">\n    <div class=\"navbar-brand\">Career Portal</div>\n\n    <button id=\"hamburgerBtn\" class=\"hamburger-btn\" type=\"button\" aria-label=\"Toggle navigation\" aria-expanded=\"false\">\n      <span class=\"bar\"></span>\n      <span class=\"bar\"></span>\n      <span class=\"bar\"></span>\n    </button>\n\n    <ul id=\"navLinks\" class=\"nav-links\">\n      <li><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">Jobs</a></li>\n      <li><a href=\"#\">Companies</a></li>\n      <li><a href=\"#\">Resources</a></li>\n      <li><a href=\"#\">Login</a></li>\n    </ul>\n  </nav>\n\n  <main class=\"page-content\">\n    <h1>Find Your Next Opportunity</h1>\n    <p>\n      Resize the browser window to a narrow width to see the hamburger menu\n      appear. On desktop widths, all navigation links are shown directly.\n    </p>\n  </main>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
    "style.css": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  background-color: #f4f6f9;\n  color: #222;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #1f2a44;\n  color: #fff;\n  padding: 14px 32px;\n  position: relative;\n}\n\n.navbar-brand {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.nav-links {\n  list-style: none;\n  display: flex;\n  gap: 28px;\n  margin: 0;\n  padding: 0;\n}\n\n.nav-links a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 15px;\n}\n\n.nav-links a:hover {\n  text-decoration: underline;\n}\n\n/* Hamburger button - hidden on desktop by default */\n.hamburger-btn {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.hamburger-btn .bar {\n  width: 100%;\n  height: 3px;\n  background-color: #fff;\n  border-radius: 2px;\n}\n\n.page-content {\n  max-width: 640px;\n  margin: 48px auto;\n  padding: 0 24px;\n  text-align: center;\n}\n\n.page-content p {\n  color: #555;\n  line-height: 1.6;\n}\n\n/* ============================================\n   TODO (Student CSS objective):\n\n   Add a media query for small screens (max-width: 768px) that:\n\n   1. Shows the hamburger button (`.hamburger-btn`) \u2014 it is hidden by\n      default above.\n   2. Changes `.nav-links` so it is hidden by default on small screens,\n      and stacks vertically (column direction) when it is visible.\n   3. Adds styling for a `.nav-links.open` state so that when JavaScript\n      adds the \"open\" class, the links become visible again, positioned\n      below the navbar (e.g. using `position: absolute` under the navbar,\n      full width, with a background color matching the navbar).\n\n   See TASK.md for exact requirements.\n   ============================================ */\n",
    "script.js": "// Career Portal - script.js\n//\n// DOM references are already set up for you below.\n// Read TASK.md for the exact objectives you must complete.\n\nconst hamburgerBtn = document.getElementById(\"hamburgerBtn\");\nconst navLinks = document.getElementById(\"navLinks\");\n\nconsole.log(\"Career Portal navbar script loaded.\");\n\n// TODO (Student JavaScript objective):\n//\n// 1. Attach a \"click\" event listener to `hamburgerBtn`.\n// 2. On each click, toggle the \"open\" class on `navLinks` (this class\n//    has matching CSS you will add for the mobile expanded state).\n// 3. Update `hamburgerBtn`'s \"aria-expanded\" attribute to match the new\n//    state (\"true\" when the menu is open, \"false\" when closed).\n// 4. Clicking the hamburger again (while the menu is open) must close it.\n//\n// See TASK.md for full requirements.\n",
  },
};

export const tasks: Task[] = [task01, task02, task03, task04, task05, task06];

export function getTaskById(taskId: string): Task | undefined {
  return tasks.find((task) => task.id === taskId);
}
