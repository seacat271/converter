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
                    <span>{UAHUSD}</span>
                    <span>USD</span>
                </div>
                <div>
                    <span>{UAHEUR}</span>
                    <span>EUR</span>
                </div>
            </div>
     
        </header>
    )
}