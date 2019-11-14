import React from 'react';
import './App.css';
import {FullScreenCanvas} from "solandra-react/lib";
import {LinearGradient, SCanvas} from "solandra";

const App: React.FC = () => {
  return (
    <FullScreenCanvas
      playing
      seed={1}
      sketch={(p: SCanvas) => {
        p.backgroundGradient(
            new LinearGradient({
              from: [0,0],
              to: [0,1],
              colors: [[0, {h: 240, s: 100, l: 20}], [1, {h: 10, s: 40, l: 90}]]
            })
        )
      }}
    />

  );
}

export default App;
