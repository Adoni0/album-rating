import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AlbumIcon from '@material-ui/icons/Album';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import Link from 'next/link'
import cyan from '@material-ui/core/colors/red';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {

  const classes = useStyles();
  const [drawer, setDrawer] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List>
          <ListItem button>
            <ListItemIcon><PlayCircleFilledIcon /></ListItemIcon>
            <ListItemText primary={props.name + ' Most Popular'} />
          </ListItem>

          <ListItem button>
            <ListItemIcon><MusicVideoIcon /></ListItemIcon>
            <ListItemText primary={props.name + ' Music Videos'} />
          </ListItem>

          <ListItem button>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText>
              <Link href={'/'}>
              <a>Back to Home</a>
              </Link>
            </ListItemText>
          </ListItem>
        
      </List>
      <Divider />
      
    </div>
  );

  return (
    <div>
      
          <Button variant="outlined" color={cyan[500]} onClick={toggleDrawer(true)}><AlbumIcon /></Button>
          <Drawer anchor='bottom' open={drawer} onClose={toggleDrawer(false)}>
            {list('bottom')}
          </Drawer>
        
    </div>
  );
}