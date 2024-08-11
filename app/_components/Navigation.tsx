import { styled } from "@linaria/react";
import { FC } from "react";
import { Container } from "./Container";

const Header = styled.header``;

const StyledNavigation = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 0;
  background-color: red;
`;

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <Header>
      <StyledNavigation>Nav</StyledNavigation>
    </Header>
  );
};

export default Navigation;
