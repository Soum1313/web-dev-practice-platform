import type { ValidationTest } from "../types/validation";

/**
 * Behavior-first validators: these test the resulting DOM state after
 * simulated interaction (click/type/submit), never the student's source
 * code, so any correct implementation passes regardless of syntax choice.
 *
 * Covers every task on the platform: HTML, CSS, HTML + CSS, JavaScript,
 * JS Fundamentals, Full Project, and the Practice Bank.
 */
export const validators: Record<string, ValidationTest[]> = {
  "task-01": [
    {
      id: "counter.initial",
      description: "Count starts at 0",
      points: 5,
      visibility: "public",
      hint: "Check the initial text inside the #count element in index.html.",
      run: (ctx) => ctx.text("#count") === "0",
    },
    {
      id: "counter.increment",
      description: "Clicking + increases the count by 1",
      points: 20,
      visibility: "public",
      hint: "Make sure your click listener on #increment updates #count's text.",
      run: async (ctx) => {
        ctx.click("#increment");
        await ctx.wait(30);
        return ctx.text("#count") === "1";
      },
    },
    {
      id: "counter.multiple-increments",
      description: "Clicking + three times results in a count of 3",
      points: 15,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#increment");
        ctx.click("#increment");
        ctx.click("#increment");
        await ctx.wait(30);
        return ctx.text("#count") === "3";
      },
    },
    {
      id: "counter.decrement",
      description: "Clicking - decreases the count by 1",
      points: 20,
      visibility: "public",
      hint: "Make sure your click listener on #decrement updates #count's text.",
      run: async (ctx) => {
        ctx.click("#increment");
        ctx.click("#increment");
        ctx.click("#decrement");
        await ctx.wait(30);
        return ctx.text("#count") === "1";
      },
    },
    {
      id: "counter.zero-boundary",
      description: "Count cannot go below 0",
      points: 25,
      visibility: "public",
      hint: "Check the count's current value before decrementing, and do nothing if it's already 0.",
      run: async (ctx) => {
        ctx.click("#decrement");
        await ctx.wait(30);
        return ctx.text("#count") === "0";
      },
    },
    {
      id: "counter.repeated-zero-boundary",
      description: "Repeated clicks on - at 0 keep the count at 0",
      points: 15,
      visibility: "hidden",
      run: async (ctx) => {
        for (let i = 0; i < 5; i++) ctx.click("#decrement");
        await ctx.wait(30);
        return ctx.text("#count") === "0";
      },
    },
  ],

  "task-02": [
    {
      id: "dashboard.status-id",
      description: 'The status <span> has id="studentStatus"',
      points: 10,
      visibility: "public",
      hint: 'Add id="studentStatus" to the <span> showing "Active" in index.html.',
      run: (ctx) => !!ctx.qs("#studentStatus"),
    },
    {
      id: "dashboard.button-exists",
      description: "The Mark Profile Reviewed button exists",
      points: 5,
      visibility: "public",
      run: (ctx) => !!ctx.qs("#markCompleteBtn"),
    },
    {
      id: "dashboard.status-styled",
      description: "The status badge has a background colour and padding",
      points: 20,
      visibility: "public",
      hint: "Add a #studentStatus rule in style.css with background-color and padding.",
      run: (ctx) => {
        const bg = ctx.computedStyle("#studentStatus", "backgroundColor");
        const padding = ctx.computedStyle("#studentStatus", "paddingLeft");
        const hasBackground = !!bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent";
        const hasPadding = !!padding && padding !== "0px";
        return hasBackground && hasPadding;
      },
    },
    {
      id: "dashboard.click-reveals-message",
      description: "Clicking the button reveals the action message",
      points: 30,
      visibility: "public",
      hint: 'Remove the "hidden" class from #actionMessage inside your click handler.',
      run: async (ctx) => {
        ctx.click("#markCompleteBtn");
        await ctx.wait(30);
        return ctx.isVisible("#actionMessage");
      },
    },
    {
      id: "dashboard.message-text",
      description: 'The action message reads "Profile reviewed successfully."',
      points: 20,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#markCompleteBtn");
        await ctx.wait(30);
        return ctx.text("#actionMessage") === "Profile reviewed successfully.";
      },
    },
    {
      id: "dashboard.repeat-click-stable",
      description: "Clicking the button again keeps the message visible and correct",
      points: 15,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.click("#markCompleteBtn");
        ctx.click("#markCompleteBtn");
        await ctx.wait(30);
        return ctx.isVisible("#actionMessage") && ctx.text("#actionMessage") === "Profile reviewed successfully.";
      },
    },
  ],

  "task-03": [
    {
      id: "registration.structure",
      description: "The form and its required fields exist",
      points: 10,
      visibility: "public",
      run: (ctx) => !!ctx.qs("#registrationForm") && !!ctx.qs("#fullName") && !!ctx.qs("#email") && !!ctx.qs("#course"),
    },
    {
      id: "registration.empty-name-blocked",
      description: "Submitting with an empty name does not show the success popup",
      points: 15,
      visibility: "public",
      hint: "Check that all required fields are non-empty before showing the popup.",
      run: async (ctx) => {
        ctx.type("#email", "student@example.com");
        ctx.select("#course", "web-dev");
        ctx.submitForm("#registrationForm");
        await ctx.wait(30);
        return !ctx.isVisible("#successModal");
      },
    },
    {
      id: "registration.empty-email-blocked",
      description: "Submitting with an empty email does not show the success popup",
      points: 15,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#fullName", "Test Student");
        ctx.select("#course", "web-dev");
        ctx.submitForm("#registrationForm");
        await ctx.wait(30);
        return !ctx.isVisible("#successModal");
      },
    },
    {
      id: "registration.all-empty-blocked",
      description: "Submitting a fully empty form does not show the success popup",
      points: 10,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.submitForm("#registrationForm");
        await ctx.wait(30);
        return !ctx.isVisible("#successModal");
      },
    },
    {
      id: "registration.valid-submit-shows-modal",
      description: "A fully filled form shows the success popup on submit",
      points: 25,
      visibility: "public",
      hint: "Remove the \"hidden\" class from #successModal once every required field is filled.",
      run: async (ctx) => {
        ctx.type("#fullName", "Test Student");
        ctx.type("#email", "student@example.com");
        ctx.select("#course", "web-dev");
        ctx.submitForm("#registrationForm");
        await ctx.wait(30);
        return ctx.isVisible("#successModal");
      },
    },
    {
      id: "registration.success-message",
      description: "The success message includes the entered name",
      points: 25,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#fullName", "Priya Sharma");
        ctx.type("#email", "priya@example.com");
        ctx.select("#course", "data-science");
        ctx.submitForm("#registrationForm");
        await ctx.wait(30);
        const message = ctx.text("#modalMessage") ?? "";
        return message.includes("Priya Sharma");
      },
    },
  ],

  "task-04": [
    {
      id: "toggle.initial-all-off",
      description: "All three toggles start in the OFF state",
      points: 10,
      visibility: "public",
      run: (ctx) => {
        const buttons = ctx.qsa("[data-toggle]");
        return buttons.length === 3 && buttons.every((btn) => !btn.classList.contains("active"));
      },
    },
    {
      id: "toggle.email-on",
      description: "Clicking Email Notifications turns it ON",
      points: 20,
      visibility: "public",
      hint: 'Toggle the "active" class and update the row\'s state-text label on click.',
      run: async (ctx) => {
        ctx.click('[data-setting="notifications"] [data-toggle]');
        await ctx.wait(30);
        const btn = ctx.qs('[data-setting="notifications"] [data-toggle]');
        const label = ctx.text('[data-setting="notifications"] [data-state-text]');
        return !!btn?.classList.contains("active") && label === "On";
      },
    },
    {
      id: "toggle.email-off-again",
      description: "Clicking Email Notifications again turns it back OFF",
      points: 15,
      visibility: "public",
      run: async (ctx) => {
        ctx.click('[data-setting="notifications"] [data-toggle]');
        ctx.click('[data-setting="notifications"] [data-toggle]');
        await ctx.wait(30);
        const btn = ctx.qs('[data-setting="notifications"] [data-toggle]');
        const label = ctx.text('[data-setting="notifications"] [data-state-text]');
        return !btn?.classList.contains("active") && label === "Off";
      },
    },
    {
      id: "toggle.dark-mode-independent",
      description: "Toggling Dark Mode does not affect the other switches",
      points: 20,
      visibility: "public",
      run: async (ctx) => {
        ctx.click('[data-setting="darkMode"] [data-toggle]');
        await ctx.wait(30);
        const darkOn = ctx.qs('[data-setting="darkMode"] [data-toggle]')?.classList.contains("active");
        const notifOff = !ctx.qs('[data-setting="notifications"] [data-toggle]')?.classList.contains("active");
        const jobsOff = !ctx.qs('[data-setting="jobAlerts"] [data-toggle]')?.classList.contains("active");
        return !!darkOn && notifOff && jobsOff;
      },
    },
    {
      id: "toggle.job-alerts-independent",
      description: "Toggling Job Alerts does not affect the other switches",
      points: 15,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.click('[data-setting="jobAlerts"] [data-toggle]');
        await ctx.wait(30);
        const jobsOn = ctx.qs('[data-setting="jobAlerts"] [data-toggle]')?.classList.contains("active");
        const darkOff = !ctx.qs('[data-setting="darkMode"] [data-toggle]')?.classList.contains("active");
        return !!jobsOn && darkOff;
      },
    },
    {
      id: "toggle.aria-pressed",
      description: "aria-pressed reflects the toggle's current state",
      points: 10,
      visibility: "public",
      run: async (ctx) => {
        ctx.click('[data-setting="notifications"] [data-toggle]');
        await ctx.wait(30);
        return ctx.qs('[data-setting="notifications"] [data-toggle]')?.getAttribute("aria-pressed") === "true";
      },
    },
    {
      id: "toggle.repeated-flip",
      description: "Four clicks on the same toggle return it to OFF",
      points: 10,
      visibility: "hidden",
      run: async (ctx) => {
        const sel = '[data-setting="notifications"] [data-toggle]';
        ctx.click(sel);
        ctx.click(sel);
        ctx.click(sel);
        ctx.click(sel);
        await ctx.wait(30);
        return !ctx.qs(sel)?.classList.contains("active");
      },
    },
  ],

  "task-05": [
    {
      id: "form.empty-name-error",
      description: "An empty name shows an error on submit",
      points: 10,
      visibility: "public",
      run: async (ctx) => {
        ctx.submitForm("#registrationForm");
        await ctx.wait(30);
        return ctx.qs("#fullName")?.classList.contains("error") ?? false;
      },
    },
    {
      id: "form.invalid-email",
      description: "An invalid email format shows an error",
      points: 15,
      visibility: "public",
      hint: "validateEmail() should reject a value that doesn't look like name@domain.com.",
      run: async (ctx) => {
        ctx.type("#fullName", "Test Student");
        ctx.type("#email", "not-an-email");
        ctx.submitForm("#registrationForm");
        await ctx.wait(30);
        return ctx.qs("#email")?.classList.contains("error") ?? false;
      },
    },
    {
      id: "form.invalid-phone",
      description: "A phone number that isn't exactly 10 digits shows an error",
      points: 15,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#fullName", "Test Student");
        ctx.type("#email", "student@example.com");
        ctx.type("#phone", "123");
        ctx.submitForm("#registrationForm");
        await ctx.wait(30);
        return ctx.qs("#phone")?.classList.contains("error") ?? false;
      },
    },
    {
      id: "form.short-password",
      description: "A password under 6 characters shows an error",
      points: 15,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#fullName", "Test Student");
        ctx.type("#email", "student@example.com");
        ctx.type("#phone", "9876543210");
        ctx.type("#password", "123");
        ctx.submitForm("#registrationForm");
        await ctx.wait(30);
        return ctx.qs("#password")?.classList.contains("error") ?? false;
      },
    },
    {
      id: "form.mismatched-confirm",
      description: "A confirm-password that doesn't match shows an error",
      points: 15,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#fullName", "Test Student");
        ctx.type("#email", "student@example.com");
        ctx.type("#phone", "9876543210");
        ctx.type("#password", "secret1");
        ctx.type("#confirmPassword", "secret2");
        ctx.submitForm("#registrationForm");
        await ctx.wait(30);
        return ctx.qs("#confirmPassword")?.classList.contains("error") ?? false;
      },
    },
    {
      id: "form.valid-submission",
      description: "A fully valid form shows the success message with no errors",
      points: 30,
      visibility: "public",
      hint: "When all five validation functions return true, remove \"hidden\" from #formSuccess.",
      run: async (ctx) => {
        ctx.type("#fullName", "Test Student");
        ctx.type("#email", "student@example.com");
        ctx.type("#phone", "9876543210");
        ctx.type("#password", "secret1");
        ctx.type("#confirmPassword", "secret1");
        ctx.submitForm("#registrationForm");
        await ctx.wait(30);
        const noErrors = !ctx.qsa(".form-group input.error").length;
        return ctx.isVisible("#formSuccess") && noErrors;
      },
    },
  ],

  "task-06": [
    {
      id: "navbar.desktop-hides-hamburger",
      description: "The hamburger button is hidden on a desktop-width screen",
      points: 20,
      visibility: "public",
      viewport: { width: 1280, height: 800 },
      run: (ctx) => !ctx.isVisible("#hamburgerBtn"),
    },
    {
      id: "navbar.mobile-shows-hamburger",
      description: "The hamburger button appears on a narrow screen",
      points: 20,
      visibility: "public",
      viewport: { width: 375, height: 800 },
      hint: "Add a max-width: 768px media query that makes .hamburger-btn visible.",
      run: (ctx) => ctx.isVisible("#hamburgerBtn"),
    },
    {
      id: "navbar.mobile-links-hidden-initially",
      description: "The nav links are not shown by default on a narrow screen",
      points: 15,
      visibility: "public",
      viewport: { width: 375, height: 800 },
      run: (ctx) => !ctx.isVisible("#navLinks") || !ctx.qs("#navLinks")?.classList.contains("open"),
    },
    {
      id: "navbar.hamburger-opens-menu",
      description: "Clicking the hamburger reveals the nav links",
      points: 25,
      visibility: "public",
      viewport: { width: 375, height: 800 },
      hint: 'Toggle the "open" class on #navLinks when #hamburgerBtn is clicked.',
      run: async (ctx) => {
        ctx.click("#hamburgerBtn");
        await ctx.wait(30);
        return !!ctx.qs("#navLinks")?.classList.contains("open");
      },
    },
    {
      id: "navbar.hamburger-closes-menu",
      description: "Clicking the hamburger again hides the nav links and updates aria-expanded",
      points: 20,
      visibility: "hidden",
      viewport: { width: 375, height: 800 },
      run: async (ctx) => {
        ctx.click("#hamburgerBtn");
        ctx.click("#hamburgerBtn");
        await ctx.wait(30);
        const closed = !ctx.qs("#navLinks")?.classList.contains("open");
        const ariaFalse = ctx.qs("#hamburgerBtn")?.getAttribute("aria-expanded") === "false";
        return closed && ariaFalse;
      },
    },
  ],

  "day3-03": [
    {
      id: "faq.initial-all-hidden",
      description: "All three answers are hidden initially",
      points: 10,
      visibility: "public",
      run: (ctx) => {
        const answers = ctx.qsa(".faq-answer");
        return answers.length === 3 && answers.every((a) => a.classList.contains("hidden"));
      },
    },
    {
      id: "faq.question-1-opens",
      description: "Clicking the first question reveals its answer",
      points: 25,
      visibility: "public",
      hint: "Toggle the \"hidden\" class on the answer paragraph inside the same .faq-item.",
      run: async (ctx) => {
        const buttons = ctx.qsa(".faq-question");
        ctx.click(buttons[0]);
        await ctx.wait(30);
        const answers = ctx.qsa(".faq-answer");
        return !answers[0].classList.contains("hidden");
      },
    },
    {
      id: "faq.question-1-closes",
      description: "Clicking the first question again hides its answer",
      points: 20,
      visibility: "public",
      run: async (ctx) => {
        const buttons = ctx.qsa(".faq-question");
        ctx.click(buttons[0]);
        ctx.click(buttons[0]);
        await ctx.wait(30);
        const answers = ctx.qsa(".faq-answer");
        return answers[0].classList.contains("hidden");
      },
    },
    {
      id: "faq.question-2-independent",
      description: "The second question opens independently of the first",
      points: 25,
      visibility: "public",
      run: async (ctx) => {
        const buttons = ctx.qsa(".faq-question");
        ctx.click(buttons[1]);
        await ctx.wait(30);
        const answers = ctx.qsa(".faq-answer");
        return !answers[1].classList.contains("hidden") && answers[0].classList.contains("hidden");
      },
    },
    {
      id: "faq.question-3-opens",
      description: "The third question opens correctly",
      points: 20,
      visibility: "hidden",
      run: async (ctx) => {
        const buttons = ctx.qsa(".faq-question");
        ctx.click(buttons[2]);
        await ctx.wait(30);
        const answers = ctx.qsa(".faq-answer");
        return !answers[2].classList.contains("hidden");
      },
    },
  ],

  "day3-04": [
    {
      id: "charcount.initial",
      description: "The counter starts at 0",
      points: 10,
      visibility: "public",
      run: (ctx) => ctx.text("#charCount") === "0",
    },
    {
      id: "charcount.updates-live",
      description: 'Typing "Hello" updates the counter to 5',
      points: 30,
      visibility: "public",
      hint: 'Listen for the "input" event on #feedbackInput and update #charCount with the value\'s length.',
      run: async (ctx) => {
        ctx.type("#feedbackInput", "Hello");
        await ctx.wait(30);
        return ctx.text("#charCount") === "5";
      },
    },
    {
      id: "charcount.warning-near-limit",
      description: "A warning style appears once the count reaches 90 or more",
      points: 30,
      visibility: "public",
      hint: 'Add the "warning" class to #charCount once the length is >= 90.',
      run: async (ctx) => {
        ctx.type("#feedbackInput", "a".repeat(92));
        await ctx.wait(30);
        const count = ctx.text("#charCount") === "92";
        const warning = ctx.qs("#charCount")?.classList.contains("warning");
        return count && !!warning;
      },
    },
    {
      id: "charcount.warning-clears-below-threshold",
      description: "The warning style is removed again when the count drops back below 90",
      points: 30,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.type("#feedbackInput", "a".repeat(92));
        ctx.type("#feedbackInput", "a".repeat(20));
        await ctx.wait(30);
        const count = ctx.text("#charCount") === "20";
        const warning = ctx.qs("#charCount")?.classList.contains("warning");
        return count && !warning;
      },
    },
  ],
  "jsfund-01": [
    {
      id: "closures.independent-increment",
      description: "Incrementing Counter A three times leaves Counter B untouched",
      points: 30,
      visibility: "public",
      hint: "Each createCounter() call must keep its own private count variable via a closure, not a shared/global one.",
      run: async (ctx) => {
        ctx.click("#incrementA");
        ctx.click("#incrementA");
        ctx.click("#incrementA");
        await ctx.wait(30);
        return ctx.text("#displayA") === "3" && ctx.text("#displayB") === "0";
      },
    },
    {
      id: "closures.independent-both",
      description: "Counter B updates independently after Counter A has already changed",
      points: 35,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#incrementA");
        ctx.click("#incrementA");
        ctx.click("#incrementA");
        ctx.click("#incrementB");
        await ctx.wait(30);
        return ctx.text("#displayA") === "3" && ctx.text("#displayB") === "1";
      },
    },
    {
      id: "closures.decrement-independent",
      description: "Decrementing each counter only affects that counter",
      points: 35,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.click("#incrementA");
        ctx.click("#incrementA");
        ctx.click("#incrementB");
        ctx.click("#decrementA");
        ctx.click("#decrementB");
        await ctx.wait(30);
        return ctx.text("#displayA") === "1" && ctx.text("#displayB") === "0";
      },
    },
  ],
  "jsfund-02": [
    {
      id: "hof.initial-render",
      description: "All 5 tasks render on first load",
      points: 15,
      visibility: "public",
      hint: "Call renderTasks(\"all\") once at the bottom of script.js.",
      run: (ctx) => ctx.qsa("#taskList li").length === 5,
    },
    {
      id: "hof.filter-done",
      description: "The Done filter shows only completed tasks",
      points: 30,
      visibility: "public",
      hint: "Use tasks.filter(task => task.done) for the Done filter.",
      run: async (ctx) => {
        ctx.click("#filterDone");
        await ctx.wait(30);
        return ctx.qsa("#taskList li").length === 2;
      },
    },
    {
      id: "hof.filter-pending",
      description: "The Pending filter shows only incomplete tasks",
      points: 30,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#filterPending");
        await ctx.wait(30);
        return ctx.qsa("#taskList li").length === 3;
      },
    },
    {
      id: "hof.active-filter-style",
      description: "Clicking a filter button marks it active",
      points: 25,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.click("#filterDone");
        await ctx.wait(30);
        return !!ctx.qs("#filterDone")?.classList.contains("active");
      },
    },
  ],
  "jsfund-03": [
    {
      id: "promise.immediate-loading",
      description: "Clicking Load Profile immediately shows a loading state",
      points: 25,
      visibility: "public",
      hint: "Set the loading text synchronously, before awaiting fetchProfile().",
      run: async (ctx) => {
        ctx.click("#loadBtn");
        return ctx.text("#status") === "Loading...";
      },
    },
    {
      id: "promise.settles",
      description: "The status updates once the promise settles",
      points: 25,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#loadBtn");
        await ctx.wait(1500);
        const status = ctx.text("#status");
        return status === "Loaded" || status === "Failed to load profile. Try again.";
      },
    },
    {
      id: "promise.result-consistency",
      description: "The profile card matches the reported status",
      points: 30,
      visibility: "public",
      hint: "On success show the name and role; on failure leave the profile card empty.",
      run: async (ctx) => {
        ctx.click("#loadBtn");
        await ctx.wait(1500);
        const status = ctx.text("#status");
        if (status === "Loaded") {
          const card = ctx.text("#profileCard") ?? "";
          return card.includes("Ananya") && card.includes("Frontend Developer");
        }
        return (ctx.text("#profileCard") ?? "") === "";
      },
    },
    {
      id: "promise.reload-resets-loading",
      description: "Clicking Load Profile again shows the loading state again",
      points: 20,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.click("#loadBtn");
        await ctx.wait(1500);
        ctx.click("#loadBtn");
        return ctx.text("#status") === "Loading...";
      },
    },
  ],
  "jsfund-04": [
    {
      id: "eventloop.three-entries",
      description: "Running once produces exactly three log entries",
      points: 30,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#runBtn");
        await ctx.wait(50);
        return ctx.qsa("#logList li").length === 3;
      },
    },
    {
      id: "eventloop.correct-order",
      description: "The log ends up in event-loop order: sync, microtask, macrotask",
      points: 40,
      visibility: "public",
      hint: "Call logSync(), logTimeout(), logMicrotask() in that source order and let the event loop reorder the output.",
      run: async (ctx) => {
        ctx.click("#runBtn");
        await ctx.wait(50);
        const items = ctx.qsa("#logList li").map((el) => el.textContent?.trim());
        return (
          items[0] === "Synchronous" &&
          items[1] === "Promise (microtask)" &&
          items[2] === "Timeout (macrotask)"
        );
      },
    },
    {
      id: "eventloop.clears-on-rerun",
      description: "Running again clears the previous log instead of appending to it",
      points: 30,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.click("#runBtn");
        await ctx.wait(50);
        ctx.click("#runBtn");
        await ctx.wait(50);
        return ctx.qsa("#logList li").length === 3;
      },
    },
  ],
  "jsfund-05": [
    {
      id: "thisbinding.initial-empty",
      description: "The score output is empty before the button is clicked",
      points: 10,
      visibility: "public",
      run: (ctx) => (ctx.text("#scoreOutput") ?? "") === "",
    },
    {
      id: "thisbinding.correct-after-click",
      description: "Clicking Show Score displays \"Riya: 42\" using the correct `this`",
      points: 90,
      visibility: "public",
      hint: "Use player.showScore.bind(player), an arrow-function wrapper, or call player.showScore() inside a wrapper - don't rename player's properties.",
      run: async (ctx) => {
        ctx.click("#showScoreBtn");
        await ctx.wait(30);
        return ctx.text("#scoreOutput") === "Riya: 42";
      },
    },
  ],
  "jsfund-06": [
    {
      id: "debounce.single-log-after-burst",
      description: "Typing quickly only logs once, after the pause",
      points: 60,
      visibility: "public",
      hint: "debounce(fn, delay) should clearTimeout the previous pending call every time it's invoked again.",
      run: async (ctx) => {
        ctx.type("#searchInput", "h");
        await ctx.wait(50);
        ctx.type("#searchInput", "he");
        await ctx.wait(50);
        ctx.type("#searchInput", "hel");
        await ctx.wait(50);
        ctx.type("#searchInput", "hell");
        await ctx.wait(50);
        ctx.type("#searchInput", "hello");
        await ctx.wait(600);
        return ctx.qsa("#logList li").length === 1;
      },
    },
    {
      id: "debounce.logs-final-value",
      description: "The single logged entry reflects the final typed value",
      points: 40,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#searchInput", "h");
        await ctx.wait(50);
        ctx.type("#searchInput", "he");
        await ctx.wait(50);
        ctx.type("#searchInput", "hello");
        await ctx.wait(600);
        const text = ctx.qsa("#logList li")[0]?.textContent ?? "";
        return text.includes("hello");
      },
    },
  ],
  "jsfund-07": [
    {
      id: "scope.five-buttons",
      description: "Five number buttons are generated",
      points: 10,
      visibility: "public",
      run: (ctx) => ctx.qsa("#buttonRow button").length === 5,
    },
    {
      id: "scope.middle-button-correct",
      description: "Clicking the 3rd button logs its own number, not the last one",
      points: 45,
      visibility: "public",
      hint: "Change var to let in the for-loop so each closure captures its own copy of the loop variable.",
      run: async (ctx) => {
        const buttons = ctx.qsa("#buttonRow button");
        (buttons[2] as HTMLElement)?.click();
        await ctx.wait(30);
        const items = ctx.qsa("#logList li");
        return items[items.length - 1]?.textContent?.trim() === "Button 3 clicked";
      },
    },
    {
      id: "scope.first-button-correct",
      description: "Clicking the 1st button logs its own number too",
      points: 45,
      visibility: "hidden",
      run: async (ctx) => {
        const buttons = ctx.qsa("#buttonRow button");
        (buttons[0] as HTMLElement)?.click();
        await ctx.wait(30);
        const items = ctx.qsa("#logList li");
        return items[items.length - 1]?.textContent?.trim() === "Button 1 clicked";
      },
    },
  ],
  "day1-01": [
    {
      id: "html01.heading-changed",
      description: "The main heading text has been changed",
      points: 30,
      visibility: "public",
      run: (ctx) => {
        const text = ctx.text("h1") ?? "";
        return text.trim() !== "" && text.trim() !== "Student Portal";
      },
    },
    {
      id: "html01.welcome-changed",
      description: "The welcome paragraph has been changed",
      points: 25,
      visibility: "public",
      run: (ctx) => {
        const p = ctx.qsa("p")[0];
        const text = (p?.textContent ?? "").trim();
        return text !== "" && text !== "Welcome to the placement preparation program.";
      },
    },
    {
      id: "html01.status-paragraph-added",
      description: "A new paragraph showing a preparation status was added",
      points: 25,
      visibility: "public",
      hint: "Add a new <p> below the student details (Name/Roll Number/Status).",
      run: (ctx) => ctx.qsa("p").length >= 5,
    },
    {
      id: "html01.button-text-changed",
      description: 'The button text was changed to "See My Profile"',
      points: 20,
      visibility: "public",
      run: (ctx) => (ctx.text("button") ?? "").trim() === "See My Profile",
    },
  ],
  "day1-02": [
    {
      id: "html02.status-id",
      description: 'The status <span> has id="studentStatus"',
      points: 25,
      visibility: "public",
      run: (ctx) => (ctx.text("#studentStatus") ?? "").includes("Active"),
    },
    {
      id: "html02.shared-class",
      description: 'Both buttons share class="profile-btn"',
      points: 25,
      visibility: "public",
      run: (ctx) => ctx.qsa("button.profile-btn").length === 2,
    },
    {
      id: "html02.view-profile-id",
      description: 'The "View Profile" button has id="viewProfileBtn"',
      points: 25,
      visibility: "public",
      run: (ctx) => (ctx.text("#viewProfileBtn") ?? "").trim() === "View Profile",
    },
    {
      id: "html02.edit-profile-id",
      description: 'The "Edit Profile" button has id="editProfileBtn"',
      points: 25,
      visibility: "hidden",
      run: (ctx) => (ctx.text("#editProfileBtn") ?? "").trim() === "Edit Profile",
    },
  ],
  "day1-03": [
    {
      id: "css01.heading-color",
      description: "The <h1> heading colour was changed",
      points: 20,
      visibility: "public",
      run: (ctx) => ctx.computedStyle("h1", "color") !== "rgb(0, 0, 0)",
    },
    {
      id: "css01.card-background",
      description: "The card has a background colour",
      points: 15,
      visibility: "public",
      run: (ctx) => {
        const bg = ctx.computedStyle(".card", "backgroundColor");
        return !!bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent";
      },
    },
    {
      id: "css01.card-padding",
      description: "The card has padding",
      points: 15,
      visibility: "public",
      run: (ctx) => ctx.computedStyle(".card", "paddingTop") !== "0px",
    },
    {
      id: "css01.card-border",
      description: "The card has a visible border",
      points: 15,
      visibility: "public",
      run: (ctx) => {
        const width = ctx.computedStyle(".card", "borderTopWidth");
        const style = ctx.computedStyle(".card", "borderTopStyle");
        return width !== "0px" && style !== "none";
      },
    },
    {
      id: "css01.card-radius",
      description: "The card's corners are rounded",
      points: 15,
      visibility: "public",
      run: (ctx) => ctx.computedStyle(".card", "borderTopLeftRadius") !== "0px",
    },
    {
      id: "css01.paragraph-margin",
      description: "There is margin spacing between the paragraphs in the card",
      points: 10,
      visibility: "hidden",
      run: (ctx) => {
        const p = ctx.qsa(".card p")[0];
        if (!p) return false;
        const style = ctx.win.getComputedStyle(p);
        return style.marginTop !== "0px" || style.marginBottom !== "0px";
      },
    },
    {
      id: "css01.button-styled",
      description: "The button has a background colour and text colour",
      points: 10,
      visibility: "hidden",
      run: (ctx) => ctx.computedStyle(".card button", "color") !== "rgb(0, 0, 0)",
    },
  ],
  "day1-04": [
    {
      id: "css02.element-selector",
      description: "All paragraphs are styled via an element selector",
      points: 25,
      visibility: "public",
      run: (ctx) => {
        const ps = ctx.qsa("p");
        if (ps.length < 2) return false;
        const c0 = ctx.win.getComputedStyle(ps[0]).color;
        const c1 = ctx.win.getComputedStyle(ps[1]).color;
        return c0 === c1 && c0 !== "rgb(0, 0, 0)";
      },
    },
    {
      id: "css02.id-selector",
      description: "The status is styled distinctly via its ID selector",
      points: 25,
      visibility: "public",
      run: (ctx) => {
        const pColor = ctx.win.getComputedStyle(ctx.qsa("p")[0]).color;
        const statusColor = ctx.computedStyle("#status", "color");
        const statusBg = ctx.computedStyle("#status", "backgroundColor");
        return statusColor !== pColor || (!!statusBg && statusBg !== "rgba(0, 0, 0, 0)");
      },
    },
    {
      id: "css02.class-selector",
      description: "Both buttons are styled via their shared class selector",
      points: 25,
      visibility: "public",
      run: (ctx) => {
        const btns = ctx.qsa(".primary-btn");
        if (btns.length !== 2) return false;
        const c0 = ctx.win.getComputedStyle(btns[0]).backgroundColor;
        const c1 = ctx.win.getComputedStyle(btns[1]).backgroundColor;
        return c0 === c1 && c0 !== "rgba(0, 0, 0, 0)";
      },
    },
    {
      id: "css02.status-distinct",
      description: "The status is visually distinct (background, bold, or padding)",
      points: 25,
      visibility: "hidden",
      run: (ctx) => {
        const bg = ctx.computedStyle("#status", "backgroundColor");
        const weight = ctx.computedStyle("#status", "fontWeight");
        const padding = ctx.computedStyle("#status", "paddingTop");
        return (!!bg && bg !== "rgba(0, 0, 0, 0)") || Number(weight) >= 600 || padding !== "0px";
      },
    },
  ],
  "day1-05": [
    {
      id: "js01.no-errors",
      description: "The page still loads correctly after selecting the element",
      points: 100,
      visibility: "public",
      hint: 'Use document.getElementById("message") and store it in a variable.',
      run: (ctx) => (ctx.text("#message") ?? "") === "Hello",
    },
  ],
  "day1-06": [
    {
      id: "js02.text-not-default",
      description: "The message text is no longer the original placeholder",
      points: 30,
      visibility: "public",
      run: (ctx) => (ctx.text("#message") ?? "") !== "Old Message",
    },
    {
      id: "js02.exact-text",
      description: 'The message reads exactly "Welcome to Web Development Practice"',
      points: 70,
      visibility: "public",
      run: (ctx) => ctx.text("#message") === "Welcome to Web Development Practice",
    },
  ],
  "day1-07": [
    {
      id: "js03.initial-waiting",
      description: 'The message initially reads "Waiting..."',
      points: 10,
      visibility: "public",
      run: (ctx) => ctx.text("#message") === "Waiting...",
    },
    {
      id: "js03.click-changes-text",
      description: 'Clicking the button changes the message to "Button clicked!"',
      points: 90,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#btn");
        await ctx.wait(30);
        return ctx.text("#message") === "Button clicked!";
      },
    },
  ],
  "day1-08": [
    {
      id: "js04.alert-triggered",
      description: "Clicking Submit shows a popup",
      points: 40,
      visibility: "public",
      hint: "Use alert(...) inside a click listener on #submitBtn.",
      run: async (ctx) => {
        ctx.click("#submitBtn");
        await ctx.wait(30);
        return (ctx.win as any).__alerts.length > 0;
      },
    },
    {
      id: "js04.alert-message",
      description: 'The popup reads exactly "Registration successful!"',
      points: 60,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#submitBtn");
        await ctx.wait(30);
        return (ctx.win as any).__alerts.includes("Registration successful!");
      },
    },
  ],
  "day1-09": [
    {
      id: "js05.empty-name-blocked",
      description: "Clicking Register with an empty name shows the correct error popup",
      points: 40,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#registerBtn");
        await ctx.wait(30);
        return (ctx.win as any).__alerts.includes("Please enter your name.");
      },
    },
    {
      id: "js05.valid-name-success",
      description: "Clicking Register with a name shows the success popup",
      points: 60,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#nameInput", "Ananya");
        ctx.click("#registerBtn");
        await ctx.wait(30);
        return (ctx.win as any).__alerts.includes("Registration successful!");
      },
    },
  ],
  "day1-10": [
    {
      id: "js06.initial-visible",
      description: "The message is visible initially",
      points: 10,
      visibility: "public",
      run: (ctx) => ctx.isVisible("#message"),
    },
    {
      id: "js06.hide-works",
      description: "Clicking Hide Message hides the message",
      points: 50,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#hideBtn");
        await ctx.wait(30);
        return !ctx.isVisible("#message");
      },
    },
    {
      id: "js06.show-works",
      description: "Clicking Show Message reveals the message again",
      points: 40,
      visibility: "hidden",
      hint: "Optional challenge: give #showBtn a click listener that sets display back.",
      run: async (ctx) => {
        ctx.click("#hideBtn");
        await ctx.wait(30);
        ctx.click("#showBtn");
        await ctx.wait(30);
        return ctx.isVisible("#message");
      },
    },
  ],
  "day1-11": [
    {
      id: "htmlcss01.status-id",
      description: 'The status span has id="studentStatus"',
      points: 15,
      visibility: "public",
      run: (ctx) => (ctx.text("#studentStatus") ?? "").includes("Active"),
    },
    {
      id: "htmlcss01.button-class",
      description: 'The button has class="profile-btn"',
      points: 15,
      visibility: "public",
      run: (ctx) => ctx.qsa("button.profile-btn").length === 1,
    },
    {
      id: "htmlcss01.card-styled",
      description: "The card has a visible border, padding, and rounded corners",
      points: 25,
      visibility: "public",
      run: (ctx) => {
        const borderWidth = ctx.computedStyle(".card", "borderTopWidth");
        const padding = ctx.computedStyle(".card", "paddingTop");
        const radius = ctx.computedStyle(".card", "borderTopLeftRadius");
        return borderWidth !== "0px" && padding !== "0px" && radius !== "0px";
      },
    },
    {
      id: "htmlcss01.status-background",
      description: "The status has a background colour",
      points: 20,
      visibility: "public",
      run: (ctx) => {
        const bg = ctx.computedStyle("#studentStatus", "backgroundColor");
        return !!bg && bg !== "rgba(0, 0, 0, 0)";
      },
    },
    {
      id: "htmlcss01.button-styled",
      description: "The button has a background colour and text colour",
      points: 15,
      visibility: "hidden",
      run: (ctx) => {
        const bg = ctx.computedStyle(".profile-btn", "backgroundColor");
        return !!bg && bg !== "rgba(0, 0, 0, 0)";
      },
    },
    {
      id: "htmlcss01.spacing",
      description: "There is margin spacing between elements inside the card",
      points: 10,
      visibility: "hidden",
      run: (ctx) => {
        const el = ctx.qsa(".card h2")[0] ?? ctx.qsa(".card p")[0];
        if (!el) return false;
        const style = ctx.win.getComputedStyle(el);
        return style.marginTop !== "0px" || style.marginBottom !== "0px";
      },
    },
  ],
  "day1-12": [
    {
      id: "fullproj1.ids-assigned",
      description: "The name input, status span, and register button all have the correct ids",
      points: 15,
      visibility: "public",
      run: (ctx) => !!ctx.qs("#studentName") && !!ctx.qs("#status") && !!ctx.qs("#registerBtn"),
    },
    {
      id: "fullproj1.status-styled",
      description: "The status is styled with background colour and padding",
      points: 15,
      visibility: "public",
      run: (ctx) => {
        const bg = ctx.computedStyle("#status", "backgroundColor");
        const padding = ctx.computedStyle("#status", "paddingTop");
        return !!bg && bg !== "rgba(0, 0, 0, 0)" && padding !== "0px";
      },
    },
    {
      id: "fullproj1.button-styled",
      description: "The button is styled with background and text colour",
      points: 10,
      visibility: "hidden",
      run: (ctx) => {
        const bg = ctx.computedStyle("#registerBtn", "backgroundColor");
        return !!bg && bg !== "rgba(0, 0, 0, 0)";
      },
    },
    {
      id: "fullproj1.empty-name-blocked",
      description: "Clicking Register with an empty name shows the error popup and doesn't register",
      points: 25,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#registerBtn");
        await ctx.wait(30);
        return (ctx.win as any).__alerts.includes("Please enter your name.") && ctx.text("#status") === "Not Registered";
      },
    },
    {
      id: "fullproj1.valid-name-registers",
      description: 'A filled name registers: status becomes "Registered" and a success popup shows',
      points: 35,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#studentName", "Ananya");
        ctx.click("#registerBtn");
        await ctx.wait(30);
        return ctx.text("#status") === "Registered" && (ctx.win as any).__alerts.includes("Registration successful!");
      },
    },
  ],
  "day5-final-simulation": [
    {
      id: "leave.status-has-id",
      description: "The status element has an id so it can be targeted",
      points: 10,
      visibility: "public",
      run: (ctx) => (ctx.qs(".status-text")?.id ?? "") !== "",
    },
    {
      id: "leave.status-styled",
      description: "The status text is styled to stand out once changed",
      points: 15,
      visibility: "hidden",
      run: (ctx) => {
        const el = ctx.qs(".status-text");
        if (!el) return false;
        const style = ctx.win.getComputedStyle(el);
        const bg = style.backgroundColor;
        return (!!bg && bg !== "rgba(0, 0, 0, 0)") || style.paddingLeft !== "0px";
      },
    },
    {
      id: "leave.empty-fields-blocked",
      description: "Submitting with empty fields is blocked and shows an error",
      points: 30,
      visibility: "public",
      run: async (ctx) => {
        ctx.submitForm("#leaveForm");
        await ctx.wait(30);
        return ctx.text(".status-text") === "Not Submitted";
      },
    },
    {
      id: "leave.valid-submission",
      description: "A fully filled form submits successfully: status updates, a popup shows, fields clear",
      points: 45,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#employeeName", "Ananya");
        ctx.select("#leaveType", "sick");
        ctx.type("#reason", "Not feeling well");
        ctx.submitForm("#leaveForm");
        await ctx.wait(30);
        const statusChanged = ctx.text(".status-text") !== "Not Submitted";
        const alerted = (ctx.win as any).__alerts.length > 0;
        const nameEl = ctx.qs("#employeeName") as HTMLInputElement | null;
        const cleared = !nameEl || nameEl.value === "";
        return statusChanged && alerted && cleared;
      },
    },
  ],
  "misc-01": [
    {
      id: "randombg.changes-once",
      description: "Clicking the button changes the page background colour",
      points: 50,
      visibility: "public",
      run: async (ctx) => {
        const before = ctx.computedStyle("body", "backgroundColor");
        ctx.click("#randomBtn");
        await ctx.wait(30);
        const after = ctx.computedStyle("body", "backgroundColor");
        return before !== after;
      },
    },
    {
      id: "randombg.changes-again",
      description: "Clicking again changes it to a new colour",
      points: 50,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.click("#randomBtn");
        await ctx.wait(30);
        const first = ctx.computedStyle("body", "backgroundColor");
        ctx.click("#randomBtn");
        await ctx.wait(30);
        const second = ctx.computedStyle("body", "backgroundColor");
        return first !== second;
      },
    },
  ],
  "misc-02": [
    {
      id: "showcase.click-updates-preview",
      description: "Clicking a thumbnail updates the preview colour and caption",
      points: 50,
      visibility: "public",
      run: async (ctx) => {
        const before = ctx.computedStyle("#mainPreview", "backgroundColor");
        ctx.click('.thumb[data-color="#e63946"]');
        await ctx.wait(30);
        const after = ctx.computedStyle("#mainPreview", "backgroundColor");
        return after !== before && ctx.text("#previewCaption") === "Sunset Red";
      },
    },
    {
      id: "showcase.click-different-thumb",
      description: "Clicking a different thumbnail updates the preview again",
      points: 50,
      visibility: "public",
      run: async (ctx) => {
        ctx.click('.thumb[data-color="#e63946"]');
        await ctx.wait(30);
        const first = ctx.computedStyle("#mainPreview", "backgroundColor");
        ctx.click('.thumb[data-color="#457b9d"]');
        await ctx.wait(30);
        const second = ctx.computedStyle("#mainPreview", "backgroundColor");
        return second !== first && ctx.text("#previewCaption") === "Ocean Blue";
      },
    },
  ],
  "misc-03": [
    {
      id: "greeting.text-updates",
      description: "Typing in the text field updates the greeting",
      points: 35,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#textInput", "Hello Team");
        await ctx.wait(30);
        return ctx.text("#greetingText") === "Hello Team";
      },
    },
    {
      id: "greeting.color-updates",
      description: "Changing the colour picker updates the greeting's text colour",
      points: 30,
      visibility: "public",
      run: async (ctx) => {
        const before = ctx.computedStyle("#greetingText", "color");
        ctx.type("#colorInput", "#ff0000");
        await ctx.wait(30);
        const after = ctx.computedStyle("#greetingText", "color");
        return after !== before;
      },
    },
    {
      id: "greeting.size-updates",
      description: "Changing the size slider updates the greeting's font size",
      points: 35,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#sizeInput", "40");
        await ctx.wait(30);
        return ctx.computedStyle("#greetingText", "fontSize") === "40px";
      },
    },
  ],
  "misc-04": [
    {
      id: "modal.initial-hidden",
      description: "The modal is hidden initially",
      points: 10,
      visibility: "public",
      run: (ctx) => !ctx.isVisible("#infoModal"),
    },
    {
      id: "modal.open-works",
      description: "Clicking the Open button reveals the modal",
      points: 30,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#openModalBtn");
        await ctx.wait(30);
        return ctx.isVisible("#infoModal");
      },
    },
    {
      id: "modal.close-button-works",
      description: "Clicking the Close button hides the modal again",
      points: 30,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#openModalBtn");
        await ctx.wait(30);
        ctx.click("#closeModalBtn");
        await ctx.wait(30);
        return !ctx.isVisible("#infoModal");
      },
    },
    {
      id: "modal.overlay-click-closes",
      description: "Clicking the overlay background also closes the modal",
      points: 30,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.click("#openModalBtn");
        await ctx.wait(30);
        ctx.click("#infoModal");
        await ctx.wait(30);
        return !ctx.isVisible("#infoModal");
      },
    },
  ],
  "misc-05": [
    {
      id: "pwform.invalid-shows-errors",
      description: "Submitting a short/mismatched password shows both errors and no success",
      points: 35,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#password", "abc");
        ctx.type("#confirmPassword", "xyz");
        ctx.submitForm("#passwordForm");
        await ctx.wait(30);
        const pwError = (ctx.text("#passwordError") ?? "") !== "";
        const confirmError = (ctx.text("#confirmPasswordError") ?? "") !== "";
        return pwError && confirmError && !ctx.isVisible("#formSuccess");
      },
    },
    {
      id: "pwform.valid-shows-success",
      description: "Submitting a valid matching password shows success and clears errors",
      points: 35,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#password", "secure123");
        ctx.type("#confirmPassword", "secure123");
        ctx.submitForm("#passwordForm");
        await ctx.wait(30);
        return (
          ctx.isVisible("#formSuccess") &&
          (ctx.text("#passwordError") ?? "") === "" &&
          (ctx.text("#confirmPasswordError") ?? "") === ""
        );
      },
    },
    {
      id: "pwform.no-reload",
      description: "Submitting the form doesn't reload the page",
      points: 30,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.submitForm("#passwordForm");
        await ctx.wait(30);
        return !!ctx.qs("#passwordForm");
      },
    },
  ],
  "misc-06": [
    {
      id: "quiz.no-selection-error",
      description: "Submitting with no option selected shows an error, not a result",
      points: 25,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#submitQuizBtn");
        await ctx.wait(30);
        const text = ctx.text("#quizResult") ?? "";
        return text !== "" && text !== "Correct!" && text !== "Incorrect.";
      },
    },
    {
      id: "quiz.correct-answer",
      description: 'Selecting the correct answer shows "Correct!"',
      points: 40,
      visibility: "public",
      run: async (ctx) => {
        ctx.click('input[name="quizAnswer"][value="paris"]');
        ctx.click("#submitQuizBtn");
        await ctx.wait(30);
        return ctx.text("#quizResult") === "Correct!";
      },
    },
    {
      id: "quiz.wrong-answer",
      description: 'Selecting a wrong answer shows "Incorrect."',
      points: 35,
      visibility: "public",
      run: async (ctx) => {
        ctx.click('input[name="quizAnswer"][value="london"]');
        ctx.click("#submitQuizBtn");
        await ctx.wait(30);
        return ctx.text("#quizResult") === "Incorrect.";
      },
    },
  ],
  "misc-07": [
    {
      id: "search.filters-matches",
      description: "Typing a search term shows only matching items",
      points: 50,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#searchInput", "javascript");
        await ctx.wait(30);
        const items = ctx.qsa(".filter-item") as HTMLElement[];
        const shown = items.filter((el) => el.style.display !== "none" && ctx.win.getComputedStyle(el).display !== "none");
        return shown.length === 1 && shown[0].textContent!.toLowerCase().includes("javascript");
      },
    },
    {
      id: "search.clearing-shows-all",
      description: "Clearing the search shows every item again",
      points: 25,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#searchInput", "javascript");
        await ctx.wait(30);
        ctx.type("#searchInput", "");
        await ctx.wait(30);
        const items = ctx.qsa(".filter-item") as HTMLElement[];
        return items.every((el) => ctx.win.getComputedStyle(el).display !== "none");
      },
    },
    {
      id: "search.no-match-hides-all",
      description: "A search with no matches hides every item",
      points: 25,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.type("#searchInput", "zzzznomatch");
        await ctx.wait(30);
        const items = ctx.qsa(".filter-item") as HTMLElement[];
        return items.every((el) => ctx.win.getComputedStyle(el).display === "none");
      },
    },
  ],
  "misc-08": [
    {
      id: "tabs.initial-state",
      description: "The Profile panel is shown initially and its tab is active",
      points: 15,
      visibility: "public",
      run: (ctx) =>
        ctx.isVisible('.tab-panel[data-tab="profile"]') &&
        !!ctx.qs('.tab-btn[data-tab="profile"]')?.classList.contains("active"),
    },
    {
      id: "tabs.switch-to-courses",
      description: "Clicking the Courses tab shows only the Courses panel",
      points: 45,
      visibility: "public",
      run: async (ctx) => {
        ctx.click('.tab-btn[data-tab="courses"]');
        await ctx.wait(30);
        const coursesVisible = ctx.isVisible('.tab-panel[data-tab="courses"]');
        const othersHidden = !ctx.isVisible('.tab-panel[data-tab="profile"]') && !ctx.isVisible('.tab-panel[data-tab="results"]');
        const activeCorrect =
          !!ctx.qs('.tab-btn[data-tab="courses"]')?.classList.contains("active") &&
          !ctx.qs('.tab-btn[data-tab="profile"]')?.classList.contains("active");
        return coursesVisible && othersHidden && activeCorrect;
      },
    },
    {
      id: "tabs.switch-to-results",
      description: "Clicking the Results tab shows only the Results panel",
      points: 40,
      visibility: "public",
      run: async (ctx) => {
        ctx.click('.tab-btn[data-tab="results"]');
        await ctx.wait(30);
        const resultsVisible = ctx.isVisible('.tab-panel[data-tab="results"]');
        const othersHidden = !ctx.isVisible('.tab-panel[data-tab="profile"]') && !ctx.isVisible('.tab-panel[data-tab="courses"]');
        return resultsVisible && othersHidden;
      },
    },
  ],
  "misc-09": [
    {
      id: "carousel.initial-counter",
      description: 'The counter initially reads "Slide 1 / 4"',
      points: 10,
      visibility: "public",
      run: (ctx) => ctx.text("#slideCounter") === "Slide 1 / 4",
    },
    {
      id: "carousel.next-advances",
      description: "Clicking Next advances to slide 2",
      points: 30,
      visibility: "public",
      run: async (ctx) => {
        const before = ctx.text("#slideDisplay");
        ctx.click("#nextBtn");
        await ctx.wait(30);
        return ctx.text("#slideCounter") === "Slide 2 / 4" && ctx.text("#slideDisplay") !== before;
      },
    },
    {
      id: "carousel.wraps-forward",
      description: "Clicking Next four times wraps back to slide 1",
      points: 30,
      visibility: "public",
      run: async (ctx) => {
        ctx.click("#nextBtn");
        ctx.click("#nextBtn");
        ctx.click("#nextBtn");
        ctx.click("#nextBtn");
        await ctx.wait(30);
        return ctx.text("#slideCounter") === "Slide 1 / 4";
      },
    },
    {
      id: "carousel.wraps-backward",
      description: "Clicking Previous from slide 1 wraps to the last slide",
      points: 30,
      visibility: "hidden",
      run: async (ctx) => {
        ctx.click("#prevBtn");
        await ctx.wait(30);
        return ctx.text("#slideCounter") === "Slide 4 / 4";
      },
    },
  ],
  "misc-10": [
    {
      id: "gallery.initial-empty",
      description: "The gallery starts empty",
      points: 10,
      visibility: "public",
      run: (ctx) => ctx.qsa("#gallery > *").length === 0,
    },
    {
      id: "gallery.add-item",
      description: "Adding a photo appends it to the gallery and clears the input",
      points: 50,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#photoCaption", "Sunset");
        ctx.click("#addPhotoBtn");
        await ctx.wait(30);
        const items = ctx.qsa("#gallery > *");
        const input = ctx.qs("#photoCaption") as HTMLInputElement | null;
        return items.length === 1 && items[0].textContent!.includes("Sunset") && input?.value === "";
      },
    },
    {
      id: "gallery.remove-item",
      description: "Removing one item deletes only that item",
      points: 40,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#photoCaption", "AAA");
        ctx.click("#addPhotoBtn");
        await ctx.wait(30);
        ctx.type("#photoCaption", "BBB");
        ctx.click("#addPhotoBtn");
        await ctx.wait(30);
        const items = ctx.qsa("#gallery > *");
        if (items.length !== 2) return false;
        const removeBtn = items[1].querySelector("button");
        if (!removeBtn) return false;
        (removeBtn as HTMLElement).click();
        await ctx.wait(30);
        const remaining = ctx.qsa("#gallery > *");
        return remaining.length === 1 && remaining[0].textContent!.includes("AAA");
      },
    },
  ],
  "misc-11": [
    {
      id: "checklist.toggle-on",
      description: "Clicking an item marks it completed",
      points: 30,
      visibility: "public",
      run: async (ctx) => {
        ctx.click(".checklist-item");
        await ctx.wait(30);
        return !!ctx.qsa(".checklist-item")[0]?.classList.contains("completed");
      },
    },
    {
      id: "checklist.toggle-off",
      description: "Clicking it again un-marks it",
      points: 30,
      visibility: "public",
      run: async (ctx) => {
        ctx.click(".checklist-item");
        await ctx.wait(30);
        ctx.click(".checklist-item");
        await ctx.wait(30);
        return !ctx.qsa(".checklist-item")[0]?.classList.contains("completed");
      },
    },
    {
      id: "checklist.independent",
      description: "Each item works independently of the others",
      points: 40,
      visibility: "public",
      run: async (ctx) => {
        const items = ctx.qsa(".checklist-item");
        (items[1] as HTMLElement).click();
        await ctx.wait(30);
        return (
          !!items[1].classList.contains("completed") &&
          !items[0].classList.contains("completed") &&
          !items[2].classList.contains("completed")
        );
      },
    },
  ],
  "misc-12": [
    {
      id: "fruit.initial-apple",
      description: "The display initially shows Apple",
      points: 10,
      visibility: "public",
      run: (ctx) => (ctx.text("#fruitDisplay") ?? "").toLowerCase().includes("apple"),
    },
    {
      id: "fruit.change-to-banana",
      description: "Selecting Banana updates the display",
      points: 45,
      visibility: "public",
      run: async (ctx) => {
        ctx.select("#fruitSelect", "banana");
        await ctx.wait(30);
        return (ctx.text("#fruitDisplay") ?? "").toLowerCase().includes("banana");
      },
    },
    {
      id: "fruit.change-to-watermelon",
      description: "Selecting Watermelon updates the display again",
      points: 45,
      visibility: "public",
      run: async (ctx) => {
        ctx.select("#fruitSelect", "watermelon");
        await ctx.wait(30);
        return (ctx.text("#fruitDisplay") ?? "").toLowerCase().includes("watermelon");
      },
    },
  ],
  "misc-13": [
    {
      id: "stars.click-selects",
      description: "Clicking the 3rd star sets the rating to 3 / 5 and highlights stars 1-3",
      points: 50,
      visibility: "public",
      run: async (ctx) => {
        const stars = ctx.qsa(".star");
        (stars[2] as HTMLElement).click();
        await ctx.wait(30);
        const labelOk = (ctx.text("#ratingLabel") ?? "").includes("3");
        const activeOk =
          stars[0].classList.contains("active") &&
          stars[1].classList.contains("active") &&
          stars[2].classList.contains("active") &&
          !stars[3].classList.contains("active") &&
          !stars[4].classList.contains("active");
        return labelOk && activeOk;
      },
    },
    {
      id: "stars.reselect-updates",
      description: "Selecting a different star updates the rating correctly",
      points: 30,
      visibility: "public",
      run: async (ctx) => {
        const stars = ctx.qsa(".star");
        (stars[4] as HTMLElement).click();
        await ctx.wait(30);
        (stars[1] as HTMLElement).click();
        await ctx.wait(30);
        const labelOk = (ctx.text("#ratingLabel") ?? "").includes("2");
        const activeOk = stars[0].classList.contains("active") && stars[1].classList.contains("active") && !stars[2].classList.contains("active");
        return labelOk && activeOk;
      },
    },
    {
      id: "stars.mouseout-restores-saved",
      description: "Moving the mouse away restores the previously saved rating",
      points: 20,
      visibility: "hidden",
      run: async (ctx) => {
        const stars = ctx.qsa(".star");
        (stars[1] as HTMLElement).click();
        await ctx.wait(30);
        stars[4].dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
        await ctx.wait(30);
        ctx.qs("#starContainer")!.dispatchEvent(new MouseEvent("mouseout", { bubbles: true }));
        await ctx.wait(30);
        return (ctx.text("#ratingLabel") ?? "").includes("2");
      },
    },
  ],
  "misc-14": [
    {
      id: "colorpicker.preview-updates",
      description: "Changing the colour picker updates the preview box's background",
      points: 50,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#colorPicker", "#ff0000");
        await ctx.wait(30);
        return ctx.computedStyle("#colorPreview", "backgroundColor") === "rgb(255, 0, 0)";
      },
    },
    {
      id: "colorpicker.value-text-updates",
      description: "The hex value text updates to match",
      points: 50,
      visibility: "public",
      run: async (ctx) => {
        ctx.type("#colorPicker", "#ff0000");
        await ctx.wait(30);
        return (ctx.text("#colorValue") ?? "").toLowerCase().includes("#ff0000");
      },
    },
  ],
};
