import { styled } from "@linaria/react";
import { FC } from "react";
import { Container } from "./Container";
import Logo from "./Logo";

const Header = styled.header``;

const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 4.8rem;
  background-color: red;
`;

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <Header>
      <StyledNavigation>
        <Logo width={9.6} />
      </StyledNavigation>
    </Header>
  );
};

export default Navigation;
