import React, { useState } from "react";
import { 
  Container, TextField, Button, Typography, Paper, MenuItem 
} from "@mui/material";

const states = [
  { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" }, { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" }, { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" }, { code: "FL", name: "Florida" }
  // Add more states as needed
];

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signing up with:", {
      email, phone, address1, address2, city, state, zip, password
    });
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}
    >
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3, width: "100%", textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Create an Account
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
          Join us today! It takes only a few steps.
        </Typography>

        <TextField
          fullWidth margin="dense" label="Email" variant="outlined" value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth margin="dense" label="Phone Number" variant="outlined" value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          fullWidth margin="dense" label="Address Line 1" variant="outlined" value={address1}
          onChange={(e) => setAddress1(e.target.value)}
        />
        <TextField
          fullWidth margin="dense" label="Address Line 2 (Optional)" variant="outlined" value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />
        <TextField
          fullWidth margin="dense" label="City" variant="outlined" value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          fullWidth margin="dense" select label="State" variant="outlined" value={state}
          onChange={(e) => setState(e.target.value)}
        >
          {states.map((s) => (
            <MenuItem key={s.code} value={s.code}>{s.name}</MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth margin="dense" label="Zip Code" variant="outlined" value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <TextField
          fullWidth margin="dense" label="Password" type="password" variant="outlined" value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          fullWidth margin="dense" label="Confirm Password" type="password" variant="outlined" value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          fullWidth variant="contained" color="primary"
          sx={{ mt: 3, p: 1.5, borderRadius: 2, fontWeight: "bold" }}
          onClick={handleSignup}
        >
          Sign Up
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account? <a href="/login" style={{ color: "#3A7CA5", textDecoration: "none" }}>Login</a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;

