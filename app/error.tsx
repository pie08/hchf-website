"use client";

import { styled } from "@linaria/react";
import { FC } from "react";
import Button from "./_components/Button";

const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
`;

interface errorProps {
  error: Error;
  reset: () => void;
}

const error: FC<errorProps> = ({ error, reset }) => {
  console.log(error);

  return (
    <ErrorContainer>
      <h1>Something went wrong...</h1>
      <p>{error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </ErrorContainer>
  );
};

export default error;
