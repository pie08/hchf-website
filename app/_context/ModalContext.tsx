"use client";

import { createContext, useContext, useState } from "react";
import { FC } from "react";

const ModalContext = createContext({
  modalOpen: false,
  setModalOpen: (state: boolean) => {},
});

interface ModalContextProps {
  children: React.ReactNode;
}

export const ModalContextProvider: FC<ModalContextProps> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("Cannot access Modal Context outside of provider");
  return context;
};
