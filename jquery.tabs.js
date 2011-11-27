(function( $ ){ 
	$.fn.tabs = function(options) {
		var options = $.extend({
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
				tabsInitId='tabsNav'+Math.floor(10000 * (Math.random() % 1)),
				urlHash = window.location.href.replace(/\S*#/,''),
				activeTab= typeof($(tabs[0]).attr('id'))!=="undefined" ? $(tabs[0]).attr('id') : $(tabs[0]).attr('id', 'tabs'+Math.floor(10000 * (Math.random() % 1))).attr('id');
			container.css('position', 'relative');
			spisok='<ul class="' + options.listClass + '" id="'+tabsInitId+'">';
			tabs.each(function(index) {
				var tabid=typeof($(tabs[index]).attr('id'))!=="undefined" ? $(tabs[index]).attr('id') : $(tabs[index]).attr('id', 'tabs'+Math.floor(10000 * (Math.random() % 1))).attr('id')
				spisok+='<li><a href="#'+tabid+'">'+$(tabs[index]).find(options.heder+':first').text()+"</a></li>"
				$(tabs[index]).find(options.heder+':first').detach()
				$(tabs[index]).addClass(options.tabsClass)
				if(tabid == urlHash) activeTab=tabid;
			})
			spisok+="</ul>"
			$(container).before(spisok)
			tabs.hide()
			$('#'+tabsInitId+' a').click(function(event){
				tabs.hide() // прячем все табы
				tabs.filter(this.hash).show() // показываем содержимое текущего
					$('#'+tabsInitId+' a.selected').removeClass('selected') // убираем класс 'selected' у старой вкладки
				$(this).addClass('selected') // текушей вкладке добавляем класс 'selected'
				event.preventDefault()
				}).filter('a[href|=#'+activeTab+']').click();
		})
	}; 
})(jQuery);