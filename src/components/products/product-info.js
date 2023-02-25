import {defaultMedia, cleanserMedia, serumMedia, tonicMedia, oilMedia, creamMedia, maskMedia} from './product-media.js';

const defaultInfo = {
    name: "Nothing here 👀 ",
    price: null,
    size: null,
    description: "Couldn't find a product, maybe it's invisible?",
    media: defaultMedia
}

const cleanserInfo = {
    name: "Cleanser",
    price: 6,
    size: "300ml",
    description: "Gentle, foaming cleanser designed for all skin types.",
    media: cleanserMedia
};

const tonicInfo = {
    name: "Tonic",
    price: 5,
    size: "500ml",
    description: "Refreshing tonic for a clean feel skin.",
    media: tonicMedia
};

const serumInfo = {
    name: "Serum",
    price: 12,
    size: "50ml",
    description: "Packed with vitamins and actives, superbly performing serum for all your needs.",
    media: serumMedia
};

const maskInfo = {
    name: "Mask",
    price: 14,
    size: "100g",
    description: "Luxurious pick-me-up for dull, tired skin (and a perfect excuse to relax).",
    media: maskMedia
};

const oilInfo = {
    name: "Oil",
    price: 9,
    size: "50ml",
    description: "Lightweight and non-sticky moisturisiing oil.",
    media: oilMedia
};

const creamInfo = {
    name: "Cream",
    price: 8,
    size: "90g",
    description: "Quick-absorbing, all-purpose cream sutiable for all skin types.",
    media: creamMedia
};

export {defaultInfo, cleanserInfo, tonicInfo, serumInfo, oilInfo, creamInfo, maskInfo};