import { KittyIdle } from "./Kitty";
import BouncingBall from "./BouncingBall";
import { useRef, useState } from "react";

export default function KittyBall() {
    const [ballPosition, setBallPosition] = useState({ x: 0, y: 50 });
    const ballVelocity = useRef({ x: 0, y: 0});

    return (
        <div className="h-svh">
            <KittyIdle ballPosition={ballPosition.x} ballVelocity={ballVelocity.current.x} />
            <BouncingBall position={ballPosition} setPosition={setBallPosition} velocityRef={ballVelocity} />
        </div>
    )
};