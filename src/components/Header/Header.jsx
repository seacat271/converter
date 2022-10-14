export const Header = ({currency}) => {


    const { quotes :{UAHUSD, UAHEUR }, timestamp} = currency; 
    return (
        <header>
            <div>
                <div>
                    <span>SVG</span>
                    <span>BEST CURRENCY</span>
                </div>
          <div>
            <span>exchange rate as of</span>
            <span>{timestamp}</span>
          </div>
            <div>
                    <span>USD</span>
                    <span>{1/UAHUSD}</span>
                </div>
                <div>
                    <span>EUR</span>
                    <span>{1/UAHEUR}</span>
                </div>
            </div>
     
        </header>
    )
}