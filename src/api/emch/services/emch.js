'use strict';

/**
 * emch service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emch.emch');
