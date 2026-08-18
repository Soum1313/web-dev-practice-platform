import { Link } from "react-router-dom";
import "./Header.css";

type HeaderProps = {
  right?: React.ReactNode;
};

export function Header({ right }: HeaderProps) {
  return (
    <header className="app-header">
      <Link to="/" className="app-header__brand">
        Web Development Practice
      </Link>
      <div className="app-header__right">{right}</div>
    </header>
  );
}
