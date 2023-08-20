import { Link } from "react-router-dom";

function LinkButton({ to, children }) {
  return (
    <Link to={to} className="btn btn--secondary">
      {children}
    </Link>
  );
}

export default LinkButton;
