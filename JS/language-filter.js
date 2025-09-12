(function() {
  var $items = $('.language-filter-grid div');
  var $buttons = $('#filter-toggles');
  var tagged = {};

  $items.each(function() {
    var item = this;
    var languages = $(this).data('language');

    if (languages) {
      languages.split(',').forEach(function(languageName) {
        if (tagged[languageName] == null) {
          tagged[languageName] = [];
        }
        tagged[languageName].push(item);
      });
    }
  });

  $('<button\>', {
    text: 'Show All',
    class: 'active',
    click: function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');
      $items.show();
    }
  }).appendTo($buttons);

  $.each(tagged, function(languageName){
    $('<button/>', {
      text: languageName + ' (' + tagged[languageName].length + ')',
      click: function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active');
        $items
          .hide()
          .filter(tagged[languageName])
          .show();
      }
    }).appendTo($buttons);
  });

}());
