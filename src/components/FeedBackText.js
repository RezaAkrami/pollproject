import React , {useState} from 'react';
import '../style/feedBackText.module.scss'

const FeedBackText = () => {

    //state
    const [textArea, setTextArea] = useState("");

    return (
        <>
            <textarea name="text" rows="10" placeholder='Enter your text ...' value={textArea} onChange={(e)=> setTextArea(e.target.value)}></textarea>
        </>
    );
};

export default FeedBackText;