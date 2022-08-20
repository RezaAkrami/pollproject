import React , {useState} from 'react';
import styles from '../style/IconsPoll.module.scss'

const IconsPoll = () => {

    // states
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
        <div className={styles.poll}>
            <h4>Click on the image you want</h4>

            <div className={styles.icons} onClick={qualityHandler}>
                <i id={quality==="5" ? styles.green : null } className="far fa-grin-hearts"></i>
                <i id={quality==="4" ? styles.greenyellow : null } className="far fa-smile-beam"></i>
                <i id={quality==="3" ? styles.black : null } className="far fa-meh"></i>
                <i id={quality==="2" ? styles.orange : null } className="far fa-frown"></i>
                <i id={quality==="1" ? styles.red : null } className="far fa-angry"></i>
            </div>

        </div>
    );
};

export default IconsPoll;