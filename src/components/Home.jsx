import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <Stack
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      height={"90vh"}
      spacing={5}
    >
      <Typography variant="h4" color="initial" fontFamily={"monospace"}>
        {" "}
        You are Not logged in Login to continue
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => navigate("/login")}
      >
        Goto login page
      </Button>
    </Stack>
  );
}
