var Renderer = function(element, template, data) {
  this.element = element;
  this.template = template;
  this.data = data;
};

Renderer.prototype.render = function() {
  this.element.parent().removeClass('hidden');
  this.element.html(_.template(this.template.html(), {items: this.data}));
};

export default Renderer;
