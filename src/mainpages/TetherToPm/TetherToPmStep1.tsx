import { Container, Box, Typography, Divider, Button, TextField } from "@mui/material";
import tether from "../../images/tether.png";
import pm from "../../images/pm.png";
import qrcode from "../../images/qrcode.png";
import TimerCircle from "./TimerCircle";
import { useState } from "react";

interface TetherToPmStep1Props {
  onNext: () => void;             // وقتی Submit زده شد و تایمر تمام نشده → Success
  onExpiredNext: () => void;      // وقتی Submit زده شد یا تایمر تمام شده → Expired
  onTimerExpire?: () => void;      // اطلاع Home از منقضی شدن تایمر
}

export default function TetherToPmStep1({
  onNext,
  onExpiredNext,
  onTimerExpire,
}: TetherToPmStep1Props) {
  const [isExpired, setIsExpired] = useState(false);

  const conditions = [
    "Any Change In Exchange Rate On The Binance Exchange Gives Us The Right To Recalculate The Amount Of The Application.",
    "The Rate For Your Application Will Be Fixed After 1 Confirmation Online.",
    "Funds Are Credited After 20 Transaction Confirmations.",
  ];

  const handleNext = () => {
    if (isExpired) {
      onExpiredNext();
    } else {
      onNext();
    }
  };

  const handleTimerExpire = () => {
    setIsExpired(true);
    if (onTimerExpire) onTimerExpire();
  };

  return (
    <Container>
      <Box
        sx={{
          height: "881px",
          backgroundColor: "#2A3342",
          mt: 3,
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          px: 8,
          py: 4,
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 22, mt: 6 }}>Transaction Details :</Typography>
          <TimerCircle durationSeconds={600} onExpire={handleTimerExpire} />
        </Box>

        {/* Send */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
          <Typography sx={{ color: "#ABABAB", fontSize: 18, fontWeight: 600 }}>Send :</Typography>
          <Typography sx={{ display: "flex", gap: 1, fontSize: 17, alignItems: "center" }}>
            100
            <img src={tether} width={24} height={24} style={{ borderRadius: 5 }} />
            USDT
          </Typography>
        </Box>

        {/* Receive */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Typography sx={{ color: "#ABABAB", fontSize: 18, fontWeight: 600 }}>Receive :</Typography>
          <Typography sx={{ display: "flex", gap: 1, fontSize: 17, alignItems: "center" }}>
            120
            <img src={pm} width={24} height={24} style={{ borderRadius: 13 }} />
            Perfect Money
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "#3F4C64", borderBottomWidth: 1, mt: 3 }} />

        {/* Deposit Info */}
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 6, mt: 5 }}>
          <Box>
            <Typography sx={{ color: "#ABABAB", fontSize: 18, fontWeight: 600, mt: 2 }}>
              Choose Network And To Receive 120 Perfect Money, Please Deposit 100 Tether To The Tether Address Below:
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", mt: 8 }}>
              <Box
                sx={{
                  width: "126px",
                  height: "57px",
                  backgroundColor: "#1D8D94",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                  gap: 1,
                }}
              >
                <Button sx={{ fontWeight: 600, fontSize: 15 }}>TRON</Button>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 10L12 14L8 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>

              <TextField
                fullWidth
                value="X09aa998ee454c456255daf3ac94908f1dcfb7033"
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: 2,
                    backgroundColor: "#242C39",
                    color: "white",
                    fontWeight: 600,
                    height: "57px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <img src={qrcode} width={191} height={191} />
          </Box>
        </Box>

        {/* Exchange Conditions */}
        <Typography sx={{ fontSize: 18, mt: 5 }}>Exchange Conditions:</Typography>
        {conditions.map((text, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", mt: 2, gap: 1.5 }}>
            <Box
              sx={{
                width: "23px",
                height: "23px",
                borderRadius: "100%",
                backgroundColor: "#1D8D94",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: 14 }}>{i + 1}</Typography>
            </Box>
            <Typography>{text}</Typography>
          </Box>
        ))}

        {/* Submit Button */}
        <Box sx={{ width: "560px", mx: "auto", mt: 3 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleNext}
            sx={{
              py: 1.5,
              bgcolor: "#1D8D94",
              color: "white",
              borderRadius: 2,
              textTransform: "none",
              fontSize: "18px",
              boxShadow: "0px 4px 12px rgba(29, 141, 148, 0.4)",
              "&:hover": { bgcolor: "#17777D" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
