import React from 'react';
import { ItemCard } from '../itemCard/ItemCard';
import styles from './Frame.module.css';

export function Frame() {
    function displayCards() {
        let cards = [];
        for (let i = 0; i < 10; i++){
            cards.push(<ItemCard key={i}></ItemCard>);
        }
        return cards;
    }
    
    return (
        <div className={styles.frame}>
            {displayCards()}
        </div>
    )
}