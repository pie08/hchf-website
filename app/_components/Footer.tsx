import { FC } from "react";
import { Section } from "./Section";
import { styled } from "@linaria/react";
import { Container } from "./Container";
import { GridContainer } from "./GridContainer";
import Logo from "./Logo";

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;
`;

const StyledLogo = styled(Logo)`
  display: block;
  max-width: 20rem;
  height: auto;
`;

const FooterItem = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & h5 {
    font-size: 1.6rem;
    text-transform: uppercase;
    color: var(--color-gray-400);
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;

  list-style: none;

  & li {
    box-shadow: inset 0 -2px 0 transparent;
    transition: all 0.2s;

    &:hover {
      box-shadow: inset 0 -2px 0 var(--color-gray-400);
    }

    & a {
      line-height: 1.15;
    }
  }
`;

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer>
      <Section data-gray>
        <FooterContainer>
          <StyledLogo />

          <FooterItem>
            <h5>Contact</h5>
            <nav>
              <NavList>
                <li>
                  <a href="tel:6039533807">(603) 953-3807</a>
                </li>
                <li>
                  <a href="mailto:abietrained@yahoo.com">
                    abietrained@yahoo.com
                  </a>
                </li>
              </NavList>
            </nav>
          </FooterItem>

          <FooterItem>
            <h5>Legal stuff</h5>
            <nav>
              <NavList>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
              </NavList>
            </nav>
          </FooterItem>
        </FooterContainer>
      </Section>
    </footer>
  );
};

export default Footer;
