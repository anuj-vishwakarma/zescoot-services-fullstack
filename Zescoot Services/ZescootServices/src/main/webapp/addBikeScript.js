document.addEventListener('DOMContentLoaded', function() {
    const bikeForm = document.getElementById('bike-form');
    const bikeImageInput = document.getElementById('bike-image');
    const imagePreview = document.getElementById('image-preview');
    const formMessage = document.getElementById('form-message');

    bikeImageInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imagePreview.src = event.target.result;
                imagePreview.classList.add('show');
            }
            reader.readAsDataURL(file);
        } else {
            imagePreview.src = '';
            imagePreview.classList.remove('show');
        }
    });

    bikeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simple form validation
        const bikeName = document.getElementById('bike-name').value.trim();
        const bikeType = document.getElementById('bike-type').value;
        const bikePrice = document.getElementById('bike-price').value.trim();
        const bikeDescription = document.getElementById('bike-description').value.trim();

        if (!bikeName || !bikeType || !bikePrice || !bikeDescription) {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = '#dc3545';
            return;
        }

        // Form submission simulation
        formMessage.textContent = 'Bike added successfully!';
        formMessage.style.color = '#28a745';

        // Clear form
        bikeForm.reset();
        imagePreview.src = '';
        imagePreview.classList.remove('show');
    });
});
