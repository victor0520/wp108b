/*參考自老師的範例，再自己寫出來*/
var c2e = { 貓: 'cat', 狗: 'dog', 一隻: 'a', 追: 'chase', 吃: 'eat' }

function mt (c) {
  var e = []
  for (i in c) {
    var cword = c[i]
    var eword = c2e[cword]
    e.push(eword)
  }
  return e
}

var e = mt(process.argv.slice(2))
console.log(e)
/*對這個檔案的原始碼我可以完全理解*/