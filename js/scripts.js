function range(end) {
var result = '';
  for (var i=0; i <= end; i++) {
    if (i.toString().includes("3")) {
      result = result.concat("I'm Sorry Bro, ");
    }
    else if(i.toString().includes("2")) {
      result = result.concat("boop, ");
    }
    else if(i.toString().includes('1')) {
      result = result.concat("beep, ");
    }
    else {
      result = result.concat(i + " ");
    }
  }
    return(result);
}
// function ifResult(numToString) {
//   var n1 = numToString.includes('1');
//   var n2 = numToString.includes('2');
//   var n3 = numToString.includes('3');
//   if(n1 === true) {
//     console.log("I see a 1");
//     return numToString;
//   }
//   else if (n2 === true) {
//     console.log('I see a 2');
//     return numToString;
//   }
//   else if (n3 === true) {
//     console.log("I see a 3");
//     return numToString;
//   }
//   else {
//     return numToString;
//   }
// }
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var end = parseInt($("#endNumber").val());
    var rangeNumbers = range(end);
    // var numToString = rangeNumbers.toString();
    $(".range").text(rangeNumbers);
    // console.log(result);
  });
  // return result;
});
