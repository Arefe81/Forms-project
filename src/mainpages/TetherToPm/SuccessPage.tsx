import { Container, Box, Typography, Divider, TextField } from "@mui/material"
import tether from "../../images/tether.png"
import pm from "../../images/pm.png"
export default function SuccessPage() {
    return (
        <>
            <Container>
                <Box sx={{
                    height: "750px",
                    backgroundColor: "#2A3342",
                    mt: 3,
                    borderRadius: 5,
                    display: "flex",
                    flexDirection: "column",
                    px: 8,
                    py: 4,
                }}>

                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography sx={{ fontSize: 22, mt: 6 }}>Transaction Details :</Typography>

                    </Box>


                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
                        <Typography sx={{ color: "#ABABAB", fontSize: 18, fontWeight: 600 }}>Send :</Typography>
                        <Typography sx={{ display: "flex", gap: 1, fontSize: 17, alignItems: "center" }}>
                            100
                            <img src={tether} width={24} height={24} style={{ borderRadius: 5 }} />
                            USDT
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                        <Typography sx={{ color: "#ABABAB", fontSize: 18, fontWeight: 600 }}>Receive :</Typography>
                        <Typography sx={{ display: "flex", gap: 1, fontSize: 17, alignItems: "center" }}>
                            120
                            <img src={pm} width={24} height={24} style={{ borderRadius: 13 }} />
                            Perfect Money
                        </Typography>
                    </Box>

                    <Divider sx={{ borderColor: "#3F4C64", borderBottomWidth: 1, mt: 3 }} />

                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mt: 5 }}>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.125 20.5L15.375 30.75L35.875 10.25" stroke="#40A578" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <Typography sx={{ fontSize: 30, color: "#40A578", fontWeight: 600 }}>Payment Success !</Typography>
                    </Box>
                    <Typography sx={{ display: "flex", color: "#ABABAB", mt: 3, fontSize: 18 }}>The Transaction Was Successfully Completed And The Amount Of 100 Tether Was Deposited To This Address</Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
                        {[
                            { label: "E- Voucher", value: "2 3 2 6 5 6 4 9 2 5" },
                            { label: "Activation Code", value: "9 0 1 2 0 3 7 4 2 7 0 9 2 3 3 0" },
                            { label: "Amount", value: "1 0 0 U S D T" },
                            { label: "Time & Date", value: "2 5 - 0 2 - 2 0 2 3, 1 3 : 2 2 : 1 6 " },
                        ].map((item, index) => (
                            <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <Typography sx={{
                                    width: "160px", 
                                    fontWeight: 400,
                                    fontSize: 19,
                                    color: "#ABABAB"
                                }}>
                                    {item.label} :
                                </Typography>
                                <TextField
                                    value={item.value}
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
                        ))}
                    </Box>


                </Box>

            </Container>
        </>
    )
}