const Validate = () => {

    //input variables
    let firstName = document.getElementById("firstname");
    let lastName = document.getElementById('lastname');
    let country = document.getElementById('country');
    let gender = document.getElementById('gender');
    let dob = document.getElementById('dob');
    let stateDistrict = document.getElementById('state-district');
    let town = document.getElementById('town');
    let zipCode = document.getElementById('zipcode');
    let phoneNumber1 = document.getElementById('phonenumber1');
    let phoneNumber2 = document.getElementById('phonenumber2');
    let email = document.getElementById('email');

    //input error variables
    let FNError = document.getElementById("FNErr");

    const nameRegex = /^[a-zA-Z]+$/;

    //validating firstname

    if (firstName.value == '' || firstName.value.length < 2 || firstName.value.length > 255 || !firstName.value.match(nameRegex)) {
        firstName.style.border = '1px solid red';
        firstName.placeholder= 'Enter Your first Name here'
        return false

    } else {
        firstName.style.border = '1px solid green';

    }

    //validating lastname
    if (lastName.value == '' || lastName.value.length < 2 || lastName.value.length > 255 || !lastName.value.match(nameRegex)) {
        lastName.style.border = '1px solid red';
        lastName.placeholder= 'Enter Your Last Name here'
        return false
    }
    else {
        lastName.style.border = '1px solid green';

    }

    //validating dob

    let today = new Date();
    let dateofBirth = new Date(dob.value);
    let age = today.getFullYear() - dateofBirth.getFullYear();
    let userAge = age;

    if (dob.value == '' || userAge < 18) {
        dob.style.border = '1px solid red';
        dob.placeholder= 'Select your Date of Birth'
        return false
    }else {
        dob.style.border = '1px solid green';

    }


    //validating gender
    if (gender.value == ''){
        gender.style.border = '1px solid red';
        gender.placeholder= 'Select your Gender'
        return false
    }
    else {
        gender.style.border = '1px solid green';

    }

    //validating country
    if (country.value == '') {
        country.style.border = '1px solid red';
        country.placeholder= 'Select your Country of Residence'
        return false
    }else{
        country.style.border = '1px solid green';
    }

    //validating State/District
    
    if (stateDistrict.value == '') {
        stateDistrict.style.border = '1px solid red';
        stateDistrict.placeholder= 'Enter your State/District here'
        return false
    }else {
        stateDistrict.style.border = '1px solid green';

    }

    //validating town
   
    if (town.value == '') {
        town.style.border = '1px solid red';
        town.placeholder= 'Enter your Town here'
        return false
    }else {
        town.style.border = '1px solid green';

    }

    //validating zip code
    if (zipCode.value == '') {
        zipCode.style.border = '1px solid red';
        return false
    }else {
        zipCode.style.border = '1px solid green';

    }
    //validating phone number1
    if (phoneNumber1.value == '') {
        phoneNumber1.style.border = '1px solid red';
        return false
    }else {
        phoneNumber1.style.border = '1px solid green';

    }

    //validating phone number2
    if (phoneNumber2.value == '') {
        phoneNumber2.style.border = '1px solid red';
        return false
    }else {
        phoneNumber2.style.border = '1px solid green';

    }

    // validating email
     const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (email.value == "") {
       email.style.border = "1px solid red"
       return false;
     }else if (!email.value.match(emailregex)) {
       email.style.border = "1px solid red"
       return false;
     }else {
       email.style.border = "1px solid green"
     }

}