Object.prototype.sayHi = function () {
  console.log("Hello!");
};

function HTMLElement(tagName, className, id) {
  // field
  this.tagName = tagName;
  this.className = className;
  this.id = id;
}

HTMLElement.prototype.rotate = function () {
  console.log("rotating from HTMLElement", this.tagName);
};

HTMLElement.prototype.render = function () {
  console.log("rendering ...");
};

const mySuper = (parent, context, arg) => parent.apply(context, arg);

function HTMLAnchor(href, ...arg) {
  mySuper(HTMLElement, this, arg);
  this.href = href;
}

// HTMLAnchor.prototype = {
//     ...HTMLAnchor.prototype,
//     __proto__: HTMLElement.prototype
// }

HTMLAnchor.prototype.__proto__ = HTMLElement.prototype;

HTMLAnchor.prototype.redirect = function () {
  console.log(this.href, "is redirecting");
};

HTMLAnchor.prototype.rotate = function () {
  console.log("rotating from HTMLAnchor", this.tagName);
};

const a1 = new HTMLAnchor("https://roga", "anchor", "link", "facebook-link");
const a2 = new HTMLAnchor("https://copita", "anchor", "link", "facebook-link");

// console.log(a1, "a1");
// console.log(a2, "a2");

// a1.render();
// a1.sayHi();
// a2.rotate(); // call

// ----- HTMLImg ------

HTMLImg.prototype.__proto__ = HTMLElement.prototype;

HTMLImg.prototype.showPicture = function () {
  console.log("showing picture", this.tagName);
};

function HTMLImg(src, flag, ...arg) {
  mySuper(HTMLElement, this, arg);
  this.id = this.id || "picture";
  this.src = src;

  if (flag) {
    /// ------Поліморфізм
    this.rotate = function () {
      console.log("My rotate from instance", this.tagName);
    };
  }
}

const img1 = new HTMLImg("http://some-picture", true, "IMG", "some-picture");

const img2 = new HTMLImg("http://some-picture", false, "IMG", "some-picture");
// console.log(img1, "img");

// img1.rotate();

//--------------------------------------------------------------------my_dz_41

function HTMLElementInput(tagName, className, id, color, fontSize, inputType) {            //додаю конструктор HTMLElementInput по прикладу HTMLAnchor.     
    mySuper(HTMLElement, this, [tagName, className, id]);                                                              
    this.inputColor = color;                                   
    this.fontSize = fontSize;                                  //поля екземпляра HTMLElementInput будуть такi
    this.input = inputType;    
    
    this.setColor = function(color) {
        if (color) {                                                          //методи екземпляру такi
            this.inputColor = color;
            console.log(`Color ${color} for ${this.input}`);
        } else {
            console.log('Color not said');
        }
    }    

    this.setFontSize = function(fontSize) {
        if (fontSize) {
            this.fontSize = fontSize;
            console.log(`Set font size ${fontSize}`);
        } else {
            console.log('Font size not said');
        }
    }
};

HTMLElementInput.prototype.hover = function() {             //методи прототипа такi
    console.log(`Hover....${this.input}`);
};

HTMLElementInput.prototype.focus = function() {
    console.log(`Focus in ${this.input}`);                    
};

HTMLElementInput.prototype.clear = function() {
    console.log(`${this.input} clearance....`);
};

const typeText = new HTMLElementInput('input','my_class', 'my_id', 'red', '20px', 'typeText');

console.log(typeText, 'typeText');            //перевiрка
typeText.hover();
typeText.focus();
typeText.clear();

console.log(typeText);
typeText.setFontSize();
console.log(typeText);

console.log(typeText);
typeText.setColor('black');
console.log(typeText);

console.dir(HTMLElementInput, "HTMLElementInput");
console.dir(HTMLAnchor, "HTMLAnchor");
console.dir(HTMLElement, "HTMLElement");

HTMLElementInput.prototype.__proto__ = HTMLElement.prototype;   

typeText.rotate();  //Прототипне успадковую rotate.
typeText.render();  //Прототипне успадковую render.

