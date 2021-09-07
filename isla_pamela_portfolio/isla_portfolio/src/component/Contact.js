import React, { useState } from "react";
import {  Paper, Radio, TextField, Typography } from "@material-ui/core";
import { Button } from "react-scroll";
import { makeStyles } from '@material-ui/core/styles';

const Contact = ({ title, id, dark }) => {

    const classes = useStyles();
    const [value,setValue]=useState("Hola")
    const handleChange=(e)=>{  setValue(e.target.value)
    }
    return ( 
    <div className = {`${classes.section } ${dark&&classes.sectiondark }`}>
       <div className={classes.sectioncontent} id={id}>
                <Typography variant ="h3">{title}</Typography>
                <Paper className={classes.root}>
                    <div className={classes.titleandchoice}>
                    <Typography variant ="h5">Contactame</Typography>
                    <div className={ classes.choice}>
                        <span>Hola</span>
                        <Radio 
                        value="Hola"
                        checked={value==="Hola"}
                        color="primary"
                        onChange={handleChange}
                        />
                        <span>Contactame por email </span>
                        <Radio 
                        value="Contactame por e-mail"
                        checked={value==="Contactame por e-mail"}
                        color="primary"
                        onChange={handleChange}
                        />

                    </div>

                    </div>
                    <form className={ classes.form} noValidate autoComplete="off">
                        <TextField label="Nombre"/>
                        <TextField label="Apellido"/>
                        <TextField label="E-mail"/>
                        {
                            value=== "contactame por e-mail" ? (
                                <>
                                <TextField label="Empresa"/>
                                <TextField label="Provincia"/>
                                <TextField label="Pais"/>
                                <TextField label= "Ciudad"/>
                                <TextField label="tel"/>
                                </>
                            ):null
                        }
                        <TextField label="Mensaje"/>

                    </form>
                    <Button variant="contained"> Submit</Button>
                </Paper>
            </div>
            </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",

    },
    sectiondark: {
        background: "#333",
        color: "#afff",
    },
    root:{
        marginTop:theme.spacing(4),
        background:"tomato",
        color:"#fff",
        fontSize:"1.2rem",
        maxWidth:"500px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        padding:theme.spacing(4),
        "& button":{
            background:"#fff",
            color:"tomato",
            fontSize:"1.2rem",
            fontWeight:900,
            marginTop:theme.spacing(4)
        },
        "& button: hover":{
            backgroundColor:theme.pallete.primary.main,
            color:"#fff",

        }



    },
    sectioncontent:{
        maxWidth:"80vw",
    
    },
    titleandchoice:{
        "& h5":{
            marginTop:theme.spacing(2),
        }
    },
    form:{
        display:"flex",
        flexDirection:"column",
        "& input":{
            marginBottom: theme.spacing(1)
        }
    },
}))
export default Contact