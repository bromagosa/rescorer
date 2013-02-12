smalltalk.addPackage('Rescorer', {});
smalltalk.addClass('SheetWidget', smalltalk.Widget, ['lines', 'key', 'sheet', 'keyName', 'note', 'currentNotePosition'], 'Rescorer');
smalltalk.addMethod(
"_currentNotePosition",
smalltalk.method({
selector: "currentNotePosition",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@currentNotePosition"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@currentNotePosition"]=smalltalk.send((13),"_atRandom",[]);
$1=self["@currentNotePosition"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "currentNotePosition\x0a\x09^ currentNotePosition ifNil: [ currentNotePosition := 13 atRandom ]",
messageSends: ["ifNil:", "atRandom"],
referencedClasses: []
}),
smalltalk.SheetWidget);

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
self["@lines"]=smalltalk.send(smalltalk.send((1),"_to_",[(7)]),"_collect_",[(function(index){
$1=smalltalk.send(html,"_hr",[]);
smalltalk.send($1,"_class_",[smalltalk.send("line i","__comma",[smalltalk.send(index,"_asString",[])])]);
$2=smalltalk.send($1,"_style_",[smalltalk.send(smalltalk.send("bottom: ","__comma",[smalltalk.send(smalltalk.send(index,"__star",[(12.5)]),"_asString",[])]),"__comma",["%;"])]);
return $2;
})]);
return self},
args: ["html"],
source: "renderLinesOn: html\x0a\x09lines := (1 to: 7) collect: [ :index | \x0a    \x09html hr \x0a        \x09class: 'line i' , index asString;\x0a        \x09style: 'bottom: ' , (index * 12.5) asString , '%;' ]",
messageSends: ["collect:", "class:", ",", "asString", "hr", "style:", "*", "to:"],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderNoteOn_",
smalltalk.method({
selector: "renderNoteOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2,$6,$5,$4,$3,$7;
$1=smalltalk.send(html,"_img",[]);
smalltalk.send($1,"_class_",[smalltalk.send("image note i","__comma",[smalltalk.send(smalltalk.send(self,"_currentNotePosition",[]),"_asString",[])])]);
$2=$1;
$6=smalltalk.send([(1), (13)],"_includes_",[smalltalk.send(self,"_currentNotePosition",[])]);
if(smalltalk.assert($6)){
$5="-slashed";
} else {
$5="";
};
$4=smalltalk.send("images/note","__comma",[$5]);
$3=smalltalk.send($4,"__comma",[".svg"]);
smalltalk.send($2,"_src_",[$3]);
$7=smalltalk.send($1,"_style_",[smalltalk.send(smalltalk.send("bottom: ","__comma",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_currentNotePosition",[]),"__star",[(6.25)]),"__plus",[(1)]),"_asString",[])]),"__comma",["%;"])]);
smalltalk.send(console,"_log_",[smalltalk.send(smalltalk.send(self,"_currentNotePosition",[]),"_asString",[])]);
return self},
args: ["html"],
source: "renderNoteOn: html\x0a\x09html img\x0a   \x09 \x09class: 'image note i' , self currentNotePosition asString; \x0a        src: 'images/note' , ((#(1 13) includes: self currentNotePosition) ifTrue: ['-slashed'] ifFalse: ['']) , '.svg';\x0a        style: 'bottom: ' , ((self currentNotePosition * 6.25) + 1) asString , '%;'.\x0a\x09console log: self currentNotePosition asString.",
messageSends: ["class:", ",", "asString", "currentNotePosition", "img", "src:", "ifTrue:ifFalse:", "includes:", "style:", "+", "*", "log:"],
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
var $1,$2,$3,$5,$6,$4;
$1=smalltalk.send(html,"_a",[]);
smalltalk.send($1,"_with_",["update"]);
smalltalk.send($1,"_style_",["position:fixed"]);
$2=smalltalk.send($1,"_onClick_",[(function(){
return smalltalk.send(self,"_updateNote",[]);
})]);
$3=smalltalk.send(html,"_div",[]);
smalltalk.send($3,"_class_",["sheet-container"]);
$4=smalltalk.send($3,"_with_",[(function(){
self["@sheet"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_class_",["sheet"]);
self["@sheet"];
return smalltalk.send(self["@sheet"],"_with_",[(function(){
$5=self;
smalltalk.send($5,"_renderKeyOn_",[html]);
$6=smalltalk.send($5,"_renderLinesOn_",[html]);
$6;
self["@note"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",[(function(){
return smalltalk.send(self,"_renderNoteOn_",[html]);
})]);
return self["@note"];
})]);
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html a \x0a    \x09with: 'update';\x0a        style: 'position:fixed';\x0a    \x09onClick: [ self updateNote ].\x0a        \x0a\x09html div \x0a    \x09class: 'sheet-container';\x0a    \x09with: [\x0a\x09\x09\x09sheet := html div class: 'sheet'.\x0a            sheet\x0a    \x09\x09\x09with: [\x0a    \x09\x09\x09\x09self \x0a            \x09\x09\x09renderKeyOn: html;\x0a\x09\x09\x09\x09\x09\x09renderLinesOn: html.\x0a                    note := html div with: [ self renderNoteOn: html ]]]",
messageSends: ["with:", "a", "style:", "onClick:", "updateNote", "class:", "div", "renderKeyOn:", "renderLinesOn:", "renderNoteOn:"],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_updateNote",
smalltalk.method({
selector: "updateNote",
category: 'rendering',
fn: function (){
var self=this;
self["@currentNotePosition"]=smalltalk.send(smalltalk.send(smalltalk.send((1),"_to_",[(13)]),"_remove_",[self["@currentNotePosition"]]),"_atRandom",[]);
smalltalk.send(self["@note"],"_contents_",[(function(html){
return smalltalk.send(self,"_renderNoteOn_",[html]);
})]);
return self},
args: [],
source: "updateNote\x0a\x09currentNotePosition := ((1 to: 13) remove: currentNotePosition) atRandom.\x0a\x09note contents: [:html | self renderNoteOn: html]",
messageSends: ["atRandom", "remove:", "to:", "contents:", "renderNoteOn:"],
referencedClasses: []
}),
smalltalk.SheetWidget);



