const returnFirstTwoDrivers = function(arrayofdrivernames) {
    console.log("this is your parameter arrayofdrivernames: ", arrayofdrivernames)

return ([arrayofdrivernames[0],arrayofdrivernames[1]])
}
const returnLastTwoDrivers = function(arrayofdrivernames) {
    return ([arrayofdrivernames[2],arrayofdrivernames[3]])
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}
function fareDoubler() {
    return 20
}
function fareTripler() {
    return 36
}

function selectDifferentDrivers(arrayOfDrivers, driverSelectionFunction) {
    return driverSelectionFunction(arrayOfDrivers);
}


const allDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const firstTwoDrivers = selectDifferentDrivers(allDrivers, returnFirstTwoDrivers);
console.log(firstTwoDrivers); 


const lastTwoDrivers = selectDifferentDrivers(allDrivers, returnLastTwoDrivers);
console.log(lastTwoDrivers);




returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])