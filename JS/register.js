$(document).ready(function () {
    // Handle form submission
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear any previous error messages
        $('.text-danger').hide();
        
        // Validate form fields
        let isValid = true;

        // Check if the required fields are filled
        if ($('#txtHT').val().trim() === "") {
            isValid = false;
            $('#txtHT').addClass('is-invalid');
        } else {
            $('#txtHT').removeClass('is-invalid');
        }

        if ($('#txtSDT').val().trim() === "") {
            isValid = false;
            $('#txtSDT').addClass('is-invalid');
        } else {
            $('#txtSDT').removeClass('is-invalid');
        }

        if ($('#txtEmail').val().trim() === "") {
            isValid = false;
            $('#txtEmail').addClass('is-invalid');
        } else {
            $('#txtEmail').removeClass('is-invalid');
        }

        if ($('#txtDOB').val().trim() === "") {
            isValid = false;
            $('#txtDOB').addClass('is-invalid');
        } else {
            $('#txtDOB').removeClass('is-invalid');
        }

        if ($('#txtUsername').val().trim() === "") {
            isValid = false;
            $('#txtUsername').addClass('is-invalid');
        } else {
            $('#txtUsername').removeClass('is-invalid');
        }

        if ($('#txtPassword').val().trim() === "") {
            isValid = false;
            $('#txtPassword').addClass('is-invalid');
        } else {
            $('#txtPassword').removeClass('is-invalid');
        }

        if ($('#txtConfirmPassword').val().trim() === "") {
            isValid = false;
            $('#txtConfirmPassword').addClass('is-invalid');
        } else {
            $('#txtConfirmPassword').removeClass('is-invalid');
        }

        // Check if the passwords match
        if ($('#txtPassword').val() !== $('#txtConfirmPassword').val()) {
            isValid = false;
            $('#txtConfirmPassword').addClass('is-invalid');
            $('#txtPassword').addClass('is-invalid');
        }

        // Check if the terms and conditions checkbox is checked
        if (!$('#acceptTerms').prop('checked')) {
            isValid = false;
            $('#acceptTerms').next('label').css('color', 'red');
        } else {
            $('#acceptTerms').next('label').css('color', 'initial');
        }

        // If all validations pass, submit the form (simulated)
        if (isValid) {
            alert('Đăng ký thành công!');
            // Here you can submit the form via AJAX or other means if necessary.
        } else {
            alert('Vui lòng điền đầy đủ thông tin hợp lệ!');
        }
    });
});
