$(document).ready(function() {
    'use strict';
    var search_field = $('.search-form__field'),
        search_results = $('.search-results'),
        toggle_search = $('.toggle-search-button'),
        close_search = $('.close-search-button'),
        search_result_template = "\
          <div class='search-results__item'>\
            <a class='search-results__item__title' href='{{link}}'>{{title}}</a>\
            <span class='post__date'>{{pubDate}}</span>\
          </div>";

    toggle_search.click(function(event) {
      event.preventDefault();
      $('.search-form-container').addClass('is-active');

      setTimeout(function() {
        search_field.focus();
      }, 500);
    });

    // 'input' 이벤트로 변경하여 한글 입력 처리 개선
    $('.search-form-container').on('input', function(event) {
      // input 이벤트로 변경 후 특정 입력 처리가 필요 없는 경우 여기에 코드 추가
    });

    // ESC 키를 위한 별도의 'keyup' 이벤트 리스너
    $('.search-form-container').on('keyup', function(event) {
      if (event.keyCode == 27) { // ESC 키
        $('.search-form-container').removeClass('is-active');
      }
    });

    $('.close-search-button').click(function() {
      $('.search-form-container').removeClass('is-active');
    });

    search_field.ghostHunter({
      results: search_results,
      onKeyUp         : true,
      rss             : base_url + '/feed.xml',
      zeroResultsInfo : false,
      info_template   : "<h4 class='heading'>찾은 포스트 수: {{amount}}</h4>",
      result_template : search_result_template,
      before: function() {
        search_results.fadeIn();
      }
    });

  });