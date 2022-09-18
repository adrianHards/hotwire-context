import { Controller } from "@hotwired/stimulus"

var markers_counter = 0
// Connects to data-controller="check"
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element)
    const tbf = document.querySelectorAll("turbo-frame").length
    console.log(tbf)
    const el = document.querySelector("#total")
    console.log(el)
    el.innerHTML = "/" + tbf
  }

  show() {
    const toggle = document.querySelectorAll("#marker")
    toggle.forEach((el) => {
      el.hidden = false
    });
  }

  correct() {
    const marker = document.querySelectorAll("#marker")
    markers_counter = markers_counter + 1
    const counter = document.querySelector("#counter")
    counter.innerText = markers_counter
    marker.forEach((el) => {
      el.hidden = true
    });
  }

  wrong() {
    const marker = document.querySelectorAll("#marker")
    markers_counter = markers_counter
    const counter = document.querySelector("#counter")
    counter.innerText = markers_counter
    marker.forEach((el) => {
      el.hidden = true
    });
  }
}
