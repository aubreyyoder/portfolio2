function scrollToBio() {
  //when tab in nav is clicked, scroll to section
  $(".js-btn-about").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js-section-about").offset().top
      },
      500
    );
  });
}

function scrollToProjects() {
  //when tab in nav is clicked, scroll to section
  $(".js-btn-projects").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js-section-projects").offset().top
      },
      500
    );
  });
}

function handleAllEvents() {
  $(scrollToBio);
  $(scrollToProjects);
}

$(handleAllEvents);
