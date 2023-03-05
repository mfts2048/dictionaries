import "./main.css";
import "./index.less";
import logo from "../public/Snipaste_2023-03-05_00-56-06.png";
import $ from "jquery";

import "./fonts/iconfont.css";

const a = "Hello ITEM";
console.log(a);

const img = new Image();
img.src = logo;

class Author {
  name = "ITEM";
  age = 18;
  email = "lxp_work@163.com";

  info = () => {
    return {
      name: this.name,
      age: this.age,
      email: this.email,
    };
  };
}

document.getElementById("imgBox").appendChild(img);

$("#imgBox").click("click", () => {
  alert(123);
});
