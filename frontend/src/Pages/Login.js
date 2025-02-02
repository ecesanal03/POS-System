import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }
    setError(""); // Clear error on success
    console.log("Logging in with:", { email, password });
  };

  return (
    <Container maxWidth="xs">
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="100vh"
      >
        <Paper elevation={4} sx={{ p: 4, width: "100%", borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
            Login
          </Typography>
          {error && (
            <Typography color="error" variant="body2" align="center">
              {error}
            </Typography>
          )}
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button fullWidth variant="contained" color="primary" sx={{ mt: 3, p: 1.5 }} onClick={handleLogin}>
            Login
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
