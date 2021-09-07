import React from "react";
import { Typography } from "@material-ui/core";
import Technologies from "./Technologies";
import { makeStyles } from '@material-ui/core/styles';

const Skills =
    ({ title, id, dark }) => {
        const classes = useStyles();

        return (
        <div className = {`${ classes.section }${ dark && classes.sectiondark }`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant ="h3">{title}</Typography>
                <Technologies/>
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
}))

export default Skills