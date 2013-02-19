smalltalk.addPackage('Rescorer', {});
smalltalk.addClass('GameWidget', smalltalk.Widget, ['sheetWidget', 'noteButtonsWidget', 'errorAudio'], 'Rescorer');
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
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_play",[]);
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_nextNote",[]);
return self},
args: [],
source: "correctAnswerAction\x0a\x09self sheetWidget play.\x0a\x09self sheetWidget nextNote",
messageSends: ["play", "sheetWidget", "nextNote"],
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
"_playErrorSound",
smalltalk.method({
selector: "playErrorSound",
category: 'actions',
fn: function (){
var self=this;
 $('audio.error')[0].play() ;
;
return self},
args: [],
source: "playErrorSound\x0a\x09< $('audio.error')[0].play() >",
messageSends: [],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderErrorAudioOn_",
smalltalk.method({
selector: "renderErrorAudioOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_audio",[]);
smalltalk.send($1,"_class_",["error"]);
$2=smalltalk.send($1,"_src_",["sounds/error.ogg"]);
return self},
args: ["html"],
source: "renderErrorAudioOn: html\x0a\x09html audio \x0a    \x09class: 'error';\x0a        src: 'sounds/error.ogg'",
messageSends: ["class:", "audio", "src:"],
referencedClasses: []
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
self["@errorAudio"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",[(function(){
return smalltalk.send(self,"_renderErrorAudioOn_",[html]);
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a    \x09class: 'sheet-container';\x0a    \x09with: self sheetWidget.\x0a\x09html div \x0a    \x09class: 'button-container';\x0a    \x09with: self noteButtonsWidget.\x0a\x09errorAudio := html div with: [ self renderErrorAudioOn: html ]",
messageSends: ["class:", "div", "with:", "sheetWidget", "noteButtonsWidget", "renderErrorAudioOn:"],
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
smalltalk.send(self,"_playErrorSound",[]);
smalltalk.send(self["@errorAudio"],"_contents_",[(function(html){
return smalltalk.send(self,"_renderErrorAudioOn_",[html]);
})]);
return self},
args: [],
source: "wrongAnswerAction\x0a\x09self playErrorSound.\x0a    errorAudio contents: [ :html | self renderErrorAudioOn: html ]",
messageSends: ["playErrorSound", "contents:", "renderErrorAudioOn:"],
referencedClasses: []
}),
smalltalk.GameWidget);



smalltalk.addClass('Note', smalltalk.Object, ['position', 'symbol', 'octave'], 'Rescorer');
smalltalk.addMethod(
"_audioPath",
smalltalk.method({
selector: "audioPath",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send("sounds/","__comma",[smalltalk.send(self,"_soundFile",[])]);
return $1;
},
args: [],
source: "audioPath\x0a\x09^ 'sounds/' , self soundFile",
messageSends: [",", "soundFile"],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_bottom",
smalltalk.method({
selector: "bottom",
category: 'accessing - rendering',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(smalltalk.send(self,"_position",[]),"__lt",[(8)]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_position",[]),"__star",[(6.25)]),"__plus",[(1)]);
} else {
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_position",[]),"__minus",[(6)]),"__star",[(6.25)]),"__plus",[(1)]);
};
return $1;
},
args: [],
source: "bottom\x0a\x09^ self position < 8\x0a    \x09ifTrue: [ (self position * 6.25) + 1 ]\x0a      \x09ifFalse: [ ((self position - 6) * 6.25) + 1 ]",
messageSends: ["ifTrue:ifFalse:", "+", "*", "position", "-", "<"],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing - rendering',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send("note i","__comma",[smalltalk.send(smalltalk.send(self,"_position",[]),"_asString",[])]);
return $1;
},
args: [],
source: "cssClass\x0a\x09^ 'note i' , self position asString",
messageSends: [",", "asString", "position"],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_cssStyle",
smalltalk.method({
selector: "cssStyle",
category: 'accessing - rendering',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("bottom: ","__comma",[smalltalk.send(smalltalk.send(self,"_bottom",[]),"_asString",[])]),"__comma",["%;"]);
return $1;
},
args: [],
source: "cssStyle\x0a\x09^ 'bottom: ' , self bottom asString , '%;'",
messageSends: [",", "asString", "bottom"],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_imagePath",
smalltalk.method({
selector: "imagePath",
category: 'accessing - rendering',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("images/note","__comma",[smalltalk.send(self,"_slashedOrReversedString",[])]),"__comma",[".svg"]);
return $1;
},
args: [],
source: "imagePath\x0a\x09^ 'images/note' , self slashedOrReversedString , '.svg'",
messageSends: [",", "slashedOrReversedString"],
referencedClasses: []
}),
smalltalk.Note);

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
"_slashedOrReversedString",
smalltalk.method({
selector: "slashedOrReversedString",
category: 'accessing - rendering',
fn: function (){
var self=this;
var $1,$2,$3;
var string;
string="";
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_position",[]),"__eq",[(1)]),"_or_",[(function(){
return smalltalk.send(smalltalk.send(self,"_position",[]),"__eq",[(13)]);
})]);
if(smalltalk.assert($1)){
string="-slashed";
string;
};
$2=smalltalk.send(smalltalk.send(self,"_position",[]),"__gt",[(7)]);
if(smalltalk.assert($2)){
string=smalltalk.send(string,"__comma",["-reversed"]);
string;
};
$3=string;
return $3;
},
args: [],
source: "slashedOrReversedString\x0a\x09| string |\x0a    string := ''.\x0a\x09\x0a    (self position = 1 or: [ self position = 13 ])\x0a    \x09ifTrue: [ string := '-slashed' ].\x0a    \x0a    self position > 7 \x0a    \x09ifTrue: [ string := string , '-reversed' ].\x0a\x0a\x09^ string",
messageSends: ["ifTrue:", "or:", "=", "position", ",", ">"],
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
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_symbol",[]),"_asString",[]),"__comma",[smalltalk.send(smalltalk.send(self,"_octave",[]),"_asString",[])]),"__comma",[".ogg"]);
return $1;
},
args: [],
source: "soundFile\x0a\x09^ self symbol asString , self octave asString , '.ogg'",
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


smalltalk.addClass('NoteButtonsWidget', smalltalk.Widget, ['noteNamesDictionary', 'keysDictionary', 'game'], 'Rescorer');
smalltalk.addMethod(
"_bindKeyDownActions",
smalltalk.method({
selector: "bindKeyDownActions",
category: 'rendering',
fn: function (){
var self=this;
var $1,$3,$2;
$1=smalltalk.send(window,"_asJQuery",[]);
$2=(function(event){
$3=smalltalk.send(smalltalk.send(smalltalk.send(self,"_keysDictionary",[]),"_keys",[]),"_includes_",[smalltalk.send(event,"_keyCode",[])]);
if(smalltalk.assert($3)){
return smalltalk.send(smalltalk.send(self,"_game",[]),"_checkNote_",[smalltalk.send(smalltalk.send(self,"_keysDictionary",[]),"_at_",[smalltalk.send(event,"_keyCode",[])])]);
};
});
smalltalk.send($1,"_keydown_",[$2]);
return self},
args: [],
source: "bindKeyDownActions\x0a\x09window asJQuery \x0a    \x09keydown: [ :event | \x0a        \x09(self keysDictionary keys includes: event keyCode) \x0a            \x09ifTrue: [ self game checkNote: (self keysDictionary at: event keyCode) ]]",
messageSends: ["keydown:", "ifTrue:", "checkNote:", "at:", "keyCode", "keysDictionary", "game", "includes:", "keys", "asJQuery"],
referencedClasses: []
}),
smalltalk.NoteButtonsWidget);

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
"_keysDictionary",
smalltalk.method({
selector: "keysDictionary",
category: 'accessing',
fn: function (){
var self=this;
var $2,$3,$4,$1;
$2=self["@keysDictionary"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=smalltalk.send((smalltalk.Dictionary || Dictionary),"_new",[]);
smalltalk.send($3,"_at_put_",[(65),smalltalk.symbolFor("C")]);
smalltalk.send($3,"_at_put_",[(83),smalltalk.symbolFor("D")]);
smalltalk.send($3,"_at_put_",[(68),smalltalk.symbolFor("E")]);
smalltalk.send($3,"_at_put_",[(70),smalltalk.symbolFor("F")]);
smalltalk.send($3,"_at_put_",[(71),smalltalk.symbolFor("G")]);
smalltalk.send($3,"_at_put_",[(72),smalltalk.symbolFor("A")]);
smalltalk.send($3,"_at_put_",[(74),smalltalk.symbolFor("B")]);
smalltalk.send($3,"_at_put_",[(75),smalltalk.symbolFor("C")]);
$4=smalltalk.send($3,"_yourself",[]);
self["@keysDictionary"]=$4;
$1=self["@keysDictionary"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "keysDictionary\x0a\x09^ keysDictionary ifNil: \x0a    \x09[ keysDictionary := Dictionary new\x0a        \x09at: 65 put: #C;\x0a            at: 83 put: #D;\x0a            at: 68 put: #E;\x0a            at: 70 put: #F;\x0a            at: 71 put: #G;\x0a            at: 72 put: #A;\x0a            at: 74 put: #B;\x0a            at: 75 put: #C;\x0a            yourself ]",
messageSends: ["ifNil:", "at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
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
smalltalk.send(self,"_bindKeyDownActions",[]);
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
source: "renderOn: html\x0a\x09self bindKeyDownActions.\x0a\x09self noteNamesDictionary associations\x0a    \x09do: [:each | \x0a\x09\x09\x09html button \x0a            \x09with: each key;\x0a                onClick: [ self game checkNote: each value ]]",
messageSends: ["bindKeyDownActions", "do:", "with:", "key", "button", "onClick:", "checkNote:", "value", "game", "associations", "noteNamesDictionary"],
referencedClasses: []
}),
smalltalk.NoteButtonsWidget);



smalltalk.addClass('SheetWidget', smalltalk.Widget, ['lines', 'keyImg', 'sheetDiv', 'keyName', 'noteDiv', 'currentNote', 'game'], 'Rescorer');
smalltalk.addMethod(
"_currentNote",
smalltalk.method({
selector: "currentNote",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@currentNote"];
if(($receiver = $2) == nil || $receiver == undefined){
smalltalk.send(self,"_nextNote",[]);
$1=self["@currentNote"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "currentNote\x0a\x09^ currentNote ifNil: [ self nextNote. currentNote ]",
messageSends: ["ifNil:", "nextNote"],
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
var $1,$2;
var notePositions;
notePositions=smalltalk.send((1),"_to_",[(13)]);
$1=self["@currentNote"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(notePositions,"_remove_",[smalltalk.send(self["@currentNote"],"_position",[])]);
};
self["@currentNote"]=smalltalk.send((smalltalk.Note || Note),"_position_key_",[smalltalk.send(notePositions,"_atRandom",[]),smalltalk.send(self,"_keyName",[])]);
$2=self["@noteDiv"];
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
smalltalk.send(self["@noteDiv"],"_contents_",[(function(html){
return smalltalk.send(self,"_renderNoteOn_",[html]);
})]);
};
return self},
args: [],
source: "nextNote\x0a\x09| notePositions |\x0a    notePositions := (1 to: 13).\x0a    currentNote ifNotNil: [ notePositions remove: currentNote position ].\x0a\x09currentNote := Note position: notePositions atRandom key: self keyName.\x0a\x09noteDiv ifNotNil: [ noteDiv contents: [ :html | self renderNoteOn: html ]]",
messageSends: ["to:", "ifNotNil:", "remove:", "position", "position:key:", "atRandom", "keyName", "contents:", "renderNoteOn:"],
referencedClasses: ["Note"]
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_play",
smalltalk.method({
selector: "play",
category: 'actions',
fn: function (){
var self=this;
 $("audio.note")[0].play() ;
;
return self},
args: [],
source: "play\x0a\x09< $(\x22audio.note\x22)[0].play() >",
messageSends: [],
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
self["@keyImg"]=$2;
return self},
args: ["html"],
source: "renderKeyOn: html\x0a\x09keyImg := \x0a    \x09html img\x0a    \x09\x09class: 'image key ' , self keyName asString; \x0a\x09\x09\x09src: 'images/' , self keyName asString , '.svg'.",
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
var $1,$2,$3,$4;
$1=smalltalk.send(html,"_img",[]);
smalltalk.send($1,"_class_",[smalltalk.send(smalltalk.send(self,"_currentNote",[]),"_cssClass",[])]);
smalltalk.send($1,"_src_",[smalltalk.send(smalltalk.send(self,"_currentNote",[]),"_imagePath",[])]);
$2=smalltalk.send($1,"_style_",[smalltalk.send(smalltalk.send(self,"_currentNote",[]),"_cssStyle",[])]);
$3=smalltalk.send(html,"_audio",[]);
smalltalk.send($3,"_class_",["note"]);
$4=smalltalk.send($3,"_src_",[smalltalk.send(smalltalk.send(self,"_currentNote",[]),"_audioPath",[])]);
return self},
args: ["html"],
source: "renderNoteOn: html\x0a\x09html img\x0a   \x09\x09class: self currentNote cssClass; \x0a        src: self currentNote imagePath;\x0a    \x09style: self currentNote cssStyle.\x0a        \x0a\x09html audio \x0a    \x09class: 'note';\x0a    \x09src: self currentNote audioPath.",
messageSends: ["class:", "cssClass", "currentNote", "img", "src:", "imagePath", "style:", "cssStyle", "audio", "audioPath"],
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
self["@sheetDiv"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_class_",["sheet"]);
smalltalk.send(self["@sheetDiv"],"_with_",[(function(){
$1=self;
smalltalk.send($1,"_renderKeyOn_",[html]);
$2=smalltalk.send($1,"_renderLinesOn_",[html]);
$2;
self["@noteDiv"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",[(function(){
return smalltalk.send(self,"_renderNoteOn_",[html]);
})]);
return self["@noteDiv"];
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a    sheetDiv := html div class: 'sheet'.\x0a\x09sheetDiv\x0a\x09\x09with: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09renderKeyOn: html;\x0a\x09\x09\x09\x09renderLinesOn: html.\x0a\x09noteDiv := html div with: [ self renderNoteOn: html ]]",
messageSends: ["class:", "div", "with:", "renderKeyOn:", "renderLinesOn:", "renderNoteOn:"],
referencedClasses: []
}),
smalltalk.SheetWidget);



