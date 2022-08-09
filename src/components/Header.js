import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Select,
    MenuItem,
    makeStyles,
    createTheme,
    ThemeProvider
} from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import AuthModel from './Authentication/AuthModel';
import UserSideBar from './Authentication/UserSideBar';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer"
    }
}))

const Header = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const { currency, setCurrency, user } = CryptoState();

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            type: 'dark'
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            className={classes.title}
                            onClick={() => navigate("/")}
                            variant='h6' >
                                Crypto Tracker
                        </Typography>
                        <Select
                            variant='outlined'
                            style={{ width: 100, height: 40, marginRight: 15 }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}>
                            <MenuItem value={"CAD"}>CAD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"AED"}>AED</MenuItem>
                            <MenuItem value={"PKR"}>PKR</MenuItem>
                            <MenuItem value={"JPY"}>JPY</MenuItem>
                        </Select>
                        {user ? <UserSideBar /> : <AuthModel />}
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
        
    );
}  

export default Header;
