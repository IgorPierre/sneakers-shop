import { ProductsArea, Title } from "./styles"

import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"

import { Button } from "../Button"
import { ProductImage } from "../Banner/styles"

function Products() {
    return(
        <ProductsArea>
            <Title>LANÇAMENTOS</Title>

            <ul>
                <li>
                    <ProductImage src={img1} alt="" />
                    <h3>Tenis YEZZY</h3>
                    <span><strong>R$</strong> 1.129,00</span>
                    <Button>COMPRAR</Button>
                </li>
                <li>
                    <ProductImage src={img2} alt="" />
                    <h3>Tenis YEZZY</h3>
                    <span><strong>R$</strong> 1.399,00</span>
                    <Button>COMPRAR</Button>
                </li>
                <li>
                    <ProductImage src={img3} alt="" />
                    <h3>Tenis Nike</h3>
                    <span><strong>R$</strong> 1.599,00</span>
                    <Button>COMPRAR</Button>
                </li>
            </ul>
        </ProductsArea>
    )
}

export default Products