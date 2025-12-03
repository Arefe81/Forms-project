import { Box, Container, Typography, TextField, Button } from "@mui/material"
import Sidebar from "./Sidebar"
export default function Profile() {
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
                        <Box sx={{ display: "flex", justifyContent: "flex-start", px: 20, py: 13, flexDirection: "column" }}>
                            <Typography sx={{ fontWeight: 400, fontSize: 25, mb: 7 }}>Edit Profile</Typography>

                            <Typography sx={{ fontWeight: 400, fontSize: 17, color: "#ABABAB", mb: 2 }}>Name : </Typography>
                            <TextField
                                placeholder=""
                                fullWidth
                                value="Saman Shams"
                                sx={{
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

                            <Typography sx={{ fontWeight: 400, fontSize: 17, color: "#ABABAB", mb: 2, mt: 2 }}>Email  : </Typography>
                            <TextField
                                placeholder=""
                                fullWidth
                                value="saman1965@gmail.com"
                                sx={{
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

                            <Typography sx={{ fontWeight: 400, fontSize: 17, color: "#ABABAB", mb: 2, mt: 2 }}>Password : </Typography>
                            <TextField
                                placeholder="Please enter your password"
                                fullWidth
                                sx={{
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

                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                sx={{
                                    mt: 3,
                                    py: 1.2,
                                    bgcolor: "#1D8D94",
                                    color: "white",
                                    borderRadius: 2,
                                    textTransform: "none",
                                    fontSize: "18px",
                                    boxShadow: "0px 4px 12px rgba(29, 141, 148, 0.4)",
                                    "&:hover": { bgcolor: "#17777D" },
                                }}
                            >
                                Confirm
                            </Button>

                        </Box>


                    </Box>

                </Box>
            </Container>
        </>
    )
}