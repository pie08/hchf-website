import { FC } from "react";
import "ldrs/hatch";
import Loader from "./_components/Loader";
import { styled } from "@linaria/react";

const FullPageLoader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface loadingProps {}

const Loading: FC<loadingProps> = ({}) => {
  return (
    <FullPageLoader>
      <Loader />
    </FullPageLoader>
  );
};

export default Loading;
