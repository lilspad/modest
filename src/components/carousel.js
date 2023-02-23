
export default function Carousel(props) {
    const slide = document.getElementsByClassName('slide');
    const slidesContainer = document.getElementById('slides-container');
    return (
        <div className="carousel">
            <section className="slider-wrapper">
            <div className="slides-container" id="slides-container">
                <div className="img-container slide"><img src={props.productSrc[0].src} alt={props.productSrc[0].alt} /></div>
                <div className="img-container slide"><img src={props.productSrc[1].src} alt={props.productSrc[1].alt} /></div>
                <div className="img-container slide"><img src={props.productSrc[2].src} alt={props.productSrc[2].alt} /></div>
            </div>
            <button className="slide-arrow" id="slide-arrow-prev" onClick={ () => {
                const slideWidth = slide.clientWidth;
                slidesContainer.scrollLeft -= slideWidth;
            }}> <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="slide-arrow" id="slide-arrow-next" onClick={ () => {
                const slideWidth = slide.clientWidth;
                slidesContainer.scrollLeft += slideWidth;
            }}> <i className="fa-solid fa-chevron-right"></i>
            </button>
            </section>
        </div>
    )
}
 