import React from 'react'

const DisplayIdeas = (props) => {
    // Mapping through ideas passes from props to display in an ul
    let ideas = props.ideas.map((idea) => {
        return(
            <ul>
                <li>{idea}</li>
            </ul>
        )
    });
    return (
        <div>
            <h4>Current Ideas</h4>
            {ideas}
        </div>
    )
};
export default DisplayIdeas;