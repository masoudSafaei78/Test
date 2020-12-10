import Theme from '../Theme';

import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles({

    root: {
        backgroundColor: '#fff',
        width: "18%",
        padding: "1.5rem  1rem "

    },
    logoType: {
        marginRight: "1.5rem",
        fontSize: "1.25rem",
        fontWeight: "600",
        color: Theme.palette.primary.main
    },
    hashTagTitle: {
        marginTop: "3rem",
        marginBottom:'1.5rem',
        fontSize: "1.1rem",
        fontWeight: "600",
    },
    hashtag:{
        marginRight:"0.5rem"
    },
    hashTagParent:{
        width:"100%",
        marginBottom:"0.5rem",
        padding:"0.15rem !important"
    }

});
export default useStyles