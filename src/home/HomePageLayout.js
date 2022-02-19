
import React from 'react';
import { FirstBanner } from './FirstBanner';
import { SecondBanner } from './SecondBanner';
import { ThirdBanner } from './ThirdBanner';
import './Home.css';

export const HomePageLayout = () => {
    return (
        <>
            <FirstBanner />
            <SecondBanner />
            <ThirdBanner />
        </>
    );
}