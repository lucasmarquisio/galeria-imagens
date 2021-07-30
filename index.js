const button_left = document.querySelector(".button-left")
const button_right = document.querySelector(".button-right")
const image = document.querySelector(".image")
const image_position_view = document.querySelector('.image-position')

const galery_images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
]

let position_image = 0
const galery_lenght = galery_images.length - 1
image_position_view.innerHTML = position_image + 1

button_left.addEventListener("click", () => {
  
  if (position_image == 0) {
    image.src = galery_images[galery_lenght]
    position_image = galery_lenght
    image_position_view.innerHTML = position_image + 1
    return
  }
  position_image = position_image - 1
  image.src = galery_images[position_image]
  image_position_view.innerHTML = position_image + 1
})

button_right.addEventListener("click", () => {
  
  if (position_image == galery_lenght) {
    position_image = 0
    image.src = galery_images[position_image]
    image_position_view.innerHTML = position_image + 1
    return
  }
  position_image = position_image + 1
  image.src = galery_images[position_image]
  image_position_view.innerHTML = position_image + 1
})





