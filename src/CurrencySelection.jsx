import { useEffect, useState } from "react"

export default function CurrencySelection() {

    const [currencies, setCurrencies] = useState([]);
    const [currency, setCurrency] = useState('EUR');
    const [exchangeRate, setExchangeRate] = useState(1);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    }

    const loadExchangeRate = async (currency) => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency='+currency);
        const data = await response.json();

        setExchangeRate(data.rate);
    }

    const loadCurrencies = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php');
        const data = await response.json();

        setCurrencies(data);
    }

    const seconds = Math.floor((new Date).getTime() / 1000);

    useEffect(
        () => {
            loadExchangeRate(currency);
        },
        [
            currency
        ]
    )

    useEffect(
        () => {
            // this will happen whenever seconds change
        }, [
            seconds
        ]
    )

    useEffect(() => {
        loadCurrencies();
    }, []);

    return (
        <>
            <select
                name="currency"
                value={ currency }
                onChange={ handleCurrencyChange }
            >
                {
                    currencies.map(currency => (
                        <option key={ currency } value={ currency }>{ currency }</option>
                    ))
                }
            </select>

            <br />

            Exchange rate: { exchangeRate } { currency } / 1 EUR
        </>
    )
}