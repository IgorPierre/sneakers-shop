//Data
import products_data from "../../../products";

//Hooks
import { Link, useParams } from "react-router-dom"
import { useState } from "react";

//Components
import { DetailsArea, DetailsContent } from "./styles"
import { Button, Quantity } from "../../components/Button";

//Images
import generalpurposeshoe from "../../assets/images/generalpurposeshoe.webp"
import boost350 from "../../assets/images/boost350.png"
import wmmnsdunklow from "../../assets/images/wmmnsdunklow.png"
import midse from "../../assets/images/midse.webp"
import boost700 from "../../assets/images/boost700.png"
import s5retro from "../../assets/images/s5retro.webp"

//Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { ImArrowLeft  } from "react-icons/im"

function Details(){

    const {id} = useParams()
    const product = products_data[id-1]

    const [quantityValue, setQuantityValue] = useState(0)

    function addProduct() {
        return setQuantityValue(quantityValue + 1)
    }

    function removeProduct() {
        if(quantityValue > 0){
            return setQuantityValue(quantityValue - 1)
        }
    }

    function searchImage(name) {
        if(name === "generalpurposeshoe") return generalpurposeshoe
        else if(name === "boost350v2") return boost350 
        else if(name === "midse") return midse
        else if(name === "s5retro") return s5retro
        else if(name === "wmmnsdunklow") return wmmnsdunklow
        else if(name === "boost700") return boost700
    }

    return(
        <DetailsArea>
            
            <Link to={"/"}>
                <ImArrowLeft/>
            </Link>

            <img src={searchImage(product.image)} />

            <DetailsContent>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span><strong>R$ </strong>{product.price}</span>

                <div className="quantity-area">
                    <Quantity>
                        <span onClick={removeProduct}><AiOutlineMinus/></span>
                        <input type="text" value={quantityValue}/>
                        <span onClick={addProduct}><AiOutlinePlus/></span>
                    </Quantity>
                    <Button>ADICIONAR</Button>
                </div>
            </DetailsContent>  
        </DetailsArea>
    )
}

export default Details