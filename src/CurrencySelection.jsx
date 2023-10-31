import { useContext, useEffect, useState } from "react"
import CurrencyContext from "./CurrencyContext";
import context from "./Context";

export default function CurrencySelection() {

    // const { currency, setCurrency } = useContext(CurrencyContext)

    const { state: { currency }, dispatch } = useContext(context);

    // const { currency } = state;

    const [currencies, setCurrencies] = useState([]);
    // const [currency, setCurrency] = useState(currencyFromContext);
    const [exchangeRate, setExchangeRate] = useState(1);

    const handleCurrencyChange = (event) => {
        console.log(event.target.value);
        // setCurrency(event.target.value);
        dispatch({
            type: 'currency/set',
            payload: event.target.value
        })
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