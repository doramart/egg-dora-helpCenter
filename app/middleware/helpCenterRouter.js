const _ = require('lodash');
const helpCenterAdminController = require('../controller/manage/helpCenter')

module.exports = (options, app) => {

    return async function helpCenterRouter(ctx, next) {

        let pluginConfig = app.config.doraHelpCenter;
        await ctx.initPluginRouter(pluginConfig, helpCenterAdminController);
        await next();

    }

}