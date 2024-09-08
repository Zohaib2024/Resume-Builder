// Function to add a new "Work Experience" field
function AddNewWorkField() {
    // Create a new textarea element
    var newNode = document.createElement('textarea');
    // Add CSS classes to the new textarea
    newNode.classList.add('form-control', 'WorkField', 'mt-2');
    // Set a placeholder for the textarea
    newNode.setAttribute('placeholder', 'Enter Here');
    // Get the Work section and the add button
    var workOb = document.getElementById('Workdiv');
    var workAddButton = document.getElementById('WeAddButtondiv');
    if (workOb && workAddButton) {
        // Insert the new textarea before the add button
        workOb.insertBefore(newNode, workAddButton);
    }
}
// Function to add a new "Qualification" field
function AddNewQualicationField() {
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'QualificationField', 'mt-2');
    newNode.setAttribute('placeholder', 'Enter Here');
    var qualificationOb = document.getElementById('QualificationDiv');
    var qualificationAddButton = document.getElementById('QualificationAddButtonDiv');
    if (qualificationOb && qualificationAddButton) {
        qualificationOb.insertBefore(newNode, qualificationAddButton);
    }
}
// Function to add a new "Link" field
function AddNewlinkField() {
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'linkField', 'mt-2');
    newNode.setAttribute('placeholder', 'Enter Here');
    var linkOb = document.getElementById('linkDiv');
    var linkAddButton = document.getElementById('linkButtonDiv');
    if (linkOb && linkAddButton) {
        linkOb.insertBefore(newNode, linkAddButton);
    }
}
// Function to generate the CV
function GenerateCV() {
    // Get input values and trim spaces
    var nameField = document.getElementById('namefield').value.trim();
    var DomainField = document.getElementById('DomainField').value.trim();
    var contactField = document.getElementById('Contactfield').value.trim();
    var addressField = document.getElementById('addressField').value.trim();
    var EmailField = document.getElementById('EmailField').value.trim();
    var objField = document.getElementById('ObjField').value.trim();
    // Validate fields
    if (!nameField || !contactField || !addressField || !objField || !EmailField || !DomainField) {
        alert("Please fill out all fields.");
        return;
    }
    // Populate the CV template with the input values
    document.getElementById('nameTemplate').innerHTML = nameField;
    document.getElementById('DomainTemplate').innerHTML = DomainField;
    document.getElementById('EmailTemplate').innerHTML = EmailField;
    document.getElementById('contractTemplate').innerHTML = contactField;
    document.getElementById('AddressTemplate').innerHTML = addressField;
    document.getElementById('ObjTemplate').innerHTML = objField;
    // Handle multiple "Links"
    var linkFieldElements = document.getElementsByClassName('linkField');
    var linkFieldData = '';
    for (var i = 0; i < linkFieldElements.length; i++) {
        var linkField = linkFieldElements[i];
        if (linkField.value.trim()) {
            linkFieldData += "".concat(linkField.value.trim(), "<br>");
        }
    }
    if (!linkFieldData) {
        alert("Please fill out the link fields.");
        return;
    }
    document.getElementById('linkTemplate').innerHTML = linkFieldData;
    // Handle "Work Experience"
    var workFieldElements = document.getElementsByClassName('WorkField');
    var workFieldData = '';
    for (var i = 0; i < workFieldElements.length; i++) {
        var workField = workFieldElements[i];
        if (workField.value.trim()) {
            workFieldData += "<li>".concat(workField.value.trim(), "</li>");
        }
    }
    if (!workFieldData) {
        alert("Please fill out work experience fields.");
        return;
    }
    document.getElementById('workTemplate').innerHTML = workFieldData;
    // Handle "Qualifications"
    var qualificationFieldElements = document.getElementsByClassName('QualificationField');
    var qualificationFieldData = '';
    for (var i = 0; i < qualificationFieldElements.length; i++) {
        var qualificationField = qualificationFieldElements[i];
        if (qualificationField.value.trim()) {
            qualificationFieldData += "<li>".concat(qualificationField.value.trim(), "</li>");
        }
    }
    if (!qualificationFieldData) {
        alert("Please fill out qualification fields.");
        return;
    }
    document.getElementById('QualificationTemplate').innerHTML = qualificationFieldData;
    // Handle image upload
    var fileInput = document.getElementById('imgfield');
    if (fileInput && fileInput.files) {
        if (fileInput.files.length === 0) {
            alert('Please select a file before proceeding.');
            return; // Stop execution if no file is selected
        }
        var file = fileInput.files[0];
        var reader_1 = new FileReader();
        reader_1.readAsDataURL(file);
        reader_1.onloadend = function () {
            var imgElement = document.getElementById('imgTemplate');
            if (imgElement) {
                imgElement.src = reader_1.result;
            }
        };
    }
    // Hide the form and display the generated CV
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-Template').style.display = 'block';
}
// Function to switch back to edit mode
function edit() {
    // Ensure the fields are filled before switching
    var nameField = document.getElementById('namefield').value.trim();
    var contactField = document.getElementById('Contactfield').value.trim();
    var addressField = document.getElementById('addressField').value.trim();
    var objField = document.getElementById('ObjField').value.trim();
    if (!nameField || !contactField || !addressField || !objField) {
        alert("Please fill out all fields.");
        return;
    }
    // Handle "Work Experience"
    var workFieldElements = document.getElementsByClassName('WorkField');
    var workFieldData = '';
    for (var i = 0; i < workFieldElements.length; i++) {
        var workField = workFieldElements[i];
        if (workField.value.trim()) {
            workFieldData += "<li>".concat(workField.value.trim(), "</li>");
        }
    }
    if (!workFieldData) {
        alert("Please fill out work experience fields.");
        return;
    }
    document.getElementById('workTemplate').innerHTML = workFieldData;
    // Handle "Qualifications"
    var qualificationFieldElements = document.getElementsByClassName('QualificationField');
    var qualificationFieldData = '';
    for (var i = 0; i < qualificationFieldElements.length; i++) {
        var qualificationField = qualificationFieldElements[i];
        if (qualificationField.value.trim()) {
            qualificationFieldData += "<li>".concat(qualificationField.value.trim(), "</li>");
        }
    }
    if (!qualificationFieldData) {
        alert("Please fill out qualification fields.");
        return;
    }
    document.getElementById('QualificationTemplate').innerHTML = qualificationFieldData;
    // Switch to edit mode
    document.getElementById('cv-Template').style.display = 'none';
    document.getElementById('cv-form').style.display = 'block';
}
// Function to print the CV
function PrintCV() {
    window.print();
}
