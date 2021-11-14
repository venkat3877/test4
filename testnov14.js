function ansfunc(id) {
  if (id == "1") {
    var sign = document.getElementById("bt1").innerText;
    if (sign == "+") {
      var p1 = document.getElementById("ans1");
      p1.innerText = "Yes, we accept any type of Credit cards";
      p1.style.height = "50px";
      p1.style.paddingTop = "25px";
      document.getElementById("bt1").innerText = "-";
    } else {
      var p1 = document.getElementById("ans1");
      p1.innerText = "";
      document.getElementById("bt1").innerText = "+";
      p1.style.height = "0px";
      p1.style.paddingTop = "0px";
    }
  } else if (id == "2") {
    var sign = document.getElementById("bt2").innerText;
    if (sign == "+") {
      var p2 = document.getElementById("ans2");
      p2.innerText = "Yes, we support the local farmers";
      document.getElementById("bt2").innerText = "-";
      p2.style.height = "50px";
      p2.style.paddingTop = "25px";
    } else {
      var p2 = document.getElementById("ans2");
      p2.innerText = "";
      document.getElementById("bt2").innerText = "+";
      p2.style.height = "0px";
      p2.style.paddingTop = "0px";
    }
  } else {
    var sign = document.getElementById("bt3").innerText;
    if (sign == "+") {
      var p3 = document.getElementById("ans3");
      p3.innerText = "We  mostly use the organic ingredients";
      document.getElementById("bt3").innerText = "-";
      p3.style.height = "50px";
      p3.style.paddingTop = "25px";
    } else {
      var p3 = document.getElementById("ans3");
      p3.innerText = "";
      document.getElementById("bt3").innerText = "+";
      p3.style.height = "0px";
      p3.style.paddingTop = "0px";
    }
  }
}
