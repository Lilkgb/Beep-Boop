function range(start, end){
  if (end - start === 0) {
    return [start + 0];
  }else {
    var list = range(start, end -1);
    list.push(end);
    return list;
  }
}
function BeepBoop(string) {
  if (number === 1)
  replace(1, "Beep");
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var start = parseInt($("#startNumber").val());
    var end = parseInt($("#endNumber").val());
    var startFinish = range(start, end);
    var numToString = startFinish.toString();
    var result = BeepBoop(numToString);
    console.log(result);
  });
  // return result;
});
