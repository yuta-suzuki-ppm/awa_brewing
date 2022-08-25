$(function () {

  //controller
  const controller = new ScrollMagic.Controller();

  /* about*/
  new ScrollMagic.Scene({
      triggerElement: "#about"
    })

    .on("enter", function () {
      $(".fade_a1").addClass("show");
    })

    .on("enter", function () {
      $(".fade_a2").addClass("show");
    })

    .on("enter", function () {
      $(".fade_a3").addClass("show");
    })

    .addTo(controller);

  /* beers*/
  new ScrollMagic.Scene({
      triggerElement: "#beers"
    })

    .on("enter", function () {
      $(".fade_b1").addClass("show");
    })

    .on("enter", function () {
      $(".fade_b2").addClass("show");
    })

    .on("enter", function () {
      $(".fade_b3").addClass("show");
    })

    .addTo(controller);

  /* links*/
  new ScrollMagic.Scene({
      triggerElement: "#links"
    })

    .on("enter", function () {
      $(".fade_c1").addClass("show");
    })

    .on("enter", function () {
      $(".fade_c2").addClass("show");
    })

    .on("enter", function () {
      $(".fade_c3").addClass("show");
    })

    .addTo(controller);

  /* awa-brewery*/
  new ScrollMagic.Scene({
      triggerElement: "#awa-brewery"
    })

    .on("enter", function () {
      $(".fade_d1").addClass("show");
    })

    .on("enter", function () {
      $(".fade_d2").addClass("show");
    })

    .on("enter", function () {
      $(".fade_d3").addClass("show");
    })

    .on("enter", function () {
      $(".fade_d4").addClass("show");
    })

    .addTo(controller);

});