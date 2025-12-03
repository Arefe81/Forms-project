import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Niramit",
  },

  palette: {
    mode: "dark",
    background: {
      default: "#242C39",
      paper: "#242C39",
    },
    primary: {
      main: "#E4E4E4",
    },
    secondary: {
      main: "#9BA4B5",
    },
  },

  components: {
    // *** Custom Container ***
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl", // مقدار پیش‌فرض برای همه کانتینرها
      },
      styleOverrides: {
        root: {
          maxWidth: "1200px !important", // عرض ثابت برای همه صفحات
          paddingLeft: "16px !important",
          paddingRight: "16px !important",
        },
      },
    },

    // *** AppBar Override ***
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent", // اگر نمی‌خوای رنگ داشته باشه
          boxShadow: "none",
          color: "#FFFFFF",
        },
      },
    },

    // *** Placeholder Override ***
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "#FFFFFF",
            opacity: 1,
            fontSize: "16px",
            fontWeight: 400,
          },
        },
      },
    },
  },
});

export default theme;
