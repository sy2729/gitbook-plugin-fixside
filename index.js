module.exports = {
	hooks: {
		"page:before": function(page) {
			
            let code = "let position = window.localStorage.getItem('position');if(position) {document.querySelector('.wy-side-scroll').scrollTop = position;};let lists = document.querySelectorAll('.wy-side-scroll li a');Array.prototype.forEach.call(lists, function(each){each.addEventListener('click', function(e){e.preventDefault();let link = this.getAttribute('href');if(link) {let position= this.offsetTop;window.localStorage.setItem('position', position);window.location = link;};});});"
            let script = "<script>" + code + "</script>"
            page.content = page.content + script
            return page;
		}
	}
};