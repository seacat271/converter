import { Loader } from "../../helpers/Loader"
import { SpanTitle } from "../AppBar/AppBar.styled"
export const CurrencyTable = ({value}) => {
    const currentValue = (1/value).toFixed(4)
    return (
    <SpanTitle>{value ? currentValue : <Loader/>}</SpanTitle>
    )
}