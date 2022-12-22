import React from "react";
import { Grid } from "@mui/material";
import { ThemeConfig } from "../config";
import { Navbar } from "./ui/Navbar";
import { Container } from "@mui/system";
import { SideBar } from "../components/SideBar";
import { useState } from "react";

interface Props {
  children: JSX.Element;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <ThemeConfig>
      <Grid
        container
        direction={"column"}
        justifyContent="center"
        alignItems={"center"}
      >
        {/* Barra lateral */}
        <SideBar onOpen={handleOpen} open={open} />

        {/* Barra de navegación... */}
        <Navbar onOpen={handleOpen} />

        {/* Area de aplicación... */}
        <Grid container justifyContent={"center"} alignItems="center">
          {children}
        </Grid>
      </Grid>
    </ThemeConfig>
  );
};
