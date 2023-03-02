import cleanser1 from '../../media/products/cleanser1.jpg';
import cleanser2 from '../../media/products/cleanser2.jpg';
import cleanser3 from '../../media/products/cleanser3.jpg';

import tonic1 from '../../media/products/tonic1.jpg';
import tonic2 from '../../media/products/tonic2.jpg';
import tonic3 from '../../media/products/tonic3.jpg';

import serum1 from '../../media/products/serum1.jpg';
import serum2 from '../../media/products/serum2.jpg';
import serum3 from '../../media/products/serum3.jpg';

import mask1 from '../../media/products/mask1.jpg';
import mask2 from '../../media/products/mask2.jpg';
import mask3 from '../../media/products/mask3.jpg';

import oil1 from '../../media/products/oil1.jpg';
import oil2 from '../../media/products/oil2.jpg';
import oil3 from '../../media/products/oil3.jpg';

import cream1 from '../../media/products/cream1.jpg';
import cream2 from '../../media/products/cream2.jpg';
import cream3 from '../../media/products/cream3.jpg';

const defaultMedia = [
    {
        alt: "",
        src: ""
    }
]

const cleanserMedia = [
    {
        alt: "Product image of cleanser",
        src: cleanser1
    },
    {
        alt: "A man squeezing the cleanser onto his hand",
        src: cleanser2
    },
    {
        alt: "A man washing his face",
        src: cleanser3
    }
]

const tonicMedia = [
    {
        alt: "Product image of tonic",
        src: tonic1
    },
    {
        alt: "A woman holding the product close up to camera",
        src: tonic2
    },
    {
        alt: "A woman pouring the tonic onto a cotton pad",
        src: tonic3
    }
];

const serumMedia = [
    {
        alt: "Product image of serum",
        src: serum1
    },
    {
        alt: "Serum being squeezed onto a woman's finger",
        src: serum2
    },
    {
        alt: "A woman applying a serum to her cheekbone",
        src: serum3
    }
];

const maskMedia = [
    {
        alt: "Product image of mask",
        src: mask1
    },
    {
        alt: "Opened tin of mask, showing white, dense substance",
        src: mask2
    },
    {
        alt: "A man with the mask applied all over the face",
        src: mask3
    }
];

const oilMedia = [
    {
        alt: "Product image of oil",
        src: oil1
    },
    {
        alt: "Oil pipette dripping onto a woman's hand",
        src: oil2
    },
    {
        alt: "Woman applying a drop of oil onto her face with a pipette",
        src: oil3
    }
]

const creamMedia = [
    {
        alt: "Product image of cream",
        src: cream1
    },
    {
        alt: "cream being squeezed out onto a woman's hand",
        src: cream2
    },
    {
        alt: "Woman's face with a visible layer of cream on the cheek",
        src: cream3
    }
];

const media = [defaultMedia, cleanserMedia, serumMedia, tonicMedia, oilMedia, creamMedia, maskMedia]

export {media, defaultMedia};