import Theme from '../Theme';
import { Opacity } from '@material-ui/icons';
import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles({
    root: {
        backgroundColor:"fff",
        width:"100vw",
        display:'flex',
        height:'100vh'

    },
    leftsidebar:{
      backgroundColor:'white',
        width:"25%"
        
    },
    devider:{
       height:'100vh !important',
       width:'1px !important',
       backgroundColor:Theme.palette.primary.main,
    
       filter:"opacity(0.5)"

    },

  });
  export default useStyles