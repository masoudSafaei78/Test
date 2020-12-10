import React from 'react'
import useStyles from './styles'
import { ButtonBase } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core'

const Twitter = ({ name, id, img }) => {
    const classes = useStyles()
    return <div>
        <ButtonBase style={{width:"100%"}}>

        <Grid container direction={"row"} className={classes.twitterParent}>
            <Grid item>

                <Avatar src={img} className={classes.twitterAvatar} />
            </Grid>
            <Grid item container direction={"column"} className={classes.twitterNameParent} >
                <Typography>
                    {name}
                </Typography>
                <Typography className={classes.profId}>
                    {id}
                </Typography>
            </Grid>
        </Grid>
        </ButtonBase>
    </div>
}
const twitterArray = [
    {
        name: "Xiaomi",
        id: "@Xiaomi",
        img: "images/xiaomi.png",
    },
    {
        name: "Samsung",
        id: "@Samsung",
        img: "images/samsung.png",
    },
    {
        name: "ّبیل گیتس",
        id: "@Bill_Gates",
        img: "images/bil.png",
    },
    {
        name: "مایک بای",
        id: "@Mike",
        img: "images/mike.png",
    },
    {
        name: "شرلی ونگ",
        id: "@Shirley",
        img: "images/shily.png",
    },
]
function LeftSideBar() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <Grid item style={{ width: "max-content" }}>

                    <Avatar src={"images/Michael.jpeg"} className={classes.avatar} />
                </Grid>
                <Grid item container direction={"column"} className={classes.profText} >
                    <Typography>
                        مایکل اسکات
                 </Typography>
                    <Typography className={classes.profId}>
                        Michael.Scott
                 </Typography>
                </Grid>
            </Grid>
            <Grid container direction={'column'} className={classes.twitterRoot}>
                <Typography className={classes.twitterTitle}>
                    بهترین خبرنگاران
              </Typography>
              <Divider style={{ marginLeft: "-20px", marginRight: "-20px" }} />
                {
                    twitterArray.map((item,index) => {
                        return  <>   {/* <React.Fragment> */}
                        <Twitter name={item.name} id={item.id} img={item.img} />
                        {index!==twitterArray.length-1&&
                        <Divider style={{ marginLeft: "-20px", marginRight: "-20px" }} />
                        }
                        </>
                    }
                    )
                }

            </Grid>
        </div>
    )
}

export default LeftSideBar
