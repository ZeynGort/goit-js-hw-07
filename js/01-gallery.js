// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// const listGallery = document.querySelector(".gallery");
// const cardsImages = galleryCreate(galleryItems);

// listGallery.insertAdjacentHTML("beforeend", cardsImages);
// listGallery.addEventListener("click", onClick);

// function galleryCreate(galleryItems) {
//   console.log("galleryCreate виконався");
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//     <li class="gallery__item">
//       <a onclick="event.preventDefault();" class="gallery__link" href="${original}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </li>`;
//     })
//     .join("");
// }

// function onClick(evt) {
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
//   modalBigImage(evt);
// }

// function modalBigImage(evt) {
//   const instance = basicLightbox.create(`
//     <img src='${evt.target.dataset.source}'>
// `);

//   instance.show();
//   document.addEventListener("keydown", onEscKeyPress);

//   function onEscKeyPress(evt) {
//     if (evt.code === "Escape") {
//       document.removeEventListener("keydown", onEscKeyPress);
//       instance.close();
//     }
//   }
// }

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGallery = document.querySelector(".gallery");
const cardsImages = galleryCreate(galleryItems);

listGallery.insertAdjacentHTML("beforeend", cardsImages);
listGallery.addEventListener("click", onClick);

function galleryCreate(galleryItems) {
  console.log("galleryCreate виконався");
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a onclick="event.preventDefault();" class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
}
function onClick(evt) {
  console.log("onClick виконався");
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  modalBigImage(evt);
}
function modalBigImage(evt) {
  const instance = basicLightbox.create(`
    <img src='${evt.target.dataset.source}'>
`);

  console.log("modalBigImage виконався");
  instance.show(addEvLis(instance));
}
function addEvLis(instance) {
  console.log("addEvLis почав виконуватися");
  document.addEventListener("keydown", (evt) => onEscKeyPress(evt, instance));
  console.log("addEvLis закынчив виконуватися");
}
function removeEvLis() {
  console.log("removeEvLis почав виконуватися");
  document.removeEventListener("keydown", (evt) =>
    onEscKeyPress(evt, instance)
  );
  console.log("removeEvLis закынчив виконуватися");
}
function onEscKeyPress(evt, instance) {
  console.log("onEscKeyPress виконався");
  if (evt.code === "Escape") {
    instance.close(removeEvLis());
    console.log("я натиснув Escape");
  }
}
