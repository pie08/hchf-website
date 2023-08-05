import styles from "../sass/components/Testimonial.module.scss";

export default function Testimonial({ text, author }) {
  return (
    <figure className={styles.testimonial}>
      <blockquote className={styles.testimonial__text}>
        <span>{text.slice(0, 1)}</span>
        {text.slice(1)}
        {author && (
          <div className={styles["testimonial__author"]}>&mdash; {author}</div>
        )}
      </blockquote>
    </figure>
  );
}
