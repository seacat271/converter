import axios from "axios";
import {API_KEY, BASE_URL} from './constants'

axios.defaults.baseURL =BASE_URL;
axios.defaults.headers.common.apikey = API_KEY;

const requestConfig = {
  params: {
    redirect: 'follow',
    source: "UAH",
    currencies: "USD,EUR"
  },
};

export const FetchCurrency = dataStateUpdate => axios.get("currency_data/live", requestConfig)
.then(({data}) => {
  dataStateUpdate(data)
 })
 .catch (error => console.log('error', error)) ;