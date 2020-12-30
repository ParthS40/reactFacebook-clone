import { Button } from "@material-ui/core";
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

    const signIn = () => {
        // SignIn...
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
              user: result.user,
            })
            console.log(result.user)
        }).catch(error => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.freelogoservices.com/blog/wp-content/uploads/new-facebook-logo.png"></img>
                <img className="text__logo" src="https://f.jwwb.nl/public/p/s/w/temp-wsvkopwiikoaebyundwg/xd8wr4/Facebook_logo_text_wordmark.png"></img>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>

    )
}

export default Login
