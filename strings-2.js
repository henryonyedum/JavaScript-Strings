console.log ("hello")
const userName = prompt("Enter your first name...")
const greeting =`How are you doing today, `
document.getElementById('output').textContent = greeting + userName + " ?"

userText = prompt("Enter some text here:");
userText = userText.replaceAll( "a", "@");
document.getElementById('output').textContent = userText;