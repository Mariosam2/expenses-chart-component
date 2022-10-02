// import json
import balJson from '../data.json' assert {type:'json'};;
const data = balJson;
const bars = document.getElementsByClassName("bar");
console.log(bars);
const week = document.getElementsByClassName("name_day");
const values = document.getElementsByClassName("daily_value");


function getMax(array){
    let max = 0;
    for(let i = 0; i < array.length; i++){
        if(max < array[i].amount) {
            max = array[i].amount;
        }
    }
    return max;
}



for(let i = 0; i < data.length; i++) {
    week[i].innerHTML = data[i].day;
    values[i].innerHTML = "$" + data[i].amount;
    bars[i].style.height = (0.2 * data[i].amount) + 'rem';
    if(data[i].amount == getMax(data)){
        bars[i].style.backgroundColor = "var(--cyan)";
    } else {
        bars[i].style.backgroundColor = "var(--soft-red)";
    }
    
}






