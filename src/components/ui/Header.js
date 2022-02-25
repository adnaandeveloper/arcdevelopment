import React, { useEffect, useState } from 'react'

import {
  useScrollTrigger,
  Toolbar,
  AppBar,
  makeStyles,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

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
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },

  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
  },

  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': { opacity: 1 },
  },
}))

export default function Header(props) {
  const classes = useStales()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [openDrawer, setOpenDrawer] = useState(false)
  const [newValue, setNewValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handlChange = (e, newValue) => {
    setNewValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    setSelectedIndex(i)
  }
  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile Applications', link: '/mobileapps' },
    { name: 'Websites ', link: '/websites' },
  ]

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (newValue !== 0) {
          setNewValue(0)
        }
        break

      case '/services':
        if (newValue !== 1) {
          setNewValue(1)
          setSelectedIndex(0)
        }
        break

      case '/customsoftware':
        if (newValue !== 1) {
          setNewValue(1)
          setSelectedIndex(1)
        }
        break

      case '/mobileapps':
        if (newValue !== 1) {
          setNewValue(1)
          setSelectedIndex(2)
        }
        break
      case '/websites':
        if (newValue !== 1) {
          setNewValue(1)
          setSelectedIndex(3)
        }
        break

      case '/revolution':
        if (newValue !== 2) {
          setNewValue(2)
        }
        break
      case '/about':
        if (newValue !== 3) {
          setNewValue(3)
        }
        break

      case '/contact':
        if (newValue !== 4) {
          setNewValue(4)
        }
        break
      case '/estimate':
        if (newValue !== 5) {
          setNewValue(5)
        }
        break
      default:
      // code block
    }
  }, [newValue])

  const tabs = (
    <React.Fragment>
      <Tabs
        value={newValue}
        className={classes.tabContainer}
        onChange={handlChange}
        indicatorColor='primary'
      >
        <Tab className={classes.tab} component={Link} to='/' label='Home' />
        <Tab
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(event) => handleClick(event)}
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
      <Button className={classes.button} variant='contained' color='secondary'>
        Free Estimates
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i)
              setNewValue(1)
              handleClose()
            }}
            selected={i === selectedIndex && newValue === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        Example Drawer
      </SwipeableDrawer>

      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  )

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
              onClick={() => setNewValue(0)}
            >
              <img className={classes.logo} alt='Company logo' src={logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
