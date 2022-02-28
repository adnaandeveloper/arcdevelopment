import React from 'react'
import Lottie from 'react-lottie-player'
import { makeStyles, Grid, Button, Typography } from '@material-ui/core/'
import animationData from '../../animations/landinganimation/data'
import ButtonArrow from '../ui/ButtonArrow'

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },

  learnMoreButtonHero: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
}))

export default function Home() {
  const classes = useStyles()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid sm item>
            <Typography variant='h2' align='center'>
              Bringing west GOast tegnology <br /> to the midwest{' '}
            </Typography>
            <Grid
              container
              justify='center'
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.estimateButton} variant='contained'>
                  {' '}
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' className={classes.learnMoreButton}>
                  {' '}
                  Learn Mor
                  <ButtonArrow width={15} height={15} fill='red' />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie loop animationData={animationData} play />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )

  // return <div style={{ height: '2000px' }}>Home</div>
}
