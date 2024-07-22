sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sameerahmed1a38/ProductFAQApp/test/integration/FirstJourney',
		'sameerahmed1a38/ProductFAQApp/test/integration/pages/ProductFAQList',
		'sameerahmed1a38/ProductFAQApp/test/integration/pages/ProductFAQObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductFAQList, ProductFAQObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sameerahmed1a38/ProductFAQApp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductFAQList: ProductFAQList,
					onTheProductFAQObjectPage: ProductFAQObjectPage
                }
            },
            opaJourney.run
        );
    }
);