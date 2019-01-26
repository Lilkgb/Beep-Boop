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
  var res = numToString.includes('1');
  if(res === true) {
    console.log("THIS WORKS!");
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
