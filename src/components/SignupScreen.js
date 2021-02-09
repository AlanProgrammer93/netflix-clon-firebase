import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';
import "./SignupScreen.css";

export const SignupScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            db.collection('subscriptions')
                .doc(emailRef.current.value)
                .set({
                    plan: 'Sin Plan'
                })
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    const signIn = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            //console.log(authUser);
        })
        .catch((error) => alert(error.message));
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Iniciar Sesion</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button className="submit" onClick={signIn}>Iniciar</button>

                <h4>
                    <span className="signupScreen__gray">Nuevo Usuario? </span>
                    <span className="signupScreen__link" onClick={register}>Registrate Ahora.</span>
                </h4>
            </form>
        </div>
    )
}
