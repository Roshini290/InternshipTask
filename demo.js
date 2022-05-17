
function validate() {
    var First = document.getElementById("Fname").value;
    var Last = document.getElementById("Lname").value;
    var House = document.getElementById("Hno").value;
    var Str = document.getElementById("str").value;
    var Cit = document.getElementById("city").value;
    var State = document.getElementById("St").value;
    var country = document.getElementById("Ctr").value;
    var Pi = document.getElementById("pin").value;
    if (First == "" || Last == "" || House == "" || Str == "" || Cit == "" || State == "" || country == "" || Pi == "") {
        alert("Please fill all the fields...");
    }
    else {
        let text = "Are you sure want to submit...";
        if (confirm(text) == true) {
            alert("Your Response has been Submitted Successfully..Thank You!!!");
            document.getElementById("details").innerHTML = " 'Hay' " + Last + "  " + First + " " + "Your Address is------------" + "<br>" + House + "," + Str + "," + "<br>" + Cit + "," + State + "." + "<br>" + country + "<br>" + "pincode-" + Pi + ".";

        }
    }
}
function Clear() {
    document.getElementById("Myform").reset();
    document.getElementById("details").innerHTML = "";
}