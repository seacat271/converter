import { Header } from './components/Header/Header';
import {MainBody} from './components/MainPage/MainPage';
import './App.css';
import { useEffect, useState } from "react";
import {FetchCurrency} from "./helpers/FetchCurrency"


// const example = {
//     "success": true,
//     "timestamp": 1665754684,
//     "source": "UAH",
//     "quotes": {
//         "UAHUSD": 0.027066,
//         "UAHEUR": 0.027761
//     }
// }


    
function App() {

  const [timestamp, setTimestamp] = useState(0);
  const [currencyUSD, setCurrencyUSD] = useState(0);
  const [currencyEUR, setCurrencyEUR] = useState(0);

    useEffect( () => {
       FetchCurrency()
       .then(({data}) => {
          setTimestamp(data.timestamp); 
          setCurrencyUSD(data.quotes.UAHUSD)
          setCurrencyEUR(data.quotes.UAHEUR)
  
       })
       .catch (error => console.log('error', error)) 

    }, [])




  return (
    <div className="App">
        <Header currencyUSD={currencyUSD} currencyEUR={currencyEUR} timestamp={timestamp}/>
        <MainBody currencyUSD={currencyUSD} currencyEUR={currencyEUR}/>
    </div>
  );
}

export default App;
