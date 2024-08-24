"use client";

import { styled } from "@linaria/react";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { Container } from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiCaretDown } from "react-icons/pi";
import { css } from "@linaria/core";
import Button from "./Button";
import Modal from "@/app/_components/Modal";

const Header = styled.header`
  width: 100vw;
  padding: 0 3.2rem;
  background-color: rgba(255, 255, 255, 95%);
  position: fixed;
  z-index: 999;

  @media screen and (min-width: 52em) {
    &:hover li:not(:has(button)) {
      opacity: 50%;
    }
  }

  @media screen and (max-width: 52em) {
    padding: 0 2.4rem;
  }
`;

const StyledLogo = styled(Logo)`
  display: block;
  /* max-width: 9.6rem; */
  max-height: calc(9.6rem - 3.2rem);
  width: auto;
`;

const StyledNavigation = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9.6rem;
  padding: 1.6rem 0;
`;

const Nav = styled.nav`
  @media screen and (max-width: 52em) {
    position: fixed;
    top: 9.6rem;
    left: 100%;
    z-index: -1;
    width: 100vw;
    height: 100vw;
    background-color: rgba(255, 255, 255, 95%);
    padding: 0 2.4rem;
    transition: all 0.2s;

    &.open {
      translate: -100% 0;
    }
  }
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

  @media screen and (max-width: 52em) {
    gap: 0;
    align-items: stretch;
    flex-direction: column;

    & li {
      padding: 1.6rem 2.4rem;

      &:not(:last-child) {
        border-bottom: 1px solid var(--color-gray-200);
      }
    }
  }
`;

const NavLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: 600;

  box-shadow: inset 0 -2px 0 0 transparent;
  transition: all 0.2s;

  &.active {
    box-shadow: inset 0 -2px 0 0 var(--color-primary-600);
  }
`;

const MenuButton = styled.button`
  display: none;

  @media screen and (max-width: 52em) {
    display: block;
  }

  width: 5.6rem;
  height: 5.6rem;
  background: none;

  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--color-gray-800);
    transition: all 0.2s;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--color-gray-800);
      position: absolute;
      top: -1.3rem;
      left: 0;
      transition: all 0.2s;
    }

    &::after {
      content: "";
      display: block;
      width: 65%;
      height: 2px;
      translate: calc((5.6rem / (100 / (100 - 65))));
      background-color: var(--color-gray-800);
      position: absolute;
      top: 1.2rem;
      left: 0;
      transition: all 0.2s;
    }
  }

  &.open {
    & span {
      background-color: transparent;

      &::before {
        rotate: -45deg;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
      }

      &::after {
        width: 100%;
        rotate: 45deg;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
      }
    }
  }
`;

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function close() {
    setOpen(false);
  }

  // close on url change
  useEffect(close, [pathname]);

  return (
    <Header>
      <StyledNavigation>
        <Link href="/">
          <StyledLogo />
        </Link>

        <Nav className={open ? "open" : ""}>
          <NavList>
            <li>
              <NavLink href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </NavLink>
            </li>

            <Dropdown text="Services">
              <NavLink href="/services/adult">Adult Training</NavLink>
              <NavLink href="/services/post-surgical">
                Post Surgical Training
              </NavLink>
              <NavLink href="/services/baseball">Baseball & Softball</NavLink>
              <NavLink href="/services/online">Online Consulting</NavLink>
            </Dropdown>

            <li>
              <NavLink
                href="/aging"
                className={pathname === "/aging" ? "active" : ""}
              >
                Aging & Hormones
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/profiles"
                className={pathname === "/profiles" ? "active" : ""}
              >
                Client Profiles
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/testimonials"
                className={pathname === "/testimonials" ? "active" : ""}
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <Modal.Open opens="contact">
                <Button size="large">Contact me</Button>
              </Modal.Open>
            </li>
          </NavList>
        </Nav>

        <MenuButton
          className={`${open ? "open" : ""}`}
          onClick={() => setOpen((curState) => !curState)}
        >
          <span>&nbsp;</span>
        </MenuButton>
      </StyledNavigation>
    </Header>
  );
};

// Drop down
const DropdownParent = styled.li`
  position: relative;

  & a {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    cursor: pointer;
  }

  /* 830 and up */
  @media screen and (min-width: 52em) {
    &:hover {
      & .wrapper {
        pointer-events: all;
      }

      & .list {
        opacity: 1;
        visibility: visible;
        translate: 0 0;
      }

      & svg {
        rotate: 180deg;
      }
    }
  }

  @media screen and (max-width: 52em) {
    & a {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const DropdownWrapper = styled.div`
  padding-top: 0.8rem;
  position: absolute;
  top: 100%;
  left: 0;
  pointer-events: none;

  @media screen and (max-width: 52em) {
    position: static;
    padding-top: 0;
    pointer-events: all;
  }
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

  @media screen and (max-width: 52em) {
    border-top: none;
    background-color: transparent;
    width: 100%;
    padding: 0;
    gap: 0;
    max-height: 0;
    translate: 0 0;
    pointer-events: none;

    & li {
      padding: 1.2rem 0;
      border: none !important;
      color: var(--color-gray-600);
    }

    &.open {
      max-height: 25rem;
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      padding-top: 1.2rem;
    }
  }
`;

const Icon = styled(PiCaretDown)`
  width: 2rem;
  height: 2rem;

  @media screen and (max-width: 52em) {
    width: 2.4rem;
    height: 2.4rem;
    rotate: -90deg;
  }
`;

const rotate = css`
  rotate: 180deg;

  @media screen and (max-width: 52em) {
    rotate: 0deg;
  }
`;

interface DropdownProps {
  children: React.ReactNode;
  text: string;
}

const Dropdown: FC<DropdownProps> = ({ children, text }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownParent onClick={() => setOpen((curState) => !curState)}>
      <NavLink href="">
        {text}
        <Icon
          className={open ? rotate : ""}
          style={{ transition: "all 0.2s" }}
        />
      </NavLink>

      <DropdownWrapper className="wrapper">
        <DropdownList className={`${open ? "open" : ""} list`}>
          {React.Children.map(children, (child, i) => (
            <li key={i}>{child}</li>
          ))}
        </DropdownList>
      </DropdownWrapper>
    </DropdownParent>
  );
};

export default Navigation;
