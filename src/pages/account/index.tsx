import React from 'react';
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {singLoginOut} from "../../store/login/action";
import {push} from "connected-react-router";

const AccountPage = (props:any) => {
    const loginOut = () => {
        console.log(props);
        props.out();
    };

    const toMainPage = () => {
        console.log(`Go in homePage`);
        props.push('/')
    };
    return(
        <div>
            AccountPage
            <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={loginOut}>
                Выйти
            </Button>
            <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={toMainPage}>
                На главную
            </Button>
        </div>
    )
};

const mapDispatchToProps = (dispatch:any) => ({
    out: () => dispatch(singLoginOut()),
    push: (value:string) => dispatch(push(value))
});

export default connect(null, mapDispatchToProps)(AccountPage);