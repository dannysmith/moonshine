jQuery(document).ready(function($) {
  $('.screen-overlay').hide();
  $('header.intro h1').show().fitText();

  $('#mc-embedded-subscribe').click(function() {
    if ($('#mce-EMAIL').val() == "") {
      $('#mce-EMAIL').focus();
      return false;
    } else {
      return true;
    }
  });
});
