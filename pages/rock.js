import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Pony } from '../components/MediaCard'
import TemporaryDrawer from '../components/TemporaryDrawer'
import { ArticleDivider, VideoDivider } from '../components/Dividers'
import SearchBar from '../components/SearchBar'
import Grid from '@material-ui/core/Grid';


export default function rock() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" style={{
                backgroundColor: '#000000',
                backgroundImage: 'linear-gradient(315deg, #000000 0%, #414141 74%)', height: '103vh'
            }}>
                <Typography component="div">

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={7} style={{paddingTop: '30px'}}>
                            <TemporaryDrawer />
                        </Grid>
                        <Grid item xs={12} sm={5} style={{paddingTop: '30px'}}>
                            <SearchBar />
                        </Grid>
                    </Grid>

                    <br />
                    <ArticleDivider />
                    <br />
                    <Pony />
                    {/* <br /> */}
                    {/* <VideoDivider /> */}
                </Typography>
            </Container>
        </>

    )
}
