import React from 'react'
import {
  Typography,
  Grid,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import ButtonArrow from './ButtonArrow'
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

const useStales = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sx')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  estiamteButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}))

export default function CallToAction() {
  const classes = useStales()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid
      container
      direction={matchesSM ? 'column' : 'row'}
      alignItems='center'
      justifyContent={matchesSM ? 'center' : 'space-between'}
      className={classes.background}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software <br /> Revolutionary Results
            </Typography>
            <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
              Take atage of the 21st Century
            </Typography>
            <Grid container item justifyContent={matchesSM && 'center'}>
              <Button variant='outlined' className={classes.learnButton}>
                <span style={{ marginRight: 5 }}>Learn More </span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                ></ButtonArrow>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          className={classes.estiamteButton}
          style={{ marginTop: matchesSM && '2rem' }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  )
}
