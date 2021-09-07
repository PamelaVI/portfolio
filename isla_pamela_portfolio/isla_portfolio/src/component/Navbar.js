import  { AppBar, Divider, Drawer,  IconButton, ListItem, ListItemIcon, Toolbar } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons";
import React, { useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import List from "@material-ui/core/List"
import logo from "../Image/icono.png"
import CancelIcon from "@material-ui/icons/Cancel"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ContactsIcon from '@material-ui/icons/Contacts';
import SchoolIcon from '@material-ui/icons/School';import { makeStyles } from '@material-ui/core/styles';
import ComputerIcon from '@material-ui/icons/Computer';
const Navbar = ()=>{
    const classes = useStyles();
    const[open,setOpen]=useState(false)
    const links =[
        {
            id: "about",
            text:"acerca de mi",
            icon:<PermIdentityIcon fontSize="large"className={classes.light} />
        },
        {
            id: "skill",
            text:"habilidades",
            icon:<ComputerIcon fontSize="large" className={classes.light}/>
        },
        {
            id: "contact",
            text: "Contacto",
            icon:<ContactsIcon fontSize="large" className={classes.light}/>
        },
        {
            id: "mywork",
            text: "Estudios",
            icon:<SchoolIcon  fontSize="large" className={classes.light}/>
        },
     ]
    const scrollToTop =() =>{
        scroll.scrollToTop()
    }
    return ( 
        <>
    <AppBar position = "sticky"className = { classes.root } >
        <Toolbar className = { classes.Toolbar } >
            <img
                src = { logo }
                className = { classes.logo }
                alt = "Logo"
                onClick={scrollToTop}
            />
            <List className = { classes.menu }>
            {
            links.map(( { id, text }, index) =>( 
                <Link key = { index }
                to = { id }
                spy = { true }
                activeClass="active"
                smooth = { true }
                duration = { 500 }
                offset = {-70 }>
                {text } 
                </Link>
             ))
            }
            </List>
            <IconButton edge="end" className={classes.menubutton} onClick={()=>setOpen(!open)}>
            <MenuIcon fontSize="large"/>
            </IconButton>
        </Toolbar>
    </AppBar>
    <Drawer anchor="right"open={open} onClose={()=>setOpen(false)}>
            <IconButton className={classes.cancelicon}onClick={()=>setOpen(false)}>
                <CancelIcon fontSize="large"/>
            </IconButton>
            <Divider/>
            {
            links.map (({ id, text,icon }, index) =>(
            <Link key = { index }
            className={classes.sidebar}
            to = { id }
            spy = { true }
            activeClass="active"
            smooth = { true }
            duration = { 500 }
            offset = {-70 }>
                <ListItem component="h5">
                    <span>
                        <ListItemIcon>
                            {icon}

                        </ListItemIcon>
                    </span>{text}
                </ListItem> 
            </Link>
            ))
            }

    </Drawer>
</>
    )

        }

const useStyles = makeStyles ((theme) => ({
    root: {
        backgroundColor: "#fafafa",
        top: 0,
        left: 0,
        right:0,
        zIndex: 999,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo:{
        height: "1.5rem",
        objectFit: 'contain',
        "&:hover": {
            cursor:"pointer"
        }
    },
    light:{
        color:"#ffcc00",
    },
    menu: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        "& a": {
            color: "#333",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover":{
            cursor:"pointer",
            color:"tomato",
            borderBotton:"3px solid tomato",
        }

    },
    menubutton:{
        display:"none",
        [theme.breakpoints.down("sm")]:{
            display:"block",
            color:"tomato",
            position:"absolute",
            top:0,
            right:10,
        }
    },
    cancelicon:{
        color:"tomato",
        position:"absolute",
        top:0,
        right:10,
    },
    sidebar:{
        width:"40vw",
        [theme.breakpoints.down("sm") ]:{
            width:"60vw",
        },
        "&h5":{
            margin:theme.spacing(10,0,0,4),
            fontSize:"1.4rem",
            color:"#333",
            fontWeight:"bold",
        },
        "&h5:hover":{
            color:"tomato",
            cursor:"pointer"
        }
    }
    
}))
export default Navbar