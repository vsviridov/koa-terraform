const terraform = require("terraform");

module.exports = function koaTerraformConstructor(root, globals) {
  const { render } = terraform.root(root, globals);

  return function koaTerraformMiddleware(ctx, next) {
    ctx.render = function contextRenderer(template, locals) {
      return new Promise(function contextRendererPromise(resolve, reject) {
        const viewData = Object.assign({}, locals, ctx.state, globals);

        function onRenderingCompleted(error, body) {
          if (error) {
            return reject(error);
          }
          ctx.body = body;
          resolve(body);
        }
        render(template, viewData, onRenderingCompleted);
      });
    };
    return next();
  };
};
