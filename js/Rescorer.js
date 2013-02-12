smalltalk.addPackage('Rescorer', {});
smalltalk.addClass('SheetWidget', smalltalk.Widget, ['lines', 'key', 'sheet', 'keyName'], 'Rescorer');
smalltalk.addMethod(
"_keyName",
smalltalk.method({
selector: "keyName",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@keyName"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@keyName"]=smalltalk.symbolFor("G");
$1=self["@keyName"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "keyName\x0a\x09^ keyName ifNil: [ keyName := #G ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderKeyOn_",
smalltalk.method({
selector: "renderKeyOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_img",[]);
smalltalk.send($1,"_class_",["image key"]);
$2=smalltalk.send($1,"_src_",[smalltalk.send(smalltalk.send("images/","__comma",[smalltalk.send(smalltalk.send(self,"_keyName",[]),"_asString",[])]),"__comma",[".svg"])]);
self["@key"]=$2;
return self},
args: ["html"],
source: "renderKeyOn: html\x0akey := \x0a    html img\x0a    \x09class: 'image key'; \x0a\x09\x09src: 'images/' , self keyName asString , '.svg'.",
messageSends: ["class:", "img", "src:", ",", "asString", "keyName"],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderLinesOn_",
smalltalk.method({
selector: "renderLinesOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2;
self["@lines"]=smalltalk.send(smalltalk.send((1),"_to_",[(5)]),"_collect_",[(function(index){
$1=smalltalk.send(html,"_hr",[]);
smalltalk.send($1,"_class_",[smalltalk.send("line ","__comma",[smalltalk.send(index,"_asString",[])])]);
$2=smalltalk.send($1,"_style_",[smalltalk.send(smalltalk.send("top: ","__comma",[smalltalk.send(smalltalk.send(index,"__star",[smalltalk.send((100),"__slash",[(6)])]),"_asString",[])]),"__comma",["%;"])]);
return $2;
})]);
return self},
args: ["html"],
source: "renderLinesOn: html\x0a\x09lines := (1 to: 5) collect: [ :index | \x0a    \x09html hr \x0a        \x09class: 'line ' , index asString;\x0a        \x09style: 'top: ' , (index * (100/6)) asString , '%;' ]",
messageSends: ["collect:", "class:", ",", "asString", "hr", "style:", "*", "/", "to:"],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$3,$4,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["sheet-container"]);
$2=smalltalk.send($1,"_with_",[(function(){
self["@sheet"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_class_",["sheet"]);
self["@sheet"];
return smalltalk.send(self["@sheet"],"_with_",[(function(){
$3=self;
smalltalk.send($3,"_renderKeyOn_",[html]);
$4=smalltalk.send($3,"_renderLinesOn_",[html]);
return $4;
})]);
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a    \x09class: 'sheet-container';\x0a    \x09with: [\x0a\x09\x09\x09sheet := html div class: 'sheet'.\x0a            sheet\x0a    \x09\x09\x09with: [\x0a    \x09\x09\x09\x09self \x0a            \x09\x09\x09renderKeyOn: html;\x0a\x09\x09\x09\x09\x09\x09renderLinesOn: html ]]",
messageSends: ["class:", "div", "with:", "renderKeyOn:", "renderLinesOn:"],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_sheet",
smalltalk.method({
selector: "sheet",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sheet"];
return $1;
},
args: [],
source: "sheet\x0a\x09^ sheet",
messageSends: [],
referencedClasses: []
}),
smalltalk.SheetWidget);



