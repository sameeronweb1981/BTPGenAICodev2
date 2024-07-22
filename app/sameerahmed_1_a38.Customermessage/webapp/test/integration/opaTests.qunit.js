sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sameerahmed1a38/Customermessage/test/integration/FirstJourney',
		'sameerahmed1a38/Customermessage/test/integration/pages/CustomerMessageList',
		'sameerahmed1a38/Customermessage/test/integration/pages/CustomerMessageObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessageList, CustomerMessageObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sameerahmed1a38/Customermessage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessageList: CustomerMessageList,
					onTheCustomerMessageObjectPage: CustomerMessageObjectPage
                }
            },
            opaJourney.run
        );
    }
);