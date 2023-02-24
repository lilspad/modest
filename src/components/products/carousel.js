import {defaultMedia} from "./product-media";

export default function Carousel(props) {

    return (
        <div className="carousel">
            <section className="slider-wrapper">
            <div className="slides-container" id="slides-container">
                <div className="img-container slide"><img src={props.productSrc[0].src} alt={props.productSrc[0].alt} /></div>
                <div className="img-container slide"><img src={props.productSrc === defaultMedia ? "" : props.productSrc[1].src} alt={props.productSrc === defaultMedia ? "" : props.productSrc[1].alt} /></div>
                <div className="img-container slide"><img src={props.productSrc === defaultMedia ? "" : props.productSrc[2].src} alt={props.productSrc === defaultMedia ? "" : props.productSrc[2].alt} /></div>
            </div>
            <button className="slide-arrow" id="slide-arrow-prev" onClick={ () => {
                const slide = document.getElementsByClassName('slides-container')[props.productId];
                slide.scrollLeft -= slide.clientWidth;
            }}> <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="slide-arrow" id="slide-arrow-next" onClick={ () => {
                const slide = document.getElementsByClassName('slides-container')[props.productId];
                slide.scrollLeft += slide.clientWidth;
            }}> <i className="fa-solid fa-chevron-right"></i>
            </button>
            </section>
        </div>
    )
}
 