window.addEventListener('DOMContentLoaded', async () => {
  try {
    const foo = await import('comlink?only=wrap')

    // eslint-disable-next-line no-console
    console.log(foo)
    //          |^| Will be object with wrap function
  }
  catch (error) {

  }
})
