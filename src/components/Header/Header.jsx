

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
        <header>
            <div>
                <div>
                    <span>SVG</span>
                    <span>BEST CURRENCY</span>
                </div>
          <div>
            <span>exchange rate as of</span>
            <span>{currencyTime}</span>
            <button type="submit" onClick={handleRefresh}>Refresh</button>
          </div>
            <div>
                    <span>USD</span>
                    <span>{1/currencyUSD}</span>
                </div>
                <div>
                    <span>EUR</span>
                    <span>{1/currencyEUR}</span>
                </div>
            </div>
     
        </header>
    )
}