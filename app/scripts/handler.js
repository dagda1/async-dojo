import LoginController from "login";
import Authenticator from "authenticator";
import CallbackBulkLoader from "callbacks";
import PromiseBulkLoader from "promises";
import GeneratorBulkLoader from "generators";
import PeopleMerger from "people-merger";
import Renderer from "renderer";
import async from "generator-utils";

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

  $('.login').on('click', function(e) {
    var loginController = new LoginController();

    loginController.login(successHandler, errorHandler);
  });


  $('.authenticate').on('click', function(e) {
    var authenticator = new Authenticator();

    var input = $('input[type=password]').eq(0);

    authenticator.login(input.val(), successHandler, errorHandler);

    input.val('');
  });

  $('.call-back').on('click', function(e) {
    var bulkLoader = new CallbackBulkLoader();

    var input = $('input[type=password]').eq(1);

    bulkLoader.load(input.val(), render, errorHandler);

    input.val('');
  });

  $('.promises').on('click', function(e) {
    var bulkLoader = new PromiseBulkLoader();

    var input = $('input[type=password]').eq(2);

    bulkLoader.load(input.val())
      .then(render)
      .catch(errorHandler);

    input.val('');
  });

  $('.generators').on('click', function(e) {
    var bulkLoader = new GeneratorBulkLoader();

    var iterator = bulkLoader.iterator();
  });

  $('.clear').on('click', function(e) {
    content.html('');
    content.parent().addClass('hidden');
    $('input[type=password]').val('');
  });
}

export { setupHandlers };
