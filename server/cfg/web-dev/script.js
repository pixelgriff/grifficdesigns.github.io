// FORM VALIDATION
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        // TODO: Redirect to thank you page, but for now, show message and prevent POST.
        alert('Thank you for subscribing!', 'success')
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// FORM SUCCESS ALERT
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-success" role="alert">`,
    `   <div>${message}</div>`,
    '</div>'

  ].join('')

  alertPlaceholder.innerHTML = ''; // Clear
  alertPlaceholder.append(wrapper)
}