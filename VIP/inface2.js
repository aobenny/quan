/*
[rewrite_local]
#inface （by bennyao）
^https:\/\/bmall\.camera360\.com\/api\/inface url script-response-body https://raw.githubusercontent.com/aobenny/quan/main/VIP/inface.js
[MITM]
hostname:bmall.camera360.com
*/

var body = $response.body; 
var obj = JSON.parse(body); 


body = JSON.stringify(obj); 
$done(body);
