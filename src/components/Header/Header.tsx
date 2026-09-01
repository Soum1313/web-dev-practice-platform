import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import "./Header.css";

type HeaderProps = {
  right?: React.ReactNode;
};

export function Header({ right }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="app-header">
      <Link to="/" className="app-header__brand">
        Web Development Practice
      </Link>
      <div className="app-header__right">
        {right}
        <button
          className="app-header__theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path
                d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM4 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1Zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM5.64 5.64a1 1 0 0 1 1.41 0l.71.71a1 1 0 0 1-1.41 1.41l-.71-.71a1 1 0 0 1 0-1.41Zm11.6 11.6a1 1 0 0 1 1.41 0l.71.71a1 1 0 0 1-1.41 1.41l-.71-.71a1 1 0 0 1 0-1.41ZM18.36 5.64a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0ZM6.76 16.53a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path
                d="M20.7 14.6a8.5 8.5 0 0 1-11.3-11.3 1 1 0 0 0-1.2-1.3A10 10 0 1 0 22 15.8a1 1 0 0 0-1.3-1.2Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
