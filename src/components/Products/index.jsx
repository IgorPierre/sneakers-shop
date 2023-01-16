import { useState, useEffect } from "react";

import { Product, ProductsArea, Title } from "./styles"
import { ProductImage } from "../Banner/styles"

import { Button } from "../Button"
import { Link } from "react-router-dom"
import Axios from "axios"

//Images
import generalpurposeshoe from "../../assets/images/generalpurposeshoe.webp"
import boost350 from "../../assets/images/boost350.png"
import wmmnsdunklow from "../../assets/images/wmmnsdunklow.png"
import midse from "../../assets/images/midse.webp"
import boost700 from "../../assets/images/boost700.png"
import s5retro from "../../assets/images/s5retro.webp"

function Products() {
    const [productsList, setProductsList] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/getProducts").then((response) =>{
            setProductsList(response.data)
        })
    }, [])

    function searchImage(name) {
        if(name === "generalpurposeshoe") return generalpurposeshoe
        else if(name === "boost350v2") return boost350 
        else if(name === "midse") return midse
        else if(name === "s5retro") return s5retro
        else if(name === "wmmnsdunklow") return wmmnsdunklow
        else if(name === "boost700") return boost700
    }

    return(
        <ProductsArea>
            <Title>LANÇAMENTOS</Title>

            <ul>
                {productsList.map(product => {
                    return(
                        <Product key={product.id}>
                            <ProductImage src={searchImage(product.image)} alt="imagem do produto"/>
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