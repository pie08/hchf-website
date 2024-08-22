import { styled } from "@linaria/react";
import { FC } from "react";
import ButtonLink from "./_components/ButtonLink";

const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;

  & p {
    font-size: 12.8rem;
    line-height: 1;
    color: var(--color-gray-200);
  }
`;

interface notFoundProps {}

const NotFound: FC<notFoundProps> = ({}) => {
  return (
    <NotFoundContainer>
      <p>404</p>
      <h2>The page you are looking for could not be found</h2>
      <ButtonLink href="/">Return home</ButtonLink>
    </NotFoundContainer>
  );
};

export default NotFound;
