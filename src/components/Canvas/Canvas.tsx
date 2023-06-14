import React, { useEffect, useRef } from 'react';

interface CanvasProps {
    draw: any,
    height: number,
    width: number,
    squaresX: number,
    squaresY: number,
}

const Canvas = ({draw, height, width, squaresX, squaresY}: CanvasProps) => {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const context = canvas.current?.getContext('2d');

        if (context) {
            context.clearRect(0, 0, width, height)
            draw(context);
        }
    });

    return ( 
        <div></div>
    )
}

export default Canvas;