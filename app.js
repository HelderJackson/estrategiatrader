const submit = document.getElementById("submit");

submit.addEventListener('click', validate);

function validate(e) {
      e.preventDefault();

      const emailField = document.getElementById("email");
      const senhaField = document.getElementById("senha");
      let valid = true;

      if (!emailField.value) {
            const emailError = document.getElementById("EmailError");
            emailError.classList.add("visible");
            emailField.classList.add("invalid");
            emailError.setAttribute("aria-hidden", false);
            emailError.setAttribute("aria-invalid", true);
      }
      else if (!senhaField.value) {
            const senhaError = document.getElementById("SenhaError");
            senhaError.classList.add("visible");
            senhaField.classList.add("invalid");
            senhaError.setAttribute("aria-hidden", false);
            senhaError.setAttribute("aria-invalid", true);
      }
      else {

            if (emailField.value == "teste@gmail.com" && senhaField.value == "gol") {
                  window.location.href = "FiltroOver25Gol.html";
            }
            else {
                  alert("Usuário Não Encontrado")
            }

      }

      return valid;
}