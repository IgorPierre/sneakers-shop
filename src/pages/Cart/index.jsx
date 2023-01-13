import { ProductImage } from "../../components/Banner/styles"
import { Product, Title } from "../../components/Products/styles"

import { MdDelete } from "react-icons/md"

import { CartArea } from "./styles"
import { Button } from "../../components/Button"

function Cart() {
    
    return(
        <CartArea>
            <ul>
                {productsList.map(product => {
                    return(
                        <Product row>
                            <ProductImage src={product.image} alt="" />
                            <div>
                                <h3>{product.name}</h3>
                                <span><strong>R$ </strong>{product.price}</span>
                            </div>
                            <button><MdDelete /></button>
                        </Product>
                    )
                })}
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