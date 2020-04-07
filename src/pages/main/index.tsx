import React from 'react';
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {push} from "connected-react-router";


const MainPage = (props:any) => {

    const toLoginPage = () => {
        props.push('/login');
        console.log(push);
        console.log(props.push);
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

const mapDispatchToProps = (dispatch:any) => ({
    push: (value:string) => dispatch(push(value))
});


export default connect(null, mapDispatchToProps)(MainPage);