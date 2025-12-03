import { Container, Box, Typography, Divider, TextField, Button } from "@mui/material";
import tether from "../images/tether.png";
import pm from "../images/pm.png";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

interface ConfirmPageProps {
    reverse: boolean;
    onNext: () => void;
}

export default function ConfirmPage({ reverse, onNext }: ConfirmPageProps) {

    const { isLoggedIn } = useSelector((state: RootState) => state.auth)

    const sendAmount = reverse ? 120 : 100;
    const receiveAmount = reverse ? 100 : 120;

    const sendLogo = reverse ? pm : tether;
    const receiveLogo = reverse ? tether : pm;

    const sendName = reverse ? "Perfect Money" : "USDT";
    const receiveName = reverse ? "USDT" : "Perfect Money";


    const conditions = [
        "Any Change In Exchange Rate On The Binance Exchange Gives Us The Right To Recalculate The Amount Of The Application.",
        "The Rate For Your Application Will Be Fixed After 1 Confirmation Online.",
        "Funds Are Credited After 20 Transaction Confirmations.",
        "We Conduct AML Checks In Accordance With The AML Policy Of The Flashobmen Service.",
        "Fill out All Fields Of The Form Provided.",
        "Click The “Make An Exchange” Button.",
        "Read The Terms Of Exchange. If You Accept Them, Check The Appropriate Boxes.",
        "Pay For The Application According To The Instructions On The Website.",
    ];

    return (
        <Container>
            <Box sx={{
                height: "909px",
                backgroundColor: "#2A3342",
                mt: 3,
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                px: 8,
                py: 4,
            }}>
                <Typography sx={{ fontSize: 22 }}>Invoice Details :</Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
                    <Typography sx={{ color: "#ABABAB", fontSize: 18, fontWeight: 600 }}>Send :</Typography>
                    <Typography sx={{ display: "flex", gap: 1, fontSize: 17, alignItems: "center" }}>
                        {sendAmount}
                        <img src={sendLogo} width={24} height={24} style={{ borderRadius: reverse ? 13 : 0 }} />
                        {sendName}
                    </Typography>
                </Box>


                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Typography sx={{ color: "#ABABAB", fontSize: 18, fontWeight: 600 }}>Receive :</Typography>
                    <Typography sx={{ display: "flex", gap: 1, fontSize: 17, alignItems: "center" }}>
                        {receiveAmount}
                        <img src={receiveLogo} width={24} height={24} style={{ borderRadius: reverse ? 0 : 13 }} />
                        {receiveName}
                    </Typography>
                </Box>

                <Divider sx={{ borderColor: "#3F4C64", borderBottomWidth: 1, mt: 3 }} />


                {!isLoggedIn && (
                    <Box>
                        <Typography sx={{ color: "#ABABAB", fontSize: 17, mt: 2 }}>Email :</Typography>
                        <TextField
                            fullWidth
                            name="email"
                            type="email"
                            placeholder="Please enter your email"
                            margin="normal"
                            sx={{
                                "& .MuiInputBase-root": {
                                    borderRadius: 3,
                                    backgroundColor: "#242C39",
                                    color: "#FFFFFF",
                                    fontWeight: 600,
                                    padding: "0 12px",
                                    height: "60px",
                                },
                                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                            }}
                        />
                    </Box>
                )}



                <Typography sx={{ fontSize: 18, mt: 3 }}>Exchange Conditions:</Typography>
                {conditions.map((text, i) => (
                    <Box key={i} sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt: 2, gap: 1.5 }}>
                        <Box sx={{
                            width: "23px",
                            height: "23px",
                            borderRadius: "100%",
                            backgroundColor: "#1D8D94",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Typography sx={{ fontSize: 14, lineHeight: "23px" }}>{i + 1}</Typography>
                        </Box>
                        <Typography>{text}</Typography>
                    </Box>
                ))}


                <Box sx={{ display: "flex", flexDirection: "row", mt: 3, gap: 1, alignItems: "center" }}>
                    <Box sx={{ width: "32px", height: "32px", borderRadius: 2, backgroundColor: "#242C39" }}></Box>
                    <Typography sx={{ fontSize: 17 }}>
                        I Agree With The <Typography component="span" sx={{ color: "#60A7F8" }}>AML Policy</Typography> And
                        <Typography component="span" sx={{ color: "#60A7F8" }}> User Agreement</Typography>.
                    </Typography>
                </Box>


                <Box sx={{ width: "560px", mx: "auto", mt: 6 }}>
                    <Button
                        fullWidth
                        onClick={onNext}
                        variant="contained"
                        type="submit"
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
                        Confirm
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
