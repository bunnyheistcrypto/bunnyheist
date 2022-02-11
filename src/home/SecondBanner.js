
import React from 'react';
import { Carousel } from "antd";
import coelho from '../gltf/coelhoBixeiro.jpeg';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


export const SecondBanner = () => {
    return (
        <Carousel arrows>
            <div>
                <img style={{ height: '20rem', margin: 'auto' }} src={coelho} />
            </div>
            <div>
                <img style={{ height: '50rem', margin: 'auto' }} src={coelho} />
            </div>
            <div>
                <img style={{ height: '50rem', margin: 'auto' }} src={coelho} />
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Carousel>
    );
}