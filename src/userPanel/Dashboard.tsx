import {
    Box,
    Container,
    TextField,
    InputAdornment,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Pagination,
    PaginationItem
} from "@mui/material"
import tether from "../images/tether.png"

import pm from "../images/pm.png"

import Sidebar from "./Sidebar";


interface Impressions {
    form: string;
    to: string;
    amount: number;
    received: number;
    date: string;
    status: string;
    link: string
}

const impressions: Impressions[] = [
    { form: "USDT", to: "PM", amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More " },
    { form: "USDT", to: "PM", amount: 1000, received: 1200, date: "25-02-2023", status: "unsuccessful", link: "See More " },
    { form: "USDT", to: "PM", amount: 1000, received: 1200, date: "25-02-2023", status: "checking", link: "See More " },
    { form: "USDT", to: "PM", amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More " },
    { form: "USDT", to: "PM", amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More " },
    { form: "USDT", to: "PM", amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More " },
    { form: "USDT", to: "PM", amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More" },
]

const statusStyle = (status: Impressions["status"]) => {
    if (status == "successful") {
        return { backgroundColor: "#40A578", color: "#035610" };
    }
    else if (status == "unsuccessful") {
        return { backgroundColor: "#F66066", color: "#60140F" }
    }
    return { backgroundColor: "#F3AC76", color: "#603E0F" };
}





export default function Dashboard() {
    return (
        <>
            <Container maxWidth="xl">
                
                <Box sx={{ display: "flex", gap: 0.5, mt: 4 }}>
                    <Box sx={{ flex: '0 0 270px' }}>
                        <Sidebar />
                    </Box>
                    <Box sx={{
                        width: "850px", height: "775px", backgroundColor: "#2A3342", borderRadius: "15px", padding: 3,
                        display: "flex", flexDirection: "column",
                    }}>



                        <TextField
                            fullWidth
                            placeholder="Search..."
                            variant="outlined"
                            sx={{
                                borderRadius: 2,
                                backgroundColor: "#242C39",
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '& .MuiOutlinedInput-input': {
                                    color: '#fff',
                                    padding: '15px 1px',
                                    display: 'flex',
                                    alignItems: 'center',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_132_815)">
                                                <path d="M14.1666 14.166L18.3333 18.3327M16.25 8.95768C16.25 12.9848 12.9854 16.2493 8.95829 16.2493C4.93122 16.2493 1.66663 12.9848 1.66663 8.95768C1.66663 4.93061 4.93122 1.66602 8.95829 1.66602C12.9854 1.66602 16.25 4.93061 16.25 8.95768Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_132_815">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Typography sx={{ fontSize: 22, mt: 4 }}>Latest Transactions</Typography>

                        <TableContainer sx={{
                            height: "523px",
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
                        }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ width: 120, color: "#98A4B3", textAlign: "center", py: 2.8, fontSize: 16 }}>From</TableCell>
                                        <TableCell sx={{ width: 120, color: "#98A4B3", textAlign: "center", fontSize: 16 }}>To</TableCell>
                                        <TableCell sx={{ width: 100, textAlign: "center", color: "#98A4B3", fontSize: 16 }}>Amount</TableCell>
                                        <TableCell sx={{ width: 100, textAlign: "center", color: "#98A4B3", fontSize: 16 }}>Received</TableCell>
                                        <TableCell sx={{ width: 150, textAlign: "center", color: "#98A4B3", fontSize: 16 }}>Date</TableCell>
                                        <TableCell sx={{ width: 150, textAlign: "center", color: "#98A4B3", fontSize: 16 }}>Status</TableCell>
                                        <TableCell sx={{ width: 120, textAlign: "center", color: "#98A4B3", fontSize: 16 }}>Link</TableCell>
                                    </TableRow>
                                </TableHead>


                                <TableBody>

                                    {impressions.map((row, index) => (

                                        <TableRow key={index}>
                                            <TableCell>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
                                                    <img src={tether} width={25} /> {row.form}
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
                                                    <img src={pm} width={25} style={{borderRadius: 13}} /> {row.to}
                                                </Box>
                                            </TableCell>
                                            <TableCell  sx={{ textAlign: "center" }}>{row.amount}</TableCell>
                                            <TableCell  sx={{ textAlign: "center" }}>{row.received}</TableCell>
                                            <TableCell  sx={{ textAlign: "center" }}>{row.date}</TableCell>
                                            <TableCell>
                                                <Button sx={{
                                                    width: "93px", height: "29px", borderRadius: "8px",
                                                    textTransform: "capitalize", fontWeight: 700,
                                                    ...statusStyle(row.status)
                                                }}>
                                                    {row.status}
                                                </Button>
                                            </TableCell>
                                            <TableCell  sx={{ textAlign: "center" }}>{row.link}</TableCell>


                                        </TableRow>

                                    ))}



                                </TableBody>
                            </Table>
                        </TableContainer>



                        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                            <Pagination
                                count={4}
                                siblingCount={0}
                                hidePrevButton
                                hideNextButton
                                renderItem={(item) => (
                                    <PaginationItem
                                        {...item}
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            color: "#ABABAB",
                                            fontSize: "15px",
                                            backgroundColor: "#313A4B",
                                            transition: "0.25s",

                                            "&.Mui-selected": {
                                                backgroundColor: "#40A578 !important",
                                                color: "#fff",
                                                boxShadow: "0 0 8px 2px rgba(64,165,120,0.6)",
                                            },
                                            "&.Mui-selected:hover": {
                                                backgroundColor: "#40A578 !important",
                                            },
                                            "&:hover": {
                                                backgroundColor: "#3a4657",
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Box>







                    </Box>

                </Box>
            </Container>
        </>
    )
}