import { useState } from "react";

export default function SearchBox({ value, setValue }) {

    // const [value, setValue] = useState('');

    const handleInputChange = event => {
        setValue(event.target.value);
    }

    return (
        <div className="search-box">

            <input type="text" value={ value } onInput={ handleInputChange } />

        </div>
    )
}