import React, { createContext, useState } from "react";

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <SnackbarContext.Provider
      value={[
        open,
        setOpen,
        handleClose,
        severity,
        setSeverity,
        message,
        setMessage
      ]}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
