import React from "react"
import python from "../Image/python.jfif"
import mumuki from "../Image/mumuki.png"
import javascrip from "../Image/javascrip.png"
import testing from "../Image/testing.jfif"
import {  TimelineSeparator } from "@material-ui/lab"
import { Typography, Paper } from "@material-ui/core"
import StartRating from "./StartRating"
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';



const Technologies=() =>{
    const classes=useStyles()
    const Skills=[
        {
        year:"2020",
        src:mumuki,
        title:"Mumuki",
        stars:10 ,
    },
    {
        year:"2020",
        src:python,
        title:"Python",
        stars:7,
    },
    {
        year:"2021",
        src:javascrip,
        title:"Javascript Inicial",
        stars:6,
    },
    {
        year:"2021",
        src:testing,
        title:"Testing Basico",
        stars:6,
    },
 ]

    return(
        <Timeline align="left">
           {
               Skills.map(({year,src,title,stars},index) =>(
                   <TimelineItem key={index}>
                       <TimelineOppositeContent>
                           <Typography variant= "h6" color="textSecondary">
                               {year}
                           </Typography>
                       </TimelineOppositeContent>
                       <TimelineSeparator>
                           
                           <img src={src}alt={title} className={classes.customlogo}/>
                           <TimelineConnector />
                       </TimelineSeparator>
                      <TimelineContent>
                          <Paper elevation={6} className={classes.paper}>
                              <Typography variant="h6" component="h1">
                                  {title}
                              </Typography>
                              <StartRating stars={stars}/>
                          </Paper>
                      </TimelineContent>
                   </TimelineItem>

               ))
           }

        </Timeline>
        )
    
}
const useStyles = makeStyles((theme) => ({
    customlogo: {
        width:"25px",

    },
    paper:{
        padding:"6px 16px",
        maxWidth:"200px",
    }
}))
export default Technologies