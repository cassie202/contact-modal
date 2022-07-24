let openModal = document.getElementById ("open-modal")
openModal.addEventListener ("click", function(){
   let overLay = document.getElementById ("overlay").style.display = "block"
})

let closeModal = document.getElementById ("close-modal")
closeModal.addEventListener ("click", function(){
 document.getElementById ("overlay").style.display = "none"
})