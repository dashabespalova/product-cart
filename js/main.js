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
		imgBlack = $('.img-black'),
		imgBrown = $('.img-brown');

		prodColor.on('change', function(){
			if ($(this).val() == "black"){
				imgBlack.css('display', 'block');
				imgBrown.css('display', 'none');
			} else {
				imgBrown.css('display', 'block');
				imgBlack.css('display', 'none');
			}
		});
	});
})(jQuery);
