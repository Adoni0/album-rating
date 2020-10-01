import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Pony } from '../components/MediaCard'
import TemporaryDrawer from '../components/TemporaryDrawer'
import { ArticleDivider, VideoDivider } from '../components/Dividers'


export default function NFL () {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" style={{backgroundColor: '#000000',
            backgroundImage: 'linear-gradient(315deg, #000000 0%, #414141 74%)', height: '100vh'}}>
            <Typography component="div" 
            // style={{backgroundColor: '#000000',
            // backgroundImage: 'linear-gradient(315deg, #000000 0%, #414141 74%)', height: '100vh'}}
            >
                <TemporaryDrawer />
            <br/>
            <ArticleDivider />
            <br/>
            <Pony />
            <br />
            <VideoDivider />
            </Typography>
            </Container>
        </>
        
    )
}
