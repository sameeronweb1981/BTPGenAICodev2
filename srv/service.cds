using { S4HCP_ServiceOrder_Odata } from './external/S4HCP_ServiceOrder_Odata.cds';

using { sameerahmed_1_a38 as my } from '../db/schema.cds';

@path : '/service/sameerahmed_1_a38'
service sameerahmed_1_a38Srv
{
    @odata.draft.enabled
    entity CustomerMessage as
        projection on my.CustomerMessage;

    entity A_ServiceOrder as
        projection on S4HCP_ServiceOrder_Odata.A_ServiceOrder
        {
            ServiceOrder,
            ServiceOrderDescription
        };
}

annotate sameerahmed_1_a38Srv with @requires :
[
    'authenticated-user'
];
