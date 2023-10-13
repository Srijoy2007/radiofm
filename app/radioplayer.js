import React from 'react';

const RadioPlayer = ({station}) => {
    return (
        <div className='radio-player'>
            <audio controls autoPlay>
                <source src={station.url} type='audio/mpeg'/>
                Apka browser yeh gana support nahi karta
            </audio>

        </div>
    )


}