const calculateButton = document.querySelector('.calculate');
const monthAndDay = [
    { month: 'Jan', day: 31},
    { month: 'Feb', day: 28},
    { month: 'Mar', day: 31},
    { month: 'Apr', day: 30},
    { month: 'May', day: 31},
    { month: 'Jun', day: 30},
    { month: 'Jul', day: 31},
    { month: 'Aug', day: 31},
    { month: 'Sep', day: 30},
    { month: 'Oct', day: 31},
    { month: 'Nov', day: 30},
    { month: 'Dec', day: 31}
]

calculateButton.addEventListener('click', () => {

    let enteredFirstDate = document.querySelectorAll('.date')[0].value;
    let firstDateInMilisecond = new Date(enteredFirstDate).getTime()
    let secondDateInMilisecond = new Date().getTime()
    let firstDateYear = new Date(enteredFirstDate).getFullYear()
    let firstDateMonthIndex = new Date(enteredFirstDate).getMonth()
    let secondDateYear = new Date().getFullYear()
    let leapYears = []

    for (let i = firstDateYear; i <= secondDateYear; i++ ){
        if (i % 4 == 0) {
            leapYears.push(i)
        }
    }
    
    
    let timeDiffMs = secondDateInMilisecond - firstDateInMilisecond
    const msToDay = 1000 * 3600 * 24
    let dayDiff = Math.floor(timeDiffMs / msToDay)

    if (dayDiff < 0) dayDiff = dayDiff * -1
    

    calculate(dayDiff, leapYears)

    function calculate(dayDiff, leapYears) {
    
        let totalDays = dayDiff
        let noOfLeapYear = leapYears.length
        let actualDay = totalDays - noOfLeapYear
        let noOfYear = Math.floor(actualDay / 365)
        let month = []
        let day = Math.floor(actualDay % 365)

        if (monthAndDay[firstDateMonthIndex] == null || monthAndDay[firstDateMonthIndex] == undefined) {
            alert('Atleast select first date')
        }

        while (day >= monthAndDay[firstDateMonthIndex].day) {
            day = day - monthAndDay[firstDateMonthIndex].day
            month.push(monthAndDay[firstDateMonthIndex].month)
            firstDateMonthIndex++
        }

        let noOfMonth = month.length
        let noOfDays = day

        var yearBox = (document.querySelector('.year').innerHTML = noOfYear)
        var monthBox = (document.querySelector('.month').innerHTML = noOfMonth)
        var dayBox = (document.querySelector('.day').innerHTML = noOfDays)    
    }
})
