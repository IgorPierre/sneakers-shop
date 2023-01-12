import { Product, ProductsArea, Title } from "./styles"

//Images
import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"
import { ProductImage } from "../Banner/styles"

import { Button } from "../Button"
import { Link } from "react-router-dom"

function Products() {

    const productsList = [
        {
            name: "Tênis Yezzy", 
            image: img1,
            price: "1.129,00"
        },
        {
            name: "Tênis Yezzy", 
            image: img2,
            price: "1.599,00"
        },
        {
            name: "Tênis Nike", 
            image: img3,
            price: "1.399,00"
        }
    ]

    return(
        <ProductsArea>
            <Title>LANÇAMENTOS</Title>

            <ul>
                {productsList.map(product => {
                    return(
                        <Product>
                            <ProductImage src={product.image} alt="" />
                            <h3>{product.name}</h3>
                            <span><strong>R$ </strong>{product.price}</span>
                            <Link to={"/details"}>
                                <Button>VER DETALHES</Button>
                            </Link>
                        </Product>
                    )
                })}
            </ul>
        </ProductsArea>
    )
}

export default Products