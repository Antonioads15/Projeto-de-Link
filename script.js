function toggleMode() {
  /* 1º pegando o HTML */
  const html = document.documentElement
  /* 2º fazendo as trocas das classes */
  html.classList.toggle("ligth")
  /*
    if(html.classList.contains('ligth')) {
        html.classList.remove('ligth')
    } else {
        html.classList.add('ligth')
    } 
  o Codigo pode ser feito dessa forma acima , ou dessa forma simplificado abaixo */

  /* para pegar a IMG*/
  const img = document.querySelector("#profile img")

  if (html.classList.contains("ligth")) {
  /* se tiver ligth mode , adicionar a img ligth , setAttribute serve para  adicionar , ajustar , mudar um atributo.*/
    img.setAttribute("src", "./assets/thabata2.jpg")
    
  } else {
    img.setAttribute("src", "./assets/thabata1.jpg")
  }
}
