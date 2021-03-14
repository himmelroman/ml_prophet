import React, {useEffect, useState} from "react"

const InputPrime = props => {

    const onPrimeChange = e => {
        props.setPrime(e.target.value)
    }

    const onModelChange = e => {
        props.setModel(e.target.value)
    }

    const onFormChange = e => {
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
        if (props.prime && props.prime.trim()) {

            // fire handler to add verse
            props.sendRequest(props.model, props.form, props.prime);

            // clean textbox
            props.setPrime('')
        }
        else {
            alert('חייבים לתת לנביא אוכל נפש!\n' +
                'אפשר לכתוב ״א״ אם אין רעיון')
        }
    };

    return (
        <div className="menuContainer">
            <div className="optionContainer">
                <div className="inputTitle">נוסח:</div>
                <div className="inputContainer">
                    <select className="minorSelect" onChange={onModelChange}>
                        {
                            props.models.map(m => (<option value={m.id}>{m.name}</option>))
                        }
                    </select>
                </div>
            </div>
            <div className="optionContainer">
                <div className="inputTitle">צורה:</div>
                <div className="inputContainer">
                    <select className="minorSelect" onChange={onFormChange}>
                        {
                            props.forms.map(m => (<option value={m.id}>{m.name}</option>))
                        }
                    </select>
                </div>
            </div>
            <div className="mainInputContainer">
                <form className="mainInputForm" onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <input type="text"
                               className="input-text"
                               placeholder="ממה להתחיל?"
                               value={props.prime}
                               onChange={onPrimeChange}
                               onKeyDown={handleKey} />
                    </div>
                    <div className="buttonContainer">
                        <button className="input-submit">התנבא</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default InputPrime
