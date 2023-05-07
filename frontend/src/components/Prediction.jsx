import React, {useState} from 'react';
import Resultats from './Resultats';


const Prediction = () => {


    //const [btnSelector, setBtnSelector] = useState(null);
    const [text, setText] = useState('');
    const [prediction, setPrediction] = useState(null);

    useState(() => {
        //setBtnSelector(document.querySelector('#btn-soumettre'));
        //document.querySelector(btnSelector).disabled = true;
    }, [])

    const handleChange = (e) => {
        /*if(text === '') {
            document.querySelector(btnSelector).disabled = true;
        }else{
            document.querySelector(btnSelector).disabled = false;
        }*/
        setText(e.target.value);
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
        e.preventDefault();
        const res = getPrediction();
        res
            .then((response) => response.json())
            .then((data) => {
                console.log(data);  
                setPrediction(data);
            }).catch((err) => console.log(err));
    }

    return (
        <main>
            <section id='form'>
                <h2>Onirix, une plateforme pour prédire l'avenir à partir de vos rêves.
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
                    <button className="button" id="btn-soumettre"  onClick={handleSubmit}>Soumettre</button>
                </form>
            </section>
            {prediction && <Resultats predictions={prediction.prediction} additionnal_info={prediction.additional_info}/>}
        </main>
    )
}

export default Prediction