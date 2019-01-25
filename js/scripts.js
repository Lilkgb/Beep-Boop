function range(start, end){
  if (end - start === 0) {
    return [start + 0];
  }else {
    var list = range(start, end -1);
    list.push(end);
    return list;
  }
}
function numberToText(string) {

}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var start = parseInt($("#startNumber").val());
    var end = parseInt($("#endNumber").val());
    var startFinish = range(start, end);
    var numToString = startFinish.toString();
    console.log(numToString);
  });
  // return result;
});
