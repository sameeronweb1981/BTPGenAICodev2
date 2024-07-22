sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sameerahmed1a38.Customermessage',
            componentId: 'CustomerMessageObjectPage',
            contextPath: '/CustomerMessage'
        },
        CustomPageDefinitions
    );
});