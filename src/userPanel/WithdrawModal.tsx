import { Box, Modal, Typography, IconButton, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function WithdrawModal({ open, onClose }: Props) {
  const [address, setAddress] = useState("");

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "630px",
          backgroundColor: "#364153",    // 🎨 تغییر داده شد
          borderRadius: 3,
          padding: 4,
          mx: "auto",
          mt: 10,
          outline: "none",
          color: "#fff",
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontSize: 32, fontWeight: 700 }}>Withdraw</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: "#C1C1C1" }} />
          </IconButton>
        </Box>

        {/* Line */}
        <Box sx={{ height: "1px", backgroundColor: "#353F50", mt: 2 }} />

        {/* Label */}
        <Typography sx={{ mt: 4, fontSize: 18, color: "#ABABAB" }}>
          Your Wallet Address (Tether TRC20)
        </Typography>

        {/* Input */}
        <TextField
          placeholder="Address"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          sx={{
            mt: 2,
            "& .MuiInputBase-root": {
              backgroundColor: "#242C39",  // 🎨 تغییر داده شد
              borderRadius: 2,
              height: 60,
              paddingX: 2,
              color: "#fff",
              fontSize: 17,
            },
            "& fieldset": { border: "none" },
          }}
        />

        {/* Confirm Button */}
        <Button
          sx={{
            mt: 4,
            width: "100%",
            height: 63,
            borderRadius: 3,
            textTransform: "none",
            fontSize: 22,
            fontWeight: 600,
            backgroundColor: "#1D8D94",   // 🎨 تغییر داده شد
            ":hover": { backgroundColor: "#18777C" },
          }}
        >
          Confirm
        </Button>
      </Box>
    </Modal>
  );
}
