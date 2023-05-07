import React, {useState} from 'react';
import Resultats from './Resultats';


const Prediction = ({hostname}) => {


    const [disabled, setDisabled] = useState(true);
    const [text, setText] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
        if(text === '') {
           setDisabled(true);
        }else{
            setDisabled(false);
        }
    }

    const getPrediction = async () => {
        let obj = {
            "description": text
        }

        console.log(JSON.stringify(obj));

        const query = await fetch("https://spudster.madagascar.webcup.hodi.host/webcupbackend/api/predict", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

        return query;
    }

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        const res = getPrediction();
        res
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setPrediction(data);
            }).catch((err) => console.log(err));
    }

    return (
        <main className='prediction'>
            <section id='form'>
                <h2>Obtenez des prédiction prémonitoires personalisées grâce à Onyrix
                </h2>
                <form action="">
                    <h3>Décrivez votre rêve</h3>
                    <textarea name=""
                    id="" 
                    cols="30"
                    rows="10" 
                    placeholder='Écrivez ici' 
                    value={text} onChange={handleChange}>

                    </textarea>
                    <button className="button" id="btn-soumettre" disabled={disabled}  onClick={handleSubmit}>Soumettre</button>
                </form>
                {loading && 
                    <div className='loading'>
                        <img src={ hostname + "/assets/loading-dot.gif"} alt="loading"/>
                    </div>
                }
            </section>
            {prediction && <Resultats predictions={prediction.prediction} additionnal_info={prediction.additional_info}/>}
        </main>
    )
}

export default Prediction