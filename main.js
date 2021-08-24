// function coronaTest() {
//   formOne.onsubmit = function (event) {
//     event.preventDefault();

//     var FirstName = document.getElementById("firstName").value,
//       LastName = document.getElementById("lastName").value,
//       BirthYear = document.getElementById("userBirthYear").value,
//       userId = document.getElementById("userId").value,
//       userCity = document.getElementById("userCity").value,
//       btn = document.getElementById("btn");
// /
// /

// /
// /
// /
// /
// 1
document.getElementById("formBtn").onclick = function(){
  var obj = {fName:document.getElementById("useriFrstName").value,
  lName:document.getElementById("userLastName").value,
  birth:document.getElementById("userBirthDay").value,
  id:document.getElementById("userId").value,
  city:document.getElementById("userCity").value}
  obj.date = new Date();
  for (var i = 0; i < array.length; i++) {
      if(obj.id!=array[i].id ){
          array.push(obj);
          break
      }
      alert("exsist");
          break
  }

  
  
  

}

var array =[{fName:"avi",
lName:"avrham",
birth:"2.5.98",
id:4234432,
city:"yavne",
},
{fName:"david",
lName:"davidov",
birth:"3.4.78",
id:23422,
city:"ashkelon"},
{fName:"gadi",
lName:"gadyev",
birth:"12.4.65",
id:3456,
citty:"rehovot"}]



for (var i = 0; i < array.length; i++) {
  document.getElementById("printArray").innerHTML+= `${Object.values(array[i])}`
  
}

for (var i = 0; i < array.length; i++) {
  document.getElementById("printColum").innerHTML+= `<p>${Object.values(array[i])}</p>`
  
}

oninput = function (){
  document.getElementById("useriFrstName").value = document.getElementById("useriFrstName").value.toUpperCase();
  document.getElementById("userLastName").value = document.getElementById("userLastName").value.toUpperCase();
  document.getElementById("userBirthDay").value = document.getElementById("userBirthDay").value.toUpperCase();
  document.getElementById("userId").value = document.getElementById("userId").value.toUpperCase();
}



var findByName = document.getElementById("findByName")
var findById = document.getElementById("findById")
var checkIfSame = document.getElementById("checkIfSame");
var butonnCheck = document.getElementById("butonnCheck");

butonnCheck.onclick = function(){
  for (var i = 0; i < array.length; i++) {
      if(array[i].fName==checkIfSame.value){
          findById.innerHTML =`${Object.values(array[i])}`;
      }
      if(findById.innerHTML.length<2 ){
          findById.innerHTML = "NOOOO!!!!!"
      }
  }
  
}




var findByName = document.getElementById("findByName");
var checkIfSame = document.getElementById("checkIfSame");
var butonnCheck = document.getElementById("butonnCheck");

butonnCheck.onclick = function(){
  for (var i= 0; i < array.length; i++) {
      if(array[i].id==checkIfSame.value){
          findByName.innerHTML = `${Object.values(array[i])}`; 
      }
      if(findByName.innerHTML.length<2){
          findByName.innerHTML = "NOOOO"
      }
  }
  
}
