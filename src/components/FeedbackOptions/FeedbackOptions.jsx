import css from './FeedbackOptions.module.css'


const FeedbackOptions = ({onIncrementGood, onIncremetNeutral,onIncrementBad}) =>{
    return (
        <div>
            <button type = 'button' className ={css.button} onClick = {onIncrementGood}>Good</button>
            <button type = 'button' className ={css.button} onClick = {onIncremetNeutral}>Neutral</button>
            <button type = 'button' className ={css.button} onClick = {onIncrementBad}>Bad</button>
        </div>
    )
}

export default FeedbackOptions;