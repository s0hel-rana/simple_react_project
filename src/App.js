import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Card from './components/Card'
import State from './components/State';
import CONDITION_RENDERING from './CONDITION_RENDERING/index';
import EVEN_HANDLER_CLASS from './EVEN_HANDLER_CLASS';
import HOOK_USE from './HOOK_USE/index';
import HOOK_USE1 from './HOOK_USE/index1';
import UPDATE_COUNTER from './UPDATE_COUNTER';
import Form from './components/Form/Form';

const App = () => {
    return (
        <div>
            <header>
                <h1>A template for React Project</h1>
            </header>
            <main>
                <div>
                    <Form/>
                    {/* <UPDATE_COUNTER /> */}
                    {/* <HOOK_USE1 /> */}
                {/* <HOOK_USE /> */}
                {/* <EVEN_HANDLER_CLASS /> */}
                {/* <CONDITION_RENDERING /> */}
                {/* <h1>Welcome to React</h1> */}
                {/* <Card  name="Sohel Rana" address="Jamalpur"/> */}
                {/* <State /> */}
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
