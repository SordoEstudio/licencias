import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
  } from "@mui/material";
  import React from "react";
  import SaveCancelComponent from "./SaveCancelComponent";
  
  const ConfirmDialog = (props) => {
    const { confirm, setConfirm } = props;
    return (
      <Dialog open={confirm.isOpen}>
        <DialogTitle>{confirm.title}</DialogTitle>
        <DialogContent>{confirm.subtitle}</DialogContent>
        <DialogActions>
          <SaveCancelComponent
            toCancel={() => setConfirm({ ...confirm, isOpen: false })}
            toSave={confirm.onConfirm}
            aceptText="aceptar"
          />
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConfirmDialog;