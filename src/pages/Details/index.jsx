
import { DetailsArea, ProductInfo } from "./styles"

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import { Title } from "../../components/Products/styles"
import { Button, Quantity } from "../../components/Button"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Axios from "axios"

function Details() {

    const params = useParams()

    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(0)

    useEffect(()=>{
        Axios.get(`http://localhost:3001//get`).then((response) =>{
            setProduct(response.data)
        })
    }, [])

    return(
        <DetailsArea>
            <ProductInfo>
                <Title>{product.title}</Title>
                <span><strong>R$</strong> {product.price}</span>
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