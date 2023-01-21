//Data
import products_data from "../../../products";

//Components
import { BannerArea, ProductImage } from "../../components/Banner";
import { Product, ProductsArea, Title } from "../../components/Products";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

//Images
import generalpurposeshoe from "../../assets/images/generalpurposeshoe.webp"
import boost350 from "../../assets/images/boost350.png"
import wmmnsdunklow from "../../assets/images/wmmnsdunklow.png"
import midse from "../../assets/images/midse.webp"
import boost700 from "../../assets/images/boost700.png"
import s5retro from "../../assets/images/s5retro.webp"
import bannerImg from "../../assets/images/banner-img.png"


function Home() {

    function searchImage(name) {
        if(name === "generalpurposeshoe") return generalpurposeshoe
        else if(name === "boost350v2") return boost350 
        else if(name === "midse") return midse
        else if(name === "s5retro") return s5retro
        else if(name === "wmmnsdunklow") return wmmnsdunklow
        else if(name === "boost700") return boost700
    }

    return(
        <>
            <BannerArea>
                <ProductImage rot="10deg" src={bannerImg} alt="imagem do baner"/>
                <div>
                    <h2>Grandes marcas</h2>
                    <p>Maiores <strong>marcas</strong> & <strong>modelos</strong>,<br/>para o seu melhor <strong>estilo</strong>.</p>
                    <Button>VER TODOS</Button>
                </div>
            </BannerArea>

            <ProductsArea>
                <Title>LANÇAMENTOS</Title>
                <ul>
                    {products_data.map(product => {
                        return(
                            <Product key={product.id}>
                                <ProductImage src={searchImage(product.image)} alt="imagem do produto"/>

                                <h3>{product.name}</h3>
                                <span><strong>R$ </strong>{product.price}</span>

                                <Link to={`/details/${product.id}`}>
                                    <Button>VER DETALHES</Button>
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