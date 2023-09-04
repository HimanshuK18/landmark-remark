import { useState, useEffect } from 'react';
import  TransitionEx  from "./useTransition";

export default function FollowCursor({ children }: { children: any }) {
    
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMove(e: { clientX: number; clientY: number; }) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener('pointermove', handleMove);
        return () => {
            window.removeEventListener('pointermove', handleMove);
        };
    }, []);


    const [count, setCount] = useState(0);
    console.log(count);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count => count + 1); // You want to increment the counter every second...
        }, 3000)
        return () => clearInterval(intervalId);
    }, []);


    return (<>
        <div style={{
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
        }} >{children}
        </div>
        <TransitionEx />
    </>
    );
}