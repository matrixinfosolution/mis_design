import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  CssBaseline,
  Grid,
  Avatar,
  Paper,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdminSideBarMenu from "../Appbar/AdminSideBarMenu";
import Loader from "../loader/Loader";
import { useSelector } from "react-redux";
const AdminLayout = ({ children, color = "#fff" }) => {
  const [menudrawer, setMenuDrawer] = useState(false);
  const { instanceIsLoading } = useSelector((state) => state.menu);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   return (
    <>
    <Loader bal={instanceIsLoading}/>
      <AppBar position="sticky" color="secondary" sx={{ p: 0, m: 0, b: 0}}>
        <Grid container spacing={1} p={1}>
          <Grid
            item
            md={10}
            xs={10}
            sx={{ display: "flex", gap: "10px", alignItems: "center",cursor:"pointer" }}
          >
            <MenuIcon
             onClick={(e) => {
                setMenuDrawer(!menudrawer);
              }}
             />
            <h3 onClick={(e)=>{window.location.href="/admin"}}>
              <span style={{ color: "#F5004F" }}>Jain</span> Screen
            </h3>
          </Grid>
          <Grid
            item
            md={2}
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ height: "25px", width: "25px" }} />
          </Grid>
        </Grid>
      </AppBar>

      <Box
        sx={{
          flex: 1,
          position: "relative",
          py: { xs: 2, sm: 3, md: 0 },
          m: 0,
          mb: 8,
          backgroundColor: `${color}`,
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          position: "relative",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          bgcolor: "background.paper",
        }}
      >
        <Paper sx={{ backgroundColor: "#ffe9ff", padding: "10px" }}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <h5>
                Copyright © 2024, All Right Reserved{" "}
                <span style={{ color: "#F5004F" }}>Jain</span>Screen
              </h5>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Drawer
        anchor="left"
        open={menudrawer}
        onClose={(e) => {
          setMenuDrawer(!menudrawer);
        }}
      >
        <AdminSideBarMenu />
      </Drawer>
    </>
  );
};

export default AdminLayout;
