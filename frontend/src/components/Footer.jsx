
const Footer = () => {
    return (
        <footer>
            <article>
                <div id="logo-container">
                    <img src="/assets/logo/logo-full-white.png" alt="onirix_logo" className="logo" />
                    <div>
                        <h3>ONIRIX</h3>
                        <p>Découvrez votre avenir à travers vos rêves avec Onirix, l'IA divinatoire.</p>
                    </div>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li><a href="onirix_prediction.html">Prédiction</a></li>
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Avis</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul className="contact-list">
                        <li><a href="tel:+261000000000"><img className="icon" src="assets/icons/phone.png" alt="" />+261 00 000 00</a></li>
                        <li><a href="mailto:gtsierenana@gmail.com"><img className='icon' alt="icon-footer" src="assets/icons/mail.png" /> onixir.mail.co</a></li>
                    </ul>
                </div>
            </article>
            <hr />
            <p className="copyright">
                &copy; 2023 - Made with 🧠 by Spudster
            </p>
        </footer>
    );
}

export default Footer;