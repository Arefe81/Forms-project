
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

interface LinkItems {
    title: string;
    path: string;
}

const Links: LinkItems[] = [
    { title: "Home", path: "/Home" },
    { title: "About Us", path: "/AboutUs" },
    { title: "Contact Us", path: "/ContactUs" },
    { title: "Blog", path: "/Blog" },
    { title: "FAQ", path: "/FAQ" }
];

export default function Header() {
    const auth = useSelector((state: RootState) => state.auth);

    const isLoggedIn = auth.isLoggedIn;

    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate("/dashboard");
    };

    return (
        <AppBar position="static" color="transparent" elevation={2}>
            <Container>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton>
                            <svg width="47" height="56" viewBox="0 0 55 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.04831 0V16.5688C8.04831 16.7615 7.99263 16.9501 7.88798 17.1119L0 29.3073L25.6232 14.8992L4.27053 65L27.1014 44.0428L28.868 44.2974C45.9104 46.7535 59.0063 29.5116 52.0676 13.7531L38.1063 26.0327L54.6957 1.63728L45.8261 4.91184C43.0027 1.78473 38.9868 0 34.7736 0H34.657H8.04831Z" fill="url(#paint0_linear_22_815)" />
                                <defs>
                                    <linearGradient id="paint0_linear_22_815" x1="34" y1="0" x2="34" y2="65" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#9CDBA6" />
                                        <stop offset="1" stopColor="#088395" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </IconButton>
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: "29px",
                                background: "linear-gradient(90deg, #1D8D94, #91D2A3)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: 900,
                                letterSpacing: 1,
                            }}
                        >
                            PMUSDT.COM
                        </Typography>
                    </Box>


                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {Links.map((link, index) => (
                            <Button sx={{ textTransform: "none", fontSize: 18 }} key={index} href={link.path} color="inherit">
                                {link.title}
                            </Button>
                        ))}
                    </Box>


                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <IconButton>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.75 17.75C4.90742 15.4799 7.02709 13.75 9.75 13.75C12.4519 13.75 14.5831 15.5084 15.75 17.75M12.0833 8.1944C12.0833 9.5445 10.9889 10.6389 9.6389 10.6389C8.2889 10.6389 7.19444 9.5445 7.19444 8.1944C7.19444 6.84442 8.2889 5.75 9.6389 5.75C10.9889 5.75 12.0833 6.84442 12.0833 8.1944ZM9.75 18.75C6.00027 18.75 4.1254 18.75 2.81107 17.7951C2.3866 17.4867 2.01331 17.1134 1.70491 16.6889C0.75 15.3746 0.75 13.4997 0.75 9.75C0.75 6.00027 0.75 4.1254 1.70491 2.81107C2.01331 2.3866 2.3866 2.01331 2.81107 1.70491C4.1254 0.75 6.00027 0.75 9.75 0.75C13.4997 0.75 15.3746 0.75 16.6889 1.70491C17.1134 2.01331 17.4867 2.3866 17.7951 2.81107C18.75 4.1254 18.75 6.00027 18.75 9.75C18.75 13.4997 18.75 15.3746 17.7951 16.6889C17.4867 17.1134 17.1134 17.4867 16.6889 17.7951C15.3746 18.75 13.4997 18.75 9.75 18.75Z"
                                    stroke="#E4E4E4"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </IconButton>

                        {isLoggedIn ? (
                            <Typography
                                sx={{ color: "#e7e9e9ff", fontWeight: 500, fontSize: 18, cursor: "pointer" }}
                                onClick={handleUserClick}
                            >
                                {"Saman.Shams"}
                            </Typography>
                        ) : (
                            <Link
                                component={RouterLink}
                                to="/login"
                                underline="none"
                                sx={{ color: "#e7e9e9ff", fontWeight: 500, fontSize: 18 }}
                            >
                                Login / Register
                            </Link>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
