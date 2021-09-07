// @ts -ignore
import { createTheme,makeStyles } from '@material-ui/core/styles';
import { purple } from "@material-ui/core/colors";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills"
import About from "./component/About";
import MyWork from "./component/MyWork";
import Contact from "./component/Contact";

const theme=  createTheme({
    pallete:{
        primary:{main:purple[500]},
        secondary:{ main:"#333"}
    }
})


function App() {
    const classes = useStyles();
    return ( 
       // <MuiThemeProvider theme={theme}>
            <div className = { classes.root }>
                <Navbar/>
                <About title = "Acerca de mi"
                id = "about"
                dark = { true }/>  
                <Skills title = "Habilidades"
                id = "skills"
                dark = { false }/>  
                <MyWork title = "Educacion"
                id = "mywork"
                dark = { true }/>  
                <Contact title = "Contacto"
                id = "contact"
                dark = { false }/>
            </div>
       // </MuiThemeProvider>

    
    );
}


const useStyles = makeStyles((Theme) => ({
    root: {

    }
}))
export default App;