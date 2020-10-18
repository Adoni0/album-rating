import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // flexGrow: 1,
        // textAlign: 'center',
        margin: 'auto',
        maxWidth: 360,
        backgroundColor: theme.palette.background.primary,
    },
}));

export function ArticleDivider() {
    const classes = useStyles();

    return (
        <List className={classes.root}>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <LibraryMusicIcon color="secondary"/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText style={{ color: 'white' }} primary="Featured Albums" />
            </ListItem>
            <Divider variant="inset" component="li" />

        </List>
    );
}

export function VideoDivider() {
    const classes = useStyles();

    return (
        <List className={classes.root}>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <MusicVideoIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText style={{ color: 'white' }} primary="Featured MusicVideos" />
            </ListItem>
            <Divider variant="inset" component="li" />

        </List>
    )
}