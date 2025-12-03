import { Container, Box, Typography, Divider, Button } from "@mui/material";
import tether from "../../images/tether.png";
import pm from "../../images/pm.png";
interface ExpiredPageProps {
  onRetry: () => void;
  
}


export default function ExpiredPagePm({ onRetry,  }: ExpiredPageProps) {



    return (
        <Container>
            <Box
                sx={{
                    height: "750px",
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
                <Divider sx={{ borderColor: "#3F4C64", borderBottomWidth: 1, mt: 5 }} />

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mt: 9 }}>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.3335 8.33398L31.6668 31.6673M8.3335 31.6673L31.6668 8.33398"
                            stroke="#F66066"
                            strokeWidth="7.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <Typography sx={{ fontSize: 30, color: "#F66066", fontWeight: 600 }}>
                        Your payment time has expired!
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#ABABAB",
                        mt: 5,
                        fontSize: 20,
                    }}
                >
                    Please Complete The Payment Process Again
                </Typography>

                <Box
                    sx={{
                        mx: "auto",
                        mt: 7,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Button
                        onClick={onRetry}
                        variant="contained"
                        sx={{
                            width: "173px",
                            height: "68px",
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
                        Try Again
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
