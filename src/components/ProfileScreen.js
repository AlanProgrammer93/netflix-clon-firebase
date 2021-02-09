import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { Nav } from './Nav';
import { Plans } from './Plans';
import "./ProfileScreen.css";

export const ProfileScreen = () => {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Editar Perfil</h1>
                <div className="profileScreen__info">
                    <img
                        src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024"
                        alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Planes</h3>
                            <Plans />
                            <button 
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut">Cerrar Sesion</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
