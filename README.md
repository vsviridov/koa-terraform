koa-terraform
=============

Use Chloi's Terraform layout engine with Koa

!!!Very raw!!!
--------------

API
===

#### koaTerraform(root: String, globals: Object) => (context: Koa.Context, next: () => Promise<Any>) => void;

Supply the root path and globals

#### Koa.Context.render(template: String, locals: Object) => Promise<String>;

Supply the template name and locals.

View Data merging order
-----------------------

`viewData = locals <= ctx.state <= globals`



