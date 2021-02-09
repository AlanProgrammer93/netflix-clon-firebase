import React from 'react';
import requests from '../utils/Requests';
import { Banner } from './Banner';
import "./HomeScreen.css";
import { Nav } from './Nav';
import { Row } from './Row';

export const HomeScreen = () => {
    
    return (
        <div className="homeScreen">
            <Nav />

            <Banner />

            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
             />
             <Row
                title="Trending Actuales"
                fetchUrl={requests.fetchTrending}
             />
             <Row
                title="Los Mas Valorados"
                fetchUrl={requests.fetchTopRated}
             />
             <Row
                title="Peliculas De Accion"
                fetchUrl={requests.fetchActionMovies}
             />
             <Row
                title="Peliculas De Comedia"
                fetchUrl={requests.fetchComedyMovies}
             />
             <Row
                title="Peliculas De Terror"
                fetchUrl={requests.fetchHorrorMovies}
             />
             <Row
                title="Peliculas De Romance"
                fetchUrl={requests.fetchRomanceMovies}
             />
             <Row
                title="Documentales"
                fetchUrl={requests.fetchDocumentaries}
             />
            
        </div>
    )
}
