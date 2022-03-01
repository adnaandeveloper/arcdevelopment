import React from 'react'
import Lottie from 'react-lottie-player'
import {
  makeStyles,
  useTheme,
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core/'
import animationData from '../../animations/landinganimation/data'
import ButtonArrow from '../ui/ButtonArrow'
import customoftwareIcon from '../../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../../assets/mobileIcon.svg'
import websitesIcon from '../../assets/websiteIcon.svg'
import revolutionBackground from '../../assets/repeatingBackground.svg'

import infoBackground from '../../assets/infoBackground.svg'
import CallToAction from '../ui/CallToAction'

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
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
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sx')]: {
      marginBottom: '2em',
    },
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xm')]: {
      marginLeft: 0,
    },
  },
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
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingRight: 0,
      paddingLeft: 0,
      borderRadius: 0,
      width: '100%',
    },
  },

  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}))

export default function Home() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        {/*------- Hero Block.......*/}
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant='h2' align='center'>
              Bringing west GOast tegnology <br /> to the midwest{' '}
            </Typography>
            <Grid
              container
              j
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
                  <span style={{ marginRight: 10 }}>Learn More </span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie loop animationData={animationData} play />
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
            <Button variant='outlined' className={classes.learnButton}>
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
        {/*-----mobile Apps Block......*/}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
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
            <Button variant='outlined' className={classes.learnButton}>
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
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1'>
              Reach More. Discover More. Sell more.
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button variant='outlined' className={classes.learnButton}>
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
              alt='website Icon'
              src={websitesIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {' '}
        {/*-----The Revolution  Block......*/}
        <Grid
          container
          alignItems='center'
          justify='center'
          style={{ height: '100em', marginTop: '12em' }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant='h3'> the Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    {' '}
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    variant='outlined'
                    className={classes.learnMoreButton}
                  >
                    <span style={{ marginRight: 10 }}>Learn More </span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      <Grid item>
        {/*-----Information Block......*/}

        <Grid
          container
          direction='row'
          style={{ height: '80em' }}
          alignItems='center'
        >
          <Grid
            item
            container
            style={{
              position: 'absolute',
              textAlign: matchesXS ? 'center' : 'inherit',
            }}
            direction={matchesXS ? 'column' : 'row'}
            spacing={matchesXS && 10}
          >
            <Grid
              item
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}
              sm
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>
                  {' '}
                  Let's get personal.
                </Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More </span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill='white'
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {/** right text  */}

            <Grid
              item
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                textAlign: matchesXS ? 'center' : 'right',
              }}
              sm
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'> Say hello! .</Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More </span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill='white'
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div className={classes.infoBackground}></div>
        </Grid>
      </Grid>

      <Grid item>
        {/** Call to action block text  */}

        <CallToAction />
      </Grid>
    </Grid>
  )

  // return <div style={{ height: '2000px' }}>Home</div>
}
