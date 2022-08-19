import React , {useState,useRef ,useEffect , useReducer} from 'react';
import styles from '../style/poll.module.scss';

const initialState = {

    // positive points :
    fastResponse : false,
    expertAnswer : false,
    goodPrice : false,
    goodBehavior : false,
    qualityService : false,
    chronology : false,

    //negative points :
    slowResponse : false,
    unexpertAnswer : false,
    badPrice : false,
    badBehavior : false,
    badService : false,
    careless : false,
}

const reducer = (state,action)=>{

    switch(action){
        // positive points :
        case "fastResponse" :
            return {...state, fastResponse : !state.fastResponse};
        case "expertAnswer" :
            return {...state, expertAnswer : !state.expertAnswer};
        case "goodPrice" :
            return {...state, goodPrice : !state.goodPrice};
        case "goodBehavior" :
            return {...state, goodBehavior : !state.goodBehavior};
        case "qualityService" :
            return {...state, qualityService : !state.qualityService};
        case "chronology" :
            return {...state, chronology : !state.chronology};

        //negative points :
        case "slowResponse" :
            return {...state, slowResponse : !state.slowResponse};
        case "unexpertAnswer" :
            return {...state, unexpertAnswer : !state.unexpertAnswer};
        case "badPrice" :
            return {...state, badPrice : !state.badPrice};
        case "badBehavior" :
            return {...state, badBehavior : !state.badBehavior};
        case "badService" :
            return {...state, badService : !state.badService};
        case "careless" :
            return {...state, careless : !state.careless};
        

        default : return state;
    }
}

const Poll = () => {

    // states
    const [ quality , setQuality ] = useState("");
    const [toggle, setToggle] = useState(true);
    const [textArea, setTextArea] = useState("");

    //refs
    const positive = useRef(null);
    const negative = useRef(null);

    //reducer
    const [ data , dispatch ] = useReducer(reducer , initialState);

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

    // Change toggle style
    useEffect(()=>{
        if(toggle){
            toggleStyle(positive,"green",negative);
        }else{
            toggleStyle(negative,"red",positive);
        }
    } , [toggle]);

    function toggleStyle(enableState,color,disableState) {
        enableState.current.style.border = `2px solid ${color}`;
        disableState.current.style.border = "1px solid #c1c6cc";
    }

    // reducer destructur
    const {fastResponse,expertAnswer,goodPrice,goodBehavior,qualityService,chronology,slowResponse,unexpertAnswer,badPrice,badBehavior,badService,careless} = data;

    return (
        <div>
            <form onSubmit={()=>alert("Your feedback has been recorded.")}>
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
                                <span className={styles.positive} ref={positive} onClick={()=>setToggle(true)}>Positive</span>
                                <span className={styles.negative} ref={negative} onClick={()=>setToggle(false)}>Negative</span>
                            </div>

                            <div className={styles.questions}>
                                {toggle 
                                ? 
                                    <>
                                        <span onClick={()=>dispatch("fastResponse")} className={fastResponse ? styles.active : null }>Fast Response</span>

                                        <span onClick={()=>dispatch("expertAnswer")} className={expertAnswer ? styles.active : null }>Expert Answer</span>

                                        <span onClick={()=>dispatch("goodPrice")} className={goodPrice ? styles.active : null }>Good Price</span>

                                        <span onClick={()=>dispatch("goodBehavior")} className={goodBehavior ? styles.active : null }>Good Behavior</span>

                                        <span onClick={()=>dispatch("qualityService")} className={qualityService ? styles.active : null }>Quality Service</span>

                                        <span onClick={()=>dispatch("chronology")} className={chronology ? styles.active : null }>Chronology</span>
                                    </>
                                :
                                    <>
                                        <span onClick={()=>dispatch("slowResponse")} className={slowResponse ? styles.inactive : null }>Slow Response</span>

                                        <span onClick={()=>dispatch("unexpertAnswer")} className={unexpertAnswer ? styles.inactive : null }>Unexpert Answer</span>
                                        
                                        <span onClick={()=>dispatch("badPrice")} className={badPrice ? styles.inactive : null }>Bad Price</span>

                                        <span onClick={()=>dispatch("badBehavior")} className={badBehavior ? styles.inactive : null }>Bad Behavior</span>

                                        <span onClick={()=>dispatch("badService")} className={badService ? styles.inactive : null }>Bad Service</span>

                                        <span onClick={()=>dispatch("careless")} className={careless ? styles.inactive : null }>Careless</span>
                                    </>
                                }

                                
                                
                            </div>

                        </div>

                        <textarea name="text" rows="10" placeholder='Enter your text ...' value={textArea} onChange={(e)=> setTextArea(e.target.value)}></textarea>
                        <br />
                        <button type='submit'>send</button>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Poll;