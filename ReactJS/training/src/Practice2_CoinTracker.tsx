import React, { useState, useEffect } from "react"

interface USD {
    price: number,
}

interface Quotes {
    USD: USD
}

interface Coins {
    id: string,
    name: string,
    symbol: string,
    quotes: Quotes
}

function CoinTracker() {
    const [loading, setLoading] = useState<boolean>(true);
    const [coins, setCoins] = useState<Array<Coins>>([])
    const [price, setPrice] = useState<number>(0)
    const [index, setIndex] = useState<string>("None")
    const [symbol, setSymbol] = useState<string>("")
    const [seedMony, setSeedMony] = useState<number>(0)

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("onChangeSelect")
        setIndex(event.currentTarget.value)
    }
    const onChangeHaving = (event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log("onChangeSeedMony")
        setSeedMony(parseFloat(event.target.value))
    }

    useEffect(() => {
        console.log("useEffect change index")
        if (!loading) {
            setPrice(coins[parseInt(index)].quotes.USD.price)
            setSymbol(coins[parseInt(index)].symbol)
        }
    }, [index])

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
            .then((json) => {
                console.log(json)
                setCoins(json)
                setLoading(false)
            }) //요청후 결과 가져옴
    }, [])


    return (
        <div>
            <h1>The Coins!! ({coins.length})</h1>
            {loading ?
                <><strong>Loading...</strong><hr /></>
                : <><select value={index} onChange={onChangeSelect}>
                    <option value="None">선택해주세요</option>
                    {coins.map((coin, index) => <option key={coin.id} value={index}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
                </select><hr /><div>
                        <label>Having: </label>
                        <input type="number" placeholder="시드머니(단위 $)" onChange={onChangeHaving} disabled={index === "None"? true : false}></input>
                    </div><div>
                        <label>You can Get: {seedMony/price} {symbol}</label>
                    </div></>
            }
        </div>
    )
}

export {
    CoinTracker,
}