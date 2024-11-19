document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const age = document.getElementById("birthday").value;
    const from = document.getElementById("country").value;
    const comments = document.getElementById("comments").value;
  
    if (!name || !birthday || !comments) {
      alert("Name, Birthday, and Comments are required!");
      return;
    }
  
    if (!birthday  || birthday ) {
      alert("Happy birthday!");
      return;
    }
  

  
    const data = {
      name: name,
      age: age,
      from: from,
      comments: comments,
      rating: rating,
    };
  
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true); 
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        document.getElementById("information").innerHTML = response.information;
        document.getElementById("myForm").style.display = "none";
      } else if (xhr.readyState === 4) {
        alert("Error! Try again later");
      }
    };
  
    xhr.send(JSON.stringify(data));
    console.log(data);
  });