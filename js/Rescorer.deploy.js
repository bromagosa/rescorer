smalltalk.addPackage('Rescorer', {});
smalltalk.addClass('GameWidget', smalltalk.Widget, ['sheetWidget', 'noteButtonsWidget'], 'Rescorer');
smalltalk.addMethod(
"_checkNote_",
smalltalk.method({
selector: "checkNote:",
fn: function (aNoteSymbol){
var self=this;
var $1;
$1=smalltalk.send(self,"_isNoteCorrect_",[aNoteSymbol]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_correctAnswerAction",[]);
} else {
smalltalk.send(self,"_wrongAnswerAction",[]);
};
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_correctAnswerAction",
smalltalk.method({
selector: "correctAnswerAction",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_nextNote",[]);
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_isNoteCorrect_",
smalltalk.method({
selector: "isNoteCorrect:",
fn: function (aNoteSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_currentNote",[]),"_symbol",[]),"__eq",[aNoteSymbol]);
return $1;
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_noteButtonsWidget",
smalltalk.method({
selector: "noteButtonsWidget",
fn: function (){
var self=this;
var $2,$1;
$2=self["@noteButtonsWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@noteButtonsWidget"]=smalltalk.send(smalltalk.send((smalltalk.NoteButtonsWidget || NoteButtonsWidget),"_new",[]),"_game_",[self]);
$1=self["@noteButtonsWidget"];
} else {
$1=$2;
};
return $1;
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var $1,$2,$3,$4;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["sheet-container"]);
$2=smalltalk.send($1,"_with_",[smalltalk.send(self,"_sheetWidget",[])]);
$3=smalltalk.send(html,"_div",[]);
smalltalk.send($3,"_class_",["button-container"]);
$4=smalltalk.send($3,"_with_",[smalltalk.send(self,"_noteButtonsWidget",[])]);
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_sheetWidget",
smalltalk.method({
selector: "sheetWidget",
fn: function (){
var self=this;
var $2,$1;
$2=self["@sheetWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@sheetWidget"]=smalltalk.send(smalltalk.send((smalltalk.SheetWidget || SheetWidget),"_new",[]),"_game_",[self]);
$1=self["@sheetWidget"];
} else {
$1=$2;
};
return $1;
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_wrongAnswerAction",
smalltalk.method({
selector: "wrongAnswerAction",
fn: function (){
var self=this;
smalltalk.send(window,"_alert_",["Fatal!"]);
return self}
}),
smalltalk.GameWidget);



smalltalk.addClass('Note', smalltalk.Object, ['position', 'symbol', 'octave'], 'Rescorer');
smalltalk.addMethod(
"_octave",
smalltalk.method({
selector: "octave",
fn: function (){
var self=this;
var $1;
$1=self["@octave"];
return $1;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_octave_",
smalltalk.method({
selector: "octave:",
fn: function (aNumber){
var self=this;
self["@octave"]=aNumber;
return self}
}),
smalltalk.Note);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
fn: function (){
var self=this;
var $1;
$1=self["@position"];
return $1;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
fn: function (aNumber){
var self=this;
self["@position"]=aNumber;
return self}
}),
smalltalk.Note);

smalltalk.addMethod(
"_soundFile",
smalltalk.method({
selector: "soundFile",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_symbol",[]),"_asString",[]),"__comma",[smalltalk.send(smalltalk.send(self,"_octave",[]),"_asString",[])]),"__comma",[".wav"]);
return $1;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_symbol",
smalltalk.method({
selector: "symbol",
fn: function (){
var self=this;
var $1;
$1=self["@symbol"];
return $1;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_symbol_",
smalltalk.method({
selector: "symbol:",
fn: function (aString){
var self=this;
self["@symbol"]=aString;
return self}
}),
smalltalk.Note);


smalltalk.Note.klass.iVarNames = ['noteDictionary','octaveDictionary'];
smalltalk.addMethod(
"_fKeyNotes",
smalltalk.method({
selector: "fKeyNotes",
fn: function (){
var self=this;
return [smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C")];
}
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_fKeyOctaves",
smalltalk.method({
selector: "fKeyOctaves",
fn: function (){
var self=this;
return [(1), (1), (1), (1), (1), (2), (2), (2), (2), (2), (2), (2), (3)];
}
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_gKeyNotes",
smalltalk.method({
selector: "gKeyNotes",
fn: function (){
var self=this;
return [smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A")];
}
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_gKeyOctaves",
smalltalk.method({
selector: "gKeyOctaves",
fn: function (){
var self=this;
return [(3), (3), (3), (3), (3), (3), (3), (4), (4), (4), (4), (4), (4)];
}
}),
smalltalk.Note.klass);

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
smalltalk.Note.klass);

smalltalk.addMethod(
"_octaveDictionary",
smalltalk.method({
selector: "octaveDictionary",
fn: function (){
var self=this;
var $2,$3,$4,$1;
$2=self["@octaveDictionary"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=smalltalk.send((smalltalk.Dictionary || Dictionary),"_new",[]);
smalltalk.send($3,"_at_put_",[smalltalk.symbolFor("G"),smalltalk.send(self,"_gKeyOctaves",[])]);
smalltalk.send($3,"_at_put_",[smalltalk.symbolFor("F"),smalltalk.send(self,"_fKeyOctaves",[])]);
$4=smalltalk.send($3,"_yourself",[]);
self["@octaveDictionary"]=$4;
$1=self["@octaveDictionary"];
} else {
$1=$2;
};
return $1;
}
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_position_key_",
smalltalk.method({
selector: "position:key:",
fn: function (aNumber,aKeySymbol){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_symbol_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_noteDictionary",[]),"_at_",[aKeySymbol]),"_at_",[aNumber])]);
smalltalk.send($2,"_position_",[aNumber]);
$3=smalltalk.send($2,"_octave_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_octaveDictionary",[]),"_at_",[aKeySymbol]),"_at_",[aNumber])]);
$1=$3;
return $1;
}
}),
smalltalk.Note.klass);


smalltalk.addClass('NoteButtonsWidget', smalltalk.Widget, ['noteNamesDictionary', 'game'], 'Rescorer');
smalltalk.addMethod(
"_game",
smalltalk.method({
selector: "game",
fn: function (){
var self=this;
var $1;
$1=self["@game"];
return $1;
}
}),
smalltalk.NoteButtonsWidget);

smalltalk.addMethod(
"_game_",
smalltalk.method({
selector: "game:",
fn: function (aGameWidget){
var self=this;
self["@game"]=aGameWidget;
return self}
}),
smalltalk.NoteButtonsWidget);

smalltalk.addMethod(
"_noteNamesDictionary",
smalltalk.method({
selector: "noteNamesDictionary",
fn: function (){
var self=this;
var $2,$3,$4,$1;
$2=self["@noteNamesDictionary"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=smalltalk.send((smalltalk.Dictionary || Dictionary),"_new",[]);
smalltalk.send($3,"_at_put_",["DO",smalltalk.symbolFor("C")]);
smalltalk.send($3,"_at_put_",["RE",smalltalk.symbolFor("D")]);
smalltalk.send($3,"_at_put_",["MI",smalltalk.symbolFor("E")]);
smalltalk.send($3,"_at_put_",["FA",smalltalk.symbolFor("F")]);
smalltalk.send($3,"_at_put_",["SOL",smalltalk.symbolFor("G")]);
smalltalk.send($3,"_at_put_",["LA",smalltalk.symbolFor("A")]);
smalltalk.send($3,"_at_put_",["SI",smalltalk.symbolFor("B")]);
$4=smalltalk.send($3,"_yourself",[]);
self["@noteNamesDictionary"]=$4;
$1=self["@noteNamesDictionary"];
} else {
$1=$2;
};
return $1;
}
}),
smalltalk.NoteButtonsWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var $1,$2;
smalltalk.send(smalltalk.send(smalltalk.send(self,"_noteNamesDictionary",[]),"_associations",[]),"_do_",[(function(each){
$1=smalltalk.send(html,"_button",[]);
smalltalk.send($1,"_with_",[smalltalk.send(each,"_key",[])]);
$2=smalltalk.send($1,"_onClick_",[(function(){
return smalltalk.send(smalltalk.send(self,"_game",[]),"_checkNote_",[smalltalk.send(each,"_value",[])]);
})]);
return $2;
})]);
return self}
}),
smalltalk.NoteButtonsWidget);



smalltalk.addClass('SheetWidget', smalltalk.Widget, ['lines', 'key', 'sheet', 'keyName', 'note', 'currentNotePosition', 'game'], 'Rescorer');
smalltalk.addMethod(
"_currentNote",
smalltalk.method({
selector: "currentNote",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Note || Note),"_position_key_",[smalltalk.send(self,"_currentNotePosition",[]),smalltalk.send(self,"_keyName",[])]);
return $1;
}
}),
smalltalk.SheetWidget);

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
"_game",
smalltalk.method({
selector: "game",
fn: function (){
var self=this;
var $1;
$1=self["@game"];
return $1;
}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_game_",
smalltalk.method({
selector: "game:",
fn: function (aGameWidget){
var self=this;
self["@game"]=aGameWidget;
return self}
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
"_nextNote",
smalltalk.method({
selector: "nextNote",
fn: function (){
var self=this;
self["@currentNotePosition"]=smalltalk.send(smalltalk.send(smalltalk.send((1),"_to_",[(13)]),"_remove_",[self["@currentNotePosition"]]),"_atRandom",[]);
smalltalk.send(self["@note"],"_contents_",[(function(html){
return smalltalk.send(self,"_renderNoteOn_",[html]);
})]);
return self}
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
return self}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var $1,$2;
self["@sheet"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_class_",["sheet"]);
smalltalk.send(self["@sheet"],"_with_",[(function(){
$1=self;
smalltalk.send($1,"_renderKeyOn_",[html]);
$2=smalltalk.send($1,"_renderLinesOn_",[html]);
$2;
self["@note"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",[(function(){
return smalltalk.send(self,"_renderNoteOn_",[html]);
})]);
return self["@note"];
})]);
return self}
}),
smalltalk.SheetWidget);



