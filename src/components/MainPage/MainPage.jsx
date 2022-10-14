export const MainBody = () => {
    return (
        <main>
            <div> 
                <div>
                    <form>
                    <input type="number" placeholder="Enter quantity"/>
                    <select name="currency1" size="1">
                        <option value="uah" selected="selected">UAH</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>
                    </form>
                </div>
                {/* <button>Convert</button> */}
                <div>
                    <form>
                    <input type="number"  placeholder="Enter quantity"/>
                    <select name="currency2" size="1">
                        <option value="uah" selected="selected">UAH</option>
                        <option value="usd">USD</option>
                        <option value="eur#">EUR</option>
                    </select>
                    </form>
                </div>
            </div>

        </main>
    )
}