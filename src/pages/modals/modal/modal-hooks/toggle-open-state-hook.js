import { useState } from "react";

export const useModalOpen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openCurrentModal = (event) => {
    console.log("open");
    event.stopPropagation();
    setIsModalOpen(true);
  };
  const closeCurrentModal = () => {
    console.log("close");
    setIsModalOpen(false);
  };

  return [isModalOpen, openCurrentModal, closeCurrentModal];
};
