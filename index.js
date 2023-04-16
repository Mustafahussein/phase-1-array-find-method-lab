// code your solution here
function superbowlWin(array) {
    const win = array.find(obj => obj.result === "W");
    return win ? win.year : undefined;
}

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
];

//console.log(superbowlWin(record));