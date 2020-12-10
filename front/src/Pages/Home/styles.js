

import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles({

    root: {
        backgroundColor:'#fff',
        flex: 1,

    },
    header:{
        display:'flex',
        padding:24,
        background:'#fff'
    },
    headerTitle:{
        fontSize:'1.2rem',
        fontWeight:600,
        marginRight:'0.5rem'
    },
    divider:{
        backgroundColor:"#7EBAFF",
        filter:"opacity(0.2)"
    }
});
export default useStyles