import React from "react";
import perfil from "../image/perfil.jpg"
import { Card,Button, CardActions, CardContent, CardMedia,  Typography } from "@material-ui/core";
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../image/Currículum.pdf"
import { makeStyles } from '@material-ui/core/styles';


const About =
    ({ title, id, dark }) => {
        const classes = useStyles();

        return (
        <div className = {`${classes.section }${dark && classes.sectiondark }`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant ="h3">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={perfil} className={classes.media} title="picture"/>
                    <CardContent className={ classes.cardcontent}>
                        <TypeWriterEffect
                        text="Hola, me llamo Isla Pamela"
                        textStyle={{fontSize:"2rem",fontWeight:"700px",color:"tomato"}}
                        startDelay={100}
                        cursorColor="black"
                        typeSpeed={100}
                        />
                         <TypeWriterEffect
                        text="Soy estudiante de programacion,y del profesorado para la educacion secundaria en fisica de la provincia del Chaco"
                        textStyle={{fontSize:"1.2rem",fontWeight:"500px"}}
                        startDelay={2500}
                        cursorColor="black"
                        typeSpeed={100}
                        />
                        <Typography variant="h6" color="textSecondary">
                            Me considero una persona responsable, creativa ,
                            con muchas ganas de demostrar mis habilidades y lograr el desarrollo personal y profesional
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" 
                        className={classes.pdfbutton}>
                            <a href= {pdf} download>
                            Download CV
                            </a>
                        </Button>
                    </CardActions>

                </Card>
            
            </div>
            </div>
            )
        }
        const useStyles = makeStyles((theme) => ({
            section: {
                minHeight: "100vh",
            },
            sectiondark: {
                background: "#333",
                color: "#fff",
            },
            sectioncontent:{
                maxWidth:"80vw",
                margin:"0 auto",

            },
            card:{
                height:"70vh",
                display:"flex",
                marginTop:theme.spacing(6),
                position:"relative",

            },
            media:{
                width:"250px",
                height:"auto",
                objectFit:"cover",
                borderRadius:"10px",
                margin:theme.spacing(5)



            },
            cardcontent:{
                marginTop: theme.spacing(2),
                "& h6":{
                    marginTop:theme.spacing(6),
                    [theme.breakpoints.down("sm") ]:{
                        display:"none",
                    },

                },
            },
            pdfbutton:{
                position:"absolute",
                bottom:"5rem",
                right:"4rem",
                [theme.breakpoints.down("sm") ]:{
                    bottom:"2.5rem",
                    right:"1rem",
                },

                backgroundColor:"tomato",
                padding:theme.spacing(3),
                "&:hover":{
                    backgroundColor:"#fff",
                 },
                 "& a":{
                     color:"#fff",
                     TextDecoration:"none",
                     fontWeight:900,
                 },
                 "& a:hover":{
                     color:"tomato",
                 }
            

            },

        }))
        export default About