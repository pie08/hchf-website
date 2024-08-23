import { styled } from "@linaria/react";
import { FC } from "react";
import ButtonLink from "./ButtonLink";

const StyledTestimonial = styled.figure`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;

  & blockquote {
    position: relative;
    max-width: 70rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    & p {
      font-size: 1.8rem;

      & span {
        font-size: 6.4rem;
        font-family: var(--font-playfair-display);
        font-weight: 600;
        line-height: 1;
        color: var(--color-primary-800);
        margin-right: 0.2rem;
      }
    }

    & a {
      align-self: flex-start;
    }

    & div {
      display: flex;
      gap: 1.2rem;
      align-items: center;
      color: var(--color-gray-300);

      & span {
      }

      & h3 {
      }
    }
  }
`;

const Number = styled.span`
  font-size: 9.6rem;
  color: var(--color-primary-100);
  line-height: 1;
`;

const Quotes = styled.span`
  font-family: var(--font-playfair-display);
  font-size: 12.8rem;
  line-height: 1;
  color: var(--color-primary-100);

  position: absolute;
  top: -4rem;
  left: 0;
  translate: -125% 0;
`;

interface TestimonialProps {
  text: string;
  author: string;
  number?: string;
  quote?: boolean;
  textFill?: boolean;
  limitText?: boolean;

  [x: string]: any;
}

const Testimonial: FC<TestimonialProps> = ({
  text,
  author,
  number = "",
  quote = true,
  textFill = false,
  limitText = false,
  ...props
}) => {
  // if limitText is true and the text length is > 800
  const isLong = text.length > 800 && limitText;

  return (
    <StyledTestimonial id={author} {...props}>
      {number.length > 0 && <Number>{number}</Number>}

      <blockquote style={textFill ? { maxWidth: "100%" } : {}}>
        {quote && <Quotes>&ldquo;</Quotes>}
        <p>
          <span>{text.slice(0, 1)}</span>
          {isLong ? text.slice(1, 855) + "..." : text.slice(1)}
        </p>
        {isLong && (
          <ButtonLink href={`/testimonials#${author}`} center={false}>
            Read more
          </ButtonLink>
        )}
        <div>
          <span>&mdash;</span> <h3>{author}</h3>
        </div>
      </blockquote>
    </StyledTestimonial>
  );
};

export default Testimonial;
