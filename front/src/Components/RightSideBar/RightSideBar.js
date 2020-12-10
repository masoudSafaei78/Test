import React from 'react'

import useStyles from './styles'
import { Typography, Grid, ButtonBase } from '@material-ui/core'
const HashTags = [
    "پرچم_دار_جدید",
    "ویروس_کرونا",
    "سامسونگ",
    "هلو_سامر",
    "پرچم-دار-جدید",
    "ویروس_کرونا",
    "سامسونگ",
    "هلو_سامر",

]

function RightSideBar() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container direction={"row"} alignItems={"center"}>
                <Grid item>
                    <img src={"images/logo.png"} />

                </Grid>
                <Grid item>

                    <Typography className={classes.logoType}>
                        توییتر فارسی
            </Typography>
                </Grid>
            </Grid>
            <Typography className={classes.hashTagTitle}>
                داغ ترین هشتگ ها
            </Typography>

            <Grid container direction={"column"} alignItems={"center"}>
                {
                    HashTags.map(item =>
                        <ButtonBase className={classes.hashTagParent}>

                            <Grid item container>
                                <img src={"images/hashtag.png"} />
                                <Typography className={classes.hashtag}>
                                    {item}
                                </Typography>
                            </Grid>
                        </ButtonBase>
                    )
                }
            </Grid>
        </div>
    )
}

export default RightSideBar
