sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sameerahmed1a38.Customermessage',
            componentId: 'CustomerMessageList',
            contextPath: '/CustomerMessage'
        },
        CustomPageDefinitions
    );
});