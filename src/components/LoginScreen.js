import React, { useState } from 'react';
import "./LoginScreen.css";
import { SignupScreen } from './SignupScreen';

export const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img 
                    className="loginScreen__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                 />
                 <button 
                    onClick={() => setSignIn(true)}
                    className="loginScreen__button">
                     Iniciar Sesion
                 </button>

                 <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                {
                    signIn ? (
                        <SignupScreen />
                    ) : (
                        <>
                            <h1>Peliculas Ilimitadas, Pragramas de Television y Mas.</h1>
                            <h2>Mira en Cualquier Lugar. Cancela en cualquier momento.</h2>
                            <h3>Listo Para Ver? Ingresa Tu Correo Para Crear o Reiniciar Tu Membresia.</h3>
                            
                            <div className="loginScreen__input">
                                <form>
                                    <input type='email' placeholder="Email" />
                                    <button
                                        onClick={() => setSignIn(true)} 
                                        className="loginScreen__getStarted">
                                        EMPEZAR 
                                    </button>
                                </form>
                            </div>
                        </>
                    )
                }
                
            </div>
        </div>
    )
}
