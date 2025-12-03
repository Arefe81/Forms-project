import {
  Paper,
  Typography,
  TextField,
  Box,
  Link,
  Button,
  IconButton,
  InputAdornment,

} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";



import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

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

const RegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(5, "Email is too short")
    .email("Invalid email format")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email must include @ and valid domain"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine((v) => /[A-Z]/.test(v), "Must include an uppercase letter")
    .refine((v) => /[a-z]/.test(v), "Must include a lowercase letter")
    .refine((v) => /[0-9]/.test(v), "Must include a number")
    .refine((v) => /[@$!%*?&]/.test(v), "Must include a special character"),
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
     
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="77vh">
        <Paper elevation={2} sx={{ px: 6, py: 2, width: 560, borderRadius: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: "42px",
              background: "linear-gradient(90deg, #1D8D94, #4EC46F)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              remember: false,
            }}
            validationSchema={toFormikValidationSchema(RegisterSchema)}
            onSubmit={(values) => {

              dispatch(login({ email: values.email }));


              if (values.remember) {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("email", values.email);
              }


              navigate("/dashboard");
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit, }) => {
              const strength = checkPasswordStrength(values.password);

              return (
                <Form onSubmit={handleSubmit}>
                  
                  <Typography mt={3} color="#dddadaff" fontSize={18}>
                    Name :
                  </Typography>
                  <TextField
                    fullWidth
                    name="name"
                    placeholder="Please enter your name"
                    margin="normal"
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    sx={{
                      "& .MuiInputBase-root": {
                        borderRadius: 3,
                        backgroundColor: "#242C39",
                        color: "#FFFFFF",
                        fontWeight: 600,
                        border: touched.name && errors.name ? "2px solid #ff4d4d" : "none",
                        padding: "0 12px",
                        height: "60px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    }}
                  />

                  
                  <Typography mt={2} color="#dddadaff" fontSize={18}>
                    Email :
                  </Typography>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    placeholder="Please enter your email"
                    margin="normal"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    sx={{
                      "& .MuiInputBase-root": {
                        borderRadius: 3,
                        backgroundColor: "#242C39",
                        color: "#FFFFFF",
                        fontWeight: 600,
                        border: touched.email && errors.email ? "2px solid #ff4d4d" : "none",
                        padding: "0 12px",
                        height: "60px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    }}
                  />

                  
                  <Typography mt={2} color="#dddadaff" fontSize={18}>
                    Password :
                  </Typography>
                  <TextField
                    fullWidth
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Please enter your password"
                    margin="normal"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (

                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0)">
                                  <path
                                    d="M0.666748 8.00008C0.666748 8.00008 3.33341 2.66675 8.00008 2.66675C12.6667 2.66675 15.3334 8.00008 15.3334 8.00008"
                                    stroke="#ABABAB"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M0.666748 8C0.666748 8 3.33341 13.3333 8.00008 13.3333C12.6667 13.3333 15.3334 8 15.3334 8"
                                    stroke="#ABABAB"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8 10C9.1046 10 10 9.1046 10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10Z"
                                    stroke="#ABABAB"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0">
                                    <rect width="16" height="16" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            ) : (

                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip1)">
                                  <path
                                    d="M0.666748 8.00008C0.666748 8.00008 3.33341 2.66675 8.00008 2.66675C12.6667 2.66675 15.3334 8.00008 15.3334 8.00008"
                                    stroke="#ABABAB"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M0.666748 8C0.666748 8 3.33341 13.3333 8.00008 13.3333C12.6667 13.3333 15.3334 8 15.3334 8"
                                    stroke="#ABABAB"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8 10C9.1046 10 10 9.1046 10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10Z"
                                    stroke="#ABABAB"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip1">
                                    <rect width="16" height="16" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        borderRadius: 3,
                        backgroundColor: "#242C39",
                        color: "#FFFFFF",
                        fontWeight: 600,
                        border: touched.password && errors.password ? "2px solid #ff4d4d" : "none",
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
                              ? "#ffae42"
                              : "#ff4d4d",
                      }}
                    >
                      {strength}
                    </Typography>
                  )}



               
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
                      fontSize: "18px",
                      textTransform: "none",
                      "&:hover": { bgcolor: "#17777D" },
                    }}
                  >
                    Register
                  </Button>

                 
                  <Typography textAlign="center" fontSize={17} mt={3} color="#CFCFCF">
                    Already have an account?{" "}
                    <Link
                      component={RouterLink}
                      to="/login"
                      underline="hover"
                      sx={{ color: "#1D8D94", fontWeight: 900 }}
                    >
                      Login
                    </Link>
                  </Typography>
                </Form>
              );
            }}
          </Formik>
        </Paper>
      </Box>
    </>
  );
}
