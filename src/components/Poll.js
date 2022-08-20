import React from 'react';
import styles from '../style/poll.module.scss';
import IconsPoll from './IconsPoll';
import Points from './Points';
import FeedBackText from './FeedBackText';

const Poll = () => {

    return (
        <div>
            <form onSubmit={()=>alert("Your feedback has been recorded.")}>
                <div className={styles.container}>
                    <div className={styles.texts}>
                        <h1>Dear user</h1>
                        <p>Please participate in the survey to improve the quality of the services provided to you</p>
                    </div>

                    <IconsPoll/>
                    <Points/>
                    <FeedBackText/>
                    
                    <button type='submit'>send</button>
                </div>
            </form>
        </div>
    );
};

export default Poll;