// Exit.tsx
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { persistor } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Exit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExit = async () => {
    dispatch(logout());      
    await persistor.purge(); 
    navigate("/login");      
  };

  return (
    <Button
      variant="contained"
      color="error"
      onClick={handleExit}
      sx={{ mt: 2 }}
    >
      Exit
    </Button>
  );
}
