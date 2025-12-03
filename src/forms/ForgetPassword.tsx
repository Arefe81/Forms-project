import { Paper, Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Header from "../components/Header";


const ForgetPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export default function ForgetPassword() {
  const navigate = useNavigate();

  return (
    <>
    <Header/>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="77vh"
    >
      <Paper elevation={2} sx={{ px:6, py:5, width: 550, borderRadius: 4 }}>
        
        
        <Typography
          variant="h5"
          sx={{
            fontSize:"40px",
            marginBottom: 6,
            background: "linear-gradient(90deg, #1D8D94, #4EC46F)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 900,
            textAlign: "center",
          }}
        >
          Forget Password
        </Typography>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={toFormikValidationSchema(ForgetPasswordSchema)}
          onSubmit={(values) => {
            console.log("Email Submitted:", values.email);
            navigate("/changepassword"); // 
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              
              
              <Typography sx={{ marginTop: 2, fontSize:18}} color="#dddadaff">
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
                     border: touched.email && errors.email ? "2px solid #ff4d4d" : "none",
                    fontWeight: 600,
                    padding: "0 12px",
                    height: "60px",
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
                  mt: 1,
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

            </Form>
          )}
        </Formik>

      </Paper>
    </Box>
    </>
  );
}
