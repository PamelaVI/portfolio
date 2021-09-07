import { Rating } from "@material-ui/lab";
import React from "react";
import {Box}from '@material-ui/system';


const StartRating=({stars}) =>{

    return (
        <div>
            <Box component="fieldset" borderColor="transparent">
                <Rating name= "read-only" readOnly value={stars}/>
            </Box>

        </div>
    )
}

export default StartRating