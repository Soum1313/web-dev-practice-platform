import type { ValidationTest } from "../types/validation";

/**
 * Behavior-first validators: these test the resulting DOM state after
 * simulated interaction (click/type/submit), never the student's source
 * code, so any correct implementation passes regardless of syntax choice.
 *
 * Covers the Day 2 and Day 3 tasks (task-01..06, day3-03, day3-04) -
 * see AVAILABLE_TASKS.md / the validation brief for the full priority
 * list. Day 1, Day 4/5, and the Practice Bank don't have validators yet.
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
};
