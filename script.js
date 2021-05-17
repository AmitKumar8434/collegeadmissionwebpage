const sname = document.querySelector('#sname');
const submitbutton = document.querySelector('#sub');
const dept = document.querySelector('#dept');
const hostel = document.querySelectorAll('#preferhostel');
const Firstgraduate = document.querySelector('#firstgraduate');
const phno = document.querySelector('#phno');
const  aid= document.querySelector('#aid');
const adate = document.querySelector('#admissiondate');
var admissionfee;
var tutionfee;
var hostelfee = 0;
var totalfee;

submitbutton.addEventListener('click', () => {
    if (sname.value === "" || phno.value=="" || aid.value=="" || adate.value=="" ) {
        alert("Please Fill required fields");
        return;
    }
   
     
    if (dept.value == "cse") {
        admissionfee = 200000;
        tutionfee = 50000;
    }
    else if (dept.value == "it") {
        admissionfee = 200000;
        tutionfee = 50000;
    }
    else if (dept.value == "electrical") {
        admissionfee = 150000;
        tutionfee = 40000;
    }
    else if (dept.value == "mechanical") {
        admissionfee = 100000;
        tutionfee = 30000;
    }
     totalfee = admissionfee + tutionfee;
    var checkedValue = null;
    for (var i = 0; hostel[i]; ++i) {
        if (hostel[i].checked) {
            checkedValue = hostel[i].value;
            break;
        }
    }
    if (checkedValue == "yes") {
        hostelfee=50000;
        totalfee = totalfee + hostelfee;
    }
    if (Firstgraduate.checked) {
        totalfee = totalfee - 25000;
    }
    document.getElementById('result').innerHTML=display();

})
function display() {
    return `
    <p> Hi ${sname.value}</p>
    <p> Fee Details-</p>
    <p>  Admission Fee: ${admissionfee}</p>
    <p> Tution Fee: ${tutionfee}</p>
    <p> Hostel Fee: ${hostelfee}</p>
    <p> Total Fee : ${totalfee}</p>
    `;
}