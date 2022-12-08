import { OptionsWrapper } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const optionsArray = Object.keys(options);
    return (
        <OptionsWrapper style={{marginBottom: "20px"}}>
        {optionsArray.map(item => {
            return(<button type="button" key={item} onClick={() => onLeaveFeedback(item)} style={{ padding:"5px", fontSize:"20px", borderRadius:"10px"}}>{item}</button>)})
        }
        </OptionsWrapper>
    )
}