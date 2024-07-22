namespace sameerahmed_1_a38;

using { S4HCP_ServiceOrder_Odata } from '../srv/external/S4HCP_ServiceOrder_Odata.cds';

entity CustomerMessage
{
    key ID : String;
    titleEnglish : String(255);
    customerName : String(255);
    productName : String(255);
    summaryEnglish : String(500);
    messageCategory : String(255);
    messageUrgency : String(255);
    messageSentiment : String(255);
    titleCustomerLanguage : String(255);
    customerId : String(255);
    productId : String(255);
    summaryCustomerLanguage : String(500);
    originatingCountry : String(255);
    sourceLanguage : String(255);
    fullMessageCustomerLanguage : String(2000);
    fullMessageEnglish : String(2000);
    suggestedResponseEnglish : String(2000);
    suggestedResponseCustomerLanguage : String(2000);
    a_ServiceOrder : Association to one S4HCP_ServiceOrder_Odata.A_ServiceOrder;
}
entity ProductFAQ
{
    key ID : Integer;
    issue : LargeString;
    question : LargeString;
    answer : LargeString;
    embedding : Vector(1536);
}
