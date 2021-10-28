let year = new Date().getFullYear();

if (year > 2021) {
  document.querySelector("footer p").innerHTML += ` - ${year}`;
}
document.querySelector("footer p").innerHTML += " Todos os direitos reservados";
