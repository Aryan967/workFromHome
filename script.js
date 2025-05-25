
document.getElementById('applicationForm').addEventListener('submit',
     function(e) { e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    mobile: form.mobile.value,
    location: form.location.value,
    age: form.age.value,
    gender: form.gender.value,
  };

fetch("https://script.google.com/macros/s/AKfycbxYGpnYlDZiIZPqyboNdz-xqjpDk_y-D1FfqKuJInCtIq9yfpLK-ihrdOhR5pP3cyRj/exec", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.text())
.then(text => {
    document.getElementById('responseMsg').TextContent = 'Form submitted successfully!';
   form.reset();
})
.catch(error => {
    console.error('Error:', error);
    document.getElementById('responseMsg').TextContent = 'Error submitting form.';
});

});
