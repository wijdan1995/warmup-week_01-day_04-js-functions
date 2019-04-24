const isLeapYear = function (year) {
    if (year % 4 == 0 &&
        year % 100 != 0 ||
        year % 400 == 0) {
        return ("True")
    } else {
        return ("False")
    }
}
// or
const isLeapYear = function (year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return ("True")
    } else if (year % 400 == 0) {
        return ("True")
    } else {
        return ("False")
    }
}
