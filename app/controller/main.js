'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async login() {
    const { ctx, service } = this;

    const data = ctx.request.body;
    const res = await service.spider.login(data);

    ctx.status = 200;
    ctx.body = res;
  }

  async studentInfo() {
    const { ctx, service } = this;

    const data = ctx.request.body;
    const res = await service.spider.getStudentInfo(data);

    ctx.status = 200;
    ctx.body = res;
  }
}

module.exports = MainController;