export const openModal = (modalId: string) => {
  const element = document.getElementById(modalId) as HTMLDialogElement;

  element.showModal();
};

export const closeModal = (modalId: string) => {
  const element = document.getElementById(modalId) as HTMLDialogElement;

  element.close();
};
