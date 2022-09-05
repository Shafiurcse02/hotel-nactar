import React, { useState } from 'react'
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer
} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const DrawerComp = () => {
    const [open, setOpen] = useState(true)
    return (
        <>
            <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>

                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                Product
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton>
                <MenuRoundedIcon />
            </IconButton>
        </>
    )
}

export default DrawerComp