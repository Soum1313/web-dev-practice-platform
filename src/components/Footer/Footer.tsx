import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="app-footer">
      &copy; {year}{" "}
      <a href="https://github.com/Soum1313" target="_blank" rel="noopener noreferrer">
        @soum1313
      </a>
    </footer>
  );
}
