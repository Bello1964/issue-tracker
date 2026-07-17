const swaggerJsDoc = require("swagger-jsdoc");
const options = {
  definition: {
    openapi: "3.0.3",

    info: {
      title: "Mini Issue Tracker API",
      version: "1.0.0",
      description:
        "A RESTful Issue Tracking API built with Node.js, Express, MongoDB and JWT authentication.",

      contact: {
        name: "Bello Dahood",
      },

      license: {
        name: "MIT",
      },
    },

    servers: [
      {
        url: "http://localhost:5000/api",
        description: "Development Server",
      },
    ],

    components: {
  securitySchemes: {
    cookieAuth: {
      type: "apiKey",
      in: "cookie",
      name: "token",
    },
  },

  schemas: {},
},

security: [
  {
    cookieAuth: [],
     },
   ],
  },


 apis: [
  "src/routes/*.js",
  "src/docs/**/*.js",
],
};

const spec = swaggerJsDoc(options);

module.exports = spec;