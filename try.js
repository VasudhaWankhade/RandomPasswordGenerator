let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()'
let passwordLength = 12;
// let a = characters.substring(10)
// console.log(a)
let password = ""
for (let i = 0; i <= passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * passwordLength)
    password = password + characters.substring(randomNum, randomNum + 1)
    console.log(password)
}