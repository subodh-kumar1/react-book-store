const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
    palette : {
        primary: {
            main : '#00cc00',
            contrastText : '#25303d'
        }
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
            }
        }
    }
});

export default theme;