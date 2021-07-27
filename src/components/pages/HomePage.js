import MenuIcon from '@material-ui/icons/Menu';
import { AppBar } from "@material-ui/core";
import React from "react";
import BookHome from "../templates/BookHome";

const HomePage = () => {
    return <React.Fragment>
        <AppBar>
            <MenuIcon/>  
        </AppBar>
            <BookHome/>

        
    </React.Fragment>
}

export default HomePage;