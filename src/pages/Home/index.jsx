//Data
import products_data from "../../../products";

//Components
import { BannerArea, ProductImage } from "../../components/Banner";
import { Product, ProductsArea, Title } from "../../components/Products";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

//Images
import Zion from "../../assets/images/Zion.png"
import DUNKJUMBO from "../../assets/images/DUNKJUMBO.png"
import Humara from "../../assets/images/Humara.png"
import Max97 from "../../assets/images/Max97.png"
import Max186 from "../../assets/images/Max186.png"
import Mindbody from "../../assets/images/Mindbody.png"
import bannerImg from "../../assets/images/banner.png"


function Home() {

    function searchImage(name) {
        if(name === "Zion") return Zion
        else if(name === "DUNKJUMBO") return DUNKJUMBO 
        else if(name === "Humara") return Humara
        else if(name === "Max97") return Max97
        else if(name === "Max186") return Max186
        else if(name === "Mindbody") return Mindbody
    }

    return(
        <>
            <BannerArea>
                <ProductImage rot="10deg" src={bannerImg} alt="imagem do baner"/>
                <div>
                    <h2>Grandes marcas</h2>
                    <p>Maiores <strong>marcas</strong>,<br/>para o seu melhor <strong>estilo</strong>.</p>
                    <Button>VER TODOS</Button>
                </div>
            </BannerArea>

            <ProductsArea>
                <Title>LANÇAMENTOS</Title>
                <ul>
                    {products_data.map(product => {
                        return( 
                            <Product key={product.id}>
                                <Link to={`/details/${product.id}`} className="link-sem-estilo">
                                    <ProductImage src={searchImage(product.image)} alt="imagem do produto"/>
                                    <h3>{product.name}</h3>
                                    <span><strong>R$ </strong>{product.price}</span>
                                </Link> 
                            </Product>     
                        )
                    })}
                </ul>
            </ProductsArea>
        </>
    )
}
export default Home