import WalkingKitty from "./WalkingKitty";
import BouncingBall from "./BouncingBall";
import { useRef, useState } from "react";

export default function KittyBall() {
    const [ballPosition, setBallPosition] = useState({ x: 0, y: 50 });
    const ballVelocity = useRef({ x: 0, y: 0});
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="h-svh">
            <WalkingKitty 
                ballPosition={ballPosition.x} 
                ballVelocity={ballVelocity.current.x} 
                isDragging={isDragging} 
            />
            <BouncingBall 
                position={ballPosition} 
                setPosition={setBallPosition} 
                velocityRef={ballVelocity} 
                isDragging={isDragging} 
                setIsDragging={setIsDragging} 
            />
        </div>
    )
};