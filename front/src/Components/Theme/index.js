import tinycolor from 'tinycolor2';
import {createMuiTheme} from '@material-ui/core'
const primaryColor="#5ea9dd"
const Theme=createMuiTheme({
    overrides:{
        MuiTypography:{
        
            body1:{
                fontFamily:"Shabnam"
            }
        }
    },
    palette:{
        primary:{
            main:primaryColor,
            light:tinycolor(primaryColor).lighten().toHexString()
        }

    }
})
 
export default Theme