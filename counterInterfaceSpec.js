describe("Counter Interface", function() {
  beforeEach(function() {
    $('#test_container').html(
      '<button id="add">Add one</button>' +
      '<div id="number">0</div>'
    )
    counterInterface()
  })

  it("increments the number when I press the button", function() {
    $("#add").trigger('click')
    var numberText = $('#number').text()
    expect(numberText).toEqual("1")
  })

  it("increments the number twice when I press the button twice", function() {
    $("#add").trigger('click')
    $("#add").trigger('click')
    var numberText = $('#number').text()
    expect(numberText).toEqual("2")
  })
})
