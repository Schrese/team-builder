import React from 'react';

const TeamBuilder = (props) => {
    console.log(props)
    return (
        
    <div className = 'card-holder'>
        {props.data.map((data, index) => {
            return (
                <div className = 'card' key = {index}>
                    <h2>{data.name}</h2>
                    <h3>{data.email}</h3>
                    <h4>{data.role}</h4>
                </div>
            )
        })}
    </div>
    )
}

export default TeamBuilder;