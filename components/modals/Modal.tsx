"use client";

import type { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: ReactNode;
  footer?: ReactNode;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal = ({
  isOpen = false,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled = false,
  secondaryLabel,
  secondaryAction,
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    if (!disabled) {
      onClose?.();
    }
  };

  const handleSubmit = () => {
    if (!disabled) {
      onSubmit?.();
    }
  };

  const handleSecondaryAction = () => {
    if (!disabled) {
      secondaryAction?.();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800/70 p-4">
      <div className="relative w-full max-w-lg rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-center border-b p-6">
          <button
            type="button"
            aria-label="Close modal"
            onClick={handleClose}
            disabled={disabled}
            className="absolute left-6 rounded-full p-1 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <IoMdClose size={18} />
          </button>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        {body && <div className="p-6">{body}</div>}

        {(actionLabel || secondaryLabel) && (
          <div className="flex gap-2 px-6 pb-6">
            {secondaryLabel && secondaryAction && (
              <button
                type="button"
                onClick={handleSecondaryAction}
                disabled={disabled}
                className="w-full rounded-lg border border-black py-3 font-semibold transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {secondaryLabel}
              </button>
            )}
            {actionLabel && (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={disabled}
                className="w-full rounded-lg bg-rose-500 py-3 font-semibold text-white transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {actionLabel}
              </button>
            )}
          </div>
        )}

        {footer && <div className="border-t p-6">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
