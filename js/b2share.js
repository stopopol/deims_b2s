/**
 * @file
 * Provides JavaScript functions for the module
 */


(function ($) {
    Drupal.behaviors.b2share = {
        attach: function (context, settings) {
			// put id of my submit button here
            $('#b2share_submit').click(function(e){
                e.preventDefault();

                // I don't think I need anything else here

                return false;
            });
        }
    };
})(jQuery);
