import { NavLink } from "react-router-dom";
import { Box, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NavLinks = () => {

  const theme = useTheme();

  const toolbarStyle = {
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      display: 'flex', 
      justifyContent:'center'
    }
  }
  return (
    <Toolbar {...toolbarStyle}>
      <Box>
        <NavLink to="/" ><h1>Modern Walk</h1></NavLink>
      </Box>
    </Toolbar>
  );
};

export default NavLinks;