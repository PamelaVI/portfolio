import {  Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import mockData from "../mockData"
import { makeStyles } from '@material-ui/core/styles';

const MyWork =
    ({ title, id,dark }) => {
        const classes = useStyles();

        return ( 
        <div className = {`${classes.section }${ dark && classes.sectiondark }`}>
           <div className={classes.sectioncontent} id={id}>
                <Typography variant ="h3">{title}</Typography>
                <Grid container className={classes.grid}>
                    {
                        mockData.map(({image},index)=>(
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia  image={image} className={classes.caratula}  titulo ="caratula"/>
                                    <CardContent>
                                            <Typography>
                                                {title}
                                            </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
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
        color: "#afff",
    },
    sectioncontent:{
        maxWidth:"90 vw",
        margin:"0 auto",
        padding:theme.spacing(5),


    },
    grid:{
        marginTop: theme.spacing(10),

    },
    card:{
        maxWidth:345,
        minHeight:275,
        margin:theme.spacing(3),

    },
    caratula:{
        height:0,
        paddingTop:"56.25%",//16:9
    }

}))
export default MyWork