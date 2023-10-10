import { useAuth } from './../routes/auth/AuthProvider.jsx';

export const Footer = () => {
    const auth = useAuth();
    const textBtn = auth.isAuthenticated ? 'LOGIN' : 'REGISTER';
    const linkBtn = auth.isAuthenticated ? '/login' : '/register';

    return (
        <footer className="footer">
            <nav className="navbar container">
                <ul className="navbar__item">
                    <li className="navbar__item">
                        <a className="navbar__link" href="./pages/shop.html">SHOP</a>
                    </li>                    
                    <li className="navbar__item">
                        <a className="navbar__link" href={linkBtn}>{textBtn}</a>
                    </li>                    
                    <li className="navbar__item">
                        <a className="navbar__link" href="./pages/contact.html">CONTACTO</a>
                    </li>
                </ul>
                <picture>
                    <img src="./img/branding/isotype.svg" alt="Isotipo de la marca FunkoShop"/>    
                </picture>
            </nav>
            <p className="footer__copy">All rights reserved 2023 - FunkoShop of Gonzalo Gonzalez &copy;</p>      
        </footer>
    )
}