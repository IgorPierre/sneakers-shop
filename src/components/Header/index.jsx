import logoImg from "../../assets/images/sneaker-logo.png"
import { FaSearch } from "react-icons/fa"
import { TiShoppingCart } from "react-icons/ti"
import { Cart, HeaderArea, Logo, Navigator, SearchArea } from "./styles"
import { Link } from "react-router-dom"

function Header() {
    return(
        <HeaderArea>
            <Logo>
                <Link to={"/"}><img src={logoImg} alt="logo da sneakers" /></Link>
            </Logo>

            <SearchArea>
                <input type="text" placeholder="Pesquisar por tênis"/>
                <Link to={"/"}><FaSearch /></Link>
            </SearchArea>

            <Cart>
                <span>0</span>
                <Link to={"/cart"}><TiShoppingCart /></Link>
            </Cart>

            <Navigator>
                <a href="/">AIR JORDAN</a>
                <a href="/">NIKE</a>
                <a href="/">YEZZY</a>
            </Navigator>
        </HeaderArea>
    )
}

export default Header