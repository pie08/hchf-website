"use client";

import { styled } from "@linaria/react";
import React, {
  cloneElement,
  createContext,
  FC,
  memo,
  useContext,
  useState,
} from "react";
import { ButtonIcon } from "./ButtonIcon";
import { PiX } from "react-icons/pi";
import { createPortal } from "react-dom";

const StyledModal = styled.div`
  max-height: 90vh;
  overflow-y: scroll;

  position: fixed;
  top: 50%;
  left: 100%;
  translate: 0 -50%;
  z-index: 9999;
  background-color: var(--color-gray-white);
  transition: all 0.2s;

  &[data-open="open"] {
    left: 50%;
    translate: -50% -50%;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: all 0.2s;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  visibility: hidden;
  pointer-events: none;

  &[data-open="open"] {
    background-color: rgba(0, 0, 0, 75%);
    pointer-events: all;
    visibility: visible;
  }
`;

const ModalContext = createContext({
  openId: "",
  open: (id: string) => {},
  close: () => {},
});

interface ModalProps {
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const [openId, setOpenId] = useState("");

  function open(id: string) {
    setOpenId(id);
  }

  function close() {
    setOpenId("");
  }

  return (
    <ModalContext.Provider value={{ openId, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const Icon = styled(PiX)`
  width: 2.4rem;
  height: 2.4rem;
`;

interface WindowProps {
  children: React.ReactNode;
  windowId: string;
}

const Window: FC<WindowProps> = ({ children, windowId }) => {
  const { close, openId } = useContext(ModalContext);
  const open = openId === windowId;

  return createPortal(
    <>
      <Overlay onClick={close} data-open={open && "open"} key={openId} />
      <StyledModal data-open={open && "open"}>
        <ButtonIcon onClick={close}>
          <Icon />
        </ButtonIcon>
        {children}
      </StyledModal>
    </>,
    document.body
  );
};

interface OpenProps {
  children: React.ReactElement;
  opens: string;
}

const Open: FC<OpenProps> = ({ children, opens }) => {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      open(opens);
    },
  });
};

const exportObj = {
  Root: memo(Modal),
  Open: memo(Open),
  Window: memo(Window),
};

export default exportObj;
