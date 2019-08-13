var makeDate = function() {
    var d = new Date();
    var formattedDate = "";

    // += adds each month, date, and year to the formattedDate
    formattedDate += (d.getMonth() + 1) + "_";

    formattedDate += d.getDate() + "_";

    formattedDate += d.getFullYear();

    return formattedDate;
};

module.exports = makeDate;