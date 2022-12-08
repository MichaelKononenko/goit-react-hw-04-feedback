import { FeedbackButton, OptionsWrapper } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const optionsArray = Object.keys(options);
    return (
        <OptionsWrapper style={{marginBottom: "20px"}}>
        {optionsArray.map(item => {
            return(<FeedbackButton type="button" key={item} onClick={() => onLeaveFeedback(item)} >{item}</FeedbackButton>)})
        }
        </OptionsWrapper>
    )
}