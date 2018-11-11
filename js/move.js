var categorias = [
  {id: 1, text: 'Alimentação'},
  {id: 2, text: 'Educação'},
  {id: 3, text: 'Esportes'},
  {id: 4, text: 'Lazer'},
  {id: 5, text: 'Moradia'},
  {id: 6, text: 'Outros'},
  {id: 7, text: 'Presentes'},
  {id: 8, text: 'Roupas'},
  {id: 9, text: 'Salário'},
  {id: 10, text: 'Saúde'},
  {id: 11, text: 'Transporte'},
  {id: 12, text: 'Viagem'}
];

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
};

function telaReceita(){
  $('.corJanela').addClass('green').addClass('darken-4');
  $('.prefix').addClass('green-text').addClass('darken-4');
  $('.waves-effect').addClass('black-text');
  $('#tipoMovimento').html('Nova Receita');
  $('#btnConfirma').addClass('green').addClass('darken-4');
};

function telaDespesa(){
  $('.corJanela').addClass('red').addClass('accent-4');
  $('.prefix').addClass('red-text').addClass('accent-4');
  $('.waves-effect').addClass('black-text');
  $('#tipoMovimento').html('Nova Despesa');
  $('#btnConfirma').addClass('red').addClass('accent-4');
}

$('.datepicker').pickadate({
  selectMonths: false,
  selectYears: false,
  today: 'Today',
  close: 'Ok',
  closeOnSelect: false // Close upon selecting a date,
});

$('.select-cat').select2({
  width: "100%",
  data: categorias
}).val('11').trigger('change');

$(document).ready(function() {
  if (getUrlVars().tipo=="despesa")
    telaDespesa();
  else if (getUrlVars().tipo == "receita")
    telaReceita();
});
