function Button({ children, type, onClick, className }) {
  const styles = {
    primary: "btn--cta",
    secondary: "btn--secondary",
    contact: "btn--contact",
  };

  return (
    <button className={`btn ${styles[type]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
