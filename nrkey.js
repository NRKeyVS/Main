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
window.addEventListener('scroll', function() {
  var nrk = document.querySelector('#bar');
  if (window.scrollY > 0) {
    nrk.classList.add('shrunk');
  } else {
    nrk.classList.remove('shrunk');
  }
});
function scrollToTop() {
    window.scrollTo(0, 0);
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('show');
}

function scrollToAbout() {
    var div = document.getElementById("about");
    var offset = div.offsetTop; // Get the offset from the top

    // Adjust the offset by the desired number of pixels to scroll upward
    // Experiment with different values (e.g., 50) to find the ideal position
    var scrollPosition = offset - 100;
  
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
    const navigation = document.querySelector('.navigation');
    if (navigation.classList.contains('show')) {
      navigation.classList.remove('show');
    }
  }
  function scrollToSV() {
    var div = document.getElementById("synthv");
    var offset = div.offsetTop; // Get the offset from the top

    // Adjust the offset by the desired number of pixels to scroll upward
    // Experiment with different values (e.g., 50) to find the ideal position
    var scrollPosition = offset - 100;
  
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
    const navigation = document.querySelector('.navigation');
    if (navigation.classList.contains('show')) {
      navigation.classList.remove('show');
    }
  }

function scrollToShow() {
    var div = document.getElementById("showcase");
    var offset = div.offsetTop; // Get the offset from the top

    // Adjust the offset by the desired number of pixels to scroll upward
    // Experiment with different values (e.g., 50) to find the ideal position
    var scrollPosition = offset - 100;
  
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
    const navigation = document.querySelector('.navigation');
    if (navigation.classList.contains('show')) {
      navigation.classList.remove('show');
    }
  }

function scrollToQ() {
    var div = document.getElementById("QA");
    var offset = div.offsetTop; // Get the offset from the top

    // Adjust the offset by the desired number of pixels to scroll upward
    // Experiment with different values (e.g., 50) to find the ideal position
    var scrollPosition = offset - 100;
  
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
    const navigation = document.querySelector('.navigation');
    if (navigation.classList.contains('show')) {
      navigation.classList.remove('show');
    }
  }

function scrollToSocial() {
    var div = document.getElementById("socials");
    var offset = div.offsetTop; // Get the offset from the top

    // Adjust the offset by the desired number of pixels to scroll upward
    // Experiment with different values (e.g., 50) to find the ideal position
    var scrollPosition = offset - 100;
  
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
    const navigation = document.querySelector('.navigation');
    if (navigation.classList.contains('show')) {
      navigation.classList.remove('show');
    }
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

