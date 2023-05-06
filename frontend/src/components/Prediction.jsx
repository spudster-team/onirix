import React from 'react'


const Prediction = () => {
    return (
        <main>
            <section id='form'>
                <h2>Onirix, une plateforme pour prédire l'avenir à partir de vos rêves.
                </h2>
                <form action="">
                    <h3>Décrivez votre rêve</h3>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Écrivez ici'></textarea>
                    <a href="" className="button">Soumettre</a>
                </form>
            </section>
            <section id='result'>
                <h3>Voici la prédiction de votre rêve</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facilis deleniti libero rem optio rerum modi reiciendis eum ea eius, sunt aperiam earum. Vitae, minima. Pariatur quo vel expedita suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates quia suscipit exercitationem nam! Nihil aut doloremque unde quasi esse obcaecati quas accusantium amet, voluptatem sint adipisci maiores itaque sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reiciendis vel accusamus, sit itaque sequi aut, dignissimos beatae quod quos similique pariatur corrupti alias quas. Quae at quis molestiae enim?</p>
                <h3>Nous vous proposons les contenus suivant basé sur la prédiction ci-dessus : </h3>
                <div className='additional-info-container'>
                    <article className='additional-info'>
                        <h4>Article</h4>
                        <div></div>
                    </article>
                    <article className='additional-info'>
                        <h4>Livres</h4>
                        <div>
                            <a href="#" className="button">Consulter</a>
                        </div>
                    </article>
                    <article className='additional-info'>
                        <h4>Vidéos</h4>
                        <div>
                            <a href="#" className="button">Consulter</a>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Prediction