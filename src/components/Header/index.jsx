import logoImg from "../../assets/images/sneaker-logo.png"
import { FaSearch } from "react-icons/fa"
import { TiShoppingCart } from "react-icons/ti"
import { Cart, HeaderArea, Logo, Navigator, SearchArea } from "./styles"

function Header() {
    return(
        <HeaderArea>
            <Logo>
                <img src={logoImg} alt="logo da sneakers" />
            </Logo>

            <SearchArea>
                <input type="text" placeholder="Pesquisar por tênis"/>
                <a href=""><FaSearch /></a>
            </SearchArea>

            <Cart>
                <span>0</span>
                <TiShoppingCart />
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