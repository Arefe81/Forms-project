import { Container, Box, Typography, Divider, TextField } from "@mui/material";
import tether from "../../images/tether.png";
import pm from "../../images/pm.png";


export default function SuccessPagePm() {
    return (
        <>
            <Container>
                <Box
                    sx={{
                        height: "770px",
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
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.125 20.5L15.375 30.75L35.875 10.25"
                                stroke="#40A578"
                                strokeWidth="7.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <Typography sx={{ fontSize: 30, color: "#40A578", fontWeight: 600 }}>
                            Payment Success !
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

                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Typography
                                sx={{
                                    width: "160px",
                                    fontWeight: 400,
                                    fontSize: 19,
                                    color: "#ABABAB",
                                }}
                            >
                                Time & Date :
                            </Typography>

                            <TextField
                                value={"2 5 - 0 2 - 2 0 2 3 , 1 3 : 2 2 : 1 6"}
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
                                Tx Id :
                            </Typography>

                            <TextField
                                value={
                                    "f 5 3 e a 9 b d 3 3 5 2 f d 3 b 2 4 b e 0 4 f a 2 7 c e 2 1 7 1 b 2 1 d 1 3 7 8 e 6 5 8 c 5 0 5 5 3 d 8 0 4 c f a 7 0 c e b 6 4"
                                }
                                multiline
                                minRows={2} 
                                maxRows={6} 
                                InputProps={{
                                    endAdornment: (
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 16H4C2.89543 16 2 15.1046 2 14V4C2 2.89543 2.89543 2 4 2H14C15.1046 2 16 2.89543 16 4V8M10 22H20C21.1046 22 22 21.1046 22 20V10C22 8.89543 21.1046 8 20 8H10C8.89543 8 8 8.89543 8 10V20C8 21.1046 8.89543 22 10 22Z"
                                                    stroke="#ABABAB"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </Box>
                                    ),
                                }}
                                sx={{
                                    flex: 1,
                                    "& .MuiInputBase-root": {
                                        borderRadius: 3,
                                        backgroundColor: "#242C39",
                                        color: "#FFFFFF",
                                        fontWeight: 600,
                                        px:4,
                                        height: "auto", 
                                        alignItems: "center",
                                        overflow: "auto",
                                        whiteSpace: "pre-wrap",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                }}
                            />


                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
