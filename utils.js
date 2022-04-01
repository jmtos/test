const capitalize = (s) => {
  return s.split(" ").map(word => {
    var l1 = word.slice(0, 1)
    var l2 = word.slice(1, word.length)
    var nword = l1.toUpperCase() + l2
    return nword
  }
  )
    .join(' ')
}
module.exports = capitalize
