const EMAIL_REGEX = /[\w\d\.-]*@(students\.)?plymouth\.ac\.uk/g

$(window).on('load', () => {
  setGreeting();

  $('#lecturer-form').on('submit', (e) => {
    formElements = e.target.elements;

    let lecturer = new Lecturer(
      formElements.namedItem('name').value,
      formElements.namedItem('email').value,
      formElements.namedItem('officeNumber').value,
    )

    if (lecturer.validateEmail()) {
      lecturer.appendRow();
    }
    e.preventDefault();
  });

  $('#student-form').on('submit', (e) => {
    formElements = e.target.elements;

    let student = new Student(
      formElements.namedItem('name').value,
      formElements.namedItem('email').value,
      formElements.namedItem('studentNumber').value,
    )

    if (student.validateEmail()) {
      student.appendRow();
    }
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

Lecturer.prototype.validateEmail = function() {
  let isValid = false;
  let display = 'block'

  if(this.email.match(EMAIL_REGEX)) {
    isValid = true
    display = 'none'
  }

  $('#lecturer-error-box').css('display', display)
  return isValid;
}

function Student(name, email, studentNumber) {
  Person.call(this, name, email)
  this.studentNumber = studentNumber
}

Student.prototype.appendRow = function() {
  let nameCell = `<td>${this.name}</td>`
  let emailCell = `<td>${this.email}</td>`
  let studentNumberCell = `<td>${this.studentNumber}</td>`

  $('#student-table').find('tbody').append(`<tr>${nameCell}${emailCell}${studentNumberCell}</tr>`)
}

Student.prototype.validateEmail = function() {
  let isValid = false;
  let display = 'block'

  if(this.email.match(EMAIL_REGEX)) {
    isValid = true
    display = 'none'
  }

  $('#student-error-box').css('display', display)
  return isValid;
}
