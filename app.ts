// Function to add a new "Work Experience" field
function AddNewWorkField(): void {
   // Create a new textarea element
   const newNode = document.createElement('textarea');
   // Add CSS classes to the new textarea
   newNode.classList.add('form-control', 'WorkField', 'mt-2');
   // Set a placeholder for the textarea
   newNode.setAttribute('placeholder', 'Enter Here');

   // Get the Work section and the add button
   const workOb = document.getElementById('Workdiv');
   const workAddButton = document.getElementById('WeAddButtondiv');

   if (workOb && workAddButton) {
       // Insert the new textarea before the add button
       workOb.insertBefore(newNode, workAddButton);
   }
}

// Function to add a new "Qualification" field
function AddNewQualificationField(): void {
   const newNode = document.createElement('textarea');
   newNode.classList.add('form-control', 'QualificationField', 'mt-2');
   newNode.setAttribute('placeholder', 'Enter Here');

   const qualificationOb = document.getElementById('QualificationDiv');
   const qualificationAddButton = document.getElementById('QualificationAddButtonDiv');

   if (qualificationOb && qualificationAddButton) {
       qualificationOb.insertBefore(newNode, qualificationAddButton);
   }
}

// Function to add a new "Link" field
function AddNewlinkField(): void {
   const newNode = document.createElement('textarea');
   newNode.classList.add('form-control', 'linkField', 'mt-2');
   newNode.setAttribute('placeholder', 'Enter Here');

   const linkOb = document.getElementById('linkDiv');
   const linkAddButton = document.getElementById('linkButtonDiv');

   if (linkOb && linkAddButton) {
       linkOb.insertBefore(newNode, linkAddButton);
   }
}

// Function to generate the CV
function GenerateCV(): void {
   // Get input values and trim spaces
   const nameField = (document.getElementById('namefield') as HTMLInputElement).value.trim();
   const DomainField = (document.getElementById('DomainField') as HTMLInputElement).value.trim();
   const contactField = (document.getElementById('Contactfield') as HTMLInputElement).value.trim();
   const addressField = (document.getElementById('addressField') as HTMLTextAreaElement).value.trim();
   const EmailField = (document.getElementById('EmailField') as HTMLInputElement).value.trim();
   const objField = (document.getElementById('ObjField') as HTMLTextAreaElement).value.trim();

   // Validate fields
   if (!nameField || !contactField || !addressField || !objField || !EmailField || !DomainField) {
       alert("Please fill out all fields.");
       return;
   }

   // Populate the CV template with the input values
   (document.getElementById('nameTemplate') as HTMLElement).innerHTML = nameField;
   (document.getElementById('DomainTemplate') as HTMLElement).innerHTML = DomainField;
   (document.getElementById('EmailTemplate') as HTMLElement).innerHTML = EmailField;
   (document.getElementById('contractTemplate') as HTMLElement).innerHTML = contactField;
   (document.getElementById('AddressTemplate') as HTMLElement).innerHTML = addressField;
   (document.getElementById('ObjTemplate') as HTMLElement).innerHTML = objField;

   // Handle multiple "Links"
   const linkFieldElements = document.getElementsByClassName('linkField') as HTMLCollectionOf<HTMLTextAreaElement>;
   let linkFieldData = '';
   for (let i = 0; i < linkFieldElements.length; i++) {
       const linkField = linkFieldElements[i];
       if (linkField.value.trim()) {
           linkFieldData += `${linkField.value.trim()}<br>`;
       }
   }

   if (!linkFieldData) {
       alert("Please fill out the link fields.");
       return;
   }
   (document.getElementById('linkTemplate') as HTMLElement).innerHTML = linkFieldData;

   // Handle "Work Experience"
   const workFieldElements = document.getElementsByClassName('WorkField') as HTMLCollectionOf<HTMLTextAreaElement>;
   let workFieldData = '';
   for (let i = 0; i < workFieldElements.length; i++) {
       const workField = workFieldElements[i];
       if (workField.value.trim()) {
           workFieldData += `<li>${workField.value.trim()}</li>`;
       }
   }

   if (!workFieldData) {
       alert("Please fill out work experience fields.");
       return;
   }
   (document.getElementById('workTemplate') as HTMLElement).innerHTML = workFieldData;

   // Handle "Qualifications"
   const qualificationFieldElements = document.getElementsByClassName('QualificationField') as HTMLCollectionOf<HTMLTextAreaElement>;
   let qualificationFieldData = '';
   for (let i = 0; i < qualificationFieldElements.length; i++) {
       const qualificationField = qualificationFieldElements[i];
       if (qualificationField.value.trim()) {
           qualificationFieldData += `<li>${qualificationField.value.trim()}</li>`;
       }
   }

   if (!qualificationFieldData) {
       alert("Please fill out qualification fields.");
       return;
   }
   (document.getElementById('QualificationTemplate') as HTMLElement).innerHTML = qualificationFieldData;

   // Handle image upload
   const fileInput = document.getElementById('imgfield') as HTMLInputElement;
   if (fileInput && fileInput.files) {
       const file = fileInput.files[0];
       const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onloadend = () => {
           const imgElement = document.getElementById('imgTemplate') as HTMLImageElement;
           if (imgElement) {
               imgElement.src = reader.result as string;
           }
       };
   }

   // Hide the form and display the generated CV
   (document.getElementById('cv-form') as HTMLElement).style.display = 'none';
   (document.getElementById('cv-Template') as HTMLElement).style.display = 'block';
}

// Function to switch back to edit mode
function edit(): void {
   // Ensure the fields are filled before switching
   const nameField = (document.getElementById('namefield') as HTMLInputElement).value.trim();
   const contactField = (document.getElementById('Contactfield') as HTMLInputElement).value.trim();
   const addressField = (document.getElementById('addressField') as HTMLTextAreaElement).value.trim();
   const objField = (document.getElementById('ObjField') as HTMLTextAreaElement).value.trim();

   if (!nameField || !contactField || !addressField || !objField) {
       alert("Please fill out all fields.");
       return;
   }

   // Handle "Work Experience"
   const workFieldElements = document.getElementsByClassName('WorkField') as HTMLCollectionOf<HTMLTextAreaElement>;
   let workFieldData = '';
   for (let i = 0; i < workFieldElements.length; i++) {
       const workField = workFieldElements[i];
       if (workField.value.trim()) {
           workFieldData += `<li>${workField.value.trim()}</li>`;
       }
   }

   if (!workFieldData) {
       alert("Please fill out work experience fields.");
       return;
   }
   (document.getElementById('workTemplate') as HTMLElement).innerHTML = workFieldData;

   // Handle "Qualifications"
   const qualificationFieldElements = document.getElementsByClassName('QualificationField') as HTMLCollectionOf<HTMLTextAreaElement>;
   let qualificationFieldData = '';
   for (let i = 0; i < qualificationFieldElements.length; i++) {
       const qualificationField = qualificationFieldElements[i];
       if (qualificationField.value.trim()) {
           qualificationFieldData += `<li>${qualificationField.value.trim()}</li>`;
       }
   }

   if (!qualificationFieldData) {
       alert("Please fill out qualification fields.");
       return;
   }
   (document.getElementById('QualificationTemplate') as HTMLElement).innerHTML = qualificationFieldData;

   // Switch to edit mode
   (document.getElementById('cv-Template') as HTMLElement).style.display = 'none';
   (document.getElementById('cv-form') as HTMLElement).style.display = 'block';
}

// Function to print the CV
function PrintCV(): void {
   window.print();
}
