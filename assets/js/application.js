$(window).on('load', () => {
  $('#sayHello').click(() => {
    let name = $('#name').val()
    $('#sayHello_result').html(`Hello ${name}!`)
  });

  $('#checkNumber').click(() => {
    let className, message;
    let number = $('#number').val()

    $('#numberMessage').removeClass('less greater')

    if (number < 10) {
      className = 'less';
      message = 'less than';
    } else {
      className = 'greater';
      message = 'greater than or equal to';
    }

    $('#numberMessage').removeClass('hidden')
    $('#numberMessage').addClass(className)

    $('#numberMessageText').html(`Number is ${message} 10`)
  });
});
