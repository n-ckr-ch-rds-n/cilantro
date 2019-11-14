import React from 'react';
import './App.css';
import Wigglies from "./wigglies";
import Smears from "./smears";
import {FullScreenCanvas} from "solandra-react/lib";
import {SCanvas} from "solandra";
import {kvetch} from "./kvetch";

const App: React.FC = () => {
    return (
        <FullScreenCanvas
            playing
            seed={1}
            sketch={kvetch}/>
    );
}

export default App;
