/*
[rewrite_local]
#jianying （by bennyao）
https://commerce-api.faceu.mobi/commerce/v1/purchase/purchase_info?
https://commerce-api.faceu.mobi/commerce/v1/purchase/user_wallet_info?

^https:\/\/commerce\-api\.faceu\.mobi\/commerce\/v1\/purchase\/* url script-response-body https://raw.githubusercontent.com/aobenny/quan/main/VIP/jianying.js
[MITM]
hostname:commerce-api.faceu.mobi
*/

var body=$response.body; 

body=body.replace(/has_purchased\":false/g,'has_purchased":true').replace(/has_purchased\\\":false/g,'has_purchased\":true');

$done({body});
