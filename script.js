//object to store details
let userDetailsDatabase = {}

function getUserDetails(){ 
//Username
let userName = prompt("Enter preferred username")
if (userName === null) {
    return
}

function validateUserName(userName) {
if (userName.length < 10 && userName.length > 0) {
    return true
}  else {
    return false
}
}

while(validateUserName(userName) === false){
    userName = prompt("Username must be less than 10 and greaterr than 0")
}

userDetailsDatabase["UserName"] = userName

//Email
let email = prompt("Enter your email address")
if (email === null) {
    return
}

function validateEmail(email) {
    const emailCheck =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailCheckResult = emailCheck.test(email);
if (emailCheckResult === true) {
    return true
}  else {
    return false
}
}

while(validateEmail(email) === false){
    email = prompt("Enter a valid email address")
}

userDetailsDatabase["Email"] = email


//Phone Number
let phoneNumber = prompt("Enter your phone number")
if (phoneNumber === null) {
    return
}

function validatePhoneNumber(phoneNumber) {
if (phoneNumber.length === 11) {
    return true
}  else {
    return false
}
}

while(validatePhoneNumber(phoneNumber) === false){
    phoneNumber = prompt("Phone number must be 11 digits")
}

userDetailsDatabase["PhoneNumber"] = phoneNumber


//Password
let password = prompt("Enter your password")
if (password === null) {
    return
}

function validatePassword(password) {
if (password.length > 6) {
    return true
}  else {
    return false
}
}

while(validatePassword(password) === false){
    password = prompt("Password must not be less than 6 digits")
}

userDetailsDatabase["Password"] = password

//Confirm Password
let confirmPassword = prompt("Confirm your password")
if (confirmPassword === null) {
    return
}

function validateConfirmPassword(confirmPassword) {
if (confirmPassword === password) {
    return true
}  else {
    return false
}
}

while(validateConfirmPassword(confirmPassword) === false){
    confirmPassword = prompt("Confirm password does not match password")
}
userDetailsDatabase["Confirm Password"] = confirmPassword

}
 function displayUserDetails () {
    alert(`Your Details:\n\nUser name: ${userDetailsDatabase.UserName}\nEmail: ${userDetailsDatabase.Email}\nPhone Number: ${userDetailsDatabase.PhoneNumber}`)
 }
