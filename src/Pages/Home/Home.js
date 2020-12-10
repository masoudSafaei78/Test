import React from 'react'
import useStyles from './styles';
import Header from './Components/Header';
import { Divider } from '@material-ui/core';

function Home() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
           <Header/>
           <Divider className={classes.divider}/>
        </div>
    )
}

export default Home
