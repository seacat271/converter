import { Header } from './components/Header/Header';
import {MainBody} from './components/MainPage/MainPage';
import './App.css';

import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "3ZAJRdLdELwDgAdIk1W7T3DHNM3aSmoS"
const BASE_URL = "https://api.apilayer.com"

const example = {
    "success": true,
    "timestamp": 1665754684,
    "source": "UAH",
    "quotes": {
        "UAHUSD": 0.027066,
        "UAHEUR": 0.027761
    }
}


    
function App() {

  const [currency, setCurrency] = useState(example);

    var myHeaders = new Headers();
    myHeaders.append("apikey", API_KEY);
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    useEffect(() => {
        // fetch("https://api.apilayer.com/currency_data/live?source=UAH&currencies=USD,EUR", requestOptions)
        // .then(response => response.text())
        // .then(result => setCurrency(result))
        // .catch(error => console.log('error', error));
    })

  return (
    <div className="App">
        <Header currency={currency}/>
        <MainBody currency={currency}/>
    </div>
  );
}

export default App;
