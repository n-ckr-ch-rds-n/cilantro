import React from "react";
import {FullScreenCanvas} from "solandra-react/lib";
import {Line, SCanvas} from "solandra";

const Smears: React.FC = () => {
    return(
        <FullScreenCanvas
            playing
            seed={1}
            sketch={(p: SCanvas) => {
                p.withRandomOrder(
                    p.forTiling,
                    { n: 20, type: "square", margin: 0 },
                    ([i, j], [di, dj]) => {
                        p.doProportion(0.6, () => {
                            p.setStrokeColor(i * 100, 80, 30 + j * 30, 0.9)
                            p.lineWidth = 0.02 + 0.02 * (1 - i)
                            p.draw(
                                new Line(
                                    [i + di / 4, j + dj / 4],
                                    [
                                        i + (di * 3 * j * p.randomPolarity()) / 4,
                                        j + (dj * 5 * (1 + p.random())) / 4,
                                    ]
                                )
                            )
                        })
                    }
                )
            }}/>
    )
}

export default Smears;
