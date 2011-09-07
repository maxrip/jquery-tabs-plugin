(function( $ ){ 
	$.fn.tabs = function(options) {
		var options = $.extend({      //���������� �������� �� ���������, ������� ����� �������������� � ������ �������
			timeOut: 500,
			animateTime: 500,
			heder:'h5',
			tabsClass:'tabs_content',
			listClass:'tabNavigation'
		},
		options)
		return $(this).each(function() {
			var container = $(this),
				tabs = $(this).children(),
				spisok,
				activeTab= $(tabs[0]).attr('id') != '' ? $(tabs[0]).attr('id') : $(tabs[0]).attr('id', 'tabs'+Math.floor(10000 * (Math.random() % 1))).attr('id');
				container.css('position', 'relative');
				spisok='<ul class="'+options.listClass+'">'
				tabs.each(function(index) {
					var tabid=$(tabs[index]).attr('id') != '' ? $(tabs[index]).attr('id') : $(tabs[index]).attr('id', 'tabs'+Math.floor(10000 * (Math.random() % 1))).attr('id')
					spisok+='<li><a href="#'+tabid+'">'+$(tabs[index]).find(options.heder+':first').text()+"</a></li>"
					$(tabs[index]).find(options.heder+':first').detach()
					$(tabs[index]).addClass(options.tabsClass)
				})
				spisok+="</ul>"
				$(container).before(spisok)
				tabs.hide()
				$('ul.'+options.listClass+' a').click(function(event){
					tabs.hide() // ������ ��� ����
					tabs.filter(this.hash).show() // ���������� ���������� ��������
						$('ul.'+options.listClass+' a').removeClass('selected') // � ���� ������� ����� 'selected'
					$(this).addClass('selected') // ������� ������� ��������� ����� 'selected'
					event.preventDefault()
					}).filter('a[href|=#'+activeTab+']').click();
		})
	}; 
})(jQuery);