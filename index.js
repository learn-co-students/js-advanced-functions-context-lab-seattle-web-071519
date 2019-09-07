/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
 }

 function createEmployees(employees) {
     return employees.map(employee => {
         return createEmployeeRecord(employee)
     })
 }

function createEmployeeRecords(employees) {
    return employees.map(employee => {
        return createEmployeeRecord(employee)
    })
}

 function createTimeInEvent(timeIn) {
    let [date, hour] = timeIn.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return this
 }

 function createTimeOutEvent(timeOut) {
     let [date, hour] = timeOut.split(" ")
     this.timeOutEvents.push({
         hour: parseInt(hour),
         date: date,
         type: "TimeOut"
     })
     return this
 }

 function hoursWorkedOnDate(day) {
    let timeIn = this.timeInEvents.find(timeIn => {
        return timeIn.date == day
    })

    let timeOut = this.timeOutEvents.find(timeOut => {
        return timeOut.date == day
    })
    return (timeOut.hour - timeIn.hour) / 100
 }

 function wagesEarnedOnDate(day) {
    return hoursWorkedOnDate.call(this, day) * this.payPerHour
 }

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(employees) {
    return employees.reduce((accum, employee) => {
        return accum + allWagesFor.call(employee)
    }, 0)
}

function findEmployeebyFirstName(employees, firstName) {
    return employees.find(employee => {
        return employee.firstName == firstName
    })
}

// function payrollExpense() {

// }