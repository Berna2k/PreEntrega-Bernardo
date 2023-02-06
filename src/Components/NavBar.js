import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';

export default function NavBar () {
    return(
        <div>
            <nav class="navHeader">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Remeras</a></li>
                    <li><a href="#">Buzos</a></li>
                    <CartWidget />
                </ul>
            </nav>
        </div>
    );
};