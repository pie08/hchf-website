import Logo from "./Logo";
import Button from "./Button";

export default function Navigation() {
  return (
    <header className="navigation">
      <a href="../index.html" className="navigation__logo-wrapper">
        <Logo />
      </a>

      <NavigationItems />
    </header>
  );
}

function NavigationItems() {
  return (
    <nav>
      <ul className="navigation__list">
        <li>
          <a href="../index.html">Home</a>
        </li>

        <li>
          <div className="navigation__services">
            <button>Services</button>
            {/* <div className="services__content">
          <a href="#">Adult Training</a>
          <a href="#">Post-Surgical Training</a>
          <a href="#">Baseball/Softball</a>
          <a href="#">Online Consulting</a>
        </div> */}
          </div>
        </li>

        <li>
          <a href="#">Aging & Hormones</a>
        </li>
        <li>
          <a href="#">Client Profiles</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>

        <li>
          <Button>Contact me</Button>
        </li>
      </ul>
    </nav>
  );
}
