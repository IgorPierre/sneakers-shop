import { ProductImage } from "../../components/Banner/styles"
import { Product, Title } from "../../components/Products/styles"

import { MdDelete } from "react-icons/md"

import img from "../../assets/images/1.png"
import { CartArea } from "./styles"
import { Button } from "../../components/Button"


function Cart() {
    return(
        <CartArea>
            <ul>
                <Product row>
                    <ProductImage src={img} alt="" />
                    <div>
                        <h3>Tenis Yezzy</h3>
                        <span><strong>R$ </strong>1.900,00</span>
                    </div>
                    <button><MdDelete /></button>
                </Product>
                <Product row>
                    <ProductImage src={img} alt="" />
                    <div>
                        <h3>Tenis Yezzy</h3>
                        <span><strong>R$ </strong>1.900,00</span>
                    </div>
                    <button><MdDelete /></button>
                </Product>
                <Product row>
                    <ProductImage src={img} alt="" />
                    <div>
                        <h3>Tenis Yezzy</h3>
                        <span><strong>R$ </strong>1.900,00</span>
                    </div>
                    <button><MdDelete /></button>
                </Product>
                <Product row>
                    <ProductImage src={img} alt="" />
                    <div>
                        <h3>Tenis Yezzy</h3>
                        <span><strong>R$ </strong>1.900,00</span>
                    </div>
                    <button><MdDelete /></button>
                </Product>
                <Product row>
                    <ProductImage src={img} alt="" />
                    <div>
                        <h3>Tenis Yezzy</h3>
                        <span><strong>R$ </strong>1.900,00</span>
                    </div>
                    <button><MdDelete /></button>
                </Product>
            </ul>

            <div className="tatal-container">
                <Title>Seu carrinho</Title>
                <hr />
                <span>Total</span>
                <span>4.000,00</span>
                <Button>AVANÇAR</Button>
            </div>
        </CartArea>
    )
}

export default Cart