import React from 'react'
import {AppBar,Toolbar,IconButton,Typography,Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
            <Toolbar>
            
            <IconButton color="inherit" edge="start" aria-label="menu" >
            <Menu/>
            </IconButton>
            <Typography variant="h6" style={{
                flexGrow: 1
            }}>
            Pride Education
            </Typography>

            <Button color="inherit" className="hideOnMobile" href="/supp">Support</Button>
            <Button color="inherit" className="hideOnMobile">MarketPlace</Button>
            <Button color="inherit" className="hideOnMobile">Login</Button>
            <Button color="inherit" className="hideOnMobile">Register</Button>
          
            </Toolbar>
            
            </AppBar>
        </div>
    )
}

export default Navbar
