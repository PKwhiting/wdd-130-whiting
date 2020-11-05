document.getElementById("x-icon").style.display = "none";
document.getElementById("open-menu").style.display = "none";



document.getElementById("nav-icon").addEventListener("click", function() {
    document.getElementById("open-menu").style.display = "inline";
    document.getElementById("x-icon").style.display = "inline";
    document.getElementById("nav-icon").style.display = "none";
  });

  document.getElementById("x-icon").addEventListener("click", function() {
    document.getElementById("x-icon").style.display = "none"; 
    document.getElementById("nav-icon").style.display = "inline";
    document.getElementById("open-menu").style.display = "none";
  });
  

document.getElementById('submit').addEventListener("click", function() {
  let firstName = document.getElementById('fname').value;
  let lastName = document.getElementById('lname').value;
  var para1 = document.getElementById('form-output'); 
  para1.innerHTML = 'Your name is ' + firstName + ' ' + lastName;   
});