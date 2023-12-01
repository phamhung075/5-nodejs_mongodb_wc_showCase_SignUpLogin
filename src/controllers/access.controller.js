"use strict";

const AccessService = require("../services/access.service");
const { CREATEDResponse, SuccessResponse } = require("../core/success.response");

class AccessController {
  login = async (req, res, next) => {
    new SuccessResponse({
      metadata: await AccessService.login(req.body)
    }).send(res);
  }


  signUp = async (req, res, next) => {
    new CREATEDResponse ({
      message: 'Registered OK!',
      metadata: await AccessService.signUp(req.body),
      options: {
        limit: 10
      }
    }).send(res);
  }
}

module.exports = new AccessController();
