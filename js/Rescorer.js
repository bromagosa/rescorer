smalltalk.addPackage('Rescorer', {});
smalltalk.addClass('GameWidget', smalltalk.Widget, ['wrapper', 'currentStage', 'sheetWidget', 'noteButtonsWidget', 'errorAudio', 'mood', 'faceImg', 'bubbleSpan'], 'Rescorer');
smalltalk.addMethod(
"_beHappy",
smalltalk.method({
selector: "beHappy",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_mood_", ["happy"]);
    smalltalk.send(self, "_updateFace", []);
    return self;
},
args: [],
source: "beHappy\x0a\x09self mood: 'happy'.\x0a    self updateFace.",
messageSends: ["mood:", "updateFace"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_beSad",
smalltalk.method({
selector: "beSad",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_mood_", ["sad"]);
    smalltalk.send(self, "_updateFace", []);
    return self;
},
args: [],
source: "beSad\x0a\x09self mood: 'sad'.\x0a    self updateFace.",
messageSends: ["mood:", "updateFace"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_checkNote_",
smalltalk.method({
selector: "checkNote:",
category: 'actions',
fn: function (aNoteSymbol) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_isNoteCorrect_", [aNoteSymbol]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self, "_correctAnswerAction", []);
    } else {
        smalltalk.send(self, "_wrongAnswerAction", []);
    }
    return self;
},
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
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_sheetWidget", []), "_currentNote", []), "_play", []);
    smalltalk.send(self, "_beHappy", []);
    smalltalk.send(smalltalk.send(self, "_sheetWidget", []), "_nextNote", []);
    return self;
},
args: [],
source: "correctAnswerAction\x0a\x09self sheetWidget currentNote play.\x0a    self beHappy.\x0a\x09self sheetWidget nextNote",
messageSends: ["play", "currentNote", "sheetWidget", "beHappy", "nextNote"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_currentStage",
smalltalk.method({
selector: "currentStage",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@currentStage"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@currentStage"]=smalltalk.symbolFor("difficultySelection");
$1=self["@currentStage"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "currentStage\x0a\x09^ currentStage ifNil: [ currentStage := #difficultySelection ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_isNoteCorrect_",
smalltalk.method({
selector: "isNoteCorrect:",
category: 'testing',
fn: function (aNoteSymbol) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_sheetWidget", []), "_currentNote", []), "_symbol", []), "__eq", [aNoteSymbol]);
    return $1;
},
args: ["aNoteSymbol"],
source: "isNoteCorrect: aNoteSymbol\x0a\x09^ self sheetWidget currentNote symbol = aNoteSymbol",
messageSends: ["=", "symbol", "currentNote", "sheetWidget"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_mood",
smalltalk.method({
selector: "mood",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $1;
    $2 = self['@mood'];
    if (($receiver = $2) == nil || $receiver == undefined) {
        self['@mood'] = "happy";
        $1 = self['@mood'];
    } else {
        $1 = $2;
    }
    return $1;
},
args: [],
source: "mood\x0a\x09^ mood ifNil: [ mood := 'happy' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_mood_",
smalltalk.method({
selector: "mood:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@mood'] = aString;
    return self;
},
args: ["aString"],
source: "mood: aString\x0a\x09mood := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_nextStage",
smalltalk.method({
selector: "nextStage",
category: 'actions',
fn: function (){
var self=this;
self["@currentStage"]=smalltalk.send(smalltalk.send(self,"_stageNames",[]),"_at_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_stageNames",[]),"_indexOf_",[smalltalk.send(self,"_currentStage",[])]),"_\\\\",[smalltalk.send(smalltalk.send(self,"_stageNames",[]),"_size",[])]),"__plus",[(1)])]);
smalltalk.send(self,"_update",[]);
return self},
args: [],
source: "nextStage\x0a\x09currentStage := self stageNames at: ((self stageNames indexOf: self currentStage) \x5c\x5c self stageNames size) + 1.\x0a    self update.",
messageSends: ["at:", "+", "\x5c\x5c\x5c\x5c", "size", "stageNames", "indexOf:", "currentStage", "update"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_noteButtonsWidget",
smalltalk.method({
selector: "noteButtonsWidget",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $1;
    $2 = self['@noteButtonsWidget'];
    if (($receiver = $2) == nil || $receiver == undefined) {
        self['@noteButtonsWidget'] = smalltalk.send(smalltalk.send(smalltalk.NoteButtonsWidget || NoteButtonsWidget, "_new", []), "_game_", [self]);
        $1 = self['@noteButtonsWidget'];
    } else {
        $1 = $2;
    }
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
fn: function () {
    var self = this;
    $("audio.error")[0].play();
    return self;
},
args: [],
source: "playErrorSound\x0a\x09< $('audio.error')[0].play() >",
messageSends: [],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderAudioElementsOn_",
smalltalk.method({
selector: "renderAudioElementsOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var $1, $2;
    smalltalk.send(["A", "B", "C", "D", "E", "F", "G"], "_do_", [function (eachNote) {return smalltalk.send(["1", "2", "3", "4"], "_do_", [function (eachOctave) {$1 = smalltalk.send(html, "_audio", []);smalltalk.send($1, "_class_", [smalltalk.send(smalltalk.send("note ", "__comma", [eachNote]), "__comma", [eachOctave])]);$2 = smalltalk.send($1, "_src_", [smalltalk.send(smalltalk.send(smalltalk.send("sounds/", "__comma", [eachNote]), "__comma", [eachOctave]), "__comma", [".ogg"])]);return $2;}]);}]);
    return self;
},
args: ["html"],
source: "renderAudioElementsOn: html\x0a\x09#('A' 'B' 'C' 'D' 'E' 'F' 'G') do: [ :eachNote | \x0a    \x09#('1' '2' '3' '4') do: [ :eachOctave | \x0a        \x09html audio\x0a  \x09\x09\x09\x09class: 'note ' , eachNote , eachOctave;\x0a  \x09\x09\x09\x09src: 'sounds/' , eachNote , eachOctave , '.ogg' ]].",
messageSends: ["do:", "class:", ",", "audio", "src:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderBubbleOn_",
smalltalk.method({
selector: "renderBubbleOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var $1, $3, $4, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", ["bubble"]);
    $2 = smalltalk.send($1, "_contents_", [function (h) {$3 = smalltalk.send(h, "_img", []);smalltalk.send($3, "_class_", ["tip"]);$4 = smalltalk.send($3, "_src_", ["images/bubble-tip.svg"]);$4;self['@bubbleSpan'] = smalltalk.send(h, "_span", []);return self['@bubbleSpan'];}]);
    return self;
},
args: ["html"],
source: "renderBubbleOn: html\x0a\x09html div \x0a    \x09class: 'bubble';\x0a    \x09contents: [ :h | \x0a            h img \x0a            \x09class: 'tip';\x0a                src: 'images/bubble-tip.svg'.\x0a\x09\x09\x09bubbleSpan := h span ]",
messageSends: ["class:", "div", "contents:", "img", "src:", "span"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
self["@faceImg"]=smalltalk.send(self,"_renderFaceOn_",[html]);
smalltalk.send(self,"_renderBubbleOn_",[html]);
smalltalk.send(self,"_renderCurrentStageOn_",[html]);
return self},
args: ["html"],
source: "renderContentOn: html\x0a\x09faceImg := self renderFaceOn: html.\x0a\x09self renderBubbleOn: html.\x0a\x09self renderCurrentStageOn: html.",
messageSends: ["renderFaceOn:", "renderBubbleOn:", "renderCurrentStageOn:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderCurrentStageOn_",
smalltalk.method({
selector: "renderCurrentStageOn:",
category: 'rendering - stages',
fn: function (html){
var self=this;
var $1,$2,$3,$4;
$1=smalltalk.send(smalltalk.send(self,"_currentStage",[]),"__eq",[smalltalk.symbolFor("difficultySelection")]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_renderDifficultySelectionStageOn_",[html]);
};
$2=smalltalk.send(smalltalk.send(self,"_currentStage",[]),"__eq",[smalltalk.symbolFor("speedSelection")]);
if(smalltalk.assert($2)){
smalltalk.send(self,"_renderSpeedSelectionStageOn_",[html]);
};
$3=smalltalk.send(smalltalk.send(self,"_currentStage",[]),"__eq",[smalltalk.symbolFor("keySelection")]);
if(smalltalk.assert($3)){
smalltalk.send(self,"_renderKeySelectionStageOn_",[html]);
};
$4=smalltalk.send(smalltalk.send(self,"_currentStage",[]),"__eq",[smalltalk.symbolFor("game")]);
if(smalltalk.assert($4)){
smalltalk.send(self,"_renderGameStageOn_",[html]);
};
return self},
args: ["html"],
source: "renderCurrentStageOn: html\x0a\x09self currentStage = #difficultySelection ifTrue: [ self renderDifficultySelectionStageOn: html ].\x0a\x09self currentStage = #speedSelection ifTrue: [ self renderSpeedSelectionStageOn: html ].\x0a\x09self currentStage = #keySelection ifTrue: [ self renderKeySelectionStageOn: html ].\x0a\x09self currentStage = #game ifTrue: [ self renderGameStageOn: html ].",
messageSends: ["ifTrue:", "renderDifficultySelectionStageOn:", "=", "currentStage", "renderSpeedSelectionStageOn:", "renderKeySelectionStageOn:", "renderGameStageOn:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderDifficultySelectionStageOn_",
smalltalk.method({
selector: "renderDifficultySelectionStageOn:",
category: 'rendering - stages',
fn: function (html){
var self=this;
var $1,$2;
var stage;
stage=smalltalk.send((smalltalk.OptionSelectionWidget || OptionSelectionWidget),"_new",[]);
$1=smalltalk.send(stage,"_buttons",[]);
smalltalk.send($1,"_at_put_",["Principiant",(function(){
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_difficulty_",[(1)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send($1,"_at_put_",["Iniciat",(function(){
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_difficulty_",[(2)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send($1,"_at_put_",["Expert",(function(){
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_difficulty_",[(3)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
$2=smalltalk.send($1,"_at_put_",["Virtuós",(function(){
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_difficulty_",[(4)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send(html,"_with_",[stage]);
return self},
args: ["html"],
source: "renderDifficultySelectionStageOn: html\x0a\x09| stage |\x0a\x09stage := OptionSelectionWidget new.\x0a\x09stage buttons\x0a        \x09at: 'Principiant'\x0a            \x09put: [\x0a                \x09self sheetWidget difficulty: 1.\x0a            \x09\x09self nextStage ];\x0a\x09\x09\x09at: 'Iniciat'\x0a            \x09put: [\x0a                \x09self sheetWidget difficulty: 2.\x0a                    self nextStage ];\x0a\x09\x09\x09at: 'Expert'\x0a            \x09put: [\x0a                \x09self sheetWidget difficulty: 3.\x0a                    self nextStage ];\x0a\x09\x09\x09at: 'Virtuós'\x0a            \x09put: [\x0a                \x09self sheetWidget difficulty: 4.\x0a                    self nextStage ].\x0a\x09html with: stage.",
messageSends: ["new", "at:put:", "difficulty:", "sheetWidget", "nextStage", "buttons", "with:"],
referencedClasses: ["OptionSelectionWidget"]
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderErrorAudioOn_",
smalltalk.method({
selector: "renderErrorAudioOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_audio", []);
    smalltalk.send($1, "_class_", ["error"]);
    $2 = smalltalk.send($1, "_src_", ["sounds/error.ogg"]);
    return self;
},
args: ["html"],
source: "renderErrorAudioOn: html\x0a\x09html audio \x0a    \x09class: 'error';\x0a        src: 'sounds/error.ogg'",
messageSends: ["class:", "audio", "src:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderFaceOn_",
smalltalk.method({
selector: "renderFaceOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(html, "_img", []);
    smalltalk.send($2, "_class_", ["image face"]);
    $3 = smalltalk.send($2, "_src_", [smalltalk.send(smalltalk.send(smalltalk.send("images/face-", "__comma", [smalltalk.send(self, "_mood", [])]), "__comma", [smalltalk.send(smalltalk.send([1, 2, 3, 4], "_atRandom", []), "_asString", [])]), "__comma", [".svg"])]);
    $1 = $3;
    return $1;
},
args: ["html"],
source: "renderFaceOn: html\x0a\x09^ html img\x0a    \x09class: 'image face';\x0a        src: 'images/face-' , self mood , #(1 2 3 4) atRandom asString , '.svg'.",
messageSends: ["class:", "img", "src:", ",", "asString", "atRandom", "mood"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderGameStageOn_",
smalltalk.method({
selector: "renderGameStageOn:",
category: 'rendering - stages',
fn: function (html){
var self=this;
var $1,$2,$3,$4;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["sheet-container"]);
$2=smalltalk.send($1,"_with_",[smalltalk.send(self,"_sheetWidget",[])]);
$3=smalltalk.send(html,"_div",[]);
smalltalk.send($3,"_class_",["note-buttons-container"]);
$4=smalltalk.send($3,"_with_",[smalltalk.send(self,"_noteButtonsWidget",[])]);
smalltalk.send(self,"_renderAudioElementsOn_",[html]);
self["@errorAudio"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",[(function(){
return smalltalk.send(self,"_renderErrorAudioOn_",[html]);
})]);
return self},
args: ["html"],
source: "renderGameStageOn: html\x0a\x09html div \x0a    \x09class: 'sheet-container';\x0a    \x09with: self sheetWidget.\x0a\x09html div \x0a    \x09class: 'note-buttons-container';\x0a    \x09with: self noteButtonsWidget.\x0a    self renderAudioElementsOn: html.\x0a\x09errorAudio := html div with: [ self renderErrorAudioOn: html ]",
messageSends: ["class:", "div", "with:", "sheetWidget", "noteButtonsWidget", "renderAudioElementsOn:", "renderErrorAudioOn:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderKeySelectionStageOn_",
smalltalk.method({
selector: "renderKeySelectionStageOn:",
category: 'rendering - stages',
fn: function (html){
var self=this;
var $1,$2;
var stage;
stage=smalltalk.send((smalltalk.OptionSelectionWidget || OptionSelectionWidget),"_new",[]);
$1=smalltalk.send(stage,"_buttons",[]);
smalltalk.send($1,"_at_put_",["Sol",(function(){
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_keyName_",[smalltalk.symbolFor("G")]);
return smalltalk.send(self,"_nextStage",[]);
})]);
$2=smalltalk.send($1,"_at_put_",["Fa",(function(){
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_keyName_",[smalltalk.symbolFor("F")]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send(html,"_with_",[stage]);
return self},
args: ["html"],
source: "renderKeySelectionStageOn: html\x0a\x09| stage |\x0a\x09stage := OptionSelectionWidget new.\x0a\x09stage buttons \x0a        \x09at: 'Sol' \x0a            \x09put: [\x0a                \x09self sheetWidget keyName: #G. \x0a            \x09\x09self nextStage ]; \x0a\x09\x09\x09at: 'Fa' \x0a            \x09put: [ \x0a                \x09self sheetWidget keyName: #F. \x0a                    self nextStage ].\x0a\x09html with: stage.",
messageSends: ["new", "at:put:", "keyName:", "sheetWidget", "nextStage", "buttons", "with:"],
referencedClasses: ["OptionSelectionWidget"]
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["wrapper"]);
$2=smalltalk.send($1,"_with_",[(function(){
return smalltalk.send(self,"_renderContentOn_",[html]);
})]);
self["@wrapper"]=$2;
return self},
args: ["html"],
source: "renderOn: html\x0a\x09wrapper := html div \x0a    \x09class: 'wrapper';\x0a        with: [ self renderContentOn: html ]",
messageSends: ["class:", "div", "with:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderSpeedSelectionStageOn_",
smalltalk.method({
selector: "renderSpeedSelectionStageOn:",
category: 'rendering - stages',
fn: function (html){
var self=this;
var $1,$2;
var stage;
stage=smalltalk.send((smalltalk.OptionSelectionWidget || OptionSelectionWidget),"_new",[]);
$1=smalltalk.send(stage,"_buttons",[]);
smalltalk.send($1,"_at_put_",["Adagio",(function(){
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_bpm_",[(70)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send($1,"_at_put_",["Andante",(function(){
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_bpm_",[(100)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send($1,"_at_put_",["Allegro",(function(){
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_bpm_",[(130)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
$2=smalltalk.send($1,"_at_put_",["Presto",(function(){
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_bpm_",[(170)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send(html,"_with_",[stage]);
return self},
args: ["html"],
source: "renderSpeedSelectionStageOn: html\x0a\x09| stage |\x0a\x09stage := OptionSelectionWidget new.\x0a\x09stage buttons \x0a        \x09at: 'Adagio'\x0a            \x09put: [\x0a                \x09self sheetWidget bpm: 70. \x0a            \x09\x09self nextStage ];\x0a\x09\x09\x09at: 'Andante'\x0a            \x09put: [ \x0a                \x09self sheetWidget bpm: 100.\x0a                    self nextStage ];\x0a\x09\x09\x09at: 'Allegro'\x0a            \x09put: [ \x0a                \x09self sheetWidget bpm: 130.\x0a                    self nextStage ];\x0a\x09\x09\x09at: 'Presto'\x0a            \x09put: [ \x0a                \x09self sheetWidget bpm: 170.\x0a                    self nextStage ].\x0a\x09html with: stage.",
messageSends: ["new", "at:put:", "bpm:", "sheetWidget", "nextStage", "buttons", "with:"],
referencedClasses: ["OptionSelectionWidget"]
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_sheetWidget",
smalltalk.method({
selector: "sheetWidget",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $1;
    $2 = self['@sheetWidget'];
    if (($receiver = $2) == nil || $receiver == undefined) {
        self['@sheetWidget'] = smalltalk.send(smalltalk.send(smalltalk.SheetWidget || SheetWidget, "_new", []), "_game_", [self]);
        $1 = self['@sheetWidget'];
    } else {
        $1 = $2;
    }
    return $1;
},
args: [],
source: "sheetWidget\x0a\x09^ sheetWidget ifNil: [ sheetWidget := SheetWidget new game: self ]",
messageSends: ["ifNil:", "game:", "new"],
referencedClasses: ["SheetWidget"]
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_stageNames",
smalltalk.method({
selector: "stageNames",
category: 'accessing',
fn: function (){
var self=this;
return [smalltalk.symbolFor("difficultySelection"), smalltalk.symbolFor("speedSelection"), smalltalk.symbolFor("keySelection"), smalltalk.symbolFor("game")];
},
args: [],
source: "stageNames\x0a\x09^ #(#difficultySelection #speedSelection #keySelection #game).",
messageSends: [],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self["@wrapper"],"_contents_",[(function(html){
return smalltalk.send(self,"_renderContentOn_",[html]);
})]);
return self},
args: [],
source: "update\x0a\x09wrapper contents: [ :html | self renderContentOn: html ]",
messageSends: ["contents:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_updateFace",
smalltalk.method({
selector: "updateFace",
category: 'updating',
fn: function () {
    var self = this;
    smalltalk.send(self['@faceImg'], "_src_", [smalltalk.send(smalltalk.send(smalltalk.send("images/face-", "__comma", [smalltalk.send(self, "_mood", [])]), "__comma", [smalltalk.send(smalltalk.send([1, 2, 3, 4], "_atRandom", []), "_asString", [])]), "__comma", [".svg"])]);
    return self;
},
args: [],
source: "updateFace\x0a\x09faceImg src: 'images/face-' , self mood , #(1 2 3 4) atRandom asString , '.svg'",
messageSends: ["src:", ",", "asString", "atRandom", "mood"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_wrongAnswerAction",
smalltalk.method({
selector: "wrongAnswerAction",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_playErrorSound", []);
    smalltalk.send(self, "_beSad", []);
    smalltalk.send(self['@errorAudio'], "_contents_", [function (html) {return smalltalk.send(self, "_renderErrorAudioOn_", [html]);}]);
    return self;
},
args: [],
source: "wrongAnswerAction\x0a\x09self playErrorSound.\x0a    self beSad.\x0a    errorAudio contents: [ :html | self renderErrorAudioOn: html ]",
messageSends: ["playErrorSound", "beSad", "contents:", "renderErrorAudioOn:"],
referencedClasses: []
}),
smalltalk.GameWidget);



smalltalk.addClass('Note', smalltalk.Object, ['position', 'symbol', 'octave'], 'Rescorer');
smalltalk.addMethod(
"_bottom",
smalltalk.method({
selector: "bottom",
category: 'accessing - rendering',
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(smalltalk.send(self, "_position", []), "__lt", [8]);
    if (smalltalk.assert($2)) {
        $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_position", []), "__star", [6.25]), "__plus", [1]);
    } else {
        $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_position", []), "__minus", [6]), "__star", [6.25]), "__plus", [1]);
    }
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send("note i", "__comma", [smalltalk.send(smalltalk.send(self, "_position", []), "_asString", [])]);
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send("bottom: ", "__comma", [smalltalk.send(smalltalk.send(self, "_bottom", []), "_asString", [])]), "__comma", ["%;"]);
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send("images/note", "__comma", [smalltalk.send(self, "_slashedOrReversedString", [])]), "__comma", [".svg"]);
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
fn: function () {
    var self = this;
    var $1;
    $1 = self['@octave'];
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
fn: function (aNumber) {
    var self = this;
    self['@octave'] = aNumber;
    return self;
},
args: ["aNumber"],
source: "octave: aNumber\x0a\x09octave := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_play",
smalltalk.method({
selector: "play",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_class", []), "_playNote_octave_", [smalltalk.send(smalltalk.send(self, "_symbol", []), "_asString", []), smalltalk.send(smalltalk.send(self, "_octave", []), "_asString", [])]);
    return self;
},
args: [],
source: "play\x0a\x09self class playNote: self symbol asString octave: self octave asString",
messageSends: ["playNote:octave:", "asString", "symbol", "octave", "class"],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = self['@position'];
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
fn: function (aNumber) {
    var self = this;
    self['@position'] = aNumber;
    return self;
},
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
fn: function () {
    var self = this;
    var $1, $2, $3;
    var string;
    string = "";
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [1]), "_or_", [function () {return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [13]);}]);
    if (smalltalk.assert($1)) {
        string = "-slashed";
    }
    $2 = smalltalk.send(smalltalk.send(self, "_position", []), "__gt", [7]);
    if (smalltalk.assert($2)) {
        string = smalltalk.send(string, "__comma", ["-reversed"]);
    }
    $3 = string;
    return $3;
},
args: [],
source: "slashedOrReversedString\x0a\x09| string |\x0a    string := ''.\x0a\x09\x0a    (self position = 1 or: [ self position = 13 ])\x0a    \x09ifTrue: [ string := '-slashed' ].\x0a    \x0a    self position > 7 \x0a    \x09ifTrue: [ string := string , '-reversed' ].\x0a\x0a\x09^ string",
messageSends: ["ifTrue:", "or:", "=", "position", ",", ">"],
referencedClasses: []
}),
smalltalk.Note);

smalltalk.addMethod(
"_symbol",
smalltalk.method({
selector: "symbol",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = self['@symbol'];
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
fn: function (aString) {
    var self = this;
    self['@symbol'] = aString;
    return self;
},
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
fn: function () {
    var self = this;
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
fn: function () {
    var self = this;
    return [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3];
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
fn: function () {
    var self = this;
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
fn: function () {
    var self = this;
    return [3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4];
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
fn: function () {
    var self = this;
    var $2, $3, $4, $1;
    $2 = self['@noteDictionary'];
    if (($receiver = $2) == nil || $receiver == undefined) {
        $3 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        smalltalk.send($3, "_at_put_", [smalltalk.symbolFor("G"), smalltalk.send(self, "_gKeyNotes", [])]);
        smalltalk.send($3, "_at_put_", [smalltalk.symbolFor("F"), smalltalk.send(self, "_fKeyNotes", [])]);
        $4 = smalltalk.send($3, "_yourself", []);
        self['@noteDictionary'] = $4;
        $1 = self['@noteDictionary'];
    } else {
        $1 = $2;
    }
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
fn: function () {
    var self = this;
    var $2, $3, $4, $1;
    $2 = self['@octaveDictionary'];
    if (($receiver = $2) == nil || $receiver == undefined) {
        $3 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        smalltalk.send($3, "_at_put_", [smalltalk.symbolFor("G"), smalltalk.send(self, "_gKeyOctaves", [])]);
        smalltalk.send($3, "_at_put_", [smalltalk.symbolFor("F"), smalltalk.send(self, "_fKeyOctaves", [])]);
        $4 = smalltalk.send($3, "_yourself", []);
        self['@octaveDictionary'] = $4;
        $1 = self['@octaveDictionary'];
    } else {
        $1 = $2;
    }
    return $1;
},
args: [],
source: "octaveDictionary\x0a\x09^ octaveDictionary \x0a    \x09\x09ifNil: [ octaveDictionary := \x0a            \x09Dictionary new \x0a                \x09at: #G put: self gKeyOctaves;\x0a                    at: #F put: self fKeyOctaves;\x0a                    yourself ]",
messageSends: ["ifNil:", "at:put:", "gKeyOctaves", "new", "fKeyOctaves", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_playNote_octave_",
smalltalk.method({
selector: "playNote:octave:",
category: 'instance creation',
fn: function (aNote, anOctave) {
    var self = this;
    $("audio.note." + aNote + anOctave)[0].src = "sounds/" + aNote + anOctave + ".ogg";
    $("audio.note." + aNote + anOctave)[0].play();
    return self;
},
args: ["aNote", "anOctave"],
source: "playNote: aNote octave: anOctave\x0a\x09< $('audio.note.' + aNote + anOctave)[0].src = 'sounds/' + aNote + anOctave + '.ogg';\x0a     $('audio.note.' + aNote + anOctave)[0].play(); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_position_key_",
smalltalk.method({
selector: "position:key:",
category: 'instance creation',
fn: function (aNumber, aKeySymbol) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_symbol_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_noteDictionary", []), "_at_", [aKeySymbol]), "_at_", [aNumber])]);
    smalltalk.send($2, "_position_", [aNumber]);
    $3 = smalltalk.send($2, "_octave_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_octaveDictionary", []), "_at_", [aKeySymbol]), "_at_", [aNumber])]);
    $1 = $3;
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
fn: function () {
    var self = this;
    var $1, $3, $2;
    $1 = smalltalk.send(window, "_asJQuery", []);
    $2 = function (event) {$3 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_keysDictionary", []), "_keys", []), "_includes_", [smalltalk.send(event, "_keyCode", [])]);if (smalltalk.assert($3)) {return smalltalk.send(smalltalk.send(self, "_game", []), "_checkNote_", [smalltalk.send(smalltalk.send(self, "_keysDictionary", []), "_at_", [smalltalk.send(event, "_keyCode", [])])]);}};
    smalltalk.send($1, "_keydown_", [$2]);
    return self;
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = self['@game'];
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
fn: function (aGameWidget) {
    var self = this;
    self['@game'] = aGameWidget;
    return self;
},
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
fn: function () {
    var self = this;
    var $2, $3, $4, $1;
    $2 = self['@keysDictionary'];
    if (($receiver = $2) == nil || $receiver == undefined) {
        $3 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        smalltalk.send($3, "_at_put_", [65, smalltalk.symbolFor("C")]);
        smalltalk.send($3, "_at_put_", [83, smalltalk.symbolFor("D")]);
        smalltalk.send($3, "_at_put_", [68, smalltalk.symbolFor("E")]);
        smalltalk.send($3, "_at_put_", [70, smalltalk.symbolFor("F")]);
        smalltalk.send($3, "_at_put_", [71, smalltalk.symbolFor("G")]);
        smalltalk.send($3, "_at_put_", [72, smalltalk.symbolFor("A")]);
        smalltalk.send($3, "_at_put_", [74, smalltalk.symbolFor("B")]);
        smalltalk.send($3, "_at_put_", [75, smalltalk.symbolFor("C")]);
        $4 = smalltalk.send($3, "_yourself", []);
        self['@keysDictionary'] = $4;
        $1 = self['@keysDictionary'];
    } else {
        $1 = $2;
    }
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
fn: function () {
    var self = this;
    var $2, $3, $4, $1;
    $2 = self['@noteNamesDictionary'];
    if (($receiver = $2) == nil || $receiver == undefined) {
        $3 = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        smalltalk.send($3, "_at_put_", ["DO", smalltalk.symbolFor("C")]);
        smalltalk.send($3, "_at_put_", ["RE", smalltalk.symbolFor("D")]);
        smalltalk.send($3, "_at_put_", ["MI", smalltalk.symbolFor("E")]);
        smalltalk.send($3, "_at_put_", ["FA", smalltalk.symbolFor("F")]);
        smalltalk.send($3, "_at_put_", ["SOL", smalltalk.symbolFor("G")]);
        smalltalk.send($3, "_at_put_", ["LA", smalltalk.symbolFor("A")]);
        smalltalk.send($3, "_at_put_", ["SI", smalltalk.symbolFor("B")]);
        $4 = smalltalk.send($3, "_yourself", []);
        self['@noteNamesDictionary'] = $4;
        $1 = self['@noteNamesDictionary'];
    } else {
        $1 = $2;
    }
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
fn: function (html) {
    var self = this;
    var $1, $2;
    smalltalk.send(self, "_bindKeyDownActions", []);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_noteNamesDictionary", []), "_associations", []), "_do_", [function (each) {$1 = smalltalk.send(html, "_button", []);smalltalk.send($1, "_with_", [smalltalk.send(each, "_key", [])]);$2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self, "_game", []), "_checkNote_", [smalltalk.send(each, "_value", [])]);}]);return $2;}]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09self bindKeyDownActions.\x0a\x09self noteNamesDictionary associations\x0a    \x09do: [:each | \x0a\x09\x09\x09html button \x0a            \x09with: each key;\x0a                onClick: [ self game checkNote: each value ]].",
messageSends: ["bindKeyDownActions", "do:", "with:", "key", "button", "onClick:", "checkNote:", "value", "game", "associations", "noteNamesDictionary"],
referencedClasses: []
}),
smalltalk.NoteButtonsWidget);



smalltalk.addClass('OptionSelectionWidget', smalltalk.Widget, ['buttons'], 'Rescorer');
smalltalk.addMethod(
"_buttons",
smalltalk.method({
selector: "buttons",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@buttons"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@buttons"]=smalltalk.send((smalltalk.Dictionary || Dictionary),"_new",[]);
$1=self["@buttons"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "buttons\x0a\x09^ buttons ifNil: [ buttons := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.OptionSelectionWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2;
smalltalk.send(smalltalk.send(self,"_buttons",[]),"_associationsDo_",[(function(eachButton){
$1=smalltalk.send(html,"_button",[]);
smalltalk.send($1,"_with_",[smalltalk.send(eachButton,"_key",[])]);
$2=smalltalk.send($1,"_onClick_",[smalltalk.send(eachButton,"_value",[])]);
return $2;
})]);
return self},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09self buttons \x0a    \x09associationsDo: [ :eachButton | \x0a\x09\x09\x09html button\x0a            \x09with: eachButton key;\x0a                onClick: eachButton value ]",
messageSends: ["associationsDo:", "with:", "key", "button", "onClick:", "value", "buttons"],
referencedClasses: []
}),
smalltalk.OptionSelectionWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["buttons-container"]);
$2=smalltalk.send($1,"_with_",[(function(){
return smalltalk.send(self,"_renderButtonsOn_",[html]);
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a    \x09class: 'buttons-container';\x0a        with: [ self renderButtonsOn: html ]",
messageSends: ["class:", "div", "with:", "renderButtonsOn:"],
referencedClasses: []
}),
smalltalk.OptionSelectionWidget);



smalltalk.addClass('SheetWidget', smalltalk.Widget, ['lines', 'keyImg', 'sheetDiv', 'keyName', 'bpm', 'difficulty', 'noteDiv', 'currentNote', 'game'], 'Rescorer');
smalltalk.addMethod(
"_bpm",
smalltalk.method({
selector: "bpm",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@bpm"];
return $1;
},
args: [],
source: "bpm\x0a\x09^ bpm",
messageSends: [],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_bpm_",
smalltalk.method({
selector: "bpm:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@bpm"]=anInteger;
return self},
args: ["anInteger"],
source: "bpm: anInteger\x0a\x09bpm := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_currentNote",
smalltalk.method({
selector: "currentNote",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $1;
    $2 = self['@currentNote'];
    if (($receiver = $2) == nil || $receiver == undefined) {
        smalltalk.send(self, "_nextNote", []);
        $1 = self['@currentNote'];
    } else {
        $1 = $2;
    }
    return $1;
},
args: [],
source: "currentNote\x0a\x09^ currentNote ifNil: [ self nextNote. currentNote ]",
messageSends: ["ifNil:", "nextNote"],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_difficulty",
smalltalk.method({
selector: "difficulty",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@difficulty"];
return $1;
},
args: [],
source: "difficulty\x0a\x09^ difficulty",
messageSends: [],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_difficulty_",
smalltalk.method({
selector: "difficulty:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@difficulty"]=anInteger;
return self},
args: ["anInteger"],
source: "difficulty: anInteger\x0a\x09difficulty := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_game",
smalltalk.method({
selector: "game",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = self['@game'];
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
fn: function (aGameWidget) {
    var self = this;
    self['@game'] = aGameWidget;
    return self;
},
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
fn: function () {
    var self = this;
    var $2, $1;
    $2 = self['@keyName'];
    if (($receiver = $2) == nil || $receiver == undefined) {
        self['@keyName'] = smalltalk.symbolFor("G");
        $1 = self['@keyName'];
    } else {
        $1 = $2;
    }
    return $1;
},
args: [],
source: "keyName\x0a\x09^ keyName ifNil: [ keyName := #G ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_keyName_",
smalltalk.method({
selector: "keyName:",
category: 'accessing',
fn: function (aSymbol){
var self=this;
self["@keyName"]=aSymbol;
return self},
args: ["aSymbol"],
source: "keyName: aSymbol\x0a\x09keyName := aSymbol",
messageSends: [],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_nextNote",
smalltalk.method({
selector: "nextNote",
category: 'actions',
fn: function () {
    var self = this;
    var $1, $2;
    var notePositions;
    notePositions = smalltalk.send(1, "_to_", [13]);
    $1 = self['@currentNote'];
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(notePositions, "_remove_", [smalltalk.send(self['@currentNote'], "_position", [])]);
    }
    self['@currentNote'] = smalltalk.send(smalltalk.Note || Note, "_position_key_", [smalltalk.send(notePositions, "_atRandom", []), smalltalk.send(self, "_keyName", [])]);
    $2 = self['@noteDiv'];
    if (($receiver = $2) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(self['@noteDiv'], "_contents_", [function (html) {return smalltalk.send(self, "_renderNoteOn_", [html]);}]);
    }
    return self;
},
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
category: 'accessing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "play\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderKeyOn_",
smalltalk.method({
selector: "renderKeyOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_img", []);
    smalltalk.send($1, "_class_", [smalltalk.send("image key ", "__comma", [smalltalk.send(smalltalk.send(self, "_keyName", []), "_asString", [])])]);
    $2 = smalltalk.send($1, "_src_", [smalltalk.send(smalltalk.send("images/", "__comma", [smalltalk.send(smalltalk.send(self, "_keyName", []), "_asString", [])]), "__comma", [".svg"])]);
    self['@keyImg'] = $2;
    return self;
},
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
fn: function (html) {
    var self = this;
    var $1, $2;
    self['@lines'] = smalltalk.send(smalltalk.send(1, "_to_", [7]), "_collect_", [function (index) {$1 = smalltalk.send(html, "_hr", []);smalltalk.send($1, "_class_", [smalltalk.send("line i", "__comma", [smalltalk.send(index, "_asString", [])])]);$2 = smalltalk.send($1, "_style_", [smalltalk.send(smalltalk.send("bottom: ", "__comma", [smalltalk.send(smalltalk.send(index, "__star", [12.5]), "_asString", [])]), "__comma", ["%;"])]);return $2;}]);
    return self;
},
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
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_img", []);
    smalltalk.send($1, "_class_", [smalltalk.send(smalltalk.send(self, "_currentNote", []), "_cssClass", [])]);
    smalltalk.send($1, "_src_", [smalltalk.send(smalltalk.send(self, "_currentNote", []), "_imagePath", [])]);
    $2 = smalltalk.send($1, "_style_", [smalltalk.send(smalltalk.send(self, "_currentNote", []), "_cssStyle", [])]);
    return self;
},
args: ["html"],
source: "renderNoteOn: html\x0a\x09html img\x0a   \x09\x09class: self currentNote cssClass; \x0a        src: self currentNote imagePath;\x0a    \x09style: self currentNote cssStyle.",
messageSends: ["class:", "cssClass", "currentNote", "img", "src:", "imagePath", "style:", "cssStyle"],
referencedClasses: []
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var $1, $2;
    self['@sheetDiv'] = smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["sheet"]);
    smalltalk.send(self['@sheetDiv'], "_with_", [function () {$1 = self;smalltalk.send($1, "_renderKeyOn_", [html]);$2 = smalltalk.send($1, "_renderLinesOn_", [html]);$2;self['@noteDiv'] = smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {return smalltalk.send(self, "_renderNoteOn_", [html]);}]);return self['@noteDiv'];}]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a    sheetDiv := html div class: 'sheet'.\x0a\x09sheetDiv\x0a\x09\x09with: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09renderKeyOn: html;\x0a\x09\x09\x09\x09renderLinesOn: html.\x0a\x09noteDiv := html div with: [ self renderNoteOn: html ]]",
messageSends: ["class:", "div", "with:", "renderKeyOn:", "renderLinesOn:", "renderNoteOn:"],
referencedClasses: []
}),
smalltalk.SheetWidget);



