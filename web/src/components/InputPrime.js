import React, {useEffect, useState} from "react"

const InputPrime = props => {

    const onPrimeChange = e => {
        console.log(e)
        props.setPrime(e.target.value)
    }

    const onModelChange = e => {
        console.log(e)
        props.setModel(e.target.value)
    }

    const onFormChange = e => {
        console.log(e)
        props.setForm(e.target.value)
    }

    const handleKey = e => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        // verify value
        if (props.prime.trim()) {

            // fire handler to add verse
            props.sendRequest(props.model, props.form, props.prime);

            // clean textbox
            props.setPrime('')
        }
    };

    return (
        <div className="menuContainer">
            <div>
                <select className="modelSelect" onChange={onModelChange}>
                    {
                        props.models.map(m => (<option value={m.id}>{m.name}</option>))
                    }
                </select>
                <select className="modelSelect" style={{"margin-right": "15px"}} onChange={onFormChange}>
                    {
                        props.forms.map(m => (<option value={m.id}>{m.name}</option>))
                    }
                </select>
            </div>
            <form onSubmit={handleSubmit} className="formContainer">
                <input type="text"
                       className="input-text"
                       placeholder="ממה להתחיל?"
                       value={props.prime}
                       onChange={onPrimeChange}
                       onKeyDown={handleKey} />
                <button className="input-submit">התנבא</button>
            </form>
        </div>
    )
}
export default InputPrime
