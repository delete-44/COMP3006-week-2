$(window).on('load', () => {
  $('#sayHello').click(() => {
    let name = $('#name').val()
    $('#sayHello_result').html(`Hello ${name}!`)
  });
});
