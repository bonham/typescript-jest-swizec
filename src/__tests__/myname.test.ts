
const { myname } = jest.requireActual("../mymod")


describe("myname function", () => {
  test("is my name", () => {
    expect(myname()).toBe("Michael")
  })
})

// required with this small example
// to make the isolatedModules config happy
export {}