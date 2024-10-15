function validateForm() {
    const form = document.forms['myForm'];
    const value = form['fname'].value;  //dynamic value syntax

    if(value === '') {
        alert('You must type name');
        return false
    }
}