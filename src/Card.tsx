import React from "react";
import { GameCard } from "./types";

type CardProps = {
    card: GameCard;
    isFlipped: boolean;
    isDisabled: boolean;
    onFlip: (gameCard: GameCard) => void;
}

export function Card({ card, isFlipped, isDisabled, onFlip }: CardProps) {
    const handleClick = React.useCallback(() => {
        onFlip(card);
    }, [onFlip, card]);

    const isCardFlipped = card.isMatched || isFlipped;

    return (
        <button
        className={`relative transition-transform duration-500 transform border-2 border-purple-950 p-10 m-2 w-1/5 ${isCardFlipped ? "flipped"
            : ""}`}
            style={{transformStyle: 'preserve-3d'}}
            disabled={isCardFlipped || isDisabled}
            onClick={handleClick}
        >
            <div className="absolute w-full h-full flex justify-center items-center left-0 top-0 bg-red-200" style={{ backfaceVisibility: 'hidden'}}>?</div>
            <div className="absolute w-full h-full flex justify-center items-center left-0 top-0 bg-green-200" style={{ backfaceVisibility: 'hidden', transform: "rotateY(180deg)"}}>
                {card.value}
            </div>
        </button>
    );
}