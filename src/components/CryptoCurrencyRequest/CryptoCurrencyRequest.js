import { useEffect } from "react"
import { useState } from "react"
import CryptoCoin from "./CryptoCoin"
import './CryptoCoin.css'

export const CryptoCurrencyRequest = () => {
    let [cryptoCurrency, setCryptoCurrency] = useState([])

    let [search, setSearch] = useState('')



    useEffect(() => {
        let request = async () => {
            let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            if (response.ok) {
                let data = await response.json()
                setCryptoCurrency(data)
            } else {
                console.log('error occurred while fetching the data')
            }
        }
        request()
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const coinsFilter = cryptoCurrency.filter((item) => 
        item.id.toLowerCase().includes(search.toLowerCase())
    )

    console.log('search is ', search);

    return (

        <div className="crypto-app">
            <div className="coin-search">
                <form>
                    <input type="text" onChange={handleChange} placeholder="Search the Coin Name" className="coin-input" />
                </form>
            </div>

            {
                coinsFilter.map((item, index) => {
                    return <CryptoCoin 
                        key={index}
                        items = {item}
                    />
                })
            }
        </div>

    )
}

export default CryptoCurrencyRequest;