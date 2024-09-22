const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const weekdays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
];
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4');


// set date
const futureDate = new Date(2024, 9, 25, 12, 30, 0);
// console.log(futureDate);


// future time in milisecond
const futureTime = futureDate.getTime();
// console.log(futureTime);

// function
function getRemainingTime(){
    const today = new Date().getTime();
    // console.log(today);
    const t = futureTime - today;
    
    // value in milisecond
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    // calculate all days
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t% oneDay) / oneHour);
    let minutes = Math.floor((t% oneHour) / oneMinute);
    let seconds = Math.floor((t% oneMinute) / 1000);

    // set value array
    const values = [days, hours, minutes, seconds];
     
    // format
    function format(item){
        if(item < 10){
        return (item = `0${item}`);
        }
        return item;
    }

   

    items.forEach(function(item,index){
        item.innerHTML = values[index];
    })
    
    // 
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="sorry">Sorry, we are sorry the bootcamp</h4>`;
    }

}
// countdown
let countdown = setInterval(getRemainingTime, 1000);


getRemainingTime();
