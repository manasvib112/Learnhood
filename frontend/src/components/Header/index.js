import React from 'react'
import './style.css'
import Logo from '../../assets/images/logo.png'
import Ellipse from '../../assets/images/Ellipse.png'
import { Link, useHistory } from 'react-router-dom'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'
import bg from '../../assets/images/headerbg.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}))

const Header = ({ background }) => {
  const username = JSON.parse(localStorage['user']).firstname
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const history = useHistory()
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    history.push('/')
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])
  return (
    <div
      className='nav-bar'
      style={background ? { backgroundImage: `url(${bg})` } : null}
    >
      <div className='images-row'>
        <div className='left-side'>
          <img src={Logo} alt='learnhood' />
          <span class='logo'>Learnhood</span>
        </div>
        <div className='right-side'>
          <span>
            Hi, <strong>{username}</strong>
          </span>

          <img
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
            src={Ellipse}
            alt='learnhooud'
          />
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='menu-list-grow'
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
      <nav>
        <ul>
          <Link to='/home'>
            <li>Home</li>
          </Link>
          <Link to='#'>
            <li>Books</li>
          </Link>
          <Link to='/papers'>
            <li>Paper</li>
          </Link>
          <Link to='/notes'>
            <li>Notes</li>
          </Link>
          <Link to='#'>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
