import React, { useEffect, useState, Fragment } from 'react'

function Conversion() {

    // REST API END POINT
    let URL = 'https://api.exchangeratesapi.io/latest'
    
    const [currencyOptions, setCurrencyOptions] = useState([]) // Currency Options
    const [fromCurrency, setFromCurrency] = useState() // From Currency State
    const [toCurrency, setToCurrency] = useState() //To Currency State
    const [initialAmount, setInitialAmount] = useState(1)  //Initial Amount by default 1
    const [excRate, setExcRate] = useState() // Exchange Rate
    const [amtFromCurrency, setAmtFromCurrency] = useState(true) // By default amount in from currency is true

    //OnChange Handler for select values
    const onChangeFromCurrency = (e) => setFromCurrency(e.target.value)
    const onChangeToCurrency = (e) => setToCurrency(e.target.value)
        
    // Conditions for switching between From / To input fields to change currency values
    let fromAmount , toAmount

    if(amtFromCurrency){
        fromAmount = initialAmount
        toAmount = initialAmount * excRate
    } else {
        toAmount = initialAmount
        fromAmount = initialAmount / excRate
    }

    // console.log("LLLLLLLKKKKKKK", toCurrency);

    //Service to fetch data from currency converter API
    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(resData => {
            console.log("RESPONSE", resData.base)
            const initialCurrency = Object.keys(resData.rates)[0]
            setCurrencyOptions([resData.base, ...Object.keys(resData.rates)])
            setFromCurrency(resData.base)
            setToCurrency(initialCurrency)
            setExcRate(resData.rates[initialCurrency])
        });

    }, [])

    //Service to update currency value while changing options in between
    useEffect(() => {
        if(fromCurrency != null && toCurrency != null){
            fetch(`${URL}?base=${fromCurrency}&symbols=${toCurrency}`)
            .then(response => response.json())
            .then(resData => setExcRate(resData.rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency])

    //OnChange Handler from Amount input field
    const onChangeFromAmt = (e) => {
        setInitialAmount(e.target.value)
        setAmtFromCurrency(true)
    }

    //OnChange Handler To Amount input field
    const onChangeToAmt = (e) => {
        setInitialAmount(e.target.value)
        setAmtFromCurrency(false)
    }

    return (
        <Fragment>
            <div className="container justify-content-center">
                <div className="card" align="right">
                    <div className="row">
                        <label htmlFor="currency from">Currency From</label>
                        <input type="number" value={fromAmount.toString()} onChange={onChangeFromAmt}/>
                        <select value={fromCurrency}  onChange={onChangeFromCurrency}>
                            {
                                currencyOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                                ))
                            }
                        </select>
                    </div>
                     <img src={'../assets/arrows-couple-interface-symbol.png'} alt="arrows"/>
                    <div className="row">
                        <label htmlFor="currency to">Currency To</label>
                        <input type="number" value={toAmount.toString()} onChange={onChangeToAmt}/>
                        <select value={toCurrency} onChange={onChangeToCurrency}>
                            {
                                currencyOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Conversion



