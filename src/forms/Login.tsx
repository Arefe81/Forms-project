import {
  Paper,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useState } from "react";


// Redux
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const LoginSchema = z.object({
  email: z.string().email("The email is incorrect"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password is too long"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
     

      <Box display="flex" justifyContent="center" alignItems="center" minHeight="77vh" >
        <Paper elevation={2} sx={{ px: 6, py: 4, width: 560, borderRadius: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: "42px",
              background: "linear-gradient(90deg, #1D8D94, #4EC46F)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 900,
              letterSpacing: 1,
              textAlign: "center",
            }}
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "", remember: false }}
            validationSchema={toFormikValidationSchema(LoginSchema)}
            onSubmit={(values) => {
              

              dispatch(login({ email: values.email }));

              if (values.remember) {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("email", values.email);
              }

              navigate("/dashboard");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
              
                <Typography sx={{ marginTop: 4, fontSize: 18 }} color="#dddadaff">
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
                  InputLabelProps={{ shrink: false }}
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
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />

              
                <Typography sx={{ marginTop: 3, fontSize: 18 }} color="#dddadaff">
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
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />

                
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.remember}
                        onChange={(e) => setFieldValue("remember", e.target.checked)}
                        sx={{ pl: 2 }}
                        icon={
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              border: "1px solid #c7cac8ff",
                              borderRadius: 1,
                            }}
                          />
                        }
                        checkedIcon={
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              border: "1px solid #c7cac8ff",
                              borderRadius: 1,
                              backgroundColor: "#1D8D94",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                width: 8,
                                height: 12,
                                border: "solid white",
                                borderWidth: "0 2px 2px 0",
                                transform: "rotate(45deg)",
                              }}
                            />
                          </Box>
                        }
                      />
                    }
                    label={<Typography color="#dddadaff" sx={{ fontSize: 16 }}>Keep Me Login</Typography>}
                  />

                  <Link
                    component={RouterLink}
                    to="/forgetpassword"
                    sx={{
                      textDecorationColor: "#1D8D94",
                      color: "#1D8D94",
                      fontSize: 16,
                      fontWeight: 900,
                    }}
                  >
                    Forgot Your Password?
                  </Link>
                </Box>

                
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
                  Login
                </Button>

                
                <Typography textAlign="center" sx={{ fontSize: 17 }} mt={3} color="#CFCFCF">
                  Don't Have An Account?{" "}
                  <Link component={RouterLink} to="/register" underline="hover" sx={{ color: "#1D8D94", fontWeight: 900 }}>
                    Register
                  </Link>
                </Typography>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </>
  );
}
