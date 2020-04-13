import React, {useEffect} from 'react';
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {checkIsAuth} from '../../store/login/action';

import Firebase from '../../store/firebase';

const MainPage = (props:any) => {

    useEffect(()=>{
        props.checkIsAuth();
    });

    const toLoginPage = () => {
        props.push('/login');
    };

    const checkAuth = () => {
        console.log(Firebase.user);
    };



    return (
        <div>
            MainPage
            <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={toLoginPage}
            >
                Логин
            </Button>
            <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={checkAuth}
            >
                Проверка аккаунта
            </Button>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    isAuth: state.login.isAuth
});
const mapDispatchToProps = (dispatch:any) => ({
    push: (value:string) => dispatch(push(value)),
    checkIsAuth: () => dispatch(checkIsAuth())
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);