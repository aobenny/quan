/*
[rewrite_local]
#inface （by bennyao）
^https:\/\/bmall\.camera360\.com\/api\/inface\/ url script-response-body https://raw.githubusercontent.com/aobenny/quan/main/VIP/inface.js
[MITM]
hostname:bmall.camera360.com
*/

/*
var body = $response.body; 
var obj = JSON.parse(body); 

obj.items.vip = 0;

body = JSON.stringify(obj); 
$done(body);
*/

body = $response.body.replace(/vip':\d /g, 'vip':0');
$done({body});
