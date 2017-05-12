function counterInterface() {
  var counter = new Counter();
  $('#add').click(function() {
    counter.add();
    $('#number').text(counter.getCount());
  });
}
