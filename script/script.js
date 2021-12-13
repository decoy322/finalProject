/*Prise USD & EUR*/
let request;
  if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
  }
  else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  request.open("GET","https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11");

 	request.onload = function () {
    	if (request.status == 200) {
      		allResponse = JSON.parse(request.response);
      		document.getElementById('valUSD').innerText = allResponse[0].ccy;
      		document.getElementById('buyUSD').innerText = allResponse[0].buy;

      		document.getElementById('valEUR').innerText = allResponse[1].ccy;
      		document.getElementById('buyEUR').innerText = allResponse[1].buy;
    	}
  	}
  	request.send();

/*Prise USD & EUR-end*/

/*acordion*/


/*modal-window*/

		let formRegistration = document.querySelector("#formRegistration");
		let formUserInfo = document.querySelector("#formUserInfo");
		let greeting = document.querySelector("#greeting");


		document.addEventListener('DOMContentLoaded', checkReg);
		document.getElementById('buttonRegistration').addEventListener('click', checkForm);

		formRegistration.addEventListener('input', checkInput);
		document.querySelector('#btn3').addEventListener('click', userExit);

		function userExit(e) {
			e.preventDefault();
			let cookie = document.cookie.split('; ');
			let cookieObject = {};
			for (var i = 0; i < cookie.length; i++) {
				var cookieArr = cookie[i].split('=');
				cookieObject[cookieArr[0]] = cookieArr[1];
			};
			let expDate = new Date();
			expDate.setTime(expDate.getTime() - 1000);
			for (let cookie in cookieObject) {
				let expires = expDate.toGMTString();
				document.cookie = cookie + '=' + '; expires=' + expires + '; path=/';
			};
			location.reload();
		};


		/*-----------------------------------------------------------------------------*/
		function checkForm(e) {
			e.preventDefault();
			let form = e.target.parentElement;
			let countError = 0;
			for (let elem of form.elements) {
				if (!(elem.classList.contains("form__input"))) continue;
				countError += (checkErrorElem(elem)) ? 1 : 0;
			};
			if (countError == 0) {
				let expDate = new Date();
				expDate.setTime((new Date).getTime() + 60 * 1000 * 15);
				if (form.id == "formRegistration") document.cookie = "userEmail=" + form.querySelector('#formEmail').value + ";expires=" + expDate.toGMTString() + ";path=/";
				if (form.id == "formUserInfo") {
					for (let elem of form.elements) {
						if (!(elem.classList.contains("form__input"))) continue;
						if (elem.value != '') {
							document.cookie = elem.id + '=' + elem.value + ";expires=" + expDate.toGMTString() + ";path=/";
						}
					}
				}
				location.reload();
			};
		}
		/*-----------------------------------------------------------------------------*/
		function checkInput(e) {//проверка ввода данных в инпуты "на лету"
			if (!(e.target.classList.contains("form__input"))) return;
			checkErrorElem(e.target);
		};
		/*-----------------------------------------------------------------------------*/
		function checkErrorElem(elem) {
			let regEmail = /^[a-z0-9_]{3,}@[A-Z0-9_-]+\.+\.?[A-Z]{2,4}$/i;
			let regUpperL = /[A-Z]+/;
			let regLowerL = /[a-z]+/;
			let regDigit = /[0-9]+/;
			let regTel = /^\+\d{12}$/;
			let valueError = false;
			let value = elem.value;


			if (elem.classList.contains("_req") && elem.value.length == '') {
				addClassError(elem.parentElement, true);
				return true;
			};



			if (elem.id == 'formEmail' && (!(regEmail.test(value)))) valueError = true;


			if (elem.id == 'formPassword' && (!(value.length >= 6 && regUpperL.test(value) && regLowerL.test(value) &&
				regDigit.test(value)))) valueError = true;


			if ((elem.id == 'formRepeatPassword') && ((value != document.getElementById("formPassword").value))) valueError = true;


			if (elem.id == 'formTel') valueError = !regTel.test(value);

			if (valueError) {
				addClassError(elem.parentElement);
				return true;
			} else {
				removeClassError(elem.parentElement);
				return false;
			};
		};
		/*-----------------------------------------------------------------------------*/
		function addClassError(inputParent, empty = false) {
			if (empty) inputParent.querySelector(".form__label").classList.add("label--error");
			inputParent.querySelector(".form__input").classList.add("input--error");
			inputParent.querySelector(".form__prompt").classList.add("prompt--error");
		};
		function removeClassError(inputParent) {
			inputParent.querySelector(".form__label").classList.remove("label--error");
			inputParent.querySelector(".form__input").classList.remove("input--error");
			inputParent.querySelector(".form__prompt").classList.remove("prompt--error");
		};
		/*-----------------------------------------------------------------------------*/

		function checkReg(e) {
			let cookie = document.cookie.split(';');
			let cookieObject = {};
			for (var i = 0; i < cookie.length; i++) {
				var cookieArr = cookie[i].split('=');
				cookieObject[cookieArr[0]] = cookieArr[1];
			}

			if ('userEmail' in cookieObject) {
				greeting.innerText = cookieObject['userEmail'];
				formRegistration.hidden = true;
				btn.hidden = true;
				btn2.hidden = true;
				btn3.hidden = false;
				for (let key in cookieObject) {
					if (key == 'userEmail') continue;
					document.getElementById(key).value = cookieObject[key];
				}
			} else {
				btn3.hidden = true;
			};
		};



		/*modal-window-end*/

		$(function(){
			$('#btn').click(function(){
				$('.popup-fade').css('opacity', '1');
				$('.popup-fade').show('drop', 800);

			});
			$('.popup-close').click(function() {
				$(this).parents('.popup-fade').fadeOut();
				return false;
			});

			$(document).keydown(function(e) {
				if (e.keyCode === 27) {
					e.stopPropagation();
					$('.popup-fade').fadeOut();
				}
			});

			$('.popup-fade').click(function(e) {
				if ($(e.target).closest('.popup').length == 0) {
				$(this).fadeOut();
				}
			});
		});


/*show-hide-menu*/
$(document).ready(function() {
		  "use strict";
		  $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
		  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
		  $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
		  $(".menu > ul > li").hover(function(e) {
		    if ($(window).width() > 943) {
		      $(this).children("ul").stop(true, false).fadeToggle(150);
		      e.preventDefault();
		    }
		  });
		  $(".menu > ul > li").click(function() {
		    if ($(window).width() <= 943) {
		      $(this).children("ul").fadeToggle(150);
		    }
		  });
		  $(".menu-mobile").click(function(e) {
		    $(".menu > ul").toggleClass('show-on-mobile');
		    e.preventDefault();
		  });
		});

		$(window).resize(function() {
		  $(".menu > ul > li").children("ul").hide();
		  $(".menu > ul").removeClass('show-on-mobile');
		});
		/*show-hide-menu-end*/
		/*preloader*/
		window.onload = function() {
     window.setTimeout(function() {
       document.body.classList.add('loaded');
     });
   }
   /*preloader-end*/

/*modal onload window end*/

/*404-error*/


var tl = new TimelineMax();

tl.add(function(){
  animateCopy();
  blinkHandle();
}, 0.2)

function animateCopy() {
  mySplitText.split({type:"chars, words"})
  splitTextTimeline.staggerFrom(mySplitText.chars, 0.001, {autoAlpha:0, ease:Back.easeInOut.config(1.7), onComplete: function(){
    animateHandle()
  }}, 0.05);
}

function blinkHandle() {
  handleTL.fromTo('.handle', 0.4, {autoAlpha:0},{autoAlpha:1, repeat:-1, yoyo:true}, 0);
}

function animateHandle() {
  handleTL.to('.handle', 0.7, {x:$copyWidth, ease:SteppedEase.config(12)}, 0.05);
}

$('#cb-replay').on('click', function(){
  splitTextTimeline.restart()
  handleTL.restart()
});














window.onload = function() {
     window.setTimeout(function() {
       document.body.classList.add('loaded');
     });
   };
