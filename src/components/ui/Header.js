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
  List,
  ListItem,
  ListItemText,
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
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
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

  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },

  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },

  appbar: {
    zIndex: theme.zIndex.modal + 1,
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

  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)

  const handlChange = (e, newValue) => {
    props.setNewValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    props.setSelectedIndex(i)
  }
  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const menuOptions = [
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Mobile Applications',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 2,
    },
    { name: 'Websites ', link: '/websites', activeIndex: 1, selectedIndex: 3 },
  ]

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0, selectedIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (event) => handleClick(event),
    },
    {
      name: 'The Revolution',
      link: '/revolution',
      activeIndex: 2,
    },
    { name: 'About Us', link: '/about', activeIndex: 3 },
    { name: 'Contact Us', link: '/contact', activeIndex: 4 },
  ]

  useEffect(() => {
    ;[...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.newValue !== route.activeIndex) {
            props.setNewValue(route.activeIndex)
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex)
            }
          }
          break
        case '/estimate':
          props.setNewValue(5)
          break
        default:
          break
      }
    })

    // switch (window.location.pathname) {
    //   case '/':
    //     if (newValue !== 0) {
    //       setNewValue(0)
    //     }
    //     break

    //   case '/services':
    //     if (newValue !== 1) {
    //       setNewValue(1)
    //       setSelectedIndex(0)
    //     }
    //     break

    //   case '/customsoftware':
    //     if (newValue !== 1) {
    //       setNewValue(1)
    //       setSelectedIndex(1)
    //     }
    //     break

    //   case '/mobileapps':
    //     if (newValue !== 1) {
    //       setNewValue(1)
    //       setSelectedIndex(2)
    //     }
    //     break
    //   case '/websites':
    //     if (newValue !== 1) {
    //       setNewValue(1)
    //       setSelectedIndex(3)
    //     }
    //     break

    //   case '/revolution':
    //     if (newValue !== 2) {
    //       setNewValue(2)
    //     }
    //     break
    //   case '/about':
    //     if (newValue !== 3) {
    //       setNewValue(3)
    //     }
    //     break

    //   case '/contact':
    //     if (newValue !== 4) {
    //       setNewValue(4)
    //     }
    //     break
    //   case '/estimate':
    //     if (newValue !== 5) {
    //       setNewValue(5)
    //     }
    //     break
    //   default:
    //   // code block
    // }
  }, [props.newValue, menuOptions, props.selectedIndex, routes, props])

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.newValue}
        className={classes.tabContainer}
        onChange={handlChange}
        indicatorColor='primary'
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to='/estimate'
        className={classes.button}
        variant='contained'
        color='secondary'
        onClick={() => props.setNewValue(5)}
      >
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
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i)
              props.setNewValue(1)
              handleClose()
            }}
            selected={i === props.selectedIndex && props.newValue === 1}
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
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={props.newValue === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false)
                props.setNewValue(route.activeIndex)
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            className={classes.drawerItemEstimate}
            onClick={() => {
              setOpenDrawer(false)
              props.setNewValue(5)
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            to='/estimate'
            selected={props.newValue === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to='/'
              disableRipple
              onClick={() => props.setNewValue(0)}
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
