import {
    Box, Container, Typography, TextField, Button, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material"
import tether from "../images/tether.png"
import Sidebar from "./Sidebar"
import WithdrawModal from "./WithdrawModal";
import { useState } from "react";


interface Impressions {
    amount: number;
    to: string;
    date: string;
    status: string | "Waiting";
}

const impressions: Impressions[] = [
    { amount: 100, to: "x09aa998ee454c456255daf3ac94908f1dcfb7033", date: "25-02-2023", status: "Done" },
    { amount: 100, to: "x09aa998ee454c456255daf3ac94908f1dcfb7033", date: "25-02-2023", status: "Waiting" },
    { amount: 100, to: "x09aa998ee454c456255daf3ac94908f1dcfb7033", date: "25-02-2023", status: "Done" },
    { amount: 100, to: "x09aa998ee454c456255daf3ac94908f1dcfb7033", date: "25-02-2023", status: "Done" },
];

const statusStyle = (status: Impressions["status"]) => {
    if (status == "Done") {
        return { backgroundColor: "#40A578", color: "#035610" };
    }
    return { backgroundColor: "#F3AC76", color: "#603E0F" };
}

export default function PartnerProgram() {
    const [openWithdraw, setOpenWithdraw] = useState(false);

    return (
        <>
            <Container maxWidth="xl">
                
                <Box sx={{ display: "flex", gap: 0.5, mt: 3 }}>
                    <Box sx={{ flex: '0 0 270px' }}>
                        <Sidebar />
                    </Box>
                    <Box sx={{
                        width: "850px", height: "775px", backgroundColor: "#2A3342", borderRadius: "15px", padding: 3,
                        display: "flex", flexDirection: "column",
                    }}>

                        <Typography sx={{ color: "#ABABAB", fontSize: 22 }}>Your Affiliate Link :</Typography>
                        <Box sx={{ display: "flex", mt: 2 }}>
                            <TextField
                                fullWidth
                                value="https://en.flashobmen.com/ref/acc0c4c8-c799-4216-a281-6d3d3c43a480"

                                sx={{
                                    "& .MuiInputBase-root": {
                                        borderRadius: 2,
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
                            <Button sx={{ textTransform: "none", width: "106px", height: "59", fontSize: 16, backgroundColor: "#353F50", gap: 0.5, color: "#ABABAB", borderRadius: 2, }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_138_1369)">
                                    <path d="M6.6665 13.3327H3.33317C2.4127 13.3327 1.6665 12.5865 1.6665 11.666V3.33268C1.6665 2.41221 2.4127 1.66602 3.33317 1.66602H11.6665C12.587 1.66602 13.3332 2.41221 13.3332 3.33268V6.66602M8.33317 18.3327H16.6665C17.587 18.3327 18.3332 17.5865 18.3332 16.666V8.33268C18.3332 7.41221 17.587 6.66602 16.6665 6.66602H8.33317C7.4127 6.66602 6.6665 7.41221 6.6665 8.33268V16.666C6.6665 17.5865 7.4127 18.3327 8.33317 18.3327Z" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_138_1369">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                                Copy</Button>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                            <Box sx={{
                                width: "517px",
                                height: "112px",
                                backgroundColor: "#242C39",
                                mt: 2,
                                borderRadius: 2,
                                padding: 3,
                                display: "flex", flexDirection: "row", alignItems: "center"
                            }}>
                                <Box sx={{
                                    width: 67,
                                    height: 67,
                                    backgroundColor: "#40A578",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 0px 10px rgba(64, 165, 120, 0.7)"
                                }}>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5835 12.916L6.98326 6.31637C7.46238 5.59769 8.26897 5.16602 9.13272 5.16602H15.5002M2.5835 12.916L15.5002 25.8327M2.5835 12.916H28.4168M15.5002 5.16602L20.6668 12.916L15.5002 25.8327M15.5002 5.16602L10.3335 12.916L15.5002 25.8327M15.5002 5.16602H21.8676C22.7313 5.16602 23.5379 5.59769 24.017 6.31637L28.4168 12.916M15.5002 25.8327L28.4168 12.916"
                                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 1, px: 2 }}>
                                    <Typography sx={{ fontWeight: 500, fontSize: 17 }}>Your Wallet Balance </Typography>
                                    <Typography sx={{ color: "#40A578", fontWeight: 700, fontSize: 20 }}>320 USDT</Typography>
                                </Box>
                                <Box sx={{ pl: 11 }}>
                                    <Button
                                        onClick={() => setOpenWithdraw(true)}
                                        sx={{ backgroundColor: "#40A578", width: "133px", height: "51px", borderRadius: 3, textTransform: "none", fontSize: 17 }}>
                                        Withdraw
                                    </Button>

                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    width: "271px",
                                    height: "112px",
                                    backgroundColor: "#242C39",
                                    mt: 2,
                                    borderRadius: 2,
                                    padding: 3,
                                    display: "flex", flexDirection: "row", alignItems: "center"
                                }}>

                                <Box sx={{
                                    width: 67,
                                    height: 67,
                                    backgroundColor: "#F05A7E",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 0px 10px rgba(240, 90, 126, 0.7)"

                                }}>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5835 27.125V21.9583C2.5835 20.5316 3.74009 19.375 5.16683 19.375H18.0835C19.5103 19.375 20.6668 20.5316 20.6668 21.9583V27.125M20.6668 3.875C21.7782 4.15955 22.7632 4.8059 23.4666 5.71215C24.1701 6.6184 24.5519 7.73299 24.5519 8.88021C24.5519 10.0274 24.1701 11.142 23.4666 12.0483C22.7632 12.9545 21.7782 13.6009 20.6668 13.8854M24.5418 19.375H25.8335C27.2603 19.375 28.4168 20.5316 28.4168 21.9583V27.125M16.7918 9.04167C16.7918 11.8951 14.4786 14.2083 11.6252 14.2083C8.77169 14.2083 6.4585 11.8951 6.4585 9.04167C6.4585 6.18819 8.77169 3.875 11.6252 3.875C14.4786 3.875 16.7918 6.18819 16.7918 9.04167Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 1, px: 2 }}>
                                    <Typography sx={{ fontWeight: 500, fontSize: 17 }}>Your Friends </Typography>
                                    <Typography sx={{ color: "#F05A7E", fontWeight: 700, fontSize: 20 }}>32</Typography>
                                </Box>

                            </Box>

                        </Box>

                        <Box sx={{ mt: 1 }}>
                            <Typography sx={{ display: "flex", color: "#ABABAB" }}>Get 10 <Typography sx={{ px: 0.5, }}><svg width="22" height="27" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5835 12.916L6.98326 6.31637C7.46238 5.59769 8.26897 5.16602 9.13272 5.16602H15.5002M2.5835 12.916L15.5002 25.8327M2.5835 12.916H28.4168M15.5002 5.16602L20.6668 12.916L15.5002 25.8327M15.5002 5.16602L10.3335 12.916L15.5002 25.8327M15.5002 5.16602H21.8676C22.7313 5.16602 23.5379 5.59769 24.017 6.31637L28.4168 12.916M15.5002 25.8327L28.4168 12.916"
                                    stroke="#40A578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg></Typography>
                                For Each Invited User
                            </Typography>
                        </Box>

                        <Typography sx={{ mt: 5, fontSize: 22 }}>Your Impressions</Typography>
                        <TableContainer sx={{
                            height: "325px",
                            backgroundColor: "#242C39",
                            borderRadius: 2,
                            mt: 2,


                            "& td, & th": {
                                border: "none !important",
                            },


                            "& thead tr th": {
                                borderBottom: "1px solid #353F50 !important",
                            },


                            "& tbody tr:not(:last-child) td": {
                                borderBottom: "1px solid #353F50 !important",
                            },
                        }}
                        >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ width: 120, color: "#98A4B3", textAlign: "center", py: 2.2, fontSize: 16 }}>Amount</TableCell>
                                        <TableCell sx={{ width: 120, color: "#98A4B3", textAlign: "center", fontSize: 16 }}>To</TableCell>
                                        <TableCell sx={{ width: 120, color: "#98A4B3", textAlign: "center", fontSize: 16 }}> Date</TableCell>
                                        <TableCell sx={{ width: 120, color: "#98A4B3", textAlign: "center", fontSize: 16 }}>Status</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>

                                    {impressions.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
                                                    <img src={tether} width={25} /> {row.amount}
                                                </Box>
                                            </TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{row.to}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{row.date}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>
                                                <Button sx={{
                                                    width: "93px", height: "29px", borderRadius: "8px",
                                                    textTransform: "capitalize", fontWeight: 700,
                                                    ...statusStyle(row.status)
                                                }}>
                                                    {row.status}
                                                </Button>
                                            </TableCell>
                                        </TableRow>

                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
                <WithdrawModal open={openWithdraw} onClose={() => setOpenWithdraw(false)} />

            </Container>
        </>
    )
}