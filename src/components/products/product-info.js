import { useState, useEffect } from "react";
import {media} from './product-media.js';

const defaultInfo = {
    name: "Nothing here 👀 ",
    price: null,
    size: null,
    description: "Couldn't find a product, maybe it's invisible?",
    media: media[0]
}

const cleanserInfo = {
    name: "Cleanser",
    price: 6,
    size: "300ml",
    description: "Gentle, foaming cleanser designed for all skin types.",
    media: media[1]
};

const tonicInfo = {
    name: "Tonic",
    price: 5,
    size: "500ml",
    description: "Refreshing tonic for a clean feel skin.",
    media: media[2]
};

const serumInfo = {
    name: "Serum",
    price: 12,
    size: "50ml",
    description: "Packed with vitamins and actives, superbly performing serum for all your needs.",
    media: media[3]
};

const maskInfo = {
    name: "Mask",
    price: 14,
    size: "100g",
    description: "Luxurious pick-me-up for dull, tired skin (and a perfect excuse to relax).",
    media: media[4]
};

const oilInfo = {
    name: "Oil",
    price: 9,
    size: "50ml",
    description: "Lightweight and non-sticky moisturisiing oil.",
    media: media[5]
};

const creamInfo = {
    name: "Cream",
    price: 8,
    size: "90g",
    description: "Quick-absorbing, all-purpose cream sutiable for all skin types.",
    media: media[6]
};

export default function ProductInfo() {
const [imgsLoaded, setImgsLoaded] = useState(false)

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image.src
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.src)
          }, 2000)

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(media.map(image => {
        
            loadImage(image[0])
        
        }))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err.target))
  }, [])

  return imgsLoaded;
}

export {defaultInfo, cleanserInfo, tonicInfo, serumInfo, oilInfo, creamInfo, maskInfo};