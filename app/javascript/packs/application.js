// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'select2/dist/css/select2.css';
import { multipleSelect } from "../components/select2";
import { toggleForm } from "../components/form";

Turbolinks.start();

document.addEventListener("turbolinks:load", function () {
  Rails.start();
  ActiveStorage.start();
  multipleSelect();
  toggleForm();
})
