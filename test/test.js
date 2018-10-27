const cal = require('../cal.js')
const assert = require('assert');
var price = cal.calculatePrice(10)
console.log(price)

// describe('測試標題', function(){
//     it('測試內容', function(done){
//         // 進行測試
//     })
//     it('測試內容2', function(done){
//         // 進行測試
//     })
// })

describe('#test caculate result', () => {
  it('should return 700', done => {
    var price = cal.calculatePrice(10)
    assert.equal(price, 700);
    done()
  })
  it('should return 0', done => {
    var price = cal.calculatePrice(0)
    assert.equal(price, 0);
    done()
  })
  it('should return 160', done => {
    var price = cal.calculatePrice(2)
    assert.equal(price, 2*80);
    done()
  })
  it('should return 7000', done => {
    var price = cal.calculatePrice(100)
    assert.equal(price, 100*70);
    done()
  })

})