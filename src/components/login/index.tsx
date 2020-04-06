import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { singInAction } from "../../store/login/action";
import {push} from "connected-react-router";
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';


const validationShema:any = Yup.object().shape({
    email: Yup.string()
        .email("Введите корректный email адрес")
        .required('Данное поле обязательно для заполнения'),
    password: Yup.string()
        .min(5, 'Пароль минимум 6 символов')
        .max(20, 'Пароль максимум 20 симолов')
        .required('Данное поле обязательно для заполнения')
});

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

const SignIn = (props:any) => {

    const classes = useStyles();

    const emailRef:any = React.createRef();
    const passRef:any = React.createRef();

    const singIn = () => {
        // event.preventDefault();
        props.singIn(emailRef.current.value, passRef.current.value);
    };

    const toRegistrationPage = (e:any) => {
        console.log(e);
        e.preventDefault();
        props.push('/registration')
    };

    useEffect(()=>{
            console.log('update')
    });


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизация
                </Typography>
                {props.errorAuth ? 'Неправильный логин или пароль' : ''}
                <Formik initialValues={{email: '', password: ''}}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            props.singIn(values.email, values.password);
                            setSubmitting(false);
                        }}
                        validationSchema={validationShema}
                >
                    {({
                          values,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting
                    }) => (
                        <Form className={classes.form} onSubmit={handleSubmit} noValidate >
                            <Field
                                component={TextField}
                                type="email"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                value={values.email}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                inputRef={emailRef}
                                disabled={props.formDisabled}
                            />
                            <Field
                                component={TextField}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                inputRef={passRef}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                disabled={props.formDisabled}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled={props.formDisabled}
                            >
                                Войти
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Забыли пароль?
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link variant="body2"
                              onClick={toRegistrationPage}>
                            Нет аккаунта. Зарегистрируйся
                        </Link>
                    </Grid>
                </Grid>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};

const mapStateToProps = (state: any) => ({
    email: state.login.email,
    errorAuth: state.login.errorAuth,
    formDisabled: state.login.authProcess
});


const mapDispatchToProps = (dispatch:any) => ({
    singIn: (email:any, pass:any) => {
        dispatch(singInAction(email, pass))
    },
    push: (value:string) => dispatch(push(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);