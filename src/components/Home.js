import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import { HomeConstants } from '../constants/AppConstants';


const Home = () => (
    <section className="App">
        <header className="App-header">
            { HomeConstants.welcomeMessage }
        </header>
        <main className="App-main">
            { HomeConstants.challengeDescription }
        </main>
        <footer className="App-footer">
            <Link to="/quiz">Begin</Link>
        </footer>
    </section>
)

export default Home;
