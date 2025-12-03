import { Container, Box, Typography, Divider, TextField, Button } from "@mui/material";
import pm from "../../images/pm.png";
import tether from "../../images/tether.png";

interface WaitingProps {
  onSuccess: () => void;
  onExpired: () => void;
}

export default function Waiting({ onSuccess, onExpired }: WaitingProps) {
  return (
    <Container>
      <Box
        sx={{
          height: "700px",
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
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
          <Typography sx={{ color: "#ABABAB", fontSize: 18, fontWeight: 600 }}>
            Send :
          </Typography>
          <Typography sx={{ display: "flex", gap: 1, fontSize: 17, alignItems: "center" }}>
            120
            <img src={pm} width={24} height={24} style={{ borderRadius: 13 }} />
            Perfect Money
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Typography sx={{ color: "#ABABAB", fontSize: 18, fontWeight: 600 }}>
            Receive :
          </Typography>
          <Typography sx={{ display: "flex", gap: 1, fontSize: 17, alignItems: "center" }}>
            100
            <img src={tether} width={24} height={24} style={{ borderRadius: 5 }} />
            USDT
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "#3F4C64", borderBottomWidth: 1, mt: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mt: 5,
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5001 3.41602C21.0766 3.41602 21.6465 3.44458 22.2084 3.50037M20.5001 3.41602C19.9235 3.41602 19.3536 3.44458 18.7917 3.50037M20.5001 3.41602C29.9349 3.41602 37.5834 11.0645 37.5834 20.4993M37.5834 20.4993C37.5834 29.9341 29.9349 37.5827 20.5001 37.5827M37.5834 20.4993C37.5834 21.0759 37.5549 21.6458 37.499 22.2077M37.5834 20.4993C37.5834 19.9228 37.5549 19.3529 37.499 18.791M3.50111 18.791C3.44531 19.3529 3.41675 19.9228 3.41675 20.4993C3.41675 21.0759 3.44531 21.6458 3.50111 22.2077M20.5001 37.5827C19.9235 37.5827 19.3536 37.5542 18.7917 37.4983M20.5001 37.5827C21.0766 37.5827 21.6465 37.5542 22.2084 37.4983M30.479 6.63197C30.0203 6.30271 29.5411 5.99304 29.0417 5.70476C28.5424 5.41647 28.0347 5.15626 27.5201 4.92364M6.6327 10.5204C6.30344 10.9791 5.99377 11.4584 5.70549 11.9577C5.41721 12.457 5.15699 12.9648 4.92437 13.4793M10.5211 34.3667C10.9798 34.6959 11.4591 35.0057 11.9584 35.294C12.4577 35.5822 12.9655 35.8424 13.48 36.0751M34.3675 30.4782C34.6967 30.0195 35.0064 29.5404 35.2948 29.041C35.583 28.5417 35.8431 28.034 36.0758 27.5194M36.0758 13.4795C35.8431 12.965 35.583 12.4572 35.2948 11.9579C35.0064 11.4585 34.6967 10.9793 34.3675 10.5206M13.4801 4.92379C12.9656 5.15643 12.4577 5.41663 11.9584 5.70491C11.4591 5.99319 10.9798 6.30288 10.5211 6.63212M4.92437 27.5196C5.15699 28.0341 5.41721 28.5418 5.70549 29.0412C5.99377 29.5405 6.30346 30.0197 6.6327 30.4784M27.5201 36.0752C28.0347 35.8426 28.5424 35.5824 29.0417 35.2942C29.5411 35.0058 30.0203 34.6961 30.479 34.3669M20.5001 10.2493V20.4993L27.3334 27.3327"
              stroke="#FFAF00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Typography sx={{ fontSize: 35, color: "#FFAF00", fontWeight: 600 }}>
            waiting ...
          </Typography>
        </Box>

        <Typography
          sx={{ display: "flex", color: "#ABABAB", mt: 3, fontSize: 18, lineHeight: 1.6 }}
        >
          The Transaction Was Successfully Completed And The Amount Of 100 USDT Was Deposited
          To Your Wallet Address Below :
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              sx={{
                width: "160px",
                fontWeight: 400,
                fontSize: 19,
                color: "#ABABAB",
              }}
            >
              Address :
            </Typography>

            <TextField
              value={"x 0 9 a a 9 9 8 e e 4 5 4 c 4 5 6 2 5 5 d a f 3 a c 9 4 9 0 8 f 1 d c f b 7 0 3 3"}
              sx={{
                flex: 1,
                "& .MuiInputBase-root": {
                  borderRadius: 3,
                  backgroundColor: "#242C39",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  padding: "1px 12px",
                  height: "55px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              sx={{
                width: "160px",
                fontWeight: 400,
                fontSize: 19,
                color: "#ABABAB",
              }}
            >
              Amount :
            </Typography>

            <TextField
              value={"1 0 0 U S D T"}
              sx={{
                flex: 1,
                "& .MuiInputBase-root": {
                  borderRadius: 3,
                  backgroundColor: "#242C39",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  padding: "1px 12px",
                  height: "55px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 3 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={onSuccess} // ← هدایت به SuccessPagePm
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
              Success
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={onExpired} // ← هدایت به ExpiredPagePm
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
              Expired
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
