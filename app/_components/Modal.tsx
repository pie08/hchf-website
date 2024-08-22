"use client";

import { styled } from "@linaria/react";
import React, {
  cloneElement,
  createContext,
  FC,
  useContext,
  useState,
} from "react";
import { ButtonIcon } from "./ButtonIcon";
import { PiX } from "react-icons/pi";
import { css } from "@linaria/core";
import { createPortal } from "react-dom";
import { useMounted } from "../_hooks/useMounted";

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
  key: 0,
});

interface ModalProps {
  children: React.ReactNode;
}

interface WindowProps {
  children: React.ReactNode;
  windowId: string;
}

interface OpenProps {
  children: React.ReactElement;
  opens: string;
}

interface ModalComponent extends FC<ModalProps> {
  Window: FC<WindowProps>;
  Open: FC<OpenProps>;
}

const Modal: ModalComponent = ({ children }) => {
  const [openId, setOpenId] = useState("");
  const [key, setKey] = useState(0);

  function open(id: string) {
    setOpenId(id);
  }

  function close() {
    setOpenId("");

    setTimeout(() => {
      setKey((n) => n + 1);
    }, 200);
  }

  return (
    <ModalContext.Provider value={{ openId, open, close, key }}>
      {children}
    </ModalContext.Provider>
  );
};

const Icon = styled(PiX)`
  width: 2.4rem;
  height: 2.4rem;
`;

const ExitButtonPosition = css`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
`;

const Window: FC<WindowProps> = ({ children, windowId }) => {
  const { close, openId, key } = useContext(ModalContext);
  const open = openId === windowId;

  // ensure document is defined, aka component mounted
  const mounted = useMounted();
  if (!mounted) return null;

  return createPortal(
    <>
      <Overlay onClick={close} data-open={open && "open"} />
      <StyledModal data-open={open && "open"} key={key}>
        <ButtonIcon onClick={close} className={ExitButtonPosition}>
          <Icon />
        </ButtonIcon>
        {children}
      </StyledModal>
    </>,
    document.body
  );
};

const Open: FC<OpenProps> = ({ children, opens }) => {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      open(opens);
    },
  });
};

Modal.Window = Window;
Modal.Open = Open;
export default Modal;
