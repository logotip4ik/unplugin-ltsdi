window.addEventListener('DOMContentLoaded', async () => {
  try {
    // @ts-expect-error idk how to setup this
    const foo = await import('comlink?only=wrap')

    // eslint-disable-next-line no-console
    console.log(foo)
  }
  catch (error) {

  }
})
