
import React from 'react';
import { Button, Image, Row, Typography } from "antd";
import './Home.css';
import { FirstBanner } from './FirstBanner';
import { SecondBanner } from './SecondBanner';

export const HomePageLayout = () => {
    return (
        <>
            <FirstBanner />
            {/* <SecondBanner /> */}
        </>
    );
}