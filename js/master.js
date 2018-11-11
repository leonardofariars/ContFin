$('.button-collapse').sideNav({
  menuWidth: 300,
  closeOnClick: true,
  edge: 'right', // <--- CHECK THIS OUT
});


$('.select-mes').select2({
  placeholder: "Selecione o mês",
  allowClear: true,
  width: "100%"
});

$('.select-categoria').select2({
  placeholder: "Rec. / Desp.",
  allowClear: true,
  width: "100%"
});

$('#newDespesa').click(function(){
  window.location.href = 'movimento.html?tipo=despesa';
});

$('#newReceita').click(function(){
  window.location.href = 'movimento.html?tipo=receita';
})
