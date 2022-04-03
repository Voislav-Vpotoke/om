// alert("Hello");

// var data = confirm("Ты делаешь зарядку по утрам?");
// if(data) {
//     alert("Ты молодец!");
//    }
//    else {
//        alert("Надо себя заставить!");
//    }
// console.log(data);

let data = prompt("Ты делаешь зарядку по утрам?", '');
if(data == "да") {
    data = prompt ("Введи твоё имя")
    alert("Ты молодец! " + data);
    
}
else {
    alert("Надо себя заставить!");
}