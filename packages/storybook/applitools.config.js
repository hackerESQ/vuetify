const batchName = `${process.env.TRAVIS_COMMIT || 'manual'} - ${process.env.BATCH || 'unknown'}`

module.exports = {
  appName: 'vuetify-test',
  batchName,
  browser: [
    { width: 800, height: 600, name: 'chrome' }
  ]
}
