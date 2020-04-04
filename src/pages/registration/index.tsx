import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { singUpAction } from '../../store/login/action';
import { push } from "connected-react-router";


// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = (props:any) => {

    const classes = useStyles();

    const emailRef:any = React.createRef();
    const passRef:any = React.createRef();

    const singIn = (event:any) => {
        event.preventDefault();
        props.singUp(emailRef.current.value, passRef.current.value);
    };

    const toLoginPage = () => {
        props.push('/login');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Регистрация
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        type="email"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        inputRef={emailRef}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        inputRef={passRef}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(e:any) => singIn(e)}
                    >
                        Зарегистрироваться
                    </Button>
                    <Grid container>
                        <Button
                            onClick={toLoginPage}
                        >Уже есть аккаунт. Войти</Button>
                    </Grid>
                </form>
            </div>
            {/*<Box mt={8}>*/}
            {/*    <Copyright />*/}
            {/*</Box>*/}
        </Container>
    );
};

const mapStateToProps = (state: any) => ({
    email: state.login.email
});


const mapDispatchToProps = (dispatch:any) => ({
    singUp: (email:any, pass:any) => {
        dispatch(singUpAction(email, pass))
    },
    push: (value:string) => dispatch(push(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);