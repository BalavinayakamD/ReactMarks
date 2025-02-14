import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [attemptedLogin, setAttemptedLogin] = useState(false);
  const isDisabled = userName.trim() === "" || password.trim() === "";
  const navigate = useNavigate();
  const isWrong = userName === "admin" && password === "admin" ? "" : "Incorrect Username or Password";
  
  const handleSubmit = () => {
    setAttemptedLogin(true);
    if (isWrong) {
      setUsername("");
      setpassword("");
    } else {
      navigate("/subject");
    }
  };

  return (
    <Stack
      spacing={5}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      height={"90vh"}
    >
      <Typography variant="h3" color="initial" fontFamily={"monospace"}>
        Login To Continue
      </Typography>
      <TextField
        placeholder="Enter your username"
        label="Username"
        onChange={(e) => setUsername(e.target.value)}
      >
        Username
      </TextField>
      <TextField
        placeholder="Enter your password"
        type="password"
        label="Password"
        onChange={(e) => setpassword(e.target.value)}
        helperText={attemptedLogin ? isWrong : ""}
      >
        Password
      </TextField>
      <Button
        size="large"
        variant="contained"
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Stack>
  );
}
