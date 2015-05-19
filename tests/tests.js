Tinytest.add("Snap.svg - correct export", function(test) {
  // Simply check 'Snap' is not undefined...
  test.isNotUndefined(Snap, "Snap doesn't seem to be correctly exported");
});

Tinytest.add("Snap.svg - sample svg creation", function(test) {
  // Check we can create a Snap.svg surface
  var snap = Snap();
  test.isNotUndefined(snap, "Snap couldn't create a surface");
});