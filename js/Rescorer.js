smalltalk.addPackage('Rescorer', {});
smalltalk.addClass('BubbleWidget', smalltalk.Widget, ['bubbleSpan', 'happyTexts', 'sadTexts'], 'Rescorer');
smalltalk.addMethod(
"_beHappy",
smalltalk.method({
selector: "beHappy",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_text_",[smalltalk.send(smalltalk.send(self,"_happyTexts",[]),"_atRandom",[])]);
return self},
args: [],
source: "beHappy\x0a\x09self text: self happyTexts atRandom.",
messageSends: ["text:", "atRandom", "happyTexts"],
referencedClasses: []
}),
smalltalk.BubbleWidget);

smalltalk.addMethod(
"_beSad",
smalltalk.method({
selector: "beSad",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_text_",[smalltalk.send(smalltalk.send(self,"_sadTexts",[]),"_atRandom",[])]);
return self},
args: [],
source: "beSad\x0a\x09self text: self sadTexts atRandom.",
messageSends: ["text:", "atRandom", "sadTexts"],
referencedClasses: []
}),
smalltalk.BubbleWidget);

smalltalk.addMethod(
"_happyTexts",
smalltalk.method({
selector: "happyTexts",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@happyTexts"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@happyTexts"]=["Molt bé! Et veig en forma!", "Has estat practicant d'amagat? Ho fas molt bé!", "Estic orgullós de tu!", "Tenim a Beethoven entre nosaltres!", "Disc de platí per a tu!", "Ho portes molt bé!", "Segueix així!", "Endavant!", "Ho fas millor que jo!", "En saps molt!", "No perdis el ritme, que ho estàs fent genial!", "Fantàstic!", "Meravellós!", "Brillant!", "Excel·lent!", "Perfecte!", "Genial!", "Bé!", "Molt bé!", "Quina melodia!", "Ets el Vivaldi del segle XXI!", "Quin domini!", "Quin nivell!", "Així m'agrada!", "Boníssim!", "Es nota que sóc un gran mestre!", "Aquesta no la sabia ni jo!", "Ets una màquina!", "En saps molt més que jo!", "Quan és el teu proper concert?"];
$1=self["@happyTexts"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "happyTexts\x0a\x09^ happyTexts ifNil: [ happyTexts := #(\x0a    'Molt bé! Et veig en forma!'\x0a    'Has estat practicant d''amagat? Ho fas molt bé!'\x0a    'Estic orgullós de tu!'\x0a    'Tenim a Beethoven entre nosaltres!'\x0a    'Disc de platí per a tu!'\x0a    'Ho portes molt bé!'\x0a    'Segueix així!'\x0a    'Endavant!'\x0a    'Ho fas millor que jo!'\x0a    'En saps molt!'\x0a    'No perdis el ritme, que ho estàs fent genial!'\x0a    'Fantàstic!'\x0a    'Meravellós!'\x0a    'Brillant!'\x0a    'Excel·lent!'\x0a    'Perfecte!'\x0a    'Genial!'\x0a    'Bé!'\x0a    'Molt bé!'\x0a    'Quina melodia!'\x0a    'Ets el Vivaldi del segle XXI!'\x0a    'Quin domini!'\x0a    'Quin nivell!'\x0a    'Així m''agrada!'\x0a    'Boníssim!'\x0a    'Es nota que sóc un gran mestre!'\x0a    'Aquesta no la sabia ni jo!'\x0a    'Ets una màquina!'\x0a    'En saps molt més que jo!'\x0a    'Quan és el teu proper concert?') ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.BubbleWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$3,$4,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["bubble"]);
$2=smalltalk.send($1,"_contents_",[(function(h){
$3=smalltalk.send(h,"_img",[]);
smalltalk.send($3,"_class_",["tip"]);
$4=smalltalk.send($3,"_src_",["images/bubble-tip.svg"]);
$4;
self["@bubbleSpan"]=smalltalk.send(smalltalk.send(h,"_span",[]),"_contents_",["Comencem!"]);
return self["@bubbleSpan"];
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a    \x09class: 'bubble';\x0a    \x09contents: [ :h | \x0a            h img \x0a            \x09class: 'tip';\x0a                src: 'images/bubble-tip.svg'.\x0a\x09\x09\x09bubbleSpan := h span contents: 'Comencem!' ]",
messageSends: ["class:", "div", "contents:", "img", "src:", "span"],
referencedClasses: []
}),
smalltalk.BubbleWidget);

smalltalk.addMethod(
"_sadTexts",
smalltalk.method({
selector: "sadTexts",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@sadTexts"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@sadTexts"]=["T'hi hauràs d'esforçar una mica més si vols arribar a ser tan gran com jo!", "Noooo!", "Aix... malament...", "No era aquesta, no...", "Torna-ho a provar, vinga!", "Intenta-ho una altra vegada!", "No passa res, tothom s'equivoca!", "Errare humanum est.", "Fins i tot jo m'equivoco, de vegades!", "Encara et falta una mica per saber-ne tant com jo!", "Hauràs de practicar una miqueta més...", "No et preocupis, un error el té tothom!", "Va, que sé que ho pots fer molt millor!", "Aquesta nota no era...", "Vinga, una altra oportunitat!", "Segur?", "Doncs no era aquesta!", "Error!", "Em penso que t'has equivocat!", "Esforça-t'hi més...", "Aquesta la sabies! Torna-ho a provar!", "Fixa-t'hi més!", "No és correcte, però no et desesperis. Torna-ho a intentar!", "Mira-t'ho una mica millor...", "Has fallat!", "Que no escoltes a classe?", "No és correcte...", "Va, una altra oportunitat...", "Ho pots fer molt millor...", "Hauràs de repassar una mica!", "Això no ha sonat bé..."];
$1=self["@sadTexts"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "sadTexts\x0a\x09^ sadTexts ifNil: [ sadTexts := #(\x0a    'T''hi hauràs d''esforçar una mica més si vols arribar a ser tan gran com jo!'\x0a    'Noooo!'\x0a    'Aix... malament...'\x0a    'No era aquesta, no...'\x0a    'Torna-ho a provar, vinga!'\x0a    'Intenta-ho una altra vegada!'\x0a    'No passa res, tothom s''equivoca!'\x0a    'Errare humanum est.'\x0a    'Fins i tot jo m''equivoco, de vegades!'\x0a    'Encara et falta una mica per saber-ne tant com jo!'\x0a    'Hauràs de practicar una miqueta més...'\x0a    'No et preocupis, un error el té tothom!'\x0a    'Va, que sé que ho pots fer molt millor!'\x0a    'Aquesta nota no era...'\x0a    'Vinga, una altra oportunitat!'\x0a    'Segur?'\x0a    'Doncs no era aquesta!'\x0a    'Error!'\x0a    'Em penso que t''has equivocat!'\x0a    'Esforça-t''hi més...'\x0a    'Aquesta la sabies! Torna-ho a provar!'\x0a    'Fixa-t''hi més!'\x0a    'No és correcte, però no et desesperis. Torna-ho a intentar!'\x0a    'Mira-t''ho una mica millor...'\x0a    'Has fallat!'\x0a    'Que no escoltes a classe?'\x0a    'No és correcte...'\x0a    'Va, una altra oportunitat...'\x0a    'Ho pots fer molt millor...'\x0a    'Hauràs de repassar una mica!'\x0a    'Això no ha sonat bé...'\x0a    ) ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.BubbleWidget);

smalltalk.addMethod(
"_text_",
smalltalk.method({
selector: "text:",
category: 'updating',
fn: function (aString){
var self=this;
smalltalk.send(self["@bubbleSpan"],"_contents_",[aString]);
return self},
args: ["aString"],
source: "text: aString\x0a\x09bubbleSpan contents: aString",
messageSends: ["contents:"],
referencedClasses: []
}),
smalltalk.BubbleWidget);



smalltalk.addClass('FaceWidget', smalltalk.Widget, ['mood', 'faceImg'], 'Rescorer');
smalltalk.addMethod(
"_beHappy",
smalltalk.method({
selector: "beHappy",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_mood_",[smalltalk.symbolFor("happy")]);
smalltalk.send(self,"_updateFace",[]);
return self},
args: [],
source: "beHappy\x0a\x09self mood: #happy.\x0a    self updateFace.",
messageSends: ["mood:", "updateFace"],
referencedClasses: []
}),
smalltalk.FaceWidget);

smalltalk.addMethod(
"_beSad",
smalltalk.method({
selector: "beSad",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_mood_",[smalltalk.symbolFor("sad")]);
smalltalk.send(self,"_updateFace",[]);
return self},
args: [],
source: "beSad\x0a\x09self mood: #sad.\x0a    self updateFace.",
messageSends: ["mood:", "updateFace"],
referencedClasses: []
}),
smalltalk.FaceWidget);

smalltalk.addMethod(
"_mood",
smalltalk.method({
selector: "mood",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@mood"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@mood"]=smalltalk.symbolFor("happy");
$1=self["@mood"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "mood\x0a\x09^ mood ifNil: [ mood := #happy ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.FaceWidget);

smalltalk.addMethod(
"_mood_",
smalltalk.method({
selector: "mood:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@mood"]=aString;
return self},
args: ["aString"],
source: "mood: aString\x0a\x09mood := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.FaceWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_img",[]);
smalltalk.send($1,"_class_",["image face"]);
$2=smalltalk.send($1,"_src_",[smalltalk.send(smalltalk.send(smalltalk.send("images/face-","__comma",[smalltalk.send(smalltalk.send(self,"_mood",[]),"_asString",[])]),"__comma",[smalltalk.send(smalltalk.send([(1), (2), (3), (4)],"_atRandom",[]),"_asString",[])]),"__comma",[".svg"])]);
self["@faceImg"]=$2;
return self},
args: ["html"],
source: "renderOn: html\x0a\x09faceImg := html img\x0a    \x09class: 'image face';\x0a        src: 'images/face-' , self mood asString , #(1 2 3 4) atRandom asString , '.svg'.",
messageSends: ["class:", "img", "src:", ",", "asString", "atRandom", "mood"],
referencedClasses: []
}),
smalltalk.FaceWidget);

smalltalk.addMethod(
"_updateFace",
smalltalk.method({
selector: "updateFace",
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self["@faceImg"],"_src_",[smalltalk.send(smalltalk.send(smalltalk.send("images/face-","__comma",[smalltalk.send(smalltalk.send(self,"_mood",[]),"_asString",[])]),"__comma",[smalltalk.send(smalltalk.send([(1), (2), (3), (4)],"_atRandom",[]),"_asString",[])]),"__comma",[".svg"])]);
return self},
args: [],
source: "updateFace\x0a\x09faceImg src: 'images/face-' , self mood asString , #(1 2 3 4) atRandom asString , '.svg'",
messageSends: ["src:", ",", "asString", "atRandom", "mood"],
referencedClasses: []
}),
smalltalk.FaceWidget);



smalltalk.addClass('GameWidget', smalltalk.Widget, ['wrapper', 'currentStage', 'sheetWidget', 'bubbleWidget', 'noteButtonsWidget', 'faceWidget', 'timerWidget', 'scoreWidget', 'errorAudio', 'difficulty', 'failedFlag'], 'Rescorer');
smalltalk.addMethod(
"_bubbleWidget",
smalltalk.method({
selector: "bubbleWidget",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@bubbleWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@bubbleWidget"]=smalltalk.send((smalltalk.BubbleWidget || BubbleWidget),"_new",[]);
$1=self["@bubbleWidget"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "bubbleWidget\x0a\x09^ bubbleWidget ifNil: [ bubbleWidget := BubbleWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["BubbleWidget"]
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
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_currentNote",[]),"_play",[]);
smalltalk.send(smalltalk.send(self,"_faceWidget",[]),"_beHappy",[]);
smalltalk.send(smalltalk.send(self,"_bubbleWidget",[]),"_beHappy",[]);
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_nextNote",[]);
smalltalk.send(smalltalk.send(self,"_timerWidget",[]),"_reset",[]);
smalltalk.send(smalltalk.send(self,"_scoreWidget",[]),"_addScore_",[smalltalk.send(self,"_currentNoteScore",[])]);
smalltalk.send(self,"_failedFlag_",[(1)]);
return self},
args: [],
source: "correctAnswerAction\x0a\x09self sheetWidget currentNote play.\x0a    self faceWidget beHappy.\x0a    self bubbleWidget beHappy.\x0a\x09self sheetWidget nextNote.\x0a    self timerWidget reset.\x0a    self scoreWidget addScore: self currentNoteScore.\x0a    self failedFlag: 1",
messageSends: ["play", "currentNote", "sheetWidget", "beHappy", "faceWidget", "bubbleWidget", "nextNote", "reset", "timerWidget", "addScore:", "currentNoteScore", "scoreWidget", "failedFlag:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_currentNoteScore",
smalltalk.method({
selector: "currentNoteScore",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_timerWidget",[]),"_currentSecondsPerNote",[]),"__star",[smalltalk.send(self,"_difficulty",[])]),"__star",[smalltalk.send(self,"_failedFlag",[])]);
return $1;
},
args: [],
source: "currentNoteScore\x0a\x09^ self timerWidget currentSecondsPerNote * self difficulty * self failedFlag",
messageSends: ["*", "failedFlag", "difficulty", "currentSecondsPerNote", "timerWidget"],
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
smalltalk.GameWidget);

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
smalltalk.GameWidget);

smalltalk.addMethod(
"_end",
smalltalk.method({
selector: "end",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_nextStage",[]);
smalltalk.send(smalltalk.send(self,"_faceWidget",[]),"_beHappy",[]);
return self},
args: [],
source: "end\x0a\x09self nextStage.\x0a\x09self faceWidget beHappy.",
messageSends: ["nextStage", "beHappy", "faceWidget"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_faceWidget",
smalltalk.method({
selector: "faceWidget",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@faceWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@faceWidget"]=smalltalk.send((smalltalk.FaceWidget || FaceWidget),"_new",[]);
$1=self["@faceWidget"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "faceWidget\x0a\x09^ faceWidget ifNil: [ faceWidget := FaceWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["FaceWidget"]
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_failedFlag",
smalltalk.method({
selector: "failedFlag",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@failedFlag"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@failedFlag"]=(1);
$1=self["@failedFlag"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "failedFlag\x0a\x09^ failedFlag ifNil: [ failedFlag := 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_failedFlag_",
smalltalk.method({
selector: "failedFlag:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@failedFlag"]=anInteger;
return self},
args: ["anInteger"],
source: "failedFlag: anInteger\x0a\x09failedFlag := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_globalScore",
smalltalk.method({
selector: "globalScore",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@globalScore"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@globalScore"]=(0);
$1=self["@globalScore"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "globalScore\x0a\x09^ globalScore ifNil: [ globalScore := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_globalScore_",
smalltalk.method({
selector: "globalScore:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@globalScore"]=anInteger;
return self},
args: ["anInteger"],
source: "globalScore: anInteger\x0a\x09globalScore := anInteger",
messageSends: [],
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
fn: function (html){
var self=this;
var $1,$2;
smalltalk.send(["A", "B", "C", "D", "E", "F", "G"],"_do_",[(function(eachNote){
return smalltalk.send(["1", "2", "3", "4", "5"],"_do_",[(function(eachOctave){
$1=smalltalk.send(html,"_audio",[]);
smalltalk.send($1,"_class_",[smalltalk.send(smalltalk.send("note ","__comma",[eachNote]),"__comma",[eachOctave])]);
$2=smalltalk.send($1,"_src_",[smalltalk.send(smalltalk.send(smalltalk.send("sounds/","__comma",[eachNote]),"__comma",[eachOctave]),"__comma",[".ogg"])]);
return $2;
})]);
})]);
return self},
args: ["html"],
source: "renderAudioElementsOn: html\x0a\x09#('A' 'B' 'C' 'D' 'E' 'F' 'G') do: [ :eachNote | \x0a    \x09#('1' '2' '3' '4' '5') do: [ :eachOctave | \x0a        \x09html audio\x0a  \x09\x09\x09\x09class: 'note ' , eachNote , eachOctave;\x0a  \x09\x09\x09\x09src: 'sounds/' , eachNote , eachOctave , '.ogg' ]].",
messageSends: ["do:", "class:", ",", "audio", "src:"],
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
var $1,$2;
$1=html;
smalltalk.send($1,"_with_",[smalltalk.send(self,"_faceWidget",[])]);
$2=smalltalk.send($1,"_with_",[smalltalk.send(self,"_bubbleWidget",[])]);
smalltalk.send(self,"_renderCurrentStageOn_",[html]);
return self},
args: ["html"],
source: "renderContentOn: html\x0a\x09html \x0a    \x09with: self faceWidget; \x0a    \x09with: self bubbleWidget.\x0a\x09self renderCurrentStageOn: html.",
messageSends: ["with:", "faceWidget", "bubbleWidget", "renderCurrentStageOn:"],
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
var $1,$2,$3,$4,$5,$6;
$1=smalltalk.send(smalltalk.send(self,"_currentStage",[]),"__eq",[smalltalk.symbolFor("difficultySelection")]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_renderDifficultySelectionStageOn_",[html]);
};
$2=smalltalk.send(smalltalk.send(self,"_currentStage",[]),"__eq",[smalltalk.symbolFor("speedSelection")]);
if(smalltalk.assert($2)){
smalltalk.send(self,"_renderSpeedSelectionStageOn_",[html]);
};
$3=smalltalk.send(smalltalk.send(self,"_currentStage",[]),"__eq",[smalltalk.symbolFor("timeSelection")]);
if(smalltalk.assert($3)){
smalltalk.send(self,"_renderGameTimeSelectionStageOn_",[html]);
};
$4=smalltalk.send(smalltalk.send(self,"_currentStage",[]),"__eq",[smalltalk.symbolFor("keySelection")]);
if(smalltalk.assert($4)){
smalltalk.send(self,"_renderKeySelectionStageOn_",[html]);
};
$5=smalltalk.send(smalltalk.send(self,"_currentStage",[]),"__eq",[smalltalk.symbolFor("game")]);
if(smalltalk.assert($5)){
smalltalk.send(self,"_renderGameStageOn_",[html]);
};
$6=smalltalk.send(smalltalk.send(self,"_currentStage",[]),"__eq",[smalltalk.symbolFor("end")]);
if(smalltalk.assert($6)){
smalltalk.send(self,"_renderEndStageOn_",[html]);
};
return self},
args: ["html"],
source: "renderCurrentStageOn: html\x0a\x09self currentStage = #difficultySelection ifTrue: [ self renderDifficultySelectionStageOn: html ].\x0a\x09self currentStage = #speedSelection ifTrue: [ self renderSpeedSelectionStageOn: html ].\x0a    self currentStage = #timeSelection ifTrue: [ self renderGameTimeSelectionStageOn: html ].\x0a\x09self currentStage = #keySelection ifTrue: [ self renderKeySelectionStageOn: html ].\x0a\x09self currentStage = #game ifTrue: [ self renderGameStageOn: html ].\x0a    self currentStage = #end ifTrue: [ self renderEndStageOn: html ].",
messageSends: ["ifTrue:", "renderDifficultySelectionStageOn:", "=", "currentStage", "renderSpeedSelectionStageOn:", "renderGameTimeSelectionStageOn:", "renderKeySelectionStageOn:", "renderGameStageOn:", "renderEndStageOn:"],
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
smalltalk.send(self,"_difficulty_",[(1)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send($1,"_at_put_",["Iniciat",(function(){
smalltalk.send(self,"_difficulty_",[(2)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send($1,"_at_put_",["Expert",(function(){
smalltalk.send(self,"_difficulty_",[(3)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
$2=smalltalk.send($1,"_at_put_",["Virtuós",(function(){
smalltalk.send(self,"_difficulty_",[(4)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send(smalltalk.send(self,"_bubbleWidget",[]),"_text_",["A quin nivell de dificultat vols jugar?"]);
smalltalk.send(html,"_with_",[stage]);
return self},
args: ["html"],
source: "renderDifficultySelectionStageOn: html\x0a\x09| stage |\x0a\x09stage := OptionSelectionWidget new.\x0a\x09stage buttons\x0a        \x09at: 'Principiant'\x0a            \x09put: [\x0a                \x09self difficulty: 1.\x0a            \x09\x09self nextStage ];\x0a\x09\x09\x09at: 'Iniciat'\x0a            \x09put: [\x0a                \x09self difficulty: 2.\x0a                    self nextStage ];\x0a\x09\x09\x09at: 'Expert'\x0a            \x09put: [\x0a                \x09self difficulty: 3.\x0a                    self nextStage ];\x0a\x09\x09\x09at: 'Virtuós'\x0a            \x09put: [\x0a                \x09self difficulty: 4.\x0a                    self nextStage ].\x0a\x09self bubbleWidget text: 'A quin nivell de dificultat vols jugar?'.\x0a\x09html with: stage.",
messageSends: ["new", "at:put:", "difficulty:", "nextStage", "buttons", "text:", "bubbleWidget", "with:"],
referencedClasses: ["OptionSelectionWidget"]
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderEndStageOn_",
smalltalk.method({
selector: "renderEndStageOn:",
category: 'rendering - stages',
fn: function (html){
var self=this;
var stage;
stage=smalltalk.send((smalltalk.OptionSelectionWidget || OptionSelectionWidget),"_new",[]);
smalltalk.send(smalltalk.send(stage,"_buttons",[]),"_at_put_",["Nova partida",(function(){
smalltalk.send(self,"_resetGame",[]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send(smalltalk.send(self,"_bubbleWidget",[]),"_text_",[smalltalk.send(smalltalk.send("S'ha acabat el temps! La teva puntuació final és de ","__comma",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_scoreWidget",[]),"_globalScore",[]),"_asString",[])]),"__comma",[" punts."])]);
smalltalk.send(html,"_with_",[stage]);
return self},
args: ["html"],
source: "renderEndStageOn: html\x0a\x09| stage |\x0a\x09stage := OptionSelectionWidget new.\x0a\x09stage buttons \x0a        \x09at: 'Nova partida' \x0a            \x09put: [\x0a                \x09self resetGame. \x0a            \x09\x09self nextStage ].\x0a\x09self bubbleWidget text: 'S''ha acabat el temps! La teva puntuació final és de ' , self scoreWidget globalScore asString , ' punts.'.\x0a    html with: stage.",
messageSends: ["new", "at:put:", "resetGame", "nextStage", "buttons", "text:", ",", "asString", "globalScore", "scoreWidget", "bubbleWidget", "with:"],
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
"_renderGameStageOn_",
smalltalk.method({
selector: "renderGameStageOn:",
category: 'rendering - stages',
fn: function (html){
var self=this;
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["sheet-container"]);
$2=smalltalk.send($1,"_with_",[smalltalk.send(self,"_sheetWidget",[])]);
$3=smalltalk.send(html,"_div",[]);
smalltalk.send($3,"_class_",["note-buttons-container"]);
$4=smalltalk.send($3,"_with_",[smalltalk.send(self,"_noteButtonsWidget",[])]);
$5=smalltalk.send(html,"_div",[]);
smalltalk.send($5,"_class_",["score"]);
$6=smalltalk.send($5,"_with_",[smalltalk.send(self,"_scoreWidget",[])]);
$7=smalltalk.send(html,"_div",[]);
smalltalk.send($7,"_class_",["timer"]);
$8=smalltalk.send($7,"_with_",[smalltalk.send(self,"_timerWidget",[])]);
smalltalk.send(self,"_renderAudioElementsOn_",[html]);
self["@errorAudio"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",[(function(){
return smalltalk.send(self,"_renderErrorAudioOn_",[html]);
})]);
return self},
args: ["html"],
source: "renderGameStageOn: html\x0a\x09html div \x0a    \x09class: 'sheet-container';\x0a    \x09with: self sheetWidget.\x0a\x09html div \x0a    \x09class: 'note-buttons-container';\x0a    \x09with: self noteButtonsWidget.\x0a\x09html div\x0a    \x09class: 'score';\x0a        with: self scoreWidget.\x0a\x09html div\x0a    \x09class: 'timer';\x0a        with: self timerWidget.\x0a    self renderAudioElementsOn: html.\x0a\x09errorAudio := html div with: [ self renderErrorAudioOn: html ]",
messageSends: ["class:", "div", "with:", "sheetWidget", "noteButtonsWidget", "scoreWidget", "timerWidget", "renderAudioElementsOn:", "renderErrorAudioOn:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderGameTimeSelectionStageOn_",
smalltalk.method({
selector: "renderGameTimeSelectionStageOn:",
category: 'rendering - stages',
fn: function (html){
var self=this;
var $1,$3,$5,$8,$7,$6,$4,$2;
var stage;
stage=smalltalk.send((smalltalk.OptionSelectionWidget || OptionSelectionWidget),"_new",[]);
$1=smalltalk.send(stage,"_buttons",[]);
smalltalk.send($1,"_at_put_",["10 minuts",(function(){
smalltalk.send(smalltalk.send(self,"_timerWidget",[]),"_globalSeconds_",[smalltalk.send((10),"__star",[(60)])]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send($1,"_at_put_",["5 minuts",(function(){
smalltalk.send(smalltalk.send(self,"_timerWidget",[]),"_globalSeconds_",[smalltalk.send((5),"__star",[(60)])]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send($1,"_at_put_",["2 minuts",(function(){
smalltalk.send(smalltalk.send(self,"_timerWidget",[]),"_globalSeconds_",[smalltalk.send((2),"__star",[(60)])]);
return smalltalk.send(self,"_nextStage",[]);
})]);
$3=$1;
$4=(function(){
var time;
time=smalltalk.send(smalltalk.send(window,"_prompt_",["Quants minuts?"]),"_asNumber",[]);
time;
$5=smalltalk.send(self,"_timerWidget",[]);
$8=smalltalk.send(time,"__gt",[(0)]);
if(smalltalk.assert($8)){
$7=time;
} else {
$7=(5);
};
$6=smalltalk.send($7,"__star",[(60)]);
smalltalk.send($5,"_globalSeconds_",[$6]);
return smalltalk.send(self,"_nextStage",[]);
});
$2=smalltalk.send($3,"_at_put_",["custom",$4]);
smalltalk.send(smalltalk.send(self,"_bubbleWidget",[]),"_text_",["Quants minuts vols que duri la partida?"]);
smalltalk.send(html,"_with_",[stage]);
return self},
args: ["html"],
source: "renderGameTimeSelectionStageOn: html\x0a\x09| stage |\x0a\x09stage := OptionSelectionWidget new.\x0a\x09stage buttons \x0a        \x09at: '10 minuts' \x0a            \x09put: [\x0a                \x09self timerWidget globalSeconds: 10 * 60.\x0a            \x09\x09self nextStage ];\x0a\x09\x09\x09at: '5 minuts' \x0a            \x09put: [\x0a                \x09self timerWidget globalSeconds: 5 * 60.\x0a            \x09\x09self nextStage ]; \x0a\x09\x09\x09at: '2 minuts'\x0a            \x09put: [ \x0a                \x09self timerWidget globalSeconds: 2 * 60.\x0a                    self nextStage ];\x0a\x09\x09\x09at: 'custom' \x0a            \x09put: [\x0a                  \x09| time |\x0a                    time := (window prompt: 'Quants minuts?') asNumber.\x0a                \x09self timerWidget globalSeconds: (time > 0 ifFalse: [ 5 ] ifTrue: [ time ]) * 60.\x0a            \x09\x09self nextStage ].\x0a\x09self bubbleWidget text: 'Quants minuts vols que duri la partida?'.\x0a\x09html with: stage.",
messageSends: ["new", "at:put:", "globalSeconds:", "*", "timerWidget", "nextStage", "buttons", "asNumber", "prompt:", "ifFalse:ifTrue:", ">", "text:", "bubbleWidget", "with:"],
referencedClasses: ["OptionSelectionWidget"]
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
smalltalk.send(smalltalk.send(self,"_bubbleWidget",[]),"_text_",["Escull la clau, si us plau."]);
smalltalk.send(html,"_with_",[stage]);
return self},
args: ["html"],
source: "renderKeySelectionStageOn: html\x0a\x09| stage |\x0a\x09stage := OptionSelectionWidget new.\x0a\x09stage buttons \x0a        \x09at: 'Sol' \x0a            \x09put: [\x0a                \x09self sheetWidget keyName: #G. \x0a            \x09\x09self nextStage ]; \x0a\x09\x09\x09at: 'Fa' \x0a            \x09put: [ \x0a                \x09self sheetWidget keyName: #F. \x0a                    self nextStage ].\x0a\x09self bubbleWidget text: 'Escull la clau, si us plau.'.\x0a\x09html with: stage.",
messageSends: ["new", "at:put:", "keyName:", "sheetWidget", "nextStage", "buttons", "text:", "bubbleWidget", "with:"],
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
var $1,$3,$5,$7,$6,$4,$2;
var stage;
stage=smalltalk.send((smalltalk.OptionSelectionWidget || OptionSelectionWidget),"_new",[]);
$1=smalltalk.send(stage,"_buttons",[]);
smalltalk.send($1,"_at_put_",["Adagio",(function(){
smalltalk.send(smalltalk.send(self,"_timerWidget",[]),"_secondsPerNote_",[(10)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send($1,"_at_put_",["Andante",(function(){
smalltalk.send(smalltalk.send(self,"_timerWidget",[]),"_secondsPerNote_",[(6)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send($1,"_at_put_",["Allegro",(function(){
smalltalk.send(smalltalk.send(self,"_timerWidget",[]),"_secondsPerNote_",[(3)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
smalltalk.send($1,"_at_put_",["Presto",(function(){
smalltalk.send(smalltalk.send(self,"_timerWidget",[]),"_secondsPerNote_",[(1)]);
return smalltalk.send(self,"_nextStage",[]);
})]);
$3=$1;
$4=(function(){
var time;
time=smalltalk.send(smalltalk.send(window,"_prompt_",["Segons per nota?"]),"_asNumber",[]);
time;
$5=smalltalk.send(self,"_timerWidget",[]);
$7=smalltalk.send(time,"__gt",[(0)]);
if(smalltalk.assert($7)){
$6=time;
} else {
$6=(70);
};
smalltalk.send($5,"_secondsPerNote_",[$6]);
return smalltalk.send(self,"_nextStage",[]);
});
$2=smalltalk.send($3,"_at_put_",["Custom",$4]);
smalltalk.send(smalltalk.send(self,"_bubbleWidget",[]),"_text_",["I a quin tempo?"]);
smalltalk.send(html,"_with_",[stage]);
return self},
args: ["html"],
source: "renderSpeedSelectionStageOn: html\x0a\x09| stage |\x0a\x09stage := OptionSelectionWidget new.\x0a\x09stage buttons \x0a        \x09at: 'Adagio'\x0a            \x09put: [\x0a                \x09self timerWidget secondsPerNote: 10. \x0a            \x09\x09self nextStage ];\x0a\x09\x09\x09at: 'Andante'\x0a            \x09put: [ \x0a                \x09self timerWidget secondsPerNote: 6.\x0a                    self nextStage ];\x0a\x09\x09\x09at: 'Allegro'\x0a            \x09put: [ \x0a                \x09self timerWidget secondsPerNote: 3.\x0a                    self nextStage ];\x0a\x09\x09\x09at: 'Presto'\x0a            \x09put: [ \x0a                \x09self timerWidget secondsPerNote: 1.\x0a                    self nextStage ];\x0a\x09\x09\x09at: 'Custom'\x0a            \x09put: [\x0a                  \x09| time |\x0a                    time := (window prompt: 'Segons per nota?') asNumber.\x0a                  \x09self timerWidget secondsPerNote: (time > 0 ifFalse: [ 70 ] ifTrue: [ time ]).\x0a                    self nextStage ].\x0a\x09self bubbleWidget text: 'I a quin tempo?'.\x0a\x09html with: stage.",
messageSends: ["new", "at:put:", "secondsPerNote:", "timerWidget", "nextStage", "buttons", "asNumber", "prompt:", "ifFalse:ifTrue:", ">", "text:", "bubbleWidget", "with:"],
referencedClasses: ["OptionSelectionWidget"]
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_resetCurrentNoteScore",
smalltalk.method({
selector: "resetCurrentNoteScore",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_currentNoteScore_",[(0)]);
return self},
args: [],
source: "resetCurrentNoteScore\x0a\x09self currentNoteScore: 0",
messageSends: ["currentNoteScore:"],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_resetGame",
smalltalk.method({
selector: "resetGame",
category: 'actions',
fn: function (){
var self=this;
self["@sheetWidget"]=nil;
self["@timerWidget"]=nil;
self["@scoreWidget"]=nil;
self["@difficulty"]=nil;
return self},
args: [],
source: "resetGame\x0a\x09sheetWidget := nil.\x0a    timerWidget := nil.\x0a    scoreWidget := nil.\x0a    difficulty := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_scoreWidget",
smalltalk.method({
selector: "scoreWidget",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@scoreWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@scoreWidget"]=smalltalk.send((smalltalk.ScoreWidget || ScoreWidget),"_new",[]);
$1=self["@scoreWidget"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "scoreWidget\x0a\x09^ scoreWidget ifNil: [ scoreWidget := ScoreWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["ScoreWidget"]
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
return [smalltalk.symbolFor("difficultySelection"), smalltalk.symbolFor("speedSelection"), smalltalk.symbolFor("timeSelection"), smalltalk.symbolFor("keySelection"), smalltalk.symbolFor("game"), smalltalk.symbolFor("end")];
},
args: [],
source: "stageNames\x0a\x09^ #(#difficultySelection #speedSelection #timeSelection #keySelection #game #end).",
messageSends: [],
referencedClasses: []
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_timerWidget",
smalltalk.method({
selector: "timerWidget",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@timerWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@timerWidget"]=smalltalk.send(smalltalk.send((smalltalk.TimerWidget || TimerWidget),"_new",[]),"_game_",[self]);
$1=self["@timerWidget"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "timerWidget\x0a\x09^ timerWidget ifNil: [ timerWidget := TimerWidget new game: self ]",
messageSends: ["ifNil:", "game:", "new"],
referencedClasses: ["TimerWidget"]
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
"_wrongAnswerAction",
smalltalk.method({
selector: "wrongAnswerAction",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_playErrorSound",[]);
smalltalk.send(smalltalk.send(self,"_faceWidget",[]),"_beSad",[]);
smalltalk.send(smalltalk.send(self,"_bubbleWidget",[]),"_beSad",[]);
smalltalk.send(self["@errorAudio"],"_contents_",[(function(html){
return smalltalk.send(self,"_renderErrorAudioOn_",[html]);
})]);
smalltalk.send(self,"_failedFlag_",[(0)]);
return self},
args: [],
source: "wrongAnswerAction\x0a\x09self playErrorSound.\x0a    self faceWidget beSad.\x0a    self bubbleWidget beSad.\x0a    errorAudio contents: [ :html | self renderErrorAudioOn: html ].\x0a    self failedFlag: 0",
messageSends: ["playErrorSound", "beSad", "faceWidget", "bubbleWidget", "contents:", "renderErrorAudioOn:", "failedFlag:"],
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
"_extraSlashesString",
smalltalk.method({
selector: "extraSlashesString",
category: 'accessing - rendering',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(smalltalk.send(self,"_position",[]),"__gt",[(13)]);
if(smalltalk.assert($2)){
$1="-extra";
} else {
$1="";
};
return $1;
},
args: [],
source: "extraSlashesString\x0a    ^ self position > 13\x0a    \x09ifTrue: [ '-extra' ]\x0a        ifFalse: [ '' ]",
messageSends: ["ifTrue:ifFalse:", ">", "position"],
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
$1=smalltalk.send(smalltalk.send(smalltalk.send("images/note","__comma",[smalltalk.send(self,"_slashedOrReversedString",[])]),"__comma",[smalltalk.send(self,"_extraSlashesString",[])]),"__comma",[".svg"]);
return $1;
},
args: [],
source: "imagePath\x0a\x09^ 'images/note' , self slashedOrReversedString , self extraSlashesString , '.svg'",
messageSends: [",", "extraSlashesString", "slashedOrReversedString"],
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
fn: function (){
var self=this;
var $1,$2,$3;
var string;
string="";
$1=smalltalk.send([(1), (13), (15)],"_includes_",[smalltalk.send(self,"_position",[])]);
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
source: "slashedOrReversedString\x0a\x09| string |\x0a    string := ''.\x0a\x09\x0a    (#(1 13 15) includes: self position)\x0a    \x09ifTrue: [ string := '-slashed' ].\x0a    \x0a    self position > 7 \x0a    \x09ifTrue: [ string := string , '-reversed' ].\x0a\x0a\x09^ string",
messageSends: ["ifTrue:", "includes:", "position", ",", ">"],
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
fn: function (){
var self=this;
return [smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E")];
},
args: [],
source: "fKeyNotes\x0a\x09^ #(#E #F #G #A #B #C #D #E #F #G #A #B #C #D #E)",
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
return [(1), (1), (1), (1), (1), (2), (2), (2), (2), (2), (2), (2), (3), (3), (3)];
},
args: [],
source: "fKeyOctaves\x0a\x09^ #(1 1 1 1 1 2 2 2 2 2 2 2 3 3 3)",
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
return [smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C")];
},
args: [],
source: "gKeyNotes\x0a\x09^ #(#C #D #E #F #G #A #B #C #D #E #F #G #A #B #C)",
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
return [(3), (3), (3), (3), (3), (3), (3), (4), (4), (4), (4), (4), (4), (4), (5)];
},
args: [],
source: "gKeyOctaves\x0a\x09^ #(3 3 3 3 3 3 3 4 4 4 4 4 4 4 5)",
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



smalltalk.addClass('ScoreWidget', smalltalk.Widget, ['globalScore', 'span'], 'Rescorer');
smalltalk.addMethod(
"_addScore_",
smalltalk.method({
selector: "addScore:",
category: 'actions',
fn: function (anInteger){
var self=this;
smalltalk.send(self,"_globalScore_",[smalltalk.send(smalltalk.send(self,"_globalScore",[]),"__plus",[anInteger])]);
smalltalk.send(self,"_updateSpan",[]);
return self},
args: ["anInteger"],
source: "addScore: anInteger\x0a\x09self globalScore: self globalScore + anInteger.\x0a    self updateSpan",
messageSends: ["globalScore:", "+", "globalScore", "updateSpan"],
referencedClasses: []
}),
smalltalk.ScoreWidget);

smalltalk.addMethod(
"_globalScore",
smalltalk.method({
selector: "globalScore",
category: 'rendering',
fn: function (){
var self=this;
var $2,$1;
$2=self["@globalScore"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@globalScore"]=(0);
$1=self["@globalScore"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "globalScore\x0a\x09^ globalScore ifNil: [ globalScore := 0 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ScoreWidget);

smalltalk.addMethod(
"_globalScore_",
smalltalk.method({
selector: "globalScore:",
category: 'rendering',
fn: function (anInteger){
var self=this;
self["@globalScore"]=anInteger;
return self},
args: ["anInteger"],
source: "globalScore: anInteger\x0a\x09globalScore := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScoreWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
self["@span"]=smalltalk.send(smalltalk.send(html,"_span",[]),"_class_",["score"]);
smalltalk.send(self,"_updateSpan",[]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09span := \x0a    \x09html span \x0a    \x09\x09class: 'score'.\x0a\x09self updateSpan.",
messageSends: ["class:", "span", "updateSpan"],
referencedClasses: []
}),
smalltalk.ScoreWidget);

smalltalk.addMethod(
"_updateSpan",
smalltalk.method({
selector: "updateSpan",
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self["@span"],"_contents_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_globalScore",[]),"_asString",[]),"__comma",[" punts"])]);
return self},
args: [],
source: "updateSpan\x0a\x09span contents: self globalScore asString , ' punts'",
messageSends: ["contents:", ",", "asString", "globalScore"],
referencedClasses: []
}),
smalltalk.ScoreWidget);



smalltalk.addClass('SheetWidget', smalltalk.Widget, ['lines', 'keyImg', 'sheetDiv', 'keyName', 'difficulty', 'noteDiv', 'currentNote', 'game', 'notePositions'], 'Rescorer');
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
fn: function (){
var self=this;
var $1,$2;
var positions;
positions=smalltalk.send(smalltalk.send(self,"_notePositions",[]),"_copy",[]);
$1=self["@currentNote"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(positions,"_remove_",[smalltalk.send(self["@currentNote"],"_position",[])]);
};
self["@currentNote"]=smalltalk.send((smalltalk.Note || Note),"_position_key_",[smalltalk.send(positions,"_atRandom",[]),smalltalk.send(self,"_keyName",[])]);
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
source: "nextNote\x0a\x09| positions |\x0a    positions := self notePositions copy.\x0a    currentNote ifNotNil: [ positions remove: currentNote position ].\x0a\x09currentNote := Note position: positions atRandom key: self keyName.\x0a\x09noteDiv ifNotNil: [ noteDiv contents: [ :html | self renderNoteOn: html ]]",
messageSends: ["copy", "notePositions", "ifNotNil:", "remove:", "position", "position:key:", "atRandom", "keyName", "contents:", "renderNoteOn:"],
referencedClasses: ["Note"]
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_notePositions",
smalltalk.method({
selector: "notePositions",
category: 'actions',
fn: function (){
var self=this;
var $2,$3,$4,$1;
$2=self["@notePositions"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=smalltalk.send((smalltalk.Dictionary || Dictionary),"_new",[]);
smalltalk.send($3,"_at_put_",[(1),smalltalk.send((1),"_to_",[(8)])]);
smalltalk.send($3,"_at_put_",[(2),smalltalk.send((1),"_to_",[(13)])]);
smalltalk.send($3,"_at_put_",[(3),smalltalk.send((1),"_to_",[(13)])]);
smalltalk.send($3,"_at_put_",[(4),smalltalk.send((1),"_to_",[(15)])]);
$4=smalltalk.send($3,"_yourself",[]);
self["@notePositions"]=smalltalk.send($4,"_at_",[smalltalk.send(smalltalk.send(self,"_game",[]),"_difficulty",[])]);
$1=self["@notePositions"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "notePositions\x0a   ^ notePositions \x0a    \x09ifNil: [ notePositions := \x0a    \x09\x09(Dictionary new \x0a            \x09at: 1 put: (1 to: 8);\x0a                at: 2 put: (1 to: 13);\x0a                at: 3 put: (1 to: 13);\x0a                at: 4 put: (1 to: 15);\x0a\x09\x09\x09\x09yourself) at: self game difficulty ]",
messageSends: ["ifNil:", "at:", "difficulty", "game", "at:put:", "to:", "new", "yourself"],
referencedClasses: ["Dictionary"]
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
fn: function (html){
var self=this;
var $1,$3,$5,$7,$9,$8,$6,$4,$2;
$1=smalltalk.send((1),"_to_",[(7)]);
$2=(function(index){
$3=smalltalk.send(html,"_hr",[]);
smalltalk.send($3,"_class_",[smalltalk.send("line i","__comma",[smalltalk.send(index,"_asString",[])])]);
$5=$3;
$7=smalltalk.send(smalltalk.send("bottom: ","__comma",[smalltalk.send(smalltalk.send(index,"__star",[(12.5)]),"_asString",[])]),"__comma",["%;"]);
$9=smalltalk.send(smalltalk.send(index,"__eq",[(4)]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(self,"_game",[]),"_difficulty",[]),"__eq",[(2)]);
})]);
if(smalltalk.assert($9)){
$8="background-color: red;";
} else {
$8="";
};
$6=smalltalk.send($7,"__comma",[$8]);
$4=smalltalk.send($5,"_style_",[$6]);
return $4;
});
self["@lines"]=smalltalk.send($1,"_collect_",[$2]);
return self},
args: ["html"],
source: "renderLinesOn: html\x0a\x09lines := (1 to: 7) collect: [ :index | \x0a    \x09html hr \x0a        \x09class: 'line i' , index asString;\x0a        \x09style: 'bottom: ' , (index * 12.5) asString , '%;' , ((index = 4 and: [ self game difficulty = 2 ]) ifTrue: [ 'background-color: red;' ] ifFalse: [ '' ]) ]",
messageSends: ["collect:", "class:", ",", "asString", "hr", "style:", "ifTrue:ifFalse:", "and:", "=", "difficulty", "game", "*", "to:"],
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
fn: function (html){
var self=this;
var $1,$2;
self["@sheetDiv"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_class_",["sheet"]);
smalltalk.send(self["@sheetDiv"],"_with_",[(function(){
$1=self;
smalltalk.send($1,"_renderLinesOn_",[html]);
$2=smalltalk.send($1,"_renderKeyOn_",[html]);
$2;
self["@noteDiv"]=smalltalk.send(smalltalk.send(html,"_div",[]),"_with_",[(function(){
return smalltalk.send(self,"_renderNoteOn_",[html]);
})]);
return self["@noteDiv"];
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a    sheetDiv := html div class: 'sheet'.\x0a\x09sheetDiv\x0a\x09\x09with: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09renderLinesOn: html;\x0a                renderKeyOn: html.\x0a\x09noteDiv := html div with: [ self renderNoteOn: html ]]",
messageSends: ["class:", "div", "with:", "renderLinesOn:", "renderKeyOn:", "renderNoteOn:"],
referencedClasses: []
}),
smalltalk.SheetWidget);



smalltalk.addClass('TimerWidget', smalltalk.Widget, ['secondsPerNote', 'currentSecondsPerNote', 'globalSeconds', 'remainingGlobalSeconds', 'currentSecondsPerNoteSpan', 'remainingGlobalSecondsSpan', 'isRunning', 'game'], 'Rescorer');
smalltalk.addMethod(
"_currentSecondsPerNote",
smalltalk.method({
selector: "currentSecondsPerNote",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentSecondsPerNote"];
return $1;
},
args: [],
source: "currentSecondsPerNote\x0a\x09^ currentSecondsPerNote",
messageSends: [],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_currentSecondsPerNote_",
smalltalk.method({
selector: "currentSecondsPerNote:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@currentSecondsPerNote"]=anInteger;
return self},
args: ["anInteger"],
source: "currentSecondsPerNote: anInteger\x0a      currentSecondsPerNote := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.TimerWidget);

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
smalltalk.TimerWidget);

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
smalltalk.TimerWidget);

smalltalk.addMethod(
"_globalSeconds",
smalltalk.method({
selector: "globalSeconds",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@globalSeconds"];
return $1;
},
args: [],
source: "globalSeconds\x0a      ^ globalSeconds",
messageSends: [],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_globalSeconds_",
smalltalk.method({
selector: "globalSeconds:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@globalSeconds"]=anInteger;
smalltalk.send(self,"_remainingGlobalSeconds_",[anInteger]);
return self},
args: ["anInteger"],
source: "globalSeconds: anInteger\x0a      globalSeconds := anInteger.\x0a      self remainingGlobalSeconds: anInteger",
messageSends: ["remainingGlobalSeconds:"],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_isRunning",
smalltalk.method({
selector: "isRunning",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@isRunning"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@isRunning"]=true;
$1=self["@isRunning"];
} else {
$1=$2;
};
return $1;
},
args: [],
source: "isRunning\x0a\x09^ isRunning ifNil: [ isRunning := true ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_ranOutOfGlobalTime",
smalltalk.method({
selector: "ranOutOfGlobalTime",
category: 'actions',
fn: function (){
var self=this;
self["@isRunning"]=false;
smalltalk.send(smalltalk.send(self,"_game",[]),"_end",[]);
return self},
args: [],
source: "ranOutOfGlobalTime\x0a\x09isRunning := false.\x0a    self game end.",
messageSends: ["end", "game"],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_remainingGlobalSeconds",
smalltalk.method({
selector: "remainingGlobalSeconds",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@remainingGlobalSeconds"];
return $1;
},
args: [],
source: "remainingGlobalSeconds\x0a\x09^ remainingGlobalSeconds",
messageSends: [],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_remainingGlobalSeconds_",
smalltalk.method({
selector: "remainingGlobalSeconds:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@remainingGlobalSeconds"]=anInteger;
return self},
args: ["anInteger"],
source: "remainingGlobalSeconds: anInteger\x0a\x09remainingGlobalSeconds := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
self["@currentSecondsPerNoteSpan"]=smalltalk.send(smalltalk.send(html,"_span",[]),"_class_",["remaining-note-seconds"]);
self["@remainingGlobalSecondsSpan"]=smalltalk.send(smalltalk.send(html,"_span",[]),"_class_",["remaining-global-seconds"]);
smalltalk.send(self,"_updateLoop",[]);
return self},
args: ["html"],
source: "renderOn: html\x0a    currentSecondsPerNoteSpan := html span\x0a    \x09class: 'remaining-note-seconds'.\x0a\x09remainingGlobalSecondsSpan := html span\x0a    \x09class: 'remaining-global-seconds'.\x0a\x09self updateLoop.",
messageSends: ["class:", "span", "updateLoop"],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_reset",
smalltalk.method({
selector: "reset",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_currentSecondsPerNote_",[smalltalk.send(self,"_secondsPerNote",[])]);
return self},
args: [],
source: "reset\x0a\x09self currentSecondsPerNote: self secondsPerNote",
messageSends: ["currentSecondsPerNote:", "secondsPerNote"],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_secondsPerNote",
smalltalk.method({
selector: "secondsPerNote",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@secondsPerNote"];
return $1;
},
args: [],
source: "secondsPerNote\x0a\x09^ secondsPerNote",
messageSends: [],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_secondsPerNote_",
smalltalk.method({
selector: "secondsPerNote:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@secondsPerNote"]=anInteger;
smalltalk.send(self,"_currentSecondsPerNote_",[anInteger]);
return self},
args: ["anInteger"],
source: "secondsPerNote: anInteger\x0a      secondsPerNote := anInteger.\x0a      self currentSecondsPerNote: anInteger",
messageSends: ["currentSecondsPerNote:"],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_updateLoop",
smalltalk.method({
selector: "updateLoop",
category: 'updating',
fn: function (){
var self=this;
var $1,$4,$5,$6,$7,$3,$2;
$1=smalltalk.send(self,"_isRunning",[]);
$2=(function(){
$3=(function(){
$4=smalltalk.send(smalltalk.send(self,"_currentSecondsPerNote",[]),"__lt_eq",[(0)]);
if(! smalltalk.assert($4)){
smalltalk.send(self,"_currentSecondsPerNote_",[smalltalk.send(smalltalk.send(self,"_currentSecondsPerNote",[]),"__minus",[(1)])]);
};
$5=smalltalk.send(smalltalk.send(self,"_remainingGlobalSeconds",[]),"__lt_eq",[(0)]);
if(smalltalk.assert($5)){
smalltalk.send(self,"_ranOutOfGlobalTime",[]);
} else {
smalltalk.send(self,"_remainingGlobalSeconds_",[smalltalk.send(smalltalk.send(self,"_remainingGlobalSeconds",[]),"__minus",[(1)])]);
};
$6=self;
smalltalk.send($6,"_updateSpans",[]);
$7=smalltalk.send($6,"_updateLoop",[]);
return $7;
});
return smalltalk.send($3,"_valueWithTimeout_",[(1000)]);
});
smalltalk.send($1,"_ifTrue_",[$2]);
return self},
args: [],
source: "updateLoop\x0a\x09self isRunning \x0a    \x09ifTrue: [\x0a\x09\x09\x09[ self currentSecondsPerNote <= 0 \x0a        \x09\x09ifFalse: [ self currentSecondsPerNote: self currentSecondsPerNote - 1 ].\x0a            self remainingGlobalSeconds <= 0\x0a            \x09ifFalse: [ self remainingGlobalSeconds: self remainingGlobalSeconds - 1 ]\x0a              \x09ifTrue: [ self ranOutOfGlobalTime ].\x0a    \x09\x09self\x0a    \x09\x09\x09updateSpans;\x0a\x09\x09\x09\x09updateLoop ]\x0a    \x09\x09\x09\x09valueWithTimeout: 1000 ]",
messageSends: ["ifTrue:", "valueWithTimeout:", "ifFalse:", "currentSecondsPerNote:", "-", "currentSecondsPerNote", "<=", "ifFalse:ifTrue:", "remainingGlobalSeconds:", "remainingGlobalSeconds", "ranOutOfGlobalTime", "updateSpans", "updateLoop", "isRunning"],
referencedClasses: []
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_updateSpans",
smalltalk.method({
selector: "updateSpans",
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self["@currentSecondsPerNoteSpan"],"_contents_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_currentSecondsPerNote",[]),"_asString",[]),"__comma",[" segons restants"])]);
smalltalk.send(self["@remainingGlobalSecondsSpan"],"_contents_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_remainingGlobalSeconds",[]),"_asString",[]),"__comma",[" / "]),"__comma",[smalltalk.send(self,"_globalSeconds",[])])]);
return self},
args: [],
source: "updateSpans\x0a\x09currentSecondsPerNoteSpan contents: self currentSecondsPerNote asString, ' segons restants'.\x0a    remainingGlobalSecondsSpan contents: self remainingGlobalSeconds asString , ' / ' , self globalSeconds",
messageSends: ["contents:", ",", "asString", "currentSecondsPerNote", "globalSeconds", "remainingGlobalSeconds"],
referencedClasses: []
}),
smalltalk.TimerWidget);



