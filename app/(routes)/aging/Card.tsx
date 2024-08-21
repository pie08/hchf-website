import { styled } from "@linaria/react";
import { FC } from "react";
import { PiArrowDown, PiArrowUp } from "react-icons/pi";

const AgingCard = styled.div`
  position: relative;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem;
  overflow: hidden;

  & ul,
  & h3 {
    z-index: 2;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    /* account for ::marker */
    padding-left: 1.53rem;

    & li p {
      font-size: 2rem;
    }
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & svg {
    width: 4rem;
    height: 4rem;
    color: var(--color-gray-400);
  }
`;

const ArrowDown = styled.div`
  position: absolute;
  top: 0;
  translate: 25% -25%;

  & svg {
    color: var(--color-primary-200);
    width: 50rem;
    height: 50rem;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-image: linear-gradient(
      to top,
      rgb(243, 244, 246, 0%),
      rgb(243, 244, 246) 75%
    );
  }
`;

const ArrowUp = styled.div`
  position: absolute;
  top: 0;
  translate: 25% -10%;

  & svg {
    color: var(--color-primary-200);
    width: 50rem;
    height: 50rem;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgb(243, 244, 246, 0%),
      rgb(243, 244, 246) 75%
    );
  }
`;

interface CardProps {
  heading: string;
  headingIcon?: React.ReactElement;
  listItems: string[];
  type?: "increasing" | "decreasing";
}

const Card: FC<CardProps> = ({
  heading,
  headingIcon = false,
  listItems,
  type,
}) => {
  return (
    <AgingCard>
      {type === "decreasing" && (
        <ArrowDown>
          <PiArrowDown />
        </ArrowDown>
      )}
      {type === "increasing" && (
        <ArrowUp>
          <PiArrowUp />
        </ArrowUp>
      )}

      <HeadingContainer>
        {headingIcon}
        <h3>{heading}</h3>
      </HeadingContainer>
      <ul>
        {listItems.map((text, i) => (
          <li key={i}>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </AgingCard>
  );
};

export default Card;
