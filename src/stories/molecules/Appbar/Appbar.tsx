import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Login from '@mui/icons-material/Login';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    handleClose();
  };
  const handleSignUp = () => {
    navigate("/sign-up");
    handleClose();
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      style={{ position: "relative", zIndex: "1" }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' } }}
          onClick={handleHome}
        >
          <img src="logo_alt.png" alt="Social Pro" height="50px" />
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', md: 'none' } }}
          onClick={handleHome}
        >
          <img src="logo_alt.png" alt="Social Pro" height="30px" />
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Link
            variant="button"
            underline="none"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            <Button variant="text">Features</Button>

          </Link>
          <Link
            variant="button"
            underline="none"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            <Button variant="text">Enterprise</Button>
          </Link>
          <Link
            variant="button"
            underline="none"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            <Button variant="text">Support</Button>
          </Link>
        </Box>
        <div>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleMenu}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogin}>
              <ListItemIcon>
                <Login fontSize="small" />
              </ListItemIcon>
              Lorgin
            </MenuItem>
            <MenuItem onClick={handleSignUp}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
