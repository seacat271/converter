import axios from "axios";
const API_KEY = "3Gjef32inZbd2XheZ0TOaNlnZSq1RKcG"
// "3ZAJRdLdELwDgAdIk1W7T3DHNM3aSmoS"
const BASE_URL = "https://api.apilayer.com"



axios.defaults.baseURL =BASE_URL;
axios.defaults.headers.common.apikey = API_KEY;

const requestConfig = {
  params: {
    redirect: 'follow',
    source: "UAH",
    currencies: "USD,EUR"
  },
};

export const FetchCurrency = () => axios.get("currency_data/live", requestConfig);