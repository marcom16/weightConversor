const expect = require('chai').expect
const convertWeight = require('..').default

describe('#convertWeight', function () {
  it('Funciona perfectamente', function () {
    const arr = [1000, 62.5, 28350, 28.35, 16000, 1000, 453600, 453.6, 35.3, 2.205, 1000, 1, 35273.991, 2204.6220000000003, 1000000, 1000]
    const arrStr = arr.toString()
    const result = [
                convertWeight("oz", "oz", 1000),
                convertWeight("oz", "lb", 1000),
                convertWeight("oz", "g", 1000),
                convertWeight("oz", "kg", 1000),

                convertWeight("lb", "oz", 1000),
                convertWeight("lb", "lb", 1000),
                convertWeight("lb", "g", 1000),
                convertWeight("lb", "kg", 1000),

                convertWeight("g", "oz", 1000),
                convertWeight("g", "lb", 1000),
                convertWeight("g", "g", 1000),
                convertWeight("g", "kg", 1000),

                convertWeight("kg", "oz", 1000),
                convertWeight("kg", "lb", 1000),
                convertWeight("kg", "g", 1000),
                convertWeight("kg", "kg", 1000)
              ]
    const resultStr = result.toString()
    expect(resultStr).to.equal(arrStr)
  })
})

