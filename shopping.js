document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', function() {
        let input = this.previousElementSibling;
        input.value = parseInt(input.value) + 1;
    });
});

document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', function() {
        let input = this.nextElementSibling;
        if (input.value > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });
});

document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.product').remove();
        // Optionally update the total and item count here
    });
});

document.querySelector('.pay-now').addEventListener('click', function() {
    alert('Proceeding to payment!');
});
