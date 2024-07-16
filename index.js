let generateBtn = document.getElementById("btn")
let output = document.getElementById("color-text") 
let colorSample = document.getElementById("color-sample")

let arrayList = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]




generateBtn.addEventListener('click', function(){
    
    let color = "#"
   for(let i = 0; i < 6; i++){
    let values = Math.floor(Math.random()*arrayList.length)
    color += arrayList[values]
   }
   output.textContent=color
   colorSample.style.background = color
})