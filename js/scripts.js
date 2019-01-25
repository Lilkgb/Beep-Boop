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
  if(numToString.indexOf("1") === 0 || numToString.indexOf("1") ===1)
  console.log("ok this works");
  return numToString;
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
    console.log(result);
  });
  // return result;
});
