var btn=document.getElementById("btn");
var err=document.getElementById("err");
var btn1=document.getElementById("btn1");


// function display() {
//     try {
//         alart("btn")
//     } catch (error) {
//         err.innerText=error.message
        
//     }
// }
function check() {
    var text=document.getElementById("text").value;
    var para=document.getElementById("para");
    try {
        if (text=="")throw"box is empty";
        if (isNaN(text))throw"value is not a number";
        if (text<10)throw"value should be greater then 10";
        if (text>20)throw"value should be less then 20";
    } catch (error) {
        para.innerText=error
    }
    finally{
        document.getElementById("text").value=""
    }
}
