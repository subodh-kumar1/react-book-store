const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
    palette : {
        primary: {
            main : '#00cc00',
            contrastText : '#25303d'
        },
        secondary : {
            main : '#0000cc'
        },
        

    },
    overrides : {
        MuiCard : {
            root : {
                margin : '1rem',          
            }
        },
        MuiContainer : {
            root : {
                backgroundColor : '#25303d',
                minHeight : '100vh'
            },
            maxWidthXl : {
                width : '80vw'   
            }
        },
        MuiDrawer : {
            root : {
                minWidth : '10vw'
            }
        },
        MuiInput : {
            root : {
                display : 'block',
                margin : '1rem',
                width : '60%',
                backgroundColor : '#ffffff'
            },
        }
    }
});

export default theme;