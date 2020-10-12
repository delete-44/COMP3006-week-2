$(window).on('load', () => {
  setGreeting();

  $('#lecturer-form').on('submit', (e) => {
    formElements = e.target.elements;

    let lecturer = new Lecturer(
      formElements.namedItem('name').value,
      formElements.namedItem('email').value,
      formElements.namedItem('officeNumber').value,
    )

    lecturer.appendRow();
    e.preventDefault();
  });
});

function setGreeting() {
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
}

function Person(name, email) {
  this.name = name;
  this.email = email;
}

function Lecturer(name, email, officeNumber) {
  Person.call(this, name, email)
  this.officeNumber = officeNumber
}

Lecturer.prototype.appendRow = function() {
  let nameCell = `<td>${this.name}</td>`
  let emailCell = `<td>${this.email}</td>`
  let officeNumberCell = `<td>${this.officeNumber}</td>`

  $('#lecturer-table').find('tbody').append(`<tr>${nameCell}${emailCell}${officeNumberCell}</tr>`)
}
