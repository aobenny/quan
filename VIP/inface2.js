/*
[rewrite_local]
#inface （by bennyao）
^https:\/\/bmall\.camera360\.com\/api\/inface\/(stick|effect-art|background|stripes|3dlight|palette|brushes) url script-response-body https://raw.githubusercontent.com/aobenny/quan/main/VIP/inface.js
[MITM]
hostname:bmall.camera360.com
*/
var body=$response.body; 
body=body.replace(/vip\":\d/g,'vip":0');
$done({body});
