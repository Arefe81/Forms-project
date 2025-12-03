import { Box, Typography,Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
       mt:7,
        py: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
     <Container>
        <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.1)",
          mb: 2,
        }}
      />
     </Container>
      

      
      <Typography
        variant="body2"
        sx={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}
      >
        Copyright © 2024 Repayment. All Rights Reserved.
      </Typography>
    </Box>
  );
}
