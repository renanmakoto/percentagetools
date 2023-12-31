const fiveHours = 65
const tenHours = 120
const fifteenHours = 180
const twentyHours = 225
const thirtyFiveHours = 325
const regFee = 100

let inputNumberOfHours = document.getElementById("numberOfHours")
let inputNumberOfWeeks = document.getElementById("numberOfWeeks")

function calculation() {
    let numberOfHours = inputNumberOfHours.value
    let hours = parseInt(numberOfHours)

    let numberOfWeeks = inputNumberOfWeeks.value
    let weeks = parseInt(numberOfWeeks)  

    if (hours == 5 && weeks == 1) {

        let totalFee = regFee + fiveHours

        numberOfHoursDiv.innerHTML = `<p>The cost for ONE WEEK is $ ${fiveHours}.00</p>`
        regDiv.innerHTML = `<p>Non-Refundable Registration Fee: $ 100.00</p>`
        totalDiv.innerHTML = `<p>TOTAL: $ ${totalFee}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`

    } else if (hours == 5 && weeks > 1) {

        fiveHoursTimesWeeks = fiveHours * weeks

        let totalFee = regFee + fiveHoursTimesWeeks

        numberOfHoursDiv.innerHTML = `<p> 5 hours per week X ${weeks} weeks = $ ${fiveHoursTimesWeeks}.00</p>`
        regDiv.innerHTML = `<p>Non-Refundable Registration Fee: $ 100.00</p>`
        totalDiv.innerHTML = `<p>TOTAL: $ ${totalFee}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`

    } else if (hours == 10 && weeks == 1) {

        let totalFee = regFee + tenHours

        numberOfHoursDiv.innerHTML = `<p>The cost for ONE WEEK is $ ${tenHours}.00</p>`
        regDiv.innerHTML = `<p>Non-Refundable Registration Fee: $ 100.00</p>`
        totalDiv.innerHTML = `<p>TOTAL: $ ${totalFee}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`

    } else if (hours == 10 && weeks > 1) {

        tenHoursTimesWeeks = tenHours * weeks

        let totalFee = regFee + tenHoursTimesWeeks

        numberOfHoursDiv.innerHTML = `<p> 10 hours per week X ${weeks} weeks = $ ${tenHoursTimesWeeks}.00</p>`
        regDiv.innerHTML = `<p>Non-Refundable Registration Fee: $ 100.00</p>`
        totalDiv.innerHTML = `<p>TOTAL: $ ${totalFee}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`

    } else if (hours == 15 && weeks == 1) {

        let totalFee = regFee + fifteenHours        

        numberOfHoursDiv.innerHTML = `<p> The cost for ONE WEEK is $ ${fifteenHours}.00</p>`
        regDiv.innerHTML = `<p>Non-Refundable Registration Fee: $ 100.00</p>`
        totalDiv.innerHTML = `<p>TOTAL: $ ${totalFee}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`

    } else if (hours == 15 && weeks > 1) {

        fifteenTimesWeeks = fifteenHours * weeks

        let totalFee = regFee + fifteenTimesWeeks

        numberOfHoursDiv.innerHTML = `<p> 15 hours per week X ${weeks} weeks = $ ${fifteenTimesWeeks}.00</p>`
        regDiv.innerHTML = `<p>Non-Refundable Registration Fee: $ 100.00</p>`
        totalDiv.innerHTML = `<p>TOTAL: $ ${totalFee}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`

    } else if (hours == 20 && weeks == 1) {
        
        let totalFee = regFee + twentyHours 
   
        numberOfHoursDiv.innerHTML = `<p>The cost for ONE WEEK is $ ${twentyHours}.00</p>`
        regDiv.innerHTML = `<p>Non-Refundable Registration Fee: $ 100.00</p>`
        totalDiv.innerHTML = `<p>TOTAL: $ ${totalFee}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`

    } else if (hours == 20 && weeks > 1) {

        twentyTimesWeeks = twentyHours * weeks

        let totalFee = regFee + twentyTimesWeeks

        numberOfHoursDiv.innerHTML = `<p> 20 hours per week X ${weeks} weeks = $ ${twentyTimesWeeks}.00</p>`
        regDiv.innerHTML = `<p>Non-Refundable Registration Fee: $ 100.00</p>`
        totalDiv.innerHTML = `<p>TOTAL: $ ${totalFee}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`

    } else if (hours == 35 && weeks == 1) {

        let totalFee = regFee + thirtyFiveHours 

        numberOfHoursDiv.innerHTML = `<p> The cost for ONE WEEK is $ ${thirtyFiveHours}.00</p>`
        regDiv.innerHTML = `<p>Non-Refundable Registration Fee: $ 100.00</p>`
        totalDiv.innerHTML = `<p>TOTAL: $ ${totalFee}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`

    } else if (hours == 35 && weeks > 1) {

        thirtyFiveTimesWeeks = thirtyFiveHours * weeks

        let totalFee = regFee + thirtyFiveTimesWeeks

        numberOfHoursDiv.innerHTML = `<p> 35 hours per week X ${weeks} weeks = $ ${thirtyFiveTimesWeeks}.00</p>`
        regDiv.innerHTML = `<p>Non-Refundable Registration Fee: $ 100.00</p>`
        totalDiv.innerHTML = `<p>TOTAL: $ ${totalFee}.00</p>`
        refresh.innerHTML = `<h4>REFRESH THE PAGE TO CALCULATE AGAIN</h4>`

    } else {

        window.alert("Please type a valid character according to what we offer.")

    }
}
