smalltalk.addPackage('Rescorer', {});
smalltalk.addClass('GameWidget', smalltalk.Widget, ['sheetWidget', 'noteButtonsWidget'], 'Rescorer');
smalltalk.addMethod(
"_checkNote_",
smalltalk.method({
selector: "checkNote:",
category: 'actions',
fn: function (aNoteSymbol){
var self=this;
var $1;
$1=smalltalk.send(self,"_isNoteCorrect_",[aNoteSymbol]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_correctAnswerAction",[]);
} else {
smalltalk.send(self,"_wrongAnswerAction",[]);
};
return self},
args: ["aNoteSymbol"],
source: "checkNote: aNoteSymbol\x0a\x09(self isNoteCorrect: aNoteSymbol) \x0a    \x09ifTrue: [ self correctAnswerAction ]\x0a      \x09ifFalse: [ self wrongAnswerAction ]",
messageSends: ["ifTrue:ifFalse:", "correctAnswerAction", "wrongAnswerAction", "isNoteCorrect:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_correctAnswerAction",
smalltalk.method({
selector: "correctAnswerAction",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_nextNote",[]);
return self},
args: [],
source: "correctAnswerAction\x0a\x09self sheetWidget nextNote",
messageSends: ["nextNote", "sheetWidget"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_isNoteCorrect_",
smalltalk.method({
selector: "isNoteCorrect:",
category: 'testing',
fn: function (aNoteSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_currentNote",[]),"_symbol",[]),"__eq",[aNoteSymbol]);
return $1;
},
args: ["aNoteSymbol"],
source: "isNoteCorrect: aNoteSymbol\x0a\x09^ self sheetWidget currentNote symbol = aNoteSymbol",
messageSends: ["=", "symbol", "currentNote", "sheetWidget"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_noteButtonsWidget",
smalltalk.method({
selector: "noteButtonsWidget",
category: 'accessing',
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
},
args: [],
source: "noteButtonsWidget\x0a\x09^ noteButtonsWidget ifNil: [ noteButtonsWidget := NoteButtonsWidget new game: self ]",
messageSends: ["ifNil:", "game:", "new"],
referencedClasses: ["NoteButtonsWidget"]
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2,$3,$4;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["sheet-container"]);
$2=smalltalk.send($1,"_with_",[smalltalk.send(self,"_sheetWidget",[])]);
$3=smalltalk.send(html,"_div",[]);
smalltalk.send($3,"_class_",["button-container"]);
$4=smalltalk.send($3,"_with_",[smalltalk.send(self,"_noteButtonsWidget",[])]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a    \x09class: 'sheet-container';\x0a    \x09with: self sheetWidget.\x0a\x09html div \x0a    \x09class: 'button-container';\x0a    \x09with: self noteButtonsWidget.",
messageSends: ["class:", "div", "with:", "sheetWidget", "noteButtonsWidget"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_sheetWidget",
smalltalk.method({
selector: "sheetWidget",
category: 'accessing',
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
},
args: [],
source: "sheetWidget\x0a\x09^ sheetWidget ifNil: [ sheetWidget := SheetWidget new game: self ]",
messageSends: ["ifNil:", "game:", "new"],
referencedClasses: ["SheetWidget"]
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_wrongAnswerAction",
smalltalk.method({
selector: "wrongAnswerAction",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(window,"_alert_",["Fatal!"]);
return self},
args: [],
source: "wrongAnswerAction\x0a\x09window alert: 'Fatal!'",
messageSends: ["alert:"],
referencedClasses: []
}),
smalltalk.GameWidget);



smalltalk.addClass('Note', smalltalk.Object, ['position', 'symbol', 'octave'], 'Rescorer');
smalltalk.addMethod(
"_octave",
smalltalk.method({
selector: "octave",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@octave"];
return $1;
},
args: [],
source: "octave\x0a\x09^ octave",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_octave_",
smalltalk.method({
selector: "octave:",
category: 'accessing',
fn: function (aNumber){
var self=this;
self["@octave"]=aNumber;
return self},
args: ["aNumber"],
source: "octave: aNumber\x0a\x09octave := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@position"];
return $1;
},
args: [],
source: "position\x0a\x09^ position",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
category: 'accessing',
fn: function (aNumber){
var self=this;
self["@position"]=aNumber;
return self},
args: ["aNumber"],
source: "position: aNumber\x0a\x09position := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_soundFile",
smalltalk.method({
selector: "soundFile",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_symbol",[]),"_asString",[]),"__comma",[smalltalk.send(smalltalk.send(self,"_octave",[]),"_asString",[])]),"__comma",[".wav"]);
return $1;
},
args: [],
source: "soundFile\x0a\x09^ self symbol asString , self octave asString , '.wav'",
messageSends: [",", "asString", "octave", "symbol"],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_symbol",
smalltalk.method({
selector: "symbol",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@symbol"];
return $1;
},
args: [],
source: "symbol\x0a\x09^ symbol",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_symbol_",
smalltalk.method({
selector: "symbol:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@symbol"]=aString;
return self},
args: ["aString"],
source: "symbol: aString\x0a\x09symbol := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note);


smalltalk.Note.klass.iVarNames = ['noteDictionary','octaveDictionary'];
smalltalk.addMethod(
"_fKeyNotes",
smalltalk.method({
selector: "fKeyNotes",
category: 'accessing',
fn: function (){
var self=this;
return [smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C")];
},
args: [],
source: "fKeyNotes\x0a\x09^ #(#E #F #G #A #B #C #D #E #F #G #A #B #C)",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_fKeyOctaves",
smalltalk.method({
selector: "fKeyOctaves",
category: 'accessing',
fn: function (){
var self=this;
return [(1), (1), (1), (1), (1), (2), (2), (2), (2), (2), (2), (2), (3)];
},
args: [],
source: "fKeyOctaves\x0a\x09^ #(1 1 1 1 1 2 2 2 2 2 2 2 3)",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_gKeyNotes",
smalltalk.method({
selector: "gKeyNotes",
category: 'accessing',
fn: function (){
var self=this;
return [smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A")];
},
args: [],
source: "gKeyNotes\x0a\x09^ #(#C #D #E #F #G #A #B #C #D #E #F #G #A)",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_gKeyOctaves",
smalltalk.method({
selector: "gKeyOctaves",
category: 'accessing',
fn: function (){
var self=this;
return [(3), (3), (3), (3), (3), (3), (3), (4), (4), (4), (4), (4), (4)];
},
args: [],
source: "gKeyOctaves\x0a\x09^ #(3 3 3 3 3 3 3 4 4 4 4 4 4)",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_noteDictionary",
smalltalk.method({
selector: "noteDictionary",
category: 'accessing',
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
},
args: [],
source: "noteDictionary\x0a\x09^ noteDictionary \x0a    \x09\x09ifNil: [ noteDictionary := \x0a            \x09Dictionary new \x0a                \x09at: #G put: self gKeyNotes;\x0a                    at: #F put: self fKeyNotes;\x0a                    yourself ]",
messageSends: ["ifNil:", "at:put:", "gKeyNotes", "new", "fKeyNotes", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_octaveDictionary",
smalltalk.method({
selector: "octaveDictionary",
category: 'accessing',
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
},
args: [],
source: "octaveDictionary\x0a\x09^ octaveDictionary \x0a    \x09\x09ifNil: [ octaveDictionary := \x0a            \x09Dictionary new \x0a                \x09at: #G put: self gKeyOctaves;\x0a                    at: #F put: self fKeyOctaves;\x0a                    yourself ]",
messageSends: ["ifNil:", "at:put:", "gKeyOctaves", "new", "fKeyOctaves", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_position_key_",
smalltalk.method({
selector: "position:key:",
category: 'instance creation',
fn: function (aNumber,aKeySymbol){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_symbol_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_noteDictionary",[]),"_at_",[aKeySymbol]),"_at_",[aNumber])]);
smalltalk.send($2,"_position_",[aNumber]);
$3=smalltalk.send($2,"_octave_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_octaveDictionary",[]),"_at_",[aKeySymbol]),"_at_",[aNumber])]);
$1=$3;
return $1;
},
args: ["aNumber", "aKeySymbol"],
source: "position: aNumber key: aKeySymbol\x0a\x09^ self new \x0a    \x09symbol: ((self noteDictionary at: aKeySymbol) at: aNumber);\x0a    \x09position: aNumber;\x0a\x09\x09octave: ((self octaveDictionary at: aKeySymbol) at: aNumber)",
messageSends: ["symbol:", "at:", "noteDictionary", "new", "position:", "octave:", "octaveDictionary"],
referencedClasses: []
}),
smalltalk.Note.klass);


smalltalk.addClass('NoteButtonsWidget', smalltalk.Widget, ['noteNamesDictionary', 'game'], 'Rescorer');
smalltalk.addMethod(
"_game",
smalltalk.method({
selector: "game",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@game"];
return $1;
},
args: [],
source: "game\x0a\x09^ game",
messageSends: [],
referencedClasses: []
}),
smalltalk.NoteButtonsWidget);

smalltalk.addMethod(
"_game_",
smalltalk.method({
selector: "game:",
category: 'accessing',
fn: function (aGameWidget){
var self=this;
self["@game"]=aGameWidget;
return self},
args: ["aGameWidget"],
source: "game: aGameWidget\x0a\x09game := aGameWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.NoteButtonsWidget);

smalltalk.addMethod(
"_noteNamesDictionary",
smalltalk.method({
selector: "noteNamesDictionary",
category: 'accessing',
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
},
args: [],
source: "noteNamesDictionary\x0a\x09^ noteNamesDictionary ifNil: \x0a    \x09[ noteNamesDictionary := Dictionary new\x0a        \x09at: 'DO' put: #C;\x0a            at: 'RE' put: #D;\x0a            at: 'MI' put: #E;\x0a            at: 'FA' put: #F;\x0a            at: 'SOL' put: #G;\x0a            at: 'LA' put: #A;\x0a            at: 'SI' put: #B;\x0a            yourself ]",
messageSends: ["ifNil:", "at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.NoteButtonsWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
return self},
args: ["html"],
source: "renderOn: html\x0a\x09self noteNamesDictionary associations\x0a    \x09do: [:each | \x0a\x09\x09\x09html button \x0a            \x09with: each key;\x0a                onClick: [ self game checkNote: each value ]]",
messageSends: ["do:", "with:", "key", "button", "onClick:", "checkNote:", "value", "game", "associations", "noteNamesDictionary"],
referencedClasses: []
}),
smalltalk.NoteButtonsWidget);



smalltalk.addClass('SheetWidget', smalltalk.Widget, ['lines', 'key', 'sheet', 'keyName', 'note', 'currentNotePosition', 'game'], 'Rescorer');
smalltalk.addMethod(
"_currentNote",
smalltalk.method({
selector: "currentNote",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Note || Note),"_position_key_",[smalltalk.send(self,"_currentNotePosition",[]),smalltalk.send(self,"_keyName",[])]);
return $1;
},
args: [],
source: "currentNote\x0a\x09^ Note position: self currentNotePosition key: self keyName",
messageSends: ["position:key:", "currentNotePosition", "keyName"],
referencedClasses: ["Note"]
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_currentNoteBottom",
smalltalk.method({
selector: "currentNoteBottom",
category: 'rendering',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(smalltalk.send(self,"_currentNotePosition",[]),"__lt",[(8)]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_currentNotePosition",[]),"__star",[(6.25)]),"__plus",[(1)]);
} else {
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_currentNotePosition",[]),"__minus",[(6)]),"__star",[(6.25)]),"__plus",[(1)]);
};
return $1;
},
args: [],
source: "currentNoteBottom\x0a\x09^ self currentNotePosition < 8\x0a    \x09ifTrue: [ (self currentNotePosition * 6.25) + 1 ]\x0a      \x09ifFalse: [ ((self currentNotePosition - 6) * 6.25) + 1 ]",
messageSends: ["ifTrue:ifFalse:", "+", "*", "currentNotePosition", "-", "<"],
referencedClasses: []
}),
smalltalk.SheetWidget);

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
"_game",
smalltalk.method({
selector: "game",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@game"];
return $1;
},
args: [],
source: "game\x0a\x09^ game",
messageSends: [],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_game_",
smalltalk.method({
selector: "game:",
category: 'accessing',
fn: function (aGameWidget){
var self=this;
self["@game"]=aGameWidget;
return self},
args: ["aGameWidget"],
source: "game: aGameWidget\x0a\x09game := aGameWidget",
messageSends: [],
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
"_nextNote",
smalltalk.method({
selector: "nextNote",
category: 'actions',
fn: function (){
var self=this;
self["@currentNotePosition"]=smalltalk.send(smalltalk.send(smalltalk.send((1),"_to_",[(13)]),"_remove_",[self["@currentNotePosition"]]),"_atRandom",[]);
smalltalk.send(self["@note"],"_contents_",[(function(html){
return smalltalk.send(self,"_renderNoteOn_",[html]);
})]);
return self},
args: [],
source: "nextNote\x0a\x09currentNotePosition := ((1 to: 13) remove: currentNotePosition) atRandom.\x0a\x09note contents: [ :html | self renderNoteOn: html ]",
messageSends: ["atRandom", "remove:", "to:", "contents:", "renderNoteOn:"],
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
smalltalk.send($1,"_class_",[smalltalk.send("image key ","__comma",[smalltalk.send(smalltalk.send(self,"_keyName",[]),"_asString",[])])]);
$2=smalltalk.send($1,"_src_",[smalltalk.send(smalltalk.send("images/","__comma",[smalltalk.send(smalltalk.send(self,"_keyName",[]),"_asString",[])]),"__comma",[".svg"])]);
self["@key"]=$2;
return self},
args: ["html"],
source: "renderKeyOn: html\x0akey := \x0a    html img\x0a    \x09class: 'image key ' , self keyName asString; \x0a\x09\x09src: 'images/' , self keyName asString , '.svg'.",
messageSends: ["class:", ",", "asString", "keyName", "img", "src:"],
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
var $1,$2;
$1=smalltalk.send(html,"_img",[]);
smalltalk.send($1,"_class_",[smalltalk.send("note i","__comma",[smalltalk.send(smalltalk.send(self,"_currentNotePosition",[]),"_asString",[])])]);
smalltalk.send($1,"_src_",[smalltalk.send(smalltalk.send("images/note","__comma",[smalltalk.send(self,"_slashedOrReversed",[])]),"__comma",[".svg"])]);
$2=smalltalk.send($1,"_style_",[smalltalk.send(smalltalk.send("bottom: ","__comma",[smalltalk.send(smalltalk.send(self,"_currentNoteBottom",[]),"_asString",[])]),"__comma",["%;"])]);
return self},
args: ["html"],
source: "renderNoteOn: html\x0a\x09html img\x0a   \x09\x09class: 'note i' , self currentNotePosition asString; \x0a        src: 'images/note' , self slashedOrReversed , '.svg';\x0a    \x09style: 'bottom: ' , self currentNoteBottom asString , '%;'.",
messageSends: ["class:", ",", "asString", "currentNotePosition", "img", "src:", "slashedOrReversed", "style:", "currentNoteBottom"],
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
return self},
args: ["html"],
source: "renderOn: html\x0a    sheet := html div class: 'sheet'.\x0a\x09\x09sheet\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09self \x0a\x09\x09\x09\x09\x09renderKeyOn: html;\x0a\x09\x09\x09\x09\x09renderLinesOn: html.\x0a\x09\x09note := html div with: [ self renderNoteOn: html ]]",
messageSends: ["class:", "div", "with:", "renderKeyOn:", "renderLinesOn:", "renderNoteOn:"],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_slashedOrReversed",
smalltalk.method({
selector: "slashedOrReversed",
category: 'accessing',
fn: function (){
var self=this;
var $1,$2,$3;
var string;
string="";
$1=smalltalk.send([(1), (13)],"_includes_",[smalltalk.send(self,"_currentNotePosition",[])]);
if(smalltalk.assert($1)){
string="-slashed";
string;
};
$2=smalltalk.send(smalltalk.send(self,"_currentNotePosition",[]),"__gt",[(7)]);
if(smalltalk.assert($2)){
string=smalltalk.send(string,"__comma",["-reversed"]);
string;
};
$3=string;
return $3;
},
args: [],
source: "slashedOrReversed\x0a\x09| string |\x0a    string := ''.\x0a\x09\x0a    (#(1 13) includes: self currentNotePosition) \x0a    \x09ifTrue: [ string := '-slashed' ].\x0a    \x0a    self currentNotePosition > 7 \x0a    \x09ifTrue: [ string := string , '-reversed' ].\x0a\x0a\x09^ string",
messageSends: ["ifTrue:", "includes:", "currentNotePosition", ",", ">"],
referencedClasses: []
}),
smalltalk.SheetWidget);



