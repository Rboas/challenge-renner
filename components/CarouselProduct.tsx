import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import CardProduct from "./CardProduct";

const CarouselProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <MdOutlineArrowForwardIos color="#222222"/>,
    prevArrow: <MdOutlineArrowBackIos color="#222222"/>
  };

  return (
    <Slider {...settings}>
      <div>
        <CardProduct id={1} name='Jaqueta Pesada' img='/12.webp' value='329,90' installment='10x de R$ 32,99 s/juros'/>
      </div>
      <div>
        <CardProduct id={2} name='Camisa Slim' img='/13.webp' value='79,90' installment='4x de R$ 19,98 s/juros'/>
      </div>
      <div>
        <CardProduct id={3} name='Calça Joger' img='/14.webp' value='179,90' installment='10x de R$ 17,90 s/juros'/>
      </div>
      <div>
        <CardProduct id={4} name='Calça Joger em Sherpa' img='/15.webp' value='159,90' installment='9x de R$ 17,77 s/juros'/>
      </div>
      <div>
        <CardProduct id={1} name='Jaqueta Pesada' img='/12.webp' value='329,90' installment='10x de R$ 32,99 s/juros'/>
      </div>
      <div>
        <CardProduct id={2} name='Camisa Slim' img='/13.webp' value='79,90' installment='4x de R$ 19,98 s/juros'/>
      </div>
      <div>
        <CardProduct id={3} name='Calça Joger' img='/14.webp' value='179,90' installment='10x de R$ 17,90 s/juros'/>
      </div>
      <div>
        <CardProduct id={4} name='Calça Joger em Sherpa' img='/15.webp' value='159,90' installment='9x de R$ 17,77 s/juros'/>
      </div>
    </Slider>
  )
}

export default CarouselProduct