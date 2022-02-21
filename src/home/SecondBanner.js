
import React from 'react';
import UAParser from "ua-parser-js";
import Carousel from "react-multi-carousel";
import { Typography, Row } from 'antd';
import { Image } from "semantic-ui-react";
import testNft from '../gltf/coelhoBixeiro.jpeg';
import 'react-multi-carousel/lib/styles.css';
import './Home.css';
import { useCurrentBreakpoint } from '../hooks';

export const SecondBanner = () => {
    const { isMobile } = useCurrentBreakpoint();
    const userAgent = navigator.userAgent;
    const parser = new UAParser();
    parser.setUA(userAgent);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
            paritialVisibilityGutter: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 10
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const images = [
        testNft,
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      ];

    return (
        <div className='carousel-container'>
            <Row align='bottom' justify='center'>
                <div className='title'>
                    <Typography.Text style={{ color: 'black' }}>Collections</Typography.Text>
                </div>        
            </Row>
            <Carousel
                ssr
                responsive={responsive}
                itemClass={ isMobile ? 'image-item image-item-mobile' : 'image-item image-item-desktop' }
                infinite
            >
                {images.slice(0, 5).map(image => {
                    return (
                        <Image
                            key={image}
                            draggable={false}
                            style={{ width: isMobile ? "12rem" : "17rem", height: isMobile ? "14.5rem" : "70%", borderRadius: '10px' }}
                            src={image}
                        />
                    );
                })}
            </Carousel>
        </div>
    );
}