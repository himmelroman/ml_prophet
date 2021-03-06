import axios from "axios";
import React, { useState, useEffect } from "react"

import { getAPIEndpoint } from "../utils/env"

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
        axios.get(
            getAPIEndpoint() + "/models"
        ).then(res => {

            // set model list and default
            setModels(res.data);
            setModel(res.data[0].id)
      });
    }

    function loadForms() {
        axios.get(
            getAPIEndpoint() + "/forms"
        ).then(res => {

            // set form list and default
            setForms(res.data);
            setForm(res.data[0].id)
      });
    }

    const sendRequest = () => {
        axios.post(
            getAPIEndpoint() + "/generate",
            {
                model: model,
                form: form,
                prime: prime
            }
        ).then(res => {

            // set verses
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
