import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <nav className="nav">
      <Icon className="nav__logo" icon="mdi:earth" />
      <h1 className="nav__title">my travel journal.</h1>
    </nav>
  );
}
