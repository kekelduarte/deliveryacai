const form = document.getElementById('complementoForm');
const checkboxes = form.querySelectorAll('input[type="checkbox"]');
const warningDiv = document.getElementById('warning');

form.addEventListener('change', (event) => {
    const checkedCheckboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedCheckboxes.length > 6) {
        event.preventDefault();
        warningDiv.textContent = 'Por favor, selecione apenas até 6 opções.';
        // Desmarcar a opção que foi marcada em excesso
        event.target.checked = false;
    } else {
        warningDiv.textContent = '';
    }
});

const frutaForm = document.getElementById('frutaForm');
const frutaCheckboxes = frutaForm.querySelectorAll('input[type="checkbox"]');
const frutaWarningDiv = document.getElementById('frutaWarning');

frutaForm.addEventListener('change', (event) => {
    const checkedFrutaCheckboxes = frutaForm.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedFrutaCheckboxes.length > 2) {
        event.preventDefault();
        frutaWarningDiv.textContent = 'Por favor, selecione apenas até 2 opções.';
        // Desmarcar a opção que foi marcada em excesso
        event.target.checked = false;
    } else {
        frutaWarningDiv.textContent = '';
    }
});

const coberturaForm = document.getElementById('coberturaForm');
const coberturaCheckboxes = coberturaForm.querySelectorAll('input[type="checkbox"]');
const coberturaWarningDiv = document.getElementById('coberturaWarning');

coberturaForm.addEventListener('change', (event) => {
    const checkedCoberturaCheckboxes = coberturaForm.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedCoberturaCheckboxes.length > 2) {
        event.preventDefault();
        coberturaWarningDiv.textContent = 'Por favor, selecione apenas até 2 opções.';
        // Desmarcar a opção que foi marcada em excesso
        event.target.checked = false;
    } else {
        coberturaWarningDiv.textContent = '';
    }
});

const enviarButton = document.getElementById('enviarButton');
    enviarButton.addEventListener('click', () => {
        // Aqui você pode adicionar a lógica para enviar as seleções para o servidor
        // Por exemplo, você pode pegar os valores selecionados usando checkedFrutaCheckboxes e checkedCoberturaCheckboxes
        // E então enviar esses valores para o servidor via AJAX ou algum outro método.
        alert('Seleções enviadas com sucesso!');
    });