(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e.title,this._link=e.link,this._alt=e.alt,this._cardTemplateSelector=n,this._viewImage=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImg=this._element.querySelector(".element__image"),this._cardTitle=this._element.querySelector(".element__title"),this._cardImg.src=this._link,this._cardImg.alt=this._alt||this._title,this._cardTitle.textContent=this._title,this._likeBtn=this._element.querySelector(".element__like-button"),this._deleteBtn=this._element.querySelector(".element__delete-button"),this._setEventListeners(),this._element}},{key:"_toggleLike",value:function(){this._likeBtn.classList.toggle("element__like-button_active")}},{key:"_deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",this._toggleLike.bind(this)),this._deleteBtn.addEventListener("click",this._deleteCard.bind(this)),this._cardImg.addEventListener("click",(function(){return e._viewImage(e._title,e._link,e._alt)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),n.textContent=t,n.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_handleInput",value:function(e){this._checkInputValidity(e),this._toggleSubmitBtnState()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector),this._inputList.forEach((function(t){t.addEventListener("input",(function(){return e._handleInput(t)}))}))}},{key:"_toggleSubmitBtnState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleSubmitBtnState()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._container=document.querySelector(n),this._renderer=o}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){return e._renderer(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._modalWindow=document.querySelector(t),this._handleClosePopup=this._handleClosePopup.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._modalWindow.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._modalWindow.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleClosePopup",value:function(e){(e.target.classList.contains("popup__close-button")||e.target.classList.contains("popup"))&&this.close()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this._modalWindow.addEventListener("click",this._handleClosePopup)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._submitHandler=n._submitHandler.bind(h(n)),n._form=n._modalWindow.querySelector(".form"),n._formInputList=Array.from(n._form.querySelectorAll(".form__input")),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._formInputList.forEach((function(t){return e[t.name]=t.value})),e}},{key:"_submitHandler",value:function(e){e.preventDefault(),this._handleSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){c(y(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitHandler)}},{key:"close",value:function(){c(y(a.prototype),"close",this).call(this),this._form.reset()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function k(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImg=t._modalWindow.querySelector(".popup__image"),t._popupImgCaption=t._modalWindow.querySelector(".popup__image-caption"),t}return t=a,(n=[{key:"open",value:function(e,t,n){this._popupImg.src=t,this._popupImg.alt=n||e,this._popupImgCaption.textContent=e,b(E(a.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.userNameSelector,r=t.userJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userJob:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.job}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=document.querySelector(".profile__edit-button"),I=document.querySelector(".profile__add-button"),L=document.querySelector(".form#profile-form"),P=document.querySelector(".form#new-card-form"),q=L.querySelector('input[name="name"]'),x=L.querySelector('input[name="job"]'),R="#card-template",B={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__save-button",inactiveButtonClass:"form__save-button_inactive",inputErrorClass:"form__input_error",errorClass:"form__error-message_active"},T=new r(B,L),V=new r(B,P);function N(e,t,n){W.open(e,t,n)}T.enableValidation(),V.enableValidation();var J=new j({userNameSelector:".profile__name",userJobSelector:".profile__job"}),W=new S(".popup#view-image"),D=new _(".popup#edit-profile",(function(e){J.setUserInfo(e),this.close()})),A=new _(".popup#new-card",(function(e){var t=H(e,R);U.addItem(t),A.close()}));function H(e,n){return new t(e,n,N).generateCard()}var U=new i({items:[{title:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",alt:"Изображение гор Архыза"},{title:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",alt:"Изображение озера в Челябинской области"},{title:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",alt:"Изображение жилого массива в Иваново"},{title:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",alt:"Изображение гор на Камчатке"},{title:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",alt:"Изображение железнодорожных путей в лесу"},{title:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",alt:"Изображение озера Байкал зимой"}],renderer:function(e){U.addItem(H(e,R))}},".elements");U.renderItems(),C.addEventListener("click",(function(){var e=J.getUserInfo(),t=e.userName,n=e.userJob;q.value=t,x.value=n,T.resetValidation(),D.open()})),I.addEventListener("click",(function(){V.resetValidation(),A.open()})),W.setEventListeners(),D.setEventListeners(),A.setEventListeners()})();