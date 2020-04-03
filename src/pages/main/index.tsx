import React from 'react';
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {push} from "connected-react-router";


const MainPage = (props:any) => {

    const toLoginPage = () => {
        props.push('/login')
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
export default connect(null, {push})(MainPage);