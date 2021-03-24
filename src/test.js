/** @format */
 
const arr = [2, 3, 4, 5, 8, 9, 12, 13];
const result = [];

//for same pair inslusive
function checkPair(a) {
  for (var i of arr) {
    for (var j of arr) {
      i + j === a && !result.includes([i, j]) && result.push([i, j]);
    }
  }
  if (!result.length) document.write(`no pair of numbers that sums to ${a}`);
  else {
    document.write(...result);
  }
}

// for same pair not inclusive
function checkSumPair(a) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      arr[i] + arr[j] === a && result.push([arr[i], arr[j]]);
    }
  }
  if (!result.length) document.write(`no pair of numbers that sums to ${a}`);
  else {
    document.write(...result);
  }
}
