import React from 'react';

const Checkbox = ({ onClick }) => {
    return(
        <div className='checkbox'>
            <input
                type='checkbox'
                onClick={() => onClick()}
            />
        </div>
    )
};

export default Checkbox;