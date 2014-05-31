import Authenticator from "authenticator";
import CallbackBulkLoader from "callbacks";
import PromiseBulkLoader from "promises";
import GeneratorBulkLoader from "generators";
import PeopleMerger from "people-merger";
import Renderer from "renderer";

function setupHandlers() {
  var content = $(".table-condensed tbody"),
      template = $('#bulk-template');

  var successHandler = function(message) {
    var el = $('.alert');

    $('span', el).html(message);

    el.addClass('alert-success');

    el.fadeIn('slow', function() {
      el.fadeOut(3000, function() {
        el.removeClass('alert-success');
      });
    });
  };

  var errorHandler = function(error) {
    var el = $('.alert'),
        errorBody = error.responseJSON ||
                    error.response ||
                    error,
        message = errorBody.error || errorBody.message;

    $('span', el).html(message);

    el.addClass('alert-danger');

    el.fadeIn('slow', function() {
      el.fadeOut(3000, function() {
        el.removeClass('alert-danger');
      });
    });
  };

  var render = function(bulk) {
    var merged = new PeopleMerger(bulk).merge();

    var renderer = new Renderer(content, template, merged);

    renderer.render();
  };

  $('.authenticate').on('click', function(e) {
    var authenticator = new Authenticator();

    var input = $('input[type=password]');

    authenticator.login(input.val(), successHandler, errorHandler);

    input.val('');
  });

  $('.call-back').on('click', function(e) {
    var bulkLoader = new CallbackBulkLoader();

    bulkLoader.load(render);
  });

  $('.promises').on('click', function(e) {
    var bulkLoader = new PromiseBulkLoader();

    bulkLoader.load()
      .then(render)
      .catch(errorHandler);
  });

  $('.generators').on('click', function(e) {
    var bulkLoader = new GeneratorBulkLoader();

    bulkLoader.load().then(function(result) {
      render(result);
    }, errorHandler);
  });

  $('.clear').on('click', function(e) {
    content.html('');
    content.parent().addClass('hidden');
  });
}

$(function() {
  $('.x-small').focus()
  .on('keydown', function(e) {
    if(e.keyCode !== 13) {
      return;
    }

    $('.authenticate').trigger('click');
  });
});

export { setupHandlers };
