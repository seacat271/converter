import { useEffect, useState } from "react";

export const MainBody = ({currency}) => {
    const [quantity1, setQuantity1] = useState("");
    const [quantity2, setQuantity2] = useState("");
    const [currency1, setCurrency1] = useState("UAH");
    const [currency2, setCurrency2] = useState("UAH");

    const { quotes :{UAHUSD, UAHEUR }, timestamp} = currency; 






    function changeQuantity (quantity) {
        return quantity*index(currency1+currency2)
        
        }
    
    function changeIndex (quantity, string) {
            return quantity * index(string)
            }

    function reverseChangeQuantity (quantity) {
        return quantity*index(currency2+currency1)
    }


const index = (string) => {
    switch (string) {
        case "UAHUAH":
        case "USDUSD":
        case "EUREUR":
            return 1;
        case "UAHUSD":
            return UAHUSD;
        case "UAHEUR":
            return UAHEUR;
        case "USDUAH":
            return 1/UAHUSD;
        case "EURUAH":
            return 1/UAHEUR;
        case "USDEUR":
            return UAHUSD/UAHEUR;
        case "EURUSD":
            return UAHEUR/UAHUSD;
        default:
            return;
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
            const index2 = currency1 + value 
            setQuantity1(changeIndex(quantity2, index2))


         
            break;
          default:
            return;
      }
    }




    return (
        <main>
            <div> 
                <div>
                    <form>
                    <input name="quantity1" type="number" placeholder="Enter quantity" value={quantity1} onChange={handleInputChange}/>
                    <select name="currency1" size="1" onChange={handleSelectChange}>
                        <option value="UAH" defaultValue={true}>UAH</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    </form>
                </div>
                <button>Convert</button>
                <div>
                    <form>
                    <input name="quantity2" type="number"  placeholder="Enter quantity" value={quantity2} onChange={handleInputChange}/>
                    <select name="currency2" size="1" onChange={handleSelectChange}>
                        <option value="UAH" defaultValue={true}>UAH</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    </form>
                </div>
            </div>

        </main>
    )
}