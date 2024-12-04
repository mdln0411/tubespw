
function updateCount(id, change) {
    const input = document.getElementById(id);
    let currentValue = parseInt(input.value, 10);

    // Tambahkan batas minimal 1 dan maksimal 20
    const minValue = parseInt(input.min, 10) || 1;
    const maxValue = parseInt(input.max, 10) || 20;

    const newValue = currentValue + change;

    if (newValue >= minValue && newValue <= maxValue) {
        input.value = newValue;
    }
}
