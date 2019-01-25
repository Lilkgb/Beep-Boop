function range(start, end){
  if (end - start === 1) {
    return [start + 0];
  }else {
    var list = range(start, end -1);
    list.push(end -1);
    return list;
  }
}
console.log(range(49,200));
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#enterNumber").val());

  });
  // return result;
});
