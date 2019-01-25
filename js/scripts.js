
function range(start, end){
  if (end - start === 1) {
    return [start + 0];
  }else {
    var list = range(start, end -1);
    list.push(end);
    return list;
  }
}
console.log(range(49,59));
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#enterNumber").val());
    var result = range(input);
    console.log(result, 23);
  });
  // return result;
});
