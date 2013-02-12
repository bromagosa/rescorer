smalltalk.addPackage('Rescorer', {});
smalltalk.addClass('NoteController', smalltalk.Object, ['noteDictionary'], 'Rescorer');
smalltalk.addMethod(
"_fKeyNotes",
smalltalk.method({
selector: "fKeyNotes",
fn: function (){
var self=this;
return [smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C")];
}
}),
smalltalk.NoteController);

smalltalk.addMethod(
"_gKeyNotes",
smalltalk.method({
selector: "gKeyNotes",
fn: function (){
var self=this;
return [smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A")];
}
}),
smalltalk.NoteController);

smalltalk.addMethod(
"_noteAtPosition_key_",
smalltalk.method({
selector: "noteAtPosition:key:",
fn: function (aNumber,aKeySymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_noteDictionary",[]),"_at_",[aKeySymbol]),"_at_",[aNumber]);
return $1;
}
}),
smalltalk.NoteController);

smalltalk.addMethod(
"_noteDictionary",
smalltalk.method({
selector: "noteDictionary",
fn: function (){
var self=this;
var $2,$3,$4,$1;
$2=self["@noteDictionary"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=smalltalk.send((smalltalk.Dictionary || Dictionary),"_new",[]);
smalltalk.send($3,"_at_put_",[smalltalk.symbolFor("G"),smalltalk.send(self,"_gKeyNotes",[])]);
smalltalk.send($3,"_at_put_",[smalltalk.symbolFor("F"),smalltalk.send(self,"_fKeyNotes",[])]);
$4=smalltalk.send($3,"_yourself",[]);
self["@noteDictionary"]=$4;
$1=self["@noteDictionary"];
} else {
$1=$2;
};
return $1;
}
}),
smalltalk.NoteController);



smalltalk.addClass('SheetWidget', smalltalk.Widget, ['lines', 'key', 'sheet', 'keyName', 'note', 'currentNotePosition'], 'Rescorer');
smalltalk.addMethod(
"_currentNotePosition",
smalltalk.method({
selector: "currentNotePosition",
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
}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_keyName",
smalltalk.method({
selector: "keyName",
fn: function (){
var self=this;
var $2,$1;
$2=self["@keyName"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@keyName"]=smalltalk.symbolFor("F");
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
smalltalk.send($1,"_class_",[smalltalk.send("image key ","__comma",[smalltalk.send(smalltalk.send(self,"_keyName",[]),"_asString",[])])]);
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
self["@lines"]=smalltalk.send(smalltalk.send((1),"_to_",[(7)]),"_collect_",[(function(index){
$1=smalltalk.send(html,"_hr",[]);
smalltalk.send($1,"_class_",[smalltalk.send("line i","__comma",[smalltalk.send(index,"_asString",[])])]);
$2=smalltalk.send($1,"_style_",[smalltalk.send(smalltalk.send("bottom: ","__comma",[smalltalk.send(smalltalk.send(index,"__star",[(12.5)]),"_asString",[])]),"__comma",["%;"])]);
return $2;
})]);
return self}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderNoteOn_",
smalltalk.method({
selector: "renderNoteOn:",
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
return self}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_updateNote",
smalltalk.method({
selector: "updateNote",
fn: function (){
var self=this;
self["@currentNotePosition"]=smalltalk.send(smalltalk.send(smalltalk.send((1),"_to_",[(13)]),"_remove_",[self["@currentNotePosition"]]),"_atRandom",[]);
smalltalk.send(console,"_log_",[smalltalk.send(smalltalk.send((smalltalk.NoteController || NoteController),"_new",[]),"_noteAtPosition_key_",[self["@currentNotePosition"],smalltalk.send(self,"_keyName",[])])]);
smalltalk.send(self["@note"],"_contents_",[(function(html){
return smalltalk.send(self,"_renderNoteOn_",[html]);
})]);
return self}
}),
smalltalk.SheetWidget);



