import { ProductImage } from "../../components/Banner/styles"
import { DetailsArea, ProductInfo } from "./styles"

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import { Title } from "../../components/Products/styles"
import { Button, Quantity } from "../../components/Button"
import { useState } from "react"

function Details() {

    const [quantity, setQuantity] = useState(0)

    return(
        <DetailsArea>

            <ProductInfo>
                <Title>Tênis YEZZY</Title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam aspernatur voluptatem nostrum culpa, in maiores autem eius ipsa amet eligendi tenetur delectus quam voluptatibus ratione, odit nihil doloribus! Eligendi!</p>
                <span><strong>R$</strong> 1.129,00</span>
                <div>
                    <Quantity>
                        <span onClick={() => setQuantity(quantity === 0 ? quantity-0 : quantity-1)}><AiOutlineMinus /></span>
                        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                        <span onClick={() => setQuantity(quantity+1)}><AiOutlinePlus /></span>
                    </Quantity>

                    <Button>ADICIONAR</Button>
                </div>
            </ProductInfo>
        </DetailsArea>
    )
}

export default Details