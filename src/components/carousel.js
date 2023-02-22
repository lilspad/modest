
export default function Carousel(props) {
    const slide = document.getElementsByClassName('slide');
    const slidesContainer = document.getElementById('slides-container');
    return (
        <div className="carousel">
            <section className="slider-wrapper">
            <div className="slides-container" id="slides-container">
                <div className="img-container slide"><img src={""} /></div>
                <div className="img-container slide"><img src={""} /></div>
                <div className="img-container slide"><img src={""} /></div>
            </div>
            <button className="slide-arrow" id="slide-arrow-prev" onClick={ () => {}}> {'<'}
            </button>
            <button className="slide-arrow" id="slide-arrow-next" onClick={ () => {}}> {'>'}
            </button>
            </section>
        </div>
    )
}
 