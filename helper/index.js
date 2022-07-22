// const emoji = require('emoji-js');
const {
  nativeToUnified,
  nativeToName,
  unifiedToNative,
  nameToNative 
} = require('emoji-convertor')


function convertEmoji(params) {
  return nameToNative(params)
}
console.log(convertEmoji('smile'));


// console.log(
//   convertEmoji('wow'),
//   convertEmoji('nice')
// );
// 

module.exports = convertEmoji