import axios from "axios";
import React, { useState, useEffect } from "react"

import Header from "./Header"
import VerseList from "./VerseList";
import InputPrime from "./InputPrime";


const RootContainer = props => {

    // state
    const [models, setModels] = useState([])
    const [forms, setForms] = useState([])
    const [verses, setVerses] = useState([])

    // menu state
    const [model, setModel] = useState()
    const [form, setForm] = useState()
    const [prime, setPrime] = useState()

    // init
    useEffect(() => { loadModels() }, [])
    useEffect(() => { loadForms() }, [])

    function loadModels() {
        axios.get('http://api.auto-prophet.ml:8080/models').then(res => {
            console.log(res.data)

            // set model list and default
            setModels(res.data);
            setModel(res.data[0].id)
      });
    }

    function loadForms() {
        axios.get('http://api.auto-prophet.ml:8080/forms').then(res => {
            console.log(res.data)

            // set form list and default
            setForms(res.data);
            setForm(res.data[0].id)
      });
    }

    const sendRequest = () => {
        axios.post('http://api.auto-prophet.ml:8080/generate', {
            model: model,
            form: form,
            prime: prime
        }).then(res => {
            console.log(res.data['verses'])
            setVerses(res.data['verses']);
        });
    };

    return (
        <div className="container">
            <Header />
            <InputPrime sendRequest={sendRequest}
                        models={models} setModel={setModel}
                        forms={forms} setForm={setForm}
                        prime={prime} setPrime={setPrime}
            />
            <VerseList verses={verses} />
        </div>
    )
}
export default RootContainer
