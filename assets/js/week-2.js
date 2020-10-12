$(window).on('load', () => {
  let time = new Date();
  let message;

  if (time.getHours() < 12) {
    message = 'morning'
  } else if (time.getHours() < 18) {
    message = 'afternoon'
  } else {
    message = 'evening'
  }

  $('#greeting').html(`Good ${message}`)
});
