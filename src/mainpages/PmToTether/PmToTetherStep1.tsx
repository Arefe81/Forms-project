import { Container, Box, Typography, Divider, Button, TextField } from "@mui/material";
import pm from "../../images/pm.png";
import tether from "../../images/tether.png";
import TimerCircle from "../TetherToPm/TimerCircle";

interface Props {
  onNext: () => void;
  onExpiredNext: () => void;
}

export default function PmToTetherStep1({ onNext, onExpiredNext }: Props) {
  const handleTimerExpire = () => {
    onExpiredNext();
  };

  

  return (
    <>
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: 22, mt: 6 }}>Transaction Details :</Typography>
            <TimerCircle onExpire={handleTimerExpire} />
          </Box>

         
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
            <Typography sx={{ color: "#ABABAB", fontSize: 18, fontWeight: 600 }}>Send :</Typography>
            <Typography sx={{ display: "flex", gap: 1, fontSize: 17, alignItems: "center" }}>
              120
              <img src={pm} width={24} height={24} style={{ borderRadius: 13 }} />
              Perfect Money
            </Typography>
          </Box>

          
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Typography sx={{ color: "#ABABAB", fontSize: 18, fontWeight: 600 }}>Receive :</Typography>
            <Typography sx={{ display: "flex", gap: 1, fontSize: 17, alignItems: "center" }}>
              100
              <img src={tether} width={24} height={24} style={{ borderRadius: 5 }} />
              USDT 
            </Typography>
          </Box>

          <Divider sx={{ borderColor: "#3F4C64", borderBottomWidth: 1, mt: 3 }} />

          <Box>
            <Typography sx={{fontSize:18, color: "#ABABAB", mt: 2}}>Perfect Money Code : </Typography>
                 
                 <TextField
                fullWidth
                placeholder="Please Enter Perfect Money Code"
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: 2,
                    backgroundColor: "#242C39",
                    color: "white",
                    fontWeight: 600,
                    height: "57px",
                    mt: 1
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
          </Box>
          <Box>
            <Typography sx={{fontSize:18, color: "#ABABAB", mt: 2}}>Perfect Money Number : </Typography>
                 
                 <TextField
                fullWidth
                placeholder="Please Enter Perfect Money Number"
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: 2,
                    backgroundColor: "#242C39",
                    color: "white",
                    fontWeight: 600,
                    height: "57px",
                    mt: 1
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
          </Box>
          <Typography sx={{fontSize:18, color: "#ABABAB", mt: 2}}>Choose Network And Enter Tether Address : </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", mt:1  }}>
              <Box
                sx={{
                    padding:1,
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
                <Button sx={{ fontWeight: 600, fontSize: 16, height:"57px", width:"126px" }}>TRON</Button>
                <svg width="45" height="26" viewBox="0 0 24 24" fill="none">
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
                placeholder="Please Enter Address"
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

            <Box sx={{ width: "560px", mx: "auto", mt: 5}}>
          <Button
            fullWidth
            variant="contained"
           onClick={onNext}
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
    </>
  );
}
