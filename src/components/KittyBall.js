import { KittyIdle } from "./Kitty";
import BouncingBall from "./BouncingBall";
import { useState } from "react";

export default function KittyBall() {
    const [ballPosition, setBallPosition] = useState({ x: 0, y: 50 });

    return (
        <div>
            <KittyIdle ballPosition={ballPosition.x} />
            <BouncingBall position={ballPosition} setPosition={setBallPosition} />
        </div>
    )
};