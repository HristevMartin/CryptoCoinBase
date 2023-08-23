import './CryptoCoin.css'

export const CryptoCoin = ({items}) => {
    console.log('rerendering');

    let something = items.price_change_percentage_24h

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={items.image} alt="crypto" />
                    <h1>{items.name}</h1>
                    <p className="coin-symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price"> Rs.{items.current_price} </p>
                    {
                        something < 0 ? (
                            <p className="coin-percent red">{something.toFixed(2)}%</p>
                        )
                        :
                        (
                            <p className="coin-percent green">{something.toFixed(2)}%</p>
                        )
                    }
                    <p className="coin-marketcap">
                        Mkt Cap: Rs.{items.market_cap.toLocaleString()}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default CryptoCoin;