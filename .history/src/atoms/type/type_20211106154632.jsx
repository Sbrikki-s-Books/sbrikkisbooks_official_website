import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    'We read...',
                    'We drink...',
                    'We vaccinate ourselves...',
                    'We have fun!',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default Type;