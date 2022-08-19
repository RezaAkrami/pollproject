import React from 'react';
import styles from '../style/poll.module.scss';

const Poll = () => {
    return (
        <div>
            <form action="">
                <div className={styles.container}>
                    <div className={styles.texts}>
                        <h1>Dear user</h1>
                        <p>Please participate in the survey to improve the quality of the services provided to you</p>
                    </div>

                    <div className={styles.poll}>

                        <h4>Click on the image you want</h4>

                        <div className={styles.icons}>
                            <i className="far fa-grin-hearts"></i>
                            <i className="far fa-smile-beam"></i>
                            <i className="far fa-meh"></i>
                            <i className="far fa-frown"></i>
                            <i className="far fa-angry"></i>
                        </div>

                        <div className={styles.points}>
                            <div className={styles.btn}>
                                <span id={styles.positive}>Positive</span>
                                <span id={styles.negative}>Negative</span>
                            </div>

                            <div className={styles.questions}>
                                <span>reza</span>
                                <span>reza</span>
                                <span>reza</span>
                                <span>reza</span>
                                <span>reza</span>
                                <span>reza</span>
                                <span>reza</span>
                                <span>reza</span>
                            </div>

                        </div>

                        <textarea name="text" rows="10" placeholder='Enter your text ...'></textarea>
                        <br />
                        <button type='submit'>send</button>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Poll;