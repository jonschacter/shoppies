import React from 'react';

const NomineeCard = ({movie: {Title, Year}}) => {
    return (
        <div className="nominee-card">
               { Title } ({ Year })
               <button className="nominate-button">Remove</button>
        </div>
    );
};

export default NomineeCard;