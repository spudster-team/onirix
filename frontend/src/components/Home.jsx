import React from 'react'


const Home = () => {
    return (
        <main>
        <section class="landing-page">
            <article id="onirix-summary">
                <div>
                    <h2>Prédisez votre avenir grâce à Onirix</h2>
                    <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre
                        provisoire
                        pour
                        calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt
                        ou
                        que
                        la mise en page est achevée. Généralement, on utilise un texte en faux latin.</p>
                    <a href="onirix_prediction.html" class="button">Essayer</a>
                    <a href="onirix_info.html">En savoir plus</a>
                </div>
                <img src="#" alt="" class="landing-page-illustration"/>
            </article>
            <article id="iir-summary">
                <img src="assets/iir.jpg" alt="iir building" class="landing-page-illustration"/>
                <div>
                    <h2>Institut International des Rêves</h2>
                    <p>
                        • Faites vivre à vos patients une expérience client structurée et personnalisée qui vous
                        démarque • Augmentez le nombre de nouveaux patients en définissant encore davantage votre image
                        de marque • Développez un examen minutieux et une présentation aux patients qui favorisent leur
                        adhésion aux traitements suggérés
                    </p>
                    <a href="onirix_info.html" class="button">Voir plus</a>
                </div>
            </article>
        </section>
        <section>
            <h2>Ce que les gens disent de nous</h2>
            <article class="testimonial">
                <p class="testimonial-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, corrupti
                    eveniet excepturi ipsam quam dolorem molestias ratione alias distinctio, deserunt error sunt
                    voluptates, officiis quasi earum id aspernatur consectetur quidem!</p>
                <div><img src="assets/man1.jpg" alt="user-photo"/><span class="testimonial-username">John Wick</span>
                </div>
            </article>
            <article class="testimonial">
                <p class="testimonial-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, corrupti
                    eveniet excepturi ipsam quam dolorem molestias ratione alias distinctio, deserunt error sunt
                    voluptates, officiis quasi earum id aspernatur consectetur quidem!</p>
                <div><img src="assets/man2.jpg" alt=""/><span class="testimonial-username">John Wick</span></div>
            </article>
            <article class="testimonial">
                <p class="testimonial-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, corrupti
                    eveniet excepturi ipsam quam dolorem molestias ratione alias distinctio, deserunt error sunt
                    voluptates, officiis quasi earum id aspernatur consectetur quidem!</p>
                <div><img src="assets/woman1.jpg" alt=""/><span class="testimonial-username">John Wick</span></div>
            </article>
        </section>
    </main>
    )
}

export default Home