import React, { useEffect, useState } from 'react'

import {
  useScrollTrigger,
  Toolbar,
  AppBar,
  makeStyles,
  Tabs,
  Tab,
  Button,
} from '@material-ui/core'
import theme from './Theme'

import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}
const useStales = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },

  logo: {
    height: '8em',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  },
}))

export default function Header(props) {
  const classes = useStales()
  const [value, setValue] = useState(0)
  const handlChange = (e, value) => {
    setValue(value)
  }
  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3)
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4)
    }
  }, [value])

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to='/'
              disableRipple
              onClick={() => setValue(0)}
            >
              <img className={classes.logo} alt='Company logo' src={logo} />
            </Button>
            <Tabs
              value={value}
              className={classes.tabContainer}
              onChange={handlChange}
              indicatorColor='primary'
            >
              <Tab
                className={classes.tab}
                component={Link}
                to='/'
                label='Home'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/services'
                label='services'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/revolution'
                label='The Revolution'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/about'
                label='About Us'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/contact'
                label='Contact Us'
              />
            </Tabs>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
            >
              Free Estimates
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
