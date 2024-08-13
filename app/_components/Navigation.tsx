"use client";

import { styled } from "@linaria/react";
import React, { FC, ReactNode, useState } from "react";
import { Container } from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiCaretDown } from "react-icons/pi";
import { css } from "@linaria/core";
import Button from "./Button";
import { useModalContext } from "../_context/ModalContext";

const Header = styled.header`
  width: 100%;
  padding: 0 3.2rem;
  background-color: rgba(255, 255, 255, 60%);
  position: fixed;
  z-index: 999;

  &:hover li {
    opacity: 50%;
  }
`;

const StyledNavigation = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.4rem;

  & li {
    transition: all 0.2s;

    &:hover {
      opacity: 1 !important;
    }
  }
`;

const NavLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.25;

  box-shadow: inset 0 -2px 0 0 transparent;
  transition: all 0.2s;

  &[data-active="active"] {
    box-shadow: inset 0 -2px 0 0 var(--color-primary-600);
  }
`;

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setModalOpen } = useModalContext();

  return (
    <Header>
      <StyledNavigation>
        <Link href="/">
          <Logo wrap />
        </Link>

        <nav>
          <NavList>
            <li>
              <NavLink href="/" data-active={pathname === "/" ? "active" : ""}>
                Home
              </NavLink>
            </li>

            <Dropdown
              text="Services"
              open={dropdownOpen}
              setOpen={setDropdownOpen}
            >
              <NavLink href="/training/adult-training">Adult Training</NavLink>
              <NavLink href="/training/post-surgical-training">
                Post Surgical Training
              </NavLink>
              <NavLink href="/training/baseball-softball">
                Baseball & Softball
              </NavLink>
              <NavLink href="/training/online-consulting">
                Online Consulting
              </NavLink>
            </Dropdown>

            <li>
              <NavLink
                href="/aging"
                data-active={pathname === "/aging" ? "active" : ""}
              >
                Aging & Hormones
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/profiles"
                data-active={pathname === "/profiles" ? "active" : ""}
              >
                Client Profiles
              </NavLink>
            </li>
            <li>
              <NavLink
                href="testimonials"
                data-active={pathname === "/testimonials" ? "active" : ""}
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <Button size="large" onClick={() => setModalOpen(true)}>
                Contact me
              </Button>
            </li>
          </NavList>
        </nav>
      </StyledNavigation>
    </Header>
  );
};

// Drop down
const DropdownParent = styled.li`
  position: relative;

  & a {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;

    cursor: pointer;
  }
`;

const DropdownWrapper = styled.div`
  padding-top: 0.8rem;
  position: absolute;
  top: 100%;
  left: 0;
`;

const DropdownList = styled.ul`
  width: max-content;

  list-style: none;
  padding: 1.2rem;
  background-color: var(--color-gray-white);
  border-top: 2px solid var(--color-primary-600);

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  /* animation */
  opacity: 0;
  visibility: hidden;
  translate: 0 -1.6rem;
  transition: all 0.2s;

  &[data-open="open"] {
    opacity: 1;
    visibility: visible;
    translate: 0 0;
  }
`;

const Icon = styled(PiCaretDown)`
  width: 2rem;
  height: 2rem;
`;

const rotate = css`
  rotate: 180deg;
`;

interface DropdownProps {
  children: React.ReactNode;
  text: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: FC<DropdownProps> = ({ children, text, open, setOpen }) => {
  return (
    <DropdownParent
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink href="">
        {text}
        <Icon
          className={open ? rotate : ""}
          style={{ transition: "all 0.2s" }}
        />
      </NavLink>

      <DropdownWrapper>
        <DropdownList data-open={open && "open"} className="dropdownList">
          {React.Children.map(children, (child, i) => (
            <li key={i}>{child}</li>
          ))}
        </DropdownList>
      </DropdownWrapper>
    </DropdownParent>
  );
};

export default Navigation;
