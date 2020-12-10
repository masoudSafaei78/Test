import React from 'react'
import useStyles from '../styles';

import { Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

function Header() {
    const classes=useStyles()
    return (
        <div className={classes.header}>
            <HomeIcon/>
            <Typography className={classes.headerTitle}>
            خانه

            </Typography>
          
        </div>
    )
}

export default Header
