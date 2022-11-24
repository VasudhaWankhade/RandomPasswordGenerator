var passwordE = document.querySelector('#password')

function genPassword() {
    let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()'
    let passLength = 12
    let password = ""
    for (let i = 0; i < passLength; i++) {
        let randomNum = Math.floor(Math.random() * characters.length)
        let str = characters.substring(randomNum, randomNum + 1)
        password = password + str
    }
    passwordE.value = password
}

function copyPassword() {
    passwordE.select();
    passwordE.setSelectionRange(0, 999)
    document.execCommand("copy");
}