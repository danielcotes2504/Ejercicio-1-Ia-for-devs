// Este archivo contiene la lógica JavaScript para validar el formulario.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    // Inputs
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Error divs
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita envío del formulario

        // Limpiar mensajes previos
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        successMessage.textContent = "";

        // Ejecutar validaciones
        const isValid = validateForm();

        if (isValid) {
            successMessage.textContent = "¡Registro exitoso!";
            form.reset(); // Limpiar campos
        }
    });

    function validateForm() {
        let isValid = true;

        // --- Validación del Username ---
        const username = usernameInput.value.trim();
        if (username.length < 5) {
            usernameError.textContent = "El nombre de usuario es obligatorio y debe tener al menos 5 caracteres.";
            isValid = false;
        }

        // --- Validación del Email ---
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        // Regex sugerida: valida estructura estándar de correo

        if (email === "") {
            emailError.textContent = "El email es obligatorio.";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "Ingresa un email válido.";
            isValid = false;
        }

        // --- Validación de la Contraseña ---
        const password = passwordInput.value.trim();
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        // Reglas: mínimo 8 caracteres, 1 mayúscula, 1 número

        if (password === "") {
            passwordError.textContent = "La contraseña es obligatoria.";
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            passwordError.textContent =
                "La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula y un número.";
            isValid = false;
        }

        return isValid;
    }
});
