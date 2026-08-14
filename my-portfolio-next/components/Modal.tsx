import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-gray-800 rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
        <div className="text-gray-300">{children}</div>
        <button
          className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;