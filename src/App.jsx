import { Header } from './components/AppBar/AppBar';
import {MainBody} from './components/MainPage/MainPage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import {FetchCurrency} from "./helpers/FetchCurrency"
import { greeting } from './helpers/notify';


function App() {

  const [timestamp, setTimestamp] = useState(0);
  const [currencyUSD, setCurrencyUSD] = useState(0);
  const [currencyEUR, setCurrencyEUR] = useState(0);

  const updateData = data => {
    setTimestamp(data.timestamp); 
    setCurrencyUSD(data.quotes.UAHUSD)
    setCurrencyEUR(data.quotes.UAHEUR)
  }
    useEffect( () => {
      greeting()
       FetchCurrency(updateData)
    }, [])

    const handleRefresh = () => {
      FetchCurrency(updateData)
    }


  return (
    <>
        <Header currencyUSD={currencyUSD} currencyEUR={currencyEUR} timestamp={timestamp} handleRefresh = {handleRefresh}/>
        <MainBody currencyUSD={currencyUSD} currencyEUR={currencyEUR} />
        <ToastContainer/>
    </>
  );
}

export default App;
