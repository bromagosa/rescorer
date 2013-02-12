smalltalk.addPackage('Rescorer', {});
smalltalk.addClass('SheetWidget', smalltalk.Widget, ['lines', 'key', 'sheet', 'keyName'], 'Rescorer');
smalltalk.addMethod(
"_keyName",
smalltalk.method({
selector: "keyName",
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
}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderKeyOn_",
smalltalk.method({
selector: "renderKeyOn:",
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_img",[]);
smalltalk.send($1,"_class_",["image key"]);
$2=smalltalk.send($1,"_src_",[smalltalk.send(smalltalk.send("images/","__comma",[smalltalk.send(smalltalk.send(self,"_keyName",[]),"_asString",[])]),"__comma",[".svg"])]);
self["@key"]=$2;
return self}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderLinesOn_",
smalltalk.method({
selector: "renderLinesOn:",
fn: function (html){
var self=this;
var $1,$2;
self["@lines"]=smalltalk.send(smalltalk.send((1),"_to_",[(5)]),"_collect_",[(function(index){
$1=smalltalk.send(html,"_hr",[]);
smalltalk.send($1,"_class_",[smalltalk.send("line ","__comma",[smalltalk.send(index,"_asString",[])])]);
$2=smalltalk.send($1,"_style_",[smalltalk.send(smalltalk.send("top: ","__comma",[smalltalk.send(smalltalk.send(index,"__star",[smalltalk.send((100),"__slash",[(6)])]),"_asString",[])]),"__comma",["%;"])]);
return $2;
})]);
return self}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_sheet",
smalltalk.method({
selector: "sheet",
fn: function (){
var self=this;
var $1;
$1=self["@sheet"];
return $1;
}
}),
smalltalk.SheetWidget);



