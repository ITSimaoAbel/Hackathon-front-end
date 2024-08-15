// src/context/ModalContext.jsx
import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, isLogin, openModal, closeModal, switchToSignup, switchToLogin }}
    >
      {children}
    </ModalContext.Provider>
  );
};
