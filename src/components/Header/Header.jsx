import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "3ZAJRdLdELwDgAdIk1W7T3DHNM3aSmoS"


export const Header = () => {
    const {currency, setCurrency} = useState({});

    var myHeaders = new Headers();
    myHeaders.append("apikey", "3ZAJRdLdELwDgAdIk1W7T3DHNM3aSmoS");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    



    useEffect(() => {
        // fetch("https://api.apilayer.com/currency_data/live?source=UAH&currencies=USD,EUR", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
    })

       
        

    return (
        <header>
            <div>
                <div>
                    <span>SVG</span>
                    <span>BEST CURRENCY</span>
                </div>
          <div>
            <div>
                    <span>0.00</span>
                    <span>USD</span>
                </div>
                <div>
                    <span>0.00</span>
                    <span>EUR</span>
                </div>
            </div>
            </div>
        </header>
    )
}