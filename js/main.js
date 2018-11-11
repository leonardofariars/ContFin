var meses = [
  {id: 1, text: 'Janeiro'},
  {id: 2, text: 'Fevereiro'},
  {id: 3, text: 'Março'},
  {id: 4, text: 'Abril'},
  {id: 5, text: 'Maio'},
  {id: 6, text: 'Junho'},
  {id: 7, text: 'Julho'},
  {id: 8, text: 'Agosto'},
  {id: 9, text: 'Setembro'},
  {id: 10, text: 'Outubro'},
  {id: 11, text: 'Novembro'},
  {id: 12, text: 'Dezembro'}
];

var mesAtual = new Date().getMonth()+1;

$('.button-collapse').sideNav({
  menuWidth: 300,
  closeOnClick: true,
  edge: 'right'
});

$('.select-mes').select2({
  width: "100%",
  data: meses
}).val(mesAtual).trigger('change');

$('.select-categoria').select2({
  width: "100%"
}).val('0').trigger('change');

$(document).ready(function(){
  $('.tooltipped').tooltip({delay: 50});
});
