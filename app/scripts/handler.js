import CallbackBulkLoader from "callbacks";
import PromiseBulkLoader from "promises";
import GeneratorBulkLoader from "generators";
import PeopleMerger from "people-merger";
import Renderer from "renderer";

function setupHandlers() {
  var content = $(".table-condensed tbody"),
      template = $('#bulk-template');

  var errorHandler = function(error) {
    var el = $('.alert'),
        errorBody = error.responseJSON ||
                    error.response ||
                    error,
        message = errorBody.error || errorBody.message;

    $('span', el).html(message);

    el.fadeIn('slow', function() {
      el.fadeOut(3000);
    });
  };

  var render = function(bulk) {
    var merged = new PeopleMerger(bulk).merge();

    var renderer = new Renderer(content, template, merged);

    renderer.render();
  };

  RSVP.on('error', errorHandler);

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

export { setupHandlers };
