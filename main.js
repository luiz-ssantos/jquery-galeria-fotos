$(document).ready(function () {
  $("#botaoAdicionar").click(function () {
    $("form").slideDown();
  });

  $("#botaoCancelar").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const imagemNova = $("#urlImagem").val(); // Corrigi o seletor aqui
    const novoItem = $("<li></li>");
    $(`<img src="${imagemNova}" alt="Pintura de um gato" />`).appendTo(
      novoItem
    );
    $(`
      <div class="overlay">
        <a href="${imagemNova}" target="_blank" title="Ver imagem em tamanho real.">
          Ver imagem em tamanho real.
        </a>
      </div>
    `).appendTo(novoItem);
    novoItem.appendTo("ul");
    $(urlImagem).val("");
  });
});
