/*
[rewrite_local]
#jianying （by bennyao）
https://commerce-api.faceu.mobi/commerce/v1/purchase/purchase_info?
https://commerce-api.faceu.mobi/commerce/v1/purchase/user_wallet_info?

^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/purchase\/* url script-response-body https://raw.githubusercontent.com/aobenny/quan/main/VIP/jianying.js
[MITM]
hostname:commerce-api.faceu.mobi


var body=$response.body; 

body=body.replace(/has_purchased\":false/g,'has_purchased":true').replace(/has_purchased\\\":false/g,'has_purchased\":true');

$done({body});
*/
var body = $response.body; 
var obj = JSON.parse(body); 


obj.data.has_purchased=true,


obj.data.total_money=9999;
obj.data.current_money=9999;
obj.data.can_buy_template_free=true;
obj.response='{\"user_id\":12848796284315,\"total_money\":9999,\"current_money\":9999,\"currency_code\":\"CNY\",\"latest_record_time\":0,\"can_buy_template_free\":true}';

body = JSON.stringify(obj); 
$done(body);
