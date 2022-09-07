import {
  AppBar,
  Button,
  Grid,
  Tab,
  Box,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery
  , MenuItem
} from '@mui/material'

import { } from '@mui/material';

import React, { useState } from 'react'
import DrawerComp from './DrawerComp';
import nactarLogo from '../img/nactarLogo.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Navbar = ({ links }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState(1)

  const handleCloseUserMenu = () => {

  }


  return (
    <AppBar sx={{ backgroundImage: "radial-gradient(circle, rgba(63,94,251,1) 23%, rgba(252,70,113,1) 100%);" }}>
      
     
        {!isMatch && <Grid sx={{ placeItems: "center" }} container>
          <Grid item sx={2} md={2} >
            <Typography>
              <img src={nactarLogo} alt="Nactar Logo" width={60} />
            </Typography>
          </Grid>
          <Grid item sx={1} />
          <Grid item sx={5} md={5}>
            <Typography>
             
              {links.map((l) => (
                <MenuItem key={l} onClick={handleCloseUserMenu} display={"flex"}>

                </MenuItem>
              ))}
            </Typography>

          </Grid>
          <Grid item sx={1} md={2} />
          <Grid item sx={3} md={3}>
            <Box display={"flex"}>

              <Button sx={{ marginLeft: 1, background: "rgba(30,121,9,0.29735644257703087)" }} variant="contained">Sign Up</Button>
            </Box>
          </Grid>

        </Grid>}
        {isMatch && (

          <Grid sx={{ placeItems: "auto" }} container>
            <Grid item sx={3} md={3} sm={3}>
              <Box display={"flex"}>
                <Typography sx={{ marginLeft: 0 }}>
                  < DrawerComp links={links} />
                </Typography>
              </Box>
            </Grid>
            <Grid item sx={2} md={2} >
              <Typography sx={{ marginTop: 1.5, marginLeft: 40 }} md={{ marginTop: 1.5, marginLeft: 48 }}>

                <img src={nactarLogo} alt="Nactar Logo" width={48} />
              </Typography>
            </Grid>
          </Grid>


        )}
      </Toolbar>
    </AppBar>

  )
}

export default Navbar