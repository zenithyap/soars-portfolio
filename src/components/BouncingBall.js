import { useEffect, useRef, useState } from "react"

const winHeight = window.innerHeight;

export default function BouncingBall( {position, setPosition, velocityRef} ) {
    const winWidth = window.innerWidth;
    const ballRef = useRef(null);
    const positionRef = useRef({ x: winWidth / 4, y: winHeight / 2 });
    const lastTouchRef = useRef({x: 0, y: 0, timestamp: 0});
    const [isDragging, setIsDragging] = useState(false);

    const ballSize = 50;
    const acceleration = 0.5;
    const bounceFactor = 0.5;
    const boundary = 10;

    useEffect(() => {
        let animationFrame;

        const animateBall = () => {
            if (!isDragging) {
                velocityRef.current.y += acceleration;

                let newX = positionRef.current.x + velocityRef.current.x;
                let newY = positionRef.current.y + velocityRef.current.y;
                // If bottom boundary
                if (newY > winHeight - ballSize) { 
                    newY = winHeight - ballSize;
                    velocityRef.current.y *= -1 * bounceFactor;
                };
                // If up boundary
                if (newY < 0 + ballSize) {
                    newY = 0 + ballSize;
                    velocityRef.current.y *= -1 * bounceFactor;
                }
                // If left boundary
                if (newX < 0 ) {
                    newX = 0;
                    velocityRef.current.x *= -1 * bounceFactor;
                };
                //If right boundary
                if (newX > winWidth - ballSize - boundary) {
                    newX = winWidth - ballSize - boundary;
                    velocityRef.current.x *= -1 * bounceFactor;
                }

                positionRef.current = { x: newX, y: newY };
                setPosition({ x: newX, y: newY });
            };
            animationFrame = requestAnimationFrame(animateBall);
        };
        animateBall();
        return () => {
            cancelAnimationFrame(animationFrame);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDragging]);

    const handleMouseClick = (e) => {
        setIsDragging(true);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const newX = e.clientX - ballSize / 2;
        const newY = e.clientY - ballSize / 2 + window.scrollY;
        const velX = e.movementX;
        const velY = e.movementY;
        positionRef.current = {x: newX, y: newY};
        velocityRef.current = {x: velX, y: velY};
        setPosition({x: newX, y: newY});
    };
    
    const handleMouseUp = (e) => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
    };

    const handleTouchMove = (e) => {
        e.preventDefault();

        const touch = e.touches[0];
        const newX = touch.clientX - ballSize / 2;
        const newY = touch.clientY - ballSize / 2 + window.scrollY;
        const dt = (Date.now() - lastTouchRef.current.timestamp) / 14;

        const velX = (newX - lastTouchRef.current.x) / dt;
        const velY = (newY - lastTouchRef.current.y) / dt;
        
        velocityRef.current = {x: velX, y: velY};
        positionRef.current = {x: newX, y: newY};
        setPosition({x: newX, y: newY});
        
        lastTouchRef.current = {
            x: newX,
            y: newY,
            timestamp: Date.now(),
        }
    };

    const handleTouchEnd = (e) => {
        setIsDragging(false);
        lastTouchRef.current = {
            x: 0,
            y: 0,
            timestamp: 0,
        }
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
    };

    return (
        <div
            style={{ position: "absolute", top: `${position.y}px`, left: `${position.x}px` }}
            ref={ballRef}
            className="rounded-full w-[50px] h-[50px] bg-blue-500 z-20"
            onMouseDown={handleMouseClick}
            onTouchStart={handleTouchStart}
        />
    );
};
