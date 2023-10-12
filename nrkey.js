window.addEventListener('scroll', function() {
  var ul = document.querySelector('ul');
  if (window.scrollY > 0) {
    ul.classList.add('shrunk');
  } else {
    ul.classList.remove('shrunk');
  }
});
window.addEventListener('scroll', function() {
  var li = document.querySelector('li');
  if (window.scrollY > 0) {
    li.classList.add('shrunk');
  } else {
    li.classList.remove('shrunk');
  }
});
window.addEventListener('scroll', function() {
  var logo = document.querySelector('#logo');
  if (window.scrollY > 0) {
    logo.classList.add('shrunk');
  } else {
    logo.classList.remove('shrunk');
  }
});
window.addEventListener('scroll', function() {
  var nrk = document.querySelector('#NRKey');
  if (window.scrollY > 0) {
    nrk.classList.add('shrunk');
  } else {
    nrk.classList.remove('shrunk');
  }
});

function scrollToTop() {
    window.scrollTo(0, 0);
}

function scrollToAbout() {
    var div = document.getElementById("about");
    div.scrollIntoView();
  }

function scrollToShow() {
    var div = document.getElementById("showcase");
    div.scrollIntoView();
  }

function scrollToQ() {
    var div = document.getElementById("QA");
    div.scrollIntoView();
  }

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('revealvid');
    } else {
      entry.target.classList.remove('revealvid');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenVid = document.querySelectorAll('.loadvid');
hiddenVid.forEach((el) => observer2.observe(el));

function toggleQuestionAnswer(button) {
  var question = button.textContent;
  var answer = button.getAttribute("data-answer");

  button.textContent = answer;
  button.setAttribute("data-answer", question);
}

var buttons = document.querySelectorAll("button");

for (var button of buttons) {
  button.addEventListener("click", toggleQuestionAnswer);
}

