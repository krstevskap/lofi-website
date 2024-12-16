'use strict';

/**
 * audio-player service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::audio-player.audio-player');
