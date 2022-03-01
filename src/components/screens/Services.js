import React from 'react'
import { Link } from 'react-router-dom'
import {
  Typography,
  Grid,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import ButtonArrow from '../ui/ButtonArrow'
import customoftwareIcon from '../../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../../assets/mobileIcon.svg'
import websitesIcon from '../../assets/websiteIcon.svg'

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}))

export default function Services(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container direction='column'>
      <Grid item style={{ marginLeft: matchesSM ? 0 : '5em' }}>
        <Typography align={matchesSM ? 'center' : ''} variant='h2' gutterBottom>
          Services
        </Typography>
      </Grid>
      <Grid item>
        {' '}
        {/*-----mobile Apps Block......*/}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>IOS/Android App Development </Typography>
            <Typography variant='subtitle1'>
              Extend Functionality. extend Access. increase Engagement
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to='/mobileapps'
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                props.setNewValue(1)
                props.setSelected(2)
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>

          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              alt='mobile phone Icon'
              src={mobileAppsIcon}
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {' '}
        {/*-----Services Block......*/}
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1'>
              Save Energi. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to='/customsoftware'
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                props.setNewValue(1)
                props.setSelected(1)
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>

          <Grid item>
            <img
              className={classes.icon}
              alt='custom software Icon'
              src={customoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {' '}
        {/*-----websits Block......*/}
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1'>
              Reach More. Discover More. Sell more.
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to='/websites'
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                props.setNewValue(1)
                props.setSelected(3)
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>

          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              alt='website Icon'
              src={websitesIcon}
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
