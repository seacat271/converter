import {AppBar, Container, SpanRight, Box, Logo, RefreshButton, SpanTitle, SpanTime} from "./AppBar.styled"
import {BsCurrencyExchange} from 'react-icons/bs';
import {IoLogoUsd, IoLogoEuro, IoMdRefresh} from 'react-icons/io';
import {Loader} from '../../helpers/Loader'
import { CurrencyTable } from "../CurrencyTable/CurrencyTable";


function timeConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const time = hour + ':' + min + ' ' + date + ' ' + month + ' ' + year  ;
    return time;
  }


export const Header = ({currencyUSD, currencyEUR, timestamp, handleRefresh}) => {
    // if (!currency) return 
  


    const currencyTime = timeConverter(timestamp)
    return (
        <AppBar>
            <Container>
                <Box>
                    <SpanRight>
                    <BsCurrencyExchange size={32} fill="#ffffff" />
                    </SpanRight>
                    
                    <Logo>BEST CURRENCY</Logo>
                </Box>
                <Box>
                    <SpanRight><IoLogoUsd size={32} fill="#ffffff"/></SpanRight>
                    <CurrencyTable value ={currencyUSD}/>
                </Box>
                <Box>
                    <SpanRight><IoLogoEuro size={32} fill="#ffffff"/></SpanRight>
                    <CurrencyTable value ={currencyEUR} />
                </Box>
          <Box>
            <SpanRight>exchange rate as of:</SpanRight>
            <SpanTime>{timestamp ? currencyTime : <Loader/>}</SpanTime>
            <RefreshButton type="button" onClick={handleRefresh}>
                <IoMdRefresh size={32} fill="#80b5f2"/>
                </RefreshButton>
          </Box>
            </Container>
     
        </AppBar>
    )
}