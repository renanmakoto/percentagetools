const fiveHours = 65
const tenHours = 120
const fifteenHours = 180
const twentyHours = 225
const thirtyFiveHours = 300

let inputNumberOfHours = document.getElementById("numberOfHours")
let inputNumberOfWeeks = document.getElementById("numberOfWeeks")

function calculation() {
    let numberOfHours = inputNumberOfHours.value
    let hours = parseInt(numberOfHours)

    let numberOfWeeks = inputNumberOfWeeks.value
    let weeks = parseInt(numberOfWeeks)  

    console.log(hours)
    console.log(weeks)

    if (hours == 5 && weeks == 1) {
        numberOfHoursDiv.innerHTML = `<p>The cost for ONE WEEK is $ ${fiveHours}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`
    } else if (hours == 5 && weeks > 1) {
        fiveHoursTimesWeeks = fiveHours * weeks
        numberOfHoursDiv.innerHTML = `<p> 5 hours per week X ${weeks} weeks = $ ${fiveHoursTimesWeeks}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`
    } else if (hours == 10 && weeks == 1) {
        numberOfHoursDiv.innerHTML = `<p>The cost for ONE WEEK is $ ${tenHours}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`
    } else if (hours == 10 && weeks > 1) {
        tenHoursTimesWeeks = tenHours * weeks
        numberOfHoursDiv.innerHTML = `<p> 10 hours per week X ${weeks} weeks =  $ ${tenHoursTimesWeeks}.00</p>`
    } else if (hours == 15 && weeks == 1) {
        numberOfHoursDiv.innerHTML = `<p> The cost for ONE WEEK is $ ${fifteenHours}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`
    } else if (hours == 15 && weeks > 1) {
        fifteenTimesWeeks = fifteenHours * weeks
        numberOfHoursDiv.innerHTML = `<p> 15 hours per week X ${weeks} weeks =  $ ${fifteenTimesWeeks}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`
    } else if (hours == 20 && weeks == 1) {
        numberOfHoursDiv.innerHTML = `<p>The cost for ONE WEEK is $ ${twentyHours}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`
    } else if (hours == 20 && weeks > 1) {
        twentyTimesWeeks = twentyHours * weeks
        numberOfHoursDiv.innerHTML = `<p> 20 hours per week X ${weeks} weeks = $ ${twentyTimesWeeks}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`
    } else if (hours == 35 && weeks == 1) {
        numberOfHoursDiv.innerHTML = `<p> The cost for ONE WEEK is $ ${thirtyFiveHours}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`
    } else if (hours == 35 && weeks > 1) {
        thirtyFiveTimesWeeks = thirtyFiveHours * weeks
        numberOfHoursDiv.innerHTML = `<p> 35 hours per week X ${weeks} weeks = $ ${thirtyFiveTimesWeeks}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`
    } else {
        window.alert("Please type a valid character according to what we offer.")
    }

    
}