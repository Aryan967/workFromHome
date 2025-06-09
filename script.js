
document.getElementById('applicationForm').addEventListener('submit',
     function(e) { e.preventDefault();

  const form = e.target;
  const data = {
    fullname: form.fullname.value,
    mobileno: form.mobileno.value,
    state: form.state.value,
    age: form.age.value,
    email: form.email.value,
     };

fetch("https://script.google.com/macros/s/AKfycbzopq808bffeAKhGvNowWA7n0mU2tVEIrMEBhwIz2FJwEF7yEamQfkI9bmyRQhyoHVc/exec", {
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
