let ac=document.getElementById('ac')
let de=document.getElementById('de')
let dot=document.getElementById('dot')
let slesh=document.getElementById('slesh')
let multi=document.getElementById('multi')
let sub=document.getElementById('sub')
let plus=document.getElementById('plus')
let equal=document.getElementById('equal')
let one=document.getElementById('one')
let two=document.getElementById('two')
let three=document.getElementById('three')
let four=document.getElementById('four')
let five=document.getElementById('five')
let six=document.getElementById('six')
let seven=document.getElementById('seven')
let nine=document.getElementById('nine')
let zero=document.getElementById('zero')
let twozero=document.getElementById('twozero')
let display=document.getElementById('display1')
// let fun=()=>{
//     console.log("heloo")
// }
ac.addEventListener('click',function(){
   display.value=''
})
de.addEventListener('click',function(){
   display.value=display.value+display.value.toString.slice(0,-1)
})
dot.addEventListener('click',function(){
    display.value=display.value+'.'
})
slesh.addEventListener('click',function(){
   display.value=display.value+'/'
})
multi.addEventListener('click',function(){
   display.value=display.value+'*'
})
plus.addEventListener('click',function(){
   display.value=display.value+'+'
})
sub.addEventListener('click',function(){
   display.value=display.value+'-'
})
equal.addEventListener('click',function(){
   display.value=eval(display.value)
})
one.addEventListener('click',function(){
   display.value=display.value+'1'
})
two.addEventListener('click',function(){
   display.value=display.value+'2'
})
three.addEventListener('click',function(){
   display.value=display.value+'3'
})
four.addEventListener('click',function(){
   display.value=display.value+'4'
})
five.addEventListener('click',function(){
   display.value=display.value+'5'
})
six.addEventListener('click',function(){
   display.value=display.value+'6'
})
seven.addEventListener('click',function(){
   display.value=display.value+'7'
})
eight.addEventListener('click',function(){
   display.value=display.value+'8'
})
nine.addEventListener('click',function(){
   display.value=display.value+'9'
})
