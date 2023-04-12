import React from "react";
import { Box, Typography, Link } from "@mui/material";
import homeStyles from "../../../theme/homeStyles";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box sx={{ flexGrow: 1, ...homeStyles.footerContainer }}>
      <Typography sx={homeStyles.footerText}>
        Provided by{" "}
        <Link href="https://appseed.us" target="_blank" underline="none">
          Social Pro
        </Link>
      </Typography>
      <Typography sx={homeStyles.footerDate}>
        {date.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default Footer;
