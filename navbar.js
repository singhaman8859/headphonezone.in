let count=1
function logoSlider(){
    setInterval(function(){
        if(count==4){
            count=1
        }
       let imgDiv=document.getElementById("image")
       imgDiv.innerHTML=null
       let img=document.createElement("img");
       img.src=`./images/55${count}.png`
       imgDiv.append(img)
       count++
    },1000)
}
logoSlider()


function setitem1(){
    localStorage.setItem("category","earphone")
    window.location.replace("./productData/product.html")
}
function setitem2(){
    localStorage.setItem("category","headphone")
    window.location.herf="./productData/product.html"
}
function setitem3(){
    localStorage.setItem("brand","1costom")
    window.location.herf="./productData/product.html"
}
function setitem4(){
    localStorage.setItem("brand","Bowers&Wikins")
    window.location.herf="./productData/product.html"
}
