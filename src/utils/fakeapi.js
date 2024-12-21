export const fakeApi = (data) => {
  return new Promise(resovle => {
    setTimeout(() => {
      resovle(data);
    }, 3000)
  })
}