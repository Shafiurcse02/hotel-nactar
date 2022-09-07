import * as React from 'react';
import {
    Box,
    SwipeableDrawer,
    Button,
    List,
    Divider, ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    MenuItem,
    Typography
} from '@mui/material';

import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link, useNavigate } from 'react-router-dom';



const DrawerComp = ({ links }) => {
    const navigate=useNavigate()

    const [state, setState] = React.useState({

        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown'
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {links.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <MoveToInboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <Typography onClick={(e,val)=>navigate(`/${text}`)}>
                                {text}
                            </Typography>
                            {/* <Link to={`/${text}`}>
                                <ListItemText primary= />
                            </Link> */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>

                                {console.log(index)}
                                {index % 2 === 0 ? <MoveToInboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Button onClick={toggleDrawer("left", true)}>

                    <IconButton>
                        <MenuRoundedIcon />
                    </IconButton>

                </Button>
                <SwipeableDrawer
                    anchor="left"
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)}
                >
                    {list("left")}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
export default DrawerComp;