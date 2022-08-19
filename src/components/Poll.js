import React , {useState} from 'react';
import styles from '../style/poll.module.scss';

const Poll = () => {

    const [ quality , setQuality ] = useState("");

    // Entry of the quality level into the state - Five out of five
    const qualityHandler = e =>{
        let target = e.target;

        if(target.classList.contains("fa-grin-hearts")){
            setQuality("5");
        }else if(target.classList.contains("fa-smile-beam")){
            setQuality("4");
        }else if(target.classList.contains("fa-meh")){
            setQuality("3");
        }else if(target.classList.contains("fa-frown")){
            setQuality("2");
        }else if(target.classList.contains("fa-angry")){
            setQuality("1");
        }
    };  

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

                        <div className={styles.icons} onClick={qualityHandler}>
                            <i id={quality==="5" ? styles.green : null } className="far fa-grin-hearts"></i>
                            <i id={quality==="4" ? styles.greenyellow : null } className="far fa-smile-beam"></i>
                            <i id={quality==="3" ? styles.black : null } className="far fa-meh"></i>
                            <i id={quality==="2" ? styles.orange : null } className="far fa-frown"></i>
                            <i id={quality==="1" ? styles.red : null } className="far fa-angry"></i>
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