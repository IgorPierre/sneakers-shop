//Data
import products_data from "../../../products";

//Hooks
import { Link, useParams } from "react-router-dom"
import { useState } from "react";

//Components
import { DetailsArea, DetailsContent } from "./styles"
import { Button, Quantity } from "../../components/Button";

//Images
import Zion from "../../assets/images/Zion.png"
import DUNKJUMBO from "../../assets/images/DUNKJUMBO.png"
import Humara from "../../assets/images/Humara.png"
import Max97 from "../../assets/images/Max97.png"
import Max186 from "../../assets/images/Max186.png"
import Mindbody from "../../assets/images/Mindbody.png"


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
        if(name === "Zion") return Zion
        else if(name === "DUNKJUMBO") return DUNKJUMBO 
        else if(name === "Humara") return Humara
        else if(name === "Max97") return Max97
        else if(name === "Max186") return Max186
        else if(name === "Mindbody") return Mindbody
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