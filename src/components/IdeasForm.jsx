import React, { useState } from 'react';
const IdeasForm = (props) => {
    // State
    let [input, setInput] = useState("");
    // Function to update update array of ideas with new idea from input
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addIdeas(input);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeHolder="new Ideas" onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};
export default IdeasForm;