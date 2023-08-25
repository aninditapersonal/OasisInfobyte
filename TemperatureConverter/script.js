const deg = document.getElementById("degree");
const res = document.getElementById("result");
const btn = document.getElementById("btn");
const select = document.getElementById("select");

const fahrenheit = (f)=>{
    return (Number(f)-32)*(5/9);
}

const kelvin = (c)=>{
    return  (Number(c)*(9/5))+32;
}

btn.onclick=(e)=>{
    if(deg.value){
        if(select.value === "far"){
            res.value = fahrenheit(deg.value)+" \u00B0C";
        }
        else if(select.value === "cel"){
            res.value = kelvin(deg.value)+" F";
        }
        else {
            alert("Please select a type!");
        }

    }
    else{
        alert("No Input");
    }
}