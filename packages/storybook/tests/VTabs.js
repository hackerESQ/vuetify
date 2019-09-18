import setup from "./bootstrap"

setup('VTabs', 'vtabs--default', ({ test, eyes }) => {
  test('render', async () => {
    await eyes.checkWindow('Base')
  })

  test('switch tab', async t => {
    await eyes.checkWindow('Base')
    await t.click('#bar')
    await eyes.checkWindow('Click')
  })
})

