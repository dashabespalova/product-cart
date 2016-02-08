;(function($){
	$(function(){
		var slider = $('.ba-slider');
		slider.slick({
			dots:true,
			gorizontal:true,
			infinity: false
		});
		var qtyField = $('.ba-product__qty-field'),
		qtyUp = $('.ba-product__qty-up'),
		qtyDown = $('.ba-product__qty-down');
		qtyUp.on('click', function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			qtyField.val(++oldVal);
		});
		qtyDown.on('click', function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			if (--oldVal > 0){
				qtyField.val(oldVal);
			}
		});

		var prodColor = $('[name="product_color"]'),
			prodImg = $('.product_img'),
			prodTitle = $('.ba-product__title > span');
		prodColor.on('change', function(){

			if (this.value === "black"){
				prodImg.attr({'src': 'img/hp-black.png', 'alt': 'Black headphones'});

				prodTitle.html("Black");
				// prodImg.fadeIn('slow');
			} else {
				prodImg.attr({'src': 'img/hp-brown.png', 'alt': 'Brown headphones'});

				prodTitle.html("Brown");
			}
		});
	});
})(jQuery);
