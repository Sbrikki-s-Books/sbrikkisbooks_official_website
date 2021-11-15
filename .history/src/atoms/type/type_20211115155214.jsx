import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    'We read...',
                    'We drink...',
                    'We do stuff...',
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