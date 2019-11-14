import React from 'react';
import './App.css';
import {FullScreenCanvas} from "solandra-react/lib";
import {LinearGradient, SCanvas, SimplePath} from "solandra";

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
                p.forVertical({n: 20, margin: 0.1}, ([x, y], [dX, dY]) => {
                    const points = p.build(p.range, {from: x, to: x + dX, n: 20}, vX => {
                        return p.perturb({ at: [vX, y + dY / 2], magnitude: dY / 4})
                    })
                    p.lineWidth = 0.01 / p.meta.aspectRatio
                    p.setStrokeColor(y * 60, 90, 40)
                    p.draw(SimplePath.withPoints(points))
                })
            }}
        />

    );
}

export default App;
