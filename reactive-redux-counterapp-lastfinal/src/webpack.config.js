const path = require("path");
const express = require("express");

module.exports = {
  devServer: {
    setupMiddlewares: [
      (app) => {
        app.use(express.static(path.join(__dirname, "public")));
      },
    ],
  },
};
