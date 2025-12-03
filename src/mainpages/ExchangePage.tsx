import {
  Box,
  Container,
  Typography,
  TextField,
  Divider,
  Button,
  MenuItem,
  Select,
} from "@mui/material";

import tether from "../images/tether.png";
import pm from "../images/pm.png";

import { useState } from "react";

interface ExchangePageProps {
  reverse: boolean;
  setReverse: (val: boolean) => void;
  onNext: () => void;
}

export default function ExchangePage({
  reverse,
  setReverse,
  onNext,
}: ExchangePageProps) {
  const [sendAmount, setSendAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");

  const tokens = [
    { name: "USDT(TRC20)", icon: tether },
    { name: "Perfect Money", icon: pm },
  ];

  const [sendToken, setSendToken] = useState(tokens[0]);
  const [receiveToken, setReceiveToken] = useState(tokens[1]);

  
  const handleSendTokenChange = (newTokenName: string) => {
    const selected = tokens.find((t) => t.name === newTokenName);
    if (!selected) return;

    if (receiveToken.name === newTokenName) {
      const sa = sendAmount;
      const ra = receiveAmount;

      setSendAmount(ra);
      setReceiveAmount(sa);

      setSendToken(receiveToken);
      setReceiveToken(selected);
    } else {
      setSendToken(selected);
    }
  };

  
  const handleReceiveTokenChange = (newTokenName: string) => {
    const selected = tokens.find((t) => t.name === newTokenName);
    if (!selected) return;

      
    if (sendToken.name === newTokenName) {
      const sa = sendAmount;
      const ra = receiveAmount;

      setSendAmount(ra);
      setReceiveAmount(sa);

      setReceiveToken(sendToken);
      setSendToken(selected);
    } else {
      setReceiveToken(selected);
    }
  };

  
  const handleSwap = () => {
    setReverse(!reverse);

    const sa = sendAmount;
    const ra = receiveAmount;

    setSendAmount(ra);
    setReceiveAmount(sa);

    const st = sendToken;
    const rt = receiveToken;

    setSendToken(rt);
    setReceiveToken(st);
  };

  return (
    <>
      
      <Container
        sx={{
          backgroundColor: "#2A3342",
          width: "560px",
          height: "213px",
          mt: 5,
          borderRadius: 5,
        }}
      >
        <Box sx={{ display: "flex", py: 5, px: 3, flexDirection: "column" }}>
          <Typography sx={{ color: "#ABABAB", fontSize: 17 }}>From :</Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#242C39",
              borderRadius: 3,
              height: 60,
              overflow: "hidden",
              mt: 2,
            }}
          >
            
            <TextField
              fullWidth
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
              placeholder="1000"
              InputProps={{
                sx: {
                  height: "100%",
                  padding: "0 12px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                },
              }}
            />

            
            <Box sx={{ display: "flex", alignItems: "center", pr: 3 }}>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#596B89", mx: 1 }}
              />

              <Select
                value={sendToken.name}
                onChange={(e) => handleSendTokenChange(e.target.value)}
                sx={{
                  color: "#979E9C",
                  backgroundColor: "transparent",
                  border: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: "none" },
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    padding: 0,
                    pr: 0,
                  },
                }}
              >
                {tokens.map((t) => (
                  <MenuItem key={t.name} value={t.name}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <img src={t.icon} style={{ width: 26, height: 26, borderRadius:13 }} />
                      {t.name}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 1.5 }}>
            <Typography sx={{ color: "#ABABAB", fontSize: 14 }}>
              Min : $100{" "}
            </Typography>
            <Typography sx={{ color: "#ABABAB", fontSize: 14 }}>
              {" "}
              Max: $4832
            </Typography>
          </Box>

          
          <Box
            onClick={handleSwap}
            sx={{
              width: "69px",
              height: "69px",
              borderRadius: "100%",
              backgroundColor: "#242C39",
              mt: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: 25,
              cursor: "pointer",
            }}
          >
            <svg width="23" height="27" viewBox="0 0 21 27" fill="none">
              <path d="M6.05078 26.125L6.05078 1.1875" stroke="#F3AC76" />
              <line x1="13.082" x2="13.082" y2="24.9375" stroke="#F3AC76" />
              <line
                x1="0.353478"
                y1="6.77145"
                x2="6.29098"
                y2="0.833947"
                stroke="#F3AC76"
              />
              <line
                y1="-0.5"
                x2="9.46747"
                y2="-0.5"
                transform="matrix(-0.752577 0.658505 -0.752577 -0.658505 19.707 18.7031)"
                stroke="#F3AC76"
              />
            </svg>
          </Box>
        </Box>
      </Container>

     
      <Container
        sx={{
          backgroundColor: "#2A3342",
          width: "560px",
          height: "213px",
          mt: 5,
          borderRadius: 5,
        }}
      >
        <Box sx={{ display: "flex", py: 5, px: 3, flexDirection: "column" }}>
          <Typography sx={{ color: "#ABABAB", fontSize: 17 }}>To :</Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#242C39",
              borderRadius: 3,
              height: 60,
              overflow: "hidden",
              mt: 2,
            }}
          >
            
            <TextField
              fullWidth
              value={receiveAmount}
              onChange={(e) => setReceiveAmount(e.target.value)}
              placeholder="1000"
              InputProps={{
                sx: {
                  height: "100%",
                  padding: "0 12px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                },
              }}
            />

            
            <Box sx={{ display: "flex", alignItems: "center", pr: 3 }}>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#596B89", mx: 1 }}
              />

              <Select
                value={receiveToken.name}
                onChange={(e) => handleReceiveTokenChange(e.target.value)}
                sx={{
                  color: "#979E9C",
                  backgroundColor: "transparent",
                  border: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: "none" },
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    padding: 0,
                    pr: 0,
                  },
                }}
              >
                {tokens.map((t) => (
                  <MenuItem key={t.name} value={t.name}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <img src={t.icon} style={{ width: 26, height: 26 , borderRadius:13}} />
                      {t.name}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 1.5 }}>
            <Typography sx={{ color: "#ABABAB", fontSize: 14 }}>
              Min : $100{" "}
            </Typography>
            <Typography sx={{ color: "#ABABAB", fontSize: 14 }}>
              Max: $4832
            </Typography>
          </Box>
        </Box>
      </Container>

     
      <Box sx={{ width: "560px", mx: "auto", mt: 2, mb: 10 }}>
        <Button
          fullWidth
          onClick={onNext}
          variant="contained"
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
          Make Exchange
        </Button>
      </Box>
    </>
  );
}
