import React, {useEffect} from 'react';
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {checkIsAuth} from '../../store/login/action';

const MainPage = (props:any) => {

    /**
     * If the current user is in the system, then go to the account page
     */
    useEffect(()=>{
        props.checkIsCurrentUser();
    });

    const toLoginPage = () => {
        props.push('/login');
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
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    isAuth: state.login.isAuth
});
const mapDispatchToProps = (dispatch:any) => ({
    push: (value:string) => dispatch(push(value)),
    checkIsCurrentUser: () => dispatch(checkIsAuth())
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);