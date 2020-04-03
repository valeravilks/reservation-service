import React from 'react';
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {singLoginOut} from "../../store/login/action";

const AccountPage = (props:any) => {
    const loginOut = () => {
        console.log(props);
        props.out();

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
        </div>
    )
};

const mapDispatchToProps = (dispatch:any) => ({
    out: () => dispatch(singLoginOut())
});

export default connect(null, mapDispatchToProps)(AccountPage);