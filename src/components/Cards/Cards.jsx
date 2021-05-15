import React from 'react'
import {CardContent,Grid,Card,Typography} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

function Cards({ data :{recovered ,confirmed , deaths, lastUpdate}}) {
    if(!confirmed){
        return 'Loading...';
    } 
    return (
        <div className={styles.container}>
          <Grid container spacing={3} justify="center">
            <Grid item >
                <Card xs={12} md={3} className={cx(styles.card,styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active casesof covid-19 </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item >
                <Card xs={12} md={3}  className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries from covid-19 </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item >
                <Card xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths from covid-19 </Typography>
                </CardContent>
                </Card>
            </Grid>
          </Grid>
        </div>
    )
}

export default Cards
