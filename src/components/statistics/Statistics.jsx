import { StatisticsItem } from "./Statistics.styled"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div style={{margin: 0, textAlign: "start", fontSize: "20px"}}>
            <StatisticsItem>Good: {good}</StatisticsItem>
            <StatisticsItem>Neutral: {neutral}</StatisticsItem>
            <StatisticsItem>Bad: {bad}</StatisticsItem>
            <StatisticsItem>Total: {total}</StatisticsItem>
            <StatisticsItem>Positive feedback: {positivePercentage}</StatisticsItem>
        </div>
    )
}