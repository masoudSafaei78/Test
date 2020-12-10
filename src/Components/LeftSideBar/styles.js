import Theme from '../Theme';


import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles({

    root: {
        backgroundColor: '#fff',
        width: "25%",
        padding: "1.5rem  1rem ",
    

    },
    avatar: {
        width: "3.5rem",
        height: "3.5rem"
    },
    twitterAvatar: {
        width: "3rem",
        height: "3rem"
    },
    profText: {
        width: "max-content",
        marginLeft: ".75rem",
        direction: "ltr"
    },
    twitterNameParent: {
        width: "max-content",
        marginRight: ".75rem",
        direction: "ltr"
      
    },
    profName: {
        flex: 1
    },
    profId: {
        flex: 1,
        color: Theme.palette.text.hint,
        fontSize: ".79rem"

    },
    twitterRoot:{
        background:"#f5f8fa",
        borderRadius:"2.5rem",
        paddingRight:" 2rem",
        paddingLeft:" 2rem",
        marginTop:"2.5rem",
       
    },
    twitterTitle:{
        marginBottom:'11px',
        fontSize: "1.1rem",
        fontWeight: "600", 
        marginTop:"11px"
    },
    twitterParent:{
        padding: "8px 0 ",
        width:"100%"
    }



});
export default useStyles