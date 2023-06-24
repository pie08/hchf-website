function ContactPhoneEmail({ styles }) {
  return (
    <div className="contact-info" style={styles}>
      <span className="contact-info__phone">
        <a className="contact-info__link" href="tel:603-953-3807">
          (603) 953-3807
        </a>
      </span>
      <span className="contact-info__email">
        <a className="contact-info__link" href="mailto:abietrained@yahoo.com">
          abietrained@yahoo.com
        </a>
      </span>
    </div>
  );
}

export default ContactPhoneEmail;
