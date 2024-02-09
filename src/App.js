import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Card from './components/Card'
import State from './components/State';

const App = () => {
    return (
        <div>
            <header>
                <h1>A template for React Project</h1>
            </header>
            <main>
                <div>
                <h1>Welcome to React</h1>
                <Card  name="Sohel Rana" address="Jamalpur"/>
                <State />
                </div>
            </main>
            <footer>
                <p className="left">
                    Subscribe to my{' '}
                    <a href="https://www.github.com/s0hel-rana">
                        <FaGithub className="footer__icon" />
                    </a>{' '}
                    link
                </p>
                <p className="right">Developed with &hearts; by Sohel Rana</p>
            </footer>
        </div>
    );
};

export default App;
