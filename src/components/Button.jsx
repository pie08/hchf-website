function Button({ children, className = "btn--main" }) {
  return <button className={`btn ${className}`}>{children}</button>;
}

export default Button;
