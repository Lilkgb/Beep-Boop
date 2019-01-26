function range(start, end){
  if (end - start === 0) {
    return [start + 0];
  }else {
    var list = range(start, end -1);
    list.push(end);
    return list;
  }
}
function ifResult(numToString) {
  var n1 = numToString.includes('1');
  var n2 = numToString.includes('2');
  var n3 = numToString.includes('3');
  if(n1 === true) {
    console.log("I see a 1");
    return numToString;
  }
  else if (n2 === true) {
    console.log('I see a 2');
    return numToString;
  }
  else if (n3 === true) {
    console.log("I see a 3");
    return numToString;
  }
  else {
    return numToString;
  }
}
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var start = parseInt($("#startNumber").val());
    var end = parseInt($("#endNumber").val());
    var startFinish = range(start, end);
    var numToString = startFinish.toString();
    var result = ifResult(numToString);
    $(".range").text(result);
    // console.log(result);
  });
  // return result;
});
