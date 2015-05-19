Package.describe({
  name: 'snapsvg',
  summary: 'Snap.svg (official): The JavaScript library for modern SVG graphics.',
  version: '0.4.0',
  git: 'https://github.com/MeteorPackaging/snapsvg-wrapper.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles([
    'upstream/dist/snap.svg.js',
  ], 'client');
  // api.export('jsPDF');
});

Package.on_test(function(api) {
  api.use('snapsvg');

  api.use([
    'tinytest',
    'test-helpers'
  ], ['client']);

  api.add_files([
    'tests/tests.js',
  ], ['client']);
});