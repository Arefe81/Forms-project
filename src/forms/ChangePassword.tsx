import {
    Paper,
    Typography,
    TextField,
    Box,
    Button,
    IconButton,
    InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
function checkPasswordStrength(password: string): "Very Weak" | "Weak" | "Strong" {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[@$!%*?&]/.test(password);

    if (password.length >= 8 && hasUpper && hasLower && hasNumber && hasSpecial) {
        return "Strong";
    }
    if (password.length >= 6) {
        return "Weak";
    }
    return "Very Weak";
}

const ChangePasswordSchema = z
    .object({
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .refine((v) => /[A-Z]/.test(v), "Must include uppercase letter")
            .refine((v) => /[a-z]/.test(v), "Must include lowercase letter")
            .refine((v) => /[0-9]/.test(v), "Must include a number")
            .refine((v) => /[@$!%*?&]/.test(v), "Must include a special character"),
        repeatPassword: z.string(),
    })
    .refine((data) => data.password === data.repeatPassword, {
        message: "Passwords do not match",
        path: ["repeatPassword"],
    });

export default function ChangePassword() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const navigate = useNavigate()

    return (
        <>
        
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="77vh">
            <Paper elevation={2} sx={{ px: 6, py: 4, width: 560, borderRadius: 4 }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: "42px",
                        marginBottom: 6,
                        background: "linear-gradient(90deg, #1D8D94, #4EC46F)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 900,
                        textAlign: "center",
                    }}
                >
                    Change Password
                </Typography>

                <Formik
                    initialValues={{
                        password: "",
                        repeatPassword: "",
                    }}
                    validationSchema={toFormikValidationSchema(ChangePasswordSchema)}
                    onSubmit={(values) => {
                        console.log("New Password:", values);
                        navigate("/login")
                        
                        
                    }}
                >
                    {({ values, errors, touched, handleChange, handleSubmit }) => {
                        const strength = checkPasswordStrength(values.password);

                        return (
                            <Form onSubmit={handleSubmit}>

                                <Typography mt={1} color="#dddadaff" fontSize={18}>
                                    New Password :
                                </Typography>
                                <TextField
                                    fullWidth
                                    name="password"
                                    type={showPassword1 ? "text" : "password"}
                                    placeholder="Please enter your new password"
                                    margin="normal"
                                    value={values.password}
                                    onChange={handleChange}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword1(!showPassword1)}>
                                                    {showPassword1 ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_76_16)">
                                                            <path d="M0.666748 8.00008C0.666748 8.00008 3.33341 2.66675 8.00008 2.66675C12.6667 2.66675 15.3334 8.00008 15.3334 8.00008" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M0.666748 8C0.666748 8 3.33341 13.3333 8.00008 13.3333C12.6667 13.3333 15.3334 8 15.3334 8" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8 10C9.1046 10 10 9.1046 10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10Z" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_76_16">
                                                                <rect width="16" height="16" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                        : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_76_16)">
                                                                <path d="M0.666748 8.00008C0.666748 8.00008 3.33341 2.66675 8.00008 2.66675C12.6667 2.66675 15.3334 8.00008 15.3334 8.00008" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M0.666748 8C0.666748 8 3.33341 13.3333 8.00008 13.3333C12.6667 13.3333 15.3334 8 15.3334 8" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8 10C9.1046 10 10 9.1046 10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10Z" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_76_16">
                                                                    <rect width="16" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            borderRadius: 3,
                                            backgroundColor: "#242C39",
                                            color: "#FFFFFF",
                                            padding: "0 12px",
                                            height: "60px",
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                    }}
                                />

                                {values.password.length > 0 && (
                                    <Typography
                                        mt={1}
                                        sx={{
                                            fontWeight: 700,
                                            color:
                                                strength === "Strong"
                                                    ? "#4EC46F"
                                                    : strength === "Weak"
                                                        ? "#ffb84d"
                                                        : "#ff4d4d",
                                        }}
                                    >
                                        {strength}
                                    </Typography>
                                )}


                                <Typography mt={3} color="#dddadaff" fontSize={18}>
                                    Repeat New Password :
                                </Typography>
                                <TextField
                                    fullWidth
                                    name="repeatPassword"
                                    type={showPassword2 ? "text" : "password"}
                                    placeholder="Please repeat your new password"
                                    margin="normal"
                                    value={values.repeatPassword}
                                    onChange={handleChange}
                                    error={touched.repeatPassword && Boolean(errors.repeatPassword)}
                                    helperText={touched.repeatPassword && errors.repeatPassword}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton  onClick={() => setShowPassword2(!showPassword2)}>
                                                    {showPassword2 ? <svg  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_76_16)">
                                                            <path d="M0.666748 8.00008C0.666748 8.00008 3.33341 2.66675 8.00008 2.66675C12.6667 2.66675 15.3334 8.00008 15.3334 8.00008" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M0.666748 8C0.666748 8 3.33341 13.3333 8.00008 13.3333C12.6667 13.3333 15.3334 8 15.3334 8" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8 10C9.1046 10 10 9.1046 10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10Z" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_76_16">
                                                                <rect width="16" height="16" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                        : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_76_16)">
                                                                <path d="M0.666748 8.00008C0.666748 8.00008 3.33341 2.66675 8.00008 2.66675C12.6667 2.66675 15.3334 8.00008 15.3334 8.00008" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M0.666748 8C0.666748 8 3.33341 13.3333 8.00008 13.3333C12.6667 13.3333 15.3334 8 15.3334 8" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8 10C9.1046 10 10 9.1046 10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10Z" stroke="#ABABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_76_16">
                                                                    <rect width="16" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            borderRadius: 3,
                                            backgroundColor: "#242C39",
                                            color: "#FFFFFF",
                                            padding: "0 12px",
                                            height: "60px",
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
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
                                        "&:hover": { bgcolor: "#17777D" },
                                    }}
                                >
                                    Confirm
                                </Button>
                            </Form>
                        );
                    }}
                </Formik>
            </Paper>
        </Box>
        </>
    );
}
