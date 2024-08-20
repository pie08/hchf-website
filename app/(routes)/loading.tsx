import { FC } from "react";
import "ldrs/hatch";
import Loader from "../_components/Loader";

interface loadingProps {}

const Loading: FC<loadingProps> = ({}) => {
  // todo: add loader
  return <Loader />;
};

export default Loading;
