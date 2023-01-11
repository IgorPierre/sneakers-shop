import bannerImg from "../../assets/images/banner-img.png"
import { Button } from "../Button"
import { BannerArea } from "./styles"

function Banner() {

    return(
        <BannerArea>
            <img src={bannerImg} alt="imagem do baner"/>

            <div>
                <h2>Grandes marcas</h2>
                <p>Maiores <strong>marcas</strong> & <strong>modelos</strong>,<br/>para o seu melhor <strong>estilo</strong>.</p>
                <Button>VER TODOS</Button>
            </div>
        </BannerArea>
    )
}

export default Banner