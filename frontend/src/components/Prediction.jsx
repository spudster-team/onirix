import React, { useState } from 'react';
import Resultats from './Resultats';


const Prediction = () => {


    const [disabled, setDisabled] = useState(true);
    const [text, setText] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
        if (text === '') {
            setDisabled(true);
        } else {
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
            <div className='pub'>
                <div className="close-button">&times;</div>
                <p>Attention, Onyrix ne peut prédire l'avenir en se basant sur des cauchemars. Ces derniers sont
                    considérés comme des troubles psychologiques et l'Institut International des Rêves recommende d'aller voir un professionel.
                </p>
                <p>Voici quelques recommendations : </p>
            </div>
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
                    <button className="button" id="btn-soumettre" disabled={disabled} onClick={handleSubmit}>Soumettre</button>
                </form>
                {loading &&
                    <div className='loading'>
                        <img src={"/assets/loading-dot.gif"} alt="loading" />
                    </div>
                }
            </section>
            {prediction && <Resultats predictions={prediction.prediction} additionnal_info={prediction.additional_info} />}
            <section>
                <h2>Historique</h2>
                <div className="history-same-date">
                    <h3>23 avril 2023</h3>
                    <ul>
                        <li>
                            <bold>Dream</bold>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, magni quae praesentium adipisci eius doloremque voluptatibus, pariatur, quaerat optio quas id necessitatibus harum ducimus accusantium! Quia molestiae odit excepturi culpa!<br></br>
                            <bold>Prediction</bold>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ratione dolor saepe veritatis excepturi ad temporibus ducimus fugiat cumque, accusantium dolorem ex facilis quidem velit officia. Culpa vero voluptatem recusandae.
                        </li>
                        <li>
                            <bold>Dream</bold>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, magni quae praesentium adipisci eius doloremque voluptatibus, pariatur, quaerat optio quas id necessitatibus harum ducimus accusantium! Quia molestiae odit excepturi culpa!<br></br>
                            <bold>Prediction</bold>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ratione dolor saepe veritatis excepturi ad temporibus ducimus fugiat cumque, accusantium dolorem ex facilis quidem velit officia. Culpa vero voluptatem recusandae.
                        </li>
                        <li>
                            <bold>Dream</bold>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, magni quae praesentium adipisci eius doloremque voluptatibus, pariatur, quaerat optio quas id necessitatibus harum ducimus accusantium! Quia molestiae odit excepturi culpa!<br></br>
                            <bold>Prediction</bold>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ratione dolor saepe veritatis excepturi ad temporibus ducimus fugiat cumque, accusantium dolorem ex facilis quidem velit officia. Culpa vero voluptatem recusandae.
                        </li>
                    </ul>
                </div>
                <div className="history-same-date">
                    <h3>22 mai 2023</h3>
                    <ul>
                        <li>
                            <bold>Dream</bold>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, magni quae praesentium adipisci eius doloremque voluptatibus, pariatur, quaerat optio quas id necessitatibus harum ducimus accusantium! Quia molestiae odit excepturi culpa!<br></br>
                            <bold>Prediction</bold>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ratione dolor saepe veritatis excepturi ad temporibus ducimus fugiat cumque, accusantium dolorem ex facilis quidem velit officia. Culpa vero voluptatem recusandae.
                        </li>
                    </ul>
                </div>
                <div className="history-same-date">
                    <h3>23 avril 2023</h3>
                    <ul>
                        <li>
                            <bold>Dream</bold>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, magni quae praesentium adipisci eius doloremque voluptatibus, pariatur, quaerat optio quas id necessitatibus harum ducimus accusantium! Quia molestiae odit excepturi culpa!<br></br>
                            <bold>Prediction</bold>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ratione dolor saepe veritatis excepturi ad temporibus ducimus fugiat cumque, accusantium dolorem ex facilis quidem velit officia. Culpa vero voluptatem recusandae.
                        </li>
                        <li>
                            <bold>Dream</bold>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, magni quae praesentium adipisci eius doloremque voluptatibus, pariatur, quaerat optio quas id necessitatibus harum ducimus accusantium! Quia molestiae odit excepturi culpa!<br></br>
                            <bold>Prediction</bold>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ratione dolor saepe veritatis excepturi ad temporibus ducimus fugiat cumque, accusantium dolorem ex facilis quidem velit officia. Culpa vero voluptatem recusandae.
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Prediction