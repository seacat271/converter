import {useState } from "react";
import { Container, Title, MainBox, Input, Select, ConvertButton } from "./MainPage.styled";
import { BiRefresh } from "react-icons/bi";

export const MainBody = ({currencyUSD, currencyEUR}) => {
    const [quantity1, setQuantity1] = useState("");
    const [quantity2, setQuantity2] = useState("");
    const [currency1, setCurrency1] = useState("UAH");
    const [currency2, setCurrency2] = useState("UAH");

    function changeQuantity (quantity) {
        return (quantity*index(currency1+currency2)).toFixed(2)
        }
    
    function changeIndex (quantity, string) {
            return (quantity * index(string)).toFixed(2)
            }

    function reverseChangeQuantity (quantity) {
        return (quantity*index(currency2+currency1)).toFixed(2)
    }

const index = string => {
    switch (string) {
        case "UAHUSD":
            return currencyUSD;
        case "UAHEUR":
            return currencyEUR;
        case "USDUAH":
            return 1/currencyUSD;
        case "EURUAH":
            return 1/currencyEUR;
        case "USDEUR":
            return currencyEUR/currencyUSD;
        case "EURUSD":
            return currencyUSD/currencyEUR;
        default:
            return 1;
    }
} ;

    const handleInputChange = event => {
        const { name, value } = event.currentTarget;
       
        switch (name) {
          case "quantity1":
            setQuantity1(value);
            setQuantity2(changeQuantity(value));
            break;
          case "quantity2":
            setQuantity2(value);
            setQuantity1(reverseChangeQuantity(value));
            break;
          default:
            return;
      }
    }

    const handleSelectChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case "currency1":
            setCurrency1(value);
            const index1 = value + currency2
            setQuantity2(changeIndex(quantity1, index1))
            break;

            case "currency2":
            setCurrency2(value);
            const index2 = value + currency1; 
            setQuantity1(changeIndex(quantity2, index2))
            break;
          default:
            return;
      }
    }

const handleClick = () => {
    setQuantity1(quantity2);
    setQuantity2(quantity1);
    setCurrency1(currency2);
    setCurrency2(currency1);
}

    return (
        <Container>
            <Title>Currency exchange</Title>
            <MainBox> 
                <div>
                    <form>
                    <Input name="quantity1" type="number" placeholder="Enter quantity" value={quantity1} onChange={handleInputChange}/>
                    <Select name="currency1" size="1" onChange={handleSelectChange} value = {currency1}>
                        <option value="UAH" defaultValue={true}>UAH</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </Select>
                    </form>
                </div>
                <ConvertButton type = "button" onClick={handleClick} ><BiRefresh size={90} fill= "currentColor"/></ConvertButton>
                <div>
                    <form>
                    <Input name="quantity2" type="number"  placeholder="Enter quantity" value={quantity2} onChange={handleInputChange}/>
                    <Select name="currency2" size="1" onChange={handleSelectChange} value = {currency2}>
                        <option value="UAH" defaultValue={true}>UAH</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </Select>
                    </form>
                </div>
            </MainBox>

        </Container>
    )
}

