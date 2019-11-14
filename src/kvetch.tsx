import SCanvas from "solandra/sCanvas";
import {Circle} from "solandra";

export const kvetch = (s: SCanvas) => {
    s.background(1, 80, 80);
    s.forTiling({n: 7, type: "square", margin: 0.1}, (pt, [d], c, i) => {
        s.setFillColor(i*5, 80, 40, 0.4);
        s.fill(new Circle({at: c, r: 0.05}));
    })
};
