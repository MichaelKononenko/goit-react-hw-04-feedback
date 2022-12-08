import { OptionsWrapper } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const optionsArray = Object.keys(options);
    console.log(optionsArray);
    return (
        <OptionsWrapper style={{marginBottom: "20px"}}>
        {optionsArray.map(item => <button type="button" style={{ padding:"5px", fontSize:"20px", borderRadius:"10px"}}>{item}</button>)
        }
        </OptionsWrapper>
    )
}