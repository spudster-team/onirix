
const Footer = () => {
    return (
        <footer>
        <article>
            <div>
                <img src="ljlkj" alt="onirix_logo" className="logo"/>
                <h3>ONIRIX</h3>
                <p>La prédiction de votre avenir</p>
            </div>
            <div>
                <h3>Service</h3>
                <ul>
                    <li><a href="onirix_prediction.html">Prédiction</a></li>
                    <li><a href="#">À propos</a></li>
                    <li><a href="#">Avis</a></li>
                </ul>
            </div>
            <div>
                <h3>Contacts</h3>
                <ul className="contact-list">
                    <li><a href="tel:+261000000000"><img className="icon" src="assets/icons/phone.png" alt=""/>+261 00 000 00</a></li>
                    <li><a href="mailto:gtsierenana@gmail.com"><img className='icon' alt="icon-footer" src="assets/icons/mail.png"/> onixir.mail.co</a></li>
                </ul>
            </div>
        </article>
        <hr/>
        <p className="copyright">
            &copy; 2023 - Spudster
        </p>
    </footer>
    );
}

export default Footer;