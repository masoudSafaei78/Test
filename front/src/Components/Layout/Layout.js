import React from 'react'
import useStyles from './styles'
import { Typography } from '@material-ui/core';
import RightSideBar from '../RightSideBar/RightSideBar';
import { Divider } from '@material-ui/core';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Home from '../../Pages/Home/Home';
function Layout() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
          <RightSideBar/>
          <Divider orientation={'vertical'} className={classes.devider}/>
          <Home/>
          <Divider orientation={'vertical'} className={classes.devider}/>
         <LeftSideBar/>
        </div>
    )
}

export default Layout;
