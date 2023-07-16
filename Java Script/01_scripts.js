function clickForm() {
  let fname = document.getElementById("fname").value;
  let mname = document.getElementById("mname").value;
  let lname = document.getElementById("lname").value;
  let addr = document.getElementById("addr").value;
  let birth = document.getElementById("birth").value;
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let scity = document.getElementById("scity").value;
  let mno = document.getElementById("mno").value;
  let eid = document.getElementById("eid").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;

  if (fname == "" || fname == null) {
    document.getElementById("msg1").innerText = "Enter First Name";
    return false;
  } else if (mname == "" || mname == null) {
    document.getElementById("msg2").innerText = "Enter Middle Name";
    return false;
  } else if (lname == "" || lname == null) {
    document.getElementById("msg3").innerText = "Enter Last Name";
    return false;
  } else if (addr == "" || addr == null) {
    document.getElementById("msg4").innerText = "Enter Address";
    return false;
  } else if (birth == "" || birth == null) {
    document.getElementById("msg5").innerText = "Enter Date Of Birth";
    return false;
  } else if (male == false && female == false) {
    document.getElementById("msg6").innerText = "Select Gender";
    return false;
  } else if (scity == "-1") {
    document.getElementById("msg7").innerText = "Select City";
    return false;
  } else if (mno == "" || mno == null) {
    document.getElementById("msg8").innerText = "Enter Mobilr No";
    return false;
  } else if (eid == "" || eid == null) {
    document.getElementById("msg9").innerText = "Enter Email Id";
    return false;
  } else if (pass == "" || pass == null) {
    document.getElementById("msg10").innerText = "Enter Password";
    return false;
  } else if (cpass == "" || cpass == null) {
    document.getElementById("msg10").innerText = "Enter Password";
    return false;
  } else {
    document.getElementById("msg1").innerText = "";
    document.getElementById("msg2").innerText = "";
    document.getElementById("msg3").innerText = "";
    document.getElementById("msg4").innerText = "";
    document.getElementById("msg5").innerText = "";
    document.getElementById("msg6").innerText = "";
    document.getElementById("msg7").innerText = "";
    document.getElementById("msg8").innerText = "";
    document.getElementById("msg9").innerText = "";
    document.getElementById("msg10").innerText = "";
    return false;
  }
}

// blur event

function blankCheck(blnk, spanid) {
  if (blnk.value == "" || blnk.value == null) {
    document.getElementById(spanid).innerText = "Please, fill this field";
    return false;
  } else {
    document.getElementById(spanid).innerText = "";
    return false;
  }
}

// compare password

// show password

// checkName

function checkName(name, colam) {
  let expname = /^[A-Za-z]*$/;
  if (!expname.test(name.value) || name.value.lenght < 2) {
    document.getElementById(colam).innerText = "Enter Proper Name";
    return false;
  } else {
    document.getElementById(colam).innerText = "";
    return false;
  }
}

// checkGender

function checkGender(gender, spanid) {
  if (gender.checked == false && gender.checked == false) {
    document.getElementById(spanid).innerText = "Select Gender";
    return false;
  } else {
    document.getElementById(spanid).innerText = "";
    return false;
  }
}

// show password

function showpassword() {
  let passwd = document.getElementById("pass");
  if (passwd.type == "password") {
    passwd.type = "text";
  } else {
    passwd.type = "password";
  }
}

// check mobileno

function mobilCheck() {
  let mno = document.getElementById("mno").value;
  let expmobile = /^[0-9]*$/;
  let emno = /^[6-9]/;

  if (!expmobile.test(mno) || !emon.test(mno)) {
    document.getElementById("msg8").innerText = "Enter Valid Number";
    return false;
  } else {
    document.getElementById("msg8").innerText = "";
  }
}

// email check

function emailCheck() {
  let eid = document.getElementById("eid").value;
  let exmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

  if (!exmail.test(eid)) {
    document.getElementById("msg9").innerText = "Enter Valid Email";
    return false;
  } else {
    document.getElementById("msg9").innerText = "";
    return false;
  }
}

//check password

function passcheck() {
  let pass = document.getElementById("pass").value;
  let expass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (!expass.test(pass)) {
    document.getElementById("msg10").innerText = "Enter Proper Password";
    return false;
  } else {
    document.getElementById("msg10").innerText = "";
    return false;
  }
}

// show password

function showpass() {
  let pass = document.getElementById("pass");
  let cpass = document.getElementById("cpass");
  if (pass.type == "password" || cpass.type == "password") {
    pass.type = "text";
    cpass.type = "text";
  } else {
    pass.type = "password";
    cpass.type = "password";
  }
}
