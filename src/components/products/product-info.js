import {cleanserMedia, serumMedia, tonicMedia, oilMedia, creamMedia} from './product-media.js';

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
    size: "90ml",
    description: "Quick-absorbing, all-purpose cream sutiable for all skin types.",
    media: creamMedia
};

export {cleanserInfo, tonicInfo, serumInfo, oilInfo, creamInfo};