do (window,document)->
	class Validate
		name = document.getElementById('name')
		email = document.getElementById('email')
		site = document.getElementById('site')
		msg = document.getElementById('message')
		form = document.getElementById('contact_form')
		form.addEventListner 'submit', ->

		init:->

		v = new Validate();
		v.init();	
	

