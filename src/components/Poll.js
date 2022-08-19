import React from 'react';

const Poll = () => {
    return (
        <form>
            <div className="container">
                <h1>Dear user</h1>
                <p>Please participate in the survey to improve the quality of the services provided to you</p>

                <div className="poll">
                    <h4>Click on the image you want</h4>

                    <div className="pictures">

                    </div>
                    <div className="Points">
                        <span id="positive">Positive</span>
                        <span id="negative">Negative</span>
                        <div className="questions">

                        </div>

                    </div>

                    <textarea name="text" id="text" rows="10" placeholder='Enter your text ...'></textarea>
                    <br />
                    <button>send</button>

                </div>
            </div>
        </form>
    );
};

export default Poll;