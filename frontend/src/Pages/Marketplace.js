import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent, Button,
  Box, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText,
  Collapse, Menu, MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BusinessIcon from "@mui/icons-material/Business";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CategoryIcon from "@mui/icons-material/Category";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const categories = [
  { name: "Vehicles", icon: <DirectionsCarIcon /> },
  { name: "Real Estate", icon: <BusinessIcon /> },
  { name: "Electronics", icon: <SportsEsportsIcon /> },
];

const items = [
  { id: 1, name: "Yamaha XT225", price: "$1,750", location: "San Francisco, CA", image: "https://source.unsplash.com/400x300/?motorbike" },
  { id: 2, name: "Nissan Rogue 2018", price: "$6,500", location: "Suisun City, CA", image: "https://source.unsplash.com/400x300/?car" },
  { id: 3, name: "3 Beds 1 Bath Apartment", price: "$2,750", location: "Oakland, CA", image: "https://source.unsplash.com/400x300/?apartment" },
  { id: 4, name: "Toyota MR2 3SGTE", price: "$1,000", location: "Antioch, CA", image: "https://source.unsplash.com/400x300/?toyota" },
  { id: 5, name: "Food Trailer", price: "$5,500", location: "Antioch, CA", image: "https://source.unsplash.com/400x300/?foodtruck" },
  { id: 6, name: "Harley Davidson 883", price: "$5,600", location: "San Francisco, CA", image: "https://source.unsplash.com/400x300/?harley" },
  { id: 7, name: "MacBook Pro 16-inch", price: "$1,999", location: "Los Angeles, CA", image: "https://source.unsplash.com/400x300/?laptop" },
  { id: 8, name: "iPhone 13 Pro", price: "$999", location: "New York, NY", image: "https://source.unsplash.com/400x300/?iphone" },
  { id: 9, name: "Tesla Model S", price: "$79,999", location: "San Diego, CA", image: "https://source.unsplash.com/400x300/?tesla" },
  { id: 10, name: "Gaming PC Setup", price: "$2,499", location: "Austin, TX", image: "https://source.unsplash.com/400x300/?gamingpc" },
];

const Marketplace = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [profileMenu, setProfileMenu] = useState(null);

  const handleCategoryClick = () => setCategoryOpen(!categoryOpen);
  const handleProfileMenuOpen = (event) => setProfileMenu(event.currentTarget);
  const handleProfileMenuClose = () => setProfileMenu(null);

  const filteredItems = selectedCategory
    ? items.filter(item => item.name.toLowerCase().includes(selectedCategory.toLowerCase()))
    : items;

  return (
    <>
       {/* Top Navigation Bar */}
       <AppBar position="sticky" sx={{ background: "#1E3A8A", px: 3, boxShadow: "0px 2px 10px rgba(0,0,0,0.1)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold" sx={{ color: "white" }}>
            POS Marketplace
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton sx={{ color: "white" }}>
              <HomeIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <ChatIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <NotificationsIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }} onClick={handleProfileMenuOpen}>
              <AccountCircleIcon />
            </IconButton>
            <Menu anchorEl={profileMenu} open={Boolean(profileMenu)} onClose={handleProfileMenuClose}>
              <MenuItem component={Link} to="/login">Login</MenuItem>
              <MenuItem component={Link} to="/signup">Signup</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4, maxWidth: "100% !important" }}> {/* Expanded to full width */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Today's Picks
        </Typography>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card sx={{ borderRadius: 2, boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", "&:hover": { transform: "scale(1.03)", transition: "0.2s" } }}>
                <CardMedia component="img" height="200" image={item.image} alt={item.name} sx={{ objectFit: "cover" }} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{item.name}</Typography>
                  <Typography variant="body1" color="primary" sx={{ fontWeight: "bold", mt: 1 }}>{item.price}</Typography>
                  <Typography variant="body2" color="textSecondary">{item.location}</Typography>
                  {/* <Button fullWidth variant="contained" color="primary" sx={{ mt: 2, borderRadius: 2 }}>View Details</Button> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Marketplace;






