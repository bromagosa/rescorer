smalltalk.addPackage('Rescorer', {});
smalltalk.addClass('BubbleWidget', smalltalk.Widget, ['bubbleSpan', 'happyTexts', 'sadTexts'], 'Rescorer');
smalltalk.addMethod(
"_beHappy",
smalltalk.method({
selector: "beHappy",
fn: function (){
var self=this;
smalltalk.send(self,"_text_",[smalltalk.send(smalltalk.send(self,"_happyTexts",[]),"_atRandom",[])]);
return self}
}),
smalltalk.BubbleWidget);

smalltalk.addMethod(
"_beSad",
smalltalk.method({
selector: "beSad",
fn: function (){
var self=this;
smalltalk.send(self,"_text_",[smalltalk.send(smalltalk.send(self,"_sadTexts",[]),"_atRandom",[])]);
return self}
}),
smalltalk.BubbleWidget);

smalltalk.addMethod(
"_happyTexts",
smalltalk.method({
selector: "happyTexts",
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
}
}),
smalltalk.BubbleWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}
}),
smalltalk.BubbleWidget);

smalltalk.addMethod(
"_sadTexts",
smalltalk.method({
selector: "sadTexts",
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
}
}),
smalltalk.BubbleWidget);

smalltalk.addMethod(
"_text_",
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
smalltalk.send(self["@bubbleSpan"],"_contents_",[aString]);
return self}
}),
smalltalk.BubbleWidget);



smalltalk.addClass('FaceWidget', smalltalk.Widget, ['mood', 'faceImg'], 'Rescorer');
smalltalk.addMethod(
"_beHappy",
smalltalk.method({
selector: "beHappy",
fn: function (){
var self=this;
smalltalk.send(self,"_mood_",[smalltalk.symbolFor("happy")]);
smalltalk.send(self,"_updateFace",[]);
return self}
}),
smalltalk.FaceWidget);

smalltalk.addMethod(
"_beSad",
smalltalk.method({
selector: "beSad",
fn: function (){
var self=this;
smalltalk.send(self,"_mood_",[smalltalk.symbolFor("sad")]);
smalltalk.send(self,"_updateFace",[]);
return self}
}),
smalltalk.FaceWidget);

smalltalk.addMethod(
"_mood",
smalltalk.method({
selector: "mood",
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
}
}),
smalltalk.FaceWidget);

smalltalk.addMethod(
"_mood_",
smalltalk.method({
selector: "mood:",
fn: function (aString){
var self=this;
self["@mood"]=aString;
return self}
}),
smalltalk.FaceWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_img",[]);
smalltalk.send($1,"_class_",["image face"]);
$2=smalltalk.send($1,"_src_",[smalltalk.send(smalltalk.send(smalltalk.send("images/face-","__comma",[smalltalk.send(smalltalk.send(self,"_mood",[]),"_asString",[])]),"__comma",[smalltalk.send(smalltalk.send([(1), (2), (3), (4)],"_atRandom",[]),"_asString",[])]),"__comma",[".png"])]);
self["@faceImg"]=$2;
return self}
}),
smalltalk.FaceWidget);

smalltalk.addMethod(
"_updateFace",
smalltalk.method({
selector: "updateFace",
fn: function (){
var self=this;
smalltalk.send(self["@faceImg"],"_src_",[smalltalk.send(smalltalk.send(smalltalk.send("images/face-","__comma",[smalltalk.send(smalltalk.send(self,"_mood",[]),"_asString",[])]),"__comma",[smalltalk.send(smalltalk.send([(1), (2), (3), (4)],"_atRandom",[]),"_asString",[])]),"__comma",[".png"])]);
return self}
}),
smalltalk.FaceWidget);



smalltalk.addClass('GameWidget', smalltalk.Widget, ['wrapper', 'currentStage', 'sheetWidget', 'bubbleWidget', 'noteButtonsWidget', 'faceWidget', 'timerWidget', 'scoreWidget', 'errorAudio', 'difficulty', 'failedFlag'], 'Rescorer');
smalltalk.addMethod(
"_bubbleWidget",
smalltalk.method({
selector: "bubbleWidget",
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
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_checkNote_",
smalltalk.method({
selector: "checkNote:",
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
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_correctAnswerAction",
smalltalk.method({
selector: "correctAnswerAction",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_currentNote",[]),"_play",[]);
smalltalk.send(smalltalk.send(self,"_faceWidget",[]),"_beHappy",[]);
smalltalk.send(smalltalk.send(self,"_bubbleWidget",[]),"_beHappy",[]);
smalltalk.send(smalltalk.send(self,"_sheetWidget",[]),"_nextNote",[]);
smalltalk.send(smalltalk.send(self,"_timerWidget",[]),"_reset",[]);
smalltalk.send(smalltalk.send(self,"_scoreWidget",[]),"_addScore_",[smalltalk.send(self,"_currentNoteScore",[])]);
smalltalk.send(self,"_failedFlag_",[(1)]);
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_currentNoteScore",
smalltalk.method({
selector: "currentNoteScore",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_timerWidget",[]),"_currentSecondsPerNote",[]),"__star",[smalltalk.send(self,"_difficulty",[])]),"__star",[smalltalk.send(self,"_failedFlag",[])]);
return $1;
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_currentStage",
smalltalk.method({
selector: "currentStage",
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
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_difficulty",
smalltalk.method({
selector: "difficulty",
fn: function (){
var self=this;
var $1;
$1=self["@difficulty"];
return $1;
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_difficulty_",
smalltalk.method({
selector: "difficulty:",
fn: function (anInteger){
var self=this;
self["@difficulty"]=anInteger;
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_end",
smalltalk.method({
selector: "end",
fn: function (){
var self=this;
smalltalk.send(self,"_nextStage",[]);
smalltalk.send(smalltalk.send(self,"_faceWidget",[]),"_beHappy",[]);
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_faceWidget",
smalltalk.method({
selector: "faceWidget",
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
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_failedFlag",
smalltalk.method({
selector: "failedFlag",
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
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_failedFlag_",
smalltalk.method({
selector: "failedFlag:",
fn: function (anInteger){
var self=this;
self["@failedFlag"]=anInteger;
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_globalScore",
smalltalk.method({
selector: "globalScore",
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
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_globalScore_",
smalltalk.method({
selector: "globalScore:",
fn: function (anInteger){
var self=this;
self["@globalScore"]=anInteger;
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_isNoteCorrect_",
smalltalk.method({
selector: "isNoteCorrect:",
fn: function (aNoteSymbol) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_sheetWidget", []), "_currentNote", []), "_symbol", []), "__eq", [aNoteSymbol]);
    return $1;
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_nextStage",
smalltalk.method({
selector: "nextStage",
fn: function (){
var self=this;
self["@currentStage"]=smalltalk.send(smalltalk.send(self,"_stageNames",[]),"_at_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_stageNames",[]),"_indexOf_",[smalltalk.send(self,"_currentStage",[])]),"_\\\\",[smalltalk.send(smalltalk.send(self,"_stageNames",[]),"_size",[])]),"__plus",[(1)])]);
smalltalk.send(self,"_update",[]);
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_noteButtonsWidget",
smalltalk.method({
selector: "noteButtonsWidget",
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
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_playErrorSound",
smalltalk.method({
selector: "playErrorSound",
fn: function () {
    var self = this;
    $("audio.error")[0].play();
    return self;
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderAudioElementsOn_",
smalltalk.method({
selector: "renderAudioElementsOn:",
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
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
var $1,$2;
$1=html;
smalltalk.send($1,"_with_",[smalltalk.send(self,"_faceWidget",[])]);
$2=smalltalk.send($1,"_with_",[smalltalk.send(self,"_bubbleWidget",[])]);
smalltalk.send(self,"_renderCurrentStageOn_",[html]);
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderCurrentStageOn_",
smalltalk.method({
selector: "renderCurrentStageOn:",
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
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderDifficultySelectionStageOn_",
smalltalk.method({
selector: "renderDifficultySelectionStageOn:",
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
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderEndStageOn_",
smalltalk.method({
selector: "renderEndStageOn:",
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
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderErrorAudioOn_",
smalltalk.method({
selector: "renderErrorAudioOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_audio", []);
    smalltalk.send($1, "_class_", ["error"]);
    $2 = smalltalk.send($1, "_src_", ["sounds/error.ogg"]);
    return self;
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderGameStageOn_",
smalltalk.method({
selector: "renderGameStageOn:",
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
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderGameTimeSelectionStageOn_",
smalltalk.method({
selector: "renderGameTimeSelectionStageOn:",
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
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderKeySelectionStageOn_",
smalltalk.method({
selector: "renderKeySelectionStageOn:",
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
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var $1,$3,$5,$6,$4,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["wrapper"]);
$2=smalltalk.send($1,"_with_",[(function(){
$3=smalltalk.send(html,"_div",[]);
smalltalk.send($3,"_class_",["v-wrapper"]);
$4=smalltalk.send($3,"_with_",[(function(){
$5=smalltalk.send(html,"_div",[]);
smalltalk.send($5,"_class_",["content"]);
$6=smalltalk.send($5,"_with_",[(function(){
return smalltalk.send(self,"_renderContentOn_",[html]);
})]);
self["@wrapper"]=$6;
return self["@wrapper"];
})]);
return $4;
})]);
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_renderSpeedSelectionStageOn_",
smalltalk.method({
selector: "renderSpeedSelectionStageOn:",
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
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_resetCurrentNoteScore",
smalltalk.method({
selector: "resetCurrentNoteScore",
fn: function (){
var self=this;
smalltalk.send(self,"_currentNoteScore_",[(0)]);
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_resetGame",
smalltalk.method({
selector: "resetGame",
fn: function (){
var self=this;
self["@sheetWidget"]=nil;
self["@timerWidget"]=nil;
self["@scoreWidget"]=nil;
self["@difficulty"]=nil;
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_scoreWidget",
smalltalk.method({
selector: "scoreWidget",
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
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_sheetWidget",
smalltalk.method({
selector: "sheetWidget",
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
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_stageNames",
smalltalk.method({
selector: "stageNames",
fn: function (){
var self=this;
return [smalltalk.symbolFor("difficultySelection"), smalltalk.symbolFor("speedSelection"), smalltalk.symbolFor("timeSelection"), smalltalk.symbolFor("keySelection"), smalltalk.symbolFor("game"), smalltalk.symbolFor("end")];
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_timerWidget",
smalltalk.method({
selector: "timerWidget",
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
}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
smalltalk.send(self["@wrapper"],"_contents_",[(function(html){
return smalltalk.send(self,"_renderContentOn_",[html]);
})]);
return self}
}),
smalltalk.GameWidget);

smalltalk.addMethod(
"_wrongAnswerAction",
smalltalk.method({
selector: "wrongAnswerAction",
fn: function (){
var self=this;
smalltalk.send(self,"_playErrorSound",[]);
smalltalk.send(smalltalk.send(self,"_faceWidget",[]),"_beSad",[]);
smalltalk.send(smalltalk.send(self,"_bubbleWidget",[]),"_beSad",[]);
smalltalk.send(self["@errorAudio"],"_contents_",[(function(html){
return smalltalk.send(self,"_renderErrorAudioOn_",[html]);
})]);
smalltalk.send(self,"_failedFlag_",[(0)]);
return self}
}),
smalltalk.GameWidget);



smalltalk.addClass('Note', smalltalk.Object, ['position', 'symbol', 'octave'], 'Rescorer');
smalltalk.addMethod(
"_bottom",
smalltalk.method({
selector: "bottom",
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
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send("note i", "__comma", [smalltalk.send(smalltalk.send(self, "_position", []), "_asString", [])]);
    return $1;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_cssStyle",
smalltalk.method({
selector: "cssStyle",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send("bottom: ", "__comma", [smalltalk.send(smalltalk.send(self, "_bottom", []), "_asString", [])]), "__comma", ["%;"]);
    return $1;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_extraSlashesString",
smalltalk.method({
selector: "extraSlashesString",
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
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_imagePath",
smalltalk.method({
selector: "imagePath",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("images/note","__comma",[smalltalk.send(self,"_slashedOrReversedString",[])]),"__comma",[smalltalk.send(self,"_extraSlashesString",[])]),"__comma",["-"]),"__comma",[smalltalk.send(smalltalk.send((3),"_atRandom",[]),"_asString",[])]),"__comma",[".svg"]);
return $1;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_octave",
smalltalk.method({
selector: "octave",
fn: function () {
    var self = this;
    var $1;
    $1 = self['@octave'];
    return $1;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_octave_",
smalltalk.method({
selector: "octave:",
fn: function (aNumber) {
    var self = this;
    self['@octave'] = aNumber;
    return self;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_play",
smalltalk.method({
selector: "play",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_class", []), "_playNote_octave_", [smalltalk.send(smalltalk.send(self, "_symbol", []), "_asString", []), smalltalk.send(smalltalk.send(self, "_octave", []), "_asString", [])]);
    return self;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
fn: function () {
    var self = this;
    var $1;
    $1 = self['@position'];
    return $1;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
fn: function (aNumber) {
    var self = this;
    self['@position'] = aNumber;
    return self;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_slashedOrReversedString",
smalltalk.method({
selector: "slashedOrReversedString",
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
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_symbol",
smalltalk.method({
selector: "symbol",
fn: function () {
    var self = this;
    var $1;
    $1 = self['@symbol'];
    return $1;
}
}),
smalltalk.Note);

smalltalk.addMethod(
"_symbol_",
smalltalk.method({
selector: "symbol:",
fn: function (aString) {
    var self = this;
    self['@symbol'] = aString;
    return self;
}
}),
smalltalk.Note);


smalltalk.Note.klass.iVarNames = ['noteDictionary','octaveDictionary'];
smalltalk.addMethod(
"_fKeyNotes",
smalltalk.method({
selector: "fKeyNotes",
fn: function (){
var self=this;
return [smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E")];
}
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_fKeyOctaves",
smalltalk.method({
selector: "fKeyOctaves",
fn: function (){
var self=this;
return [(1), (1), (1), (1), (1), (2), (2), (2), (2), (2), (2), (2), (3), (3), (3)];
}
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_gKeyNotes",
smalltalk.method({
selector: "gKeyNotes",
fn: function (){
var self=this;
return [smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C"), smalltalk.symbolFor("D"), smalltalk.symbolFor("E"), smalltalk.symbolFor("F"), smalltalk.symbolFor("G"), smalltalk.symbolFor("A"), smalltalk.symbolFor("B"), smalltalk.symbolFor("C")];
}
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_gKeyOctaves",
smalltalk.method({
selector: "gKeyOctaves",
fn: function (){
var self=this;
return [(3), (3), (3), (3), (3), (3), (3), (4), (4), (4), (4), (4), (4), (4), (5)];
}
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_noteDictionary",
smalltalk.method({
selector: "noteDictionary",
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
}
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_octaveDictionary",
smalltalk.method({
selector: "octaveDictionary",
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
}
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_playNote_octave_",
smalltalk.method({
selector: "playNote:octave:",
fn: function (aNote, anOctave) {
    var self = this;
    $("audio.note." + aNote + anOctave)[0].src = "sounds/" + aNote + anOctave + ".ogg";
    $("audio.note." + aNote + anOctave)[0].play();
    return self;
}
}),
smalltalk.Note.klass);

smalltalk.addMethod(
"_position_key_",
smalltalk.method({
selector: "position:key:",
fn: function (aNumber, aKeySymbol) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_symbol_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_noteDictionary", []), "_at_", [aKeySymbol]), "_at_", [aNumber])]);
    smalltalk.send($2, "_position_", [aNumber]);
    $3 = smalltalk.send($2, "_octave_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_octaveDictionary", []), "_at_", [aKeySymbol]), "_at_", [aNumber])]);
    $1 = $3;
    return $1;
}
}),
smalltalk.Note.klass);


smalltalk.addClass('NoteButtonsWidget', smalltalk.Widget, ['noteNamesDictionary', 'keysDictionary', 'game'], 'Rescorer');
smalltalk.addMethod(
"_bindKeyDownActions",
smalltalk.method({
selector: "bindKeyDownActions",
fn: function () {
    var self = this;
    var $1, $3, $2;
    $1 = smalltalk.send(window, "_asJQuery", []);
    $2 = function (event) {$3 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_keysDictionary", []), "_keys", []), "_includes_", [smalltalk.send(event, "_keyCode", [])]);if (smalltalk.assert($3)) {return smalltalk.send(smalltalk.send(self, "_game", []), "_checkNote_", [smalltalk.send(smalltalk.send(self, "_keysDictionary", []), "_at_", [smalltalk.send(event, "_keyCode", [])])]);}};
    smalltalk.send($1, "_keydown_", [$2]);
    return self;
}
}),
smalltalk.NoteButtonsWidget);

smalltalk.addMethod(
"_game",
smalltalk.method({
selector: "game",
fn: function () {
    var self = this;
    var $1;
    $1 = self['@game'];
    return $1;
}
}),
smalltalk.NoteButtonsWidget);

smalltalk.addMethod(
"_game_",
smalltalk.method({
selector: "game:",
fn: function (aGameWidget) {
    var self = this;
    self['@game'] = aGameWidget;
    return self;
}
}),
smalltalk.NoteButtonsWidget);

smalltalk.addMethod(
"_keysDictionary",
smalltalk.method({
selector: "keysDictionary",
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
}
}),
smalltalk.NoteButtonsWidget);

smalltalk.addMethod(
"_noteNamesDictionary",
smalltalk.method({
selector: "noteNamesDictionary",
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
}
}),
smalltalk.NoteButtonsWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    smalltalk.send(self, "_bindKeyDownActions", []);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_noteNamesDictionary", []), "_associations", []), "_do_", [function (each) {$1 = smalltalk.send(html, "_button", []);smalltalk.send($1, "_with_", [smalltalk.send(each, "_key", [])]);$2 = smalltalk.send($1, "_onClick_", [function () {return smalltalk.send(smalltalk.send(self, "_game", []), "_checkNote_", [smalltalk.send(each, "_value", [])]);}]);return $2;}]);
    return self;
}
}),
smalltalk.NoteButtonsWidget);



smalltalk.addClass('OptionSelectionWidget', smalltalk.Widget, ['buttons'], 'Rescorer');
smalltalk.addMethod(
"_buttons",
smalltalk.method({
selector: "buttons",
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
}
}),
smalltalk.OptionSelectionWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
var $1,$2;
smalltalk.send(smalltalk.send(self,"_buttons",[]),"_associationsDo_",[(function(eachButton){
$1=smalltalk.send(html,"_button",[]);
smalltalk.send($1,"_with_",[smalltalk.send(eachButton,"_key",[])]);
$2=smalltalk.send($1,"_onClick_",[smalltalk.send(eachButton,"_value",[])]);
return $2;
})]);
return self}
}),
smalltalk.OptionSelectionWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["buttons-container"]);
$2=smalltalk.send($1,"_with_",[(function(){
return smalltalk.send(self,"_renderButtonsOn_",[html]);
})]);
return self}
}),
smalltalk.OptionSelectionWidget);



smalltalk.addClass('ScoreWidget', smalltalk.Widget, ['globalScore', 'span'], 'Rescorer');
smalltalk.addMethod(
"_addScore_",
smalltalk.method({
selector: "addScore:",
fn: function (anInteger){
var self=this;
smalltalk.send(self,"_globalScore_",[smalltalk.send(smalltalk.send(self,"_globalScore",[]),"__plus",[anInteger])]);
smalltalk.send(self,"_updateSpan",[]);
return self}
}),
smalltalk.ScoreWidget);

smalltalk.addMethod(
"_globalScore",
smalltalk.method({
selector: "globalScore",
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
}
}),
smalltalk.ScoreWidget);

smalltalk.addMethod(
"_globalScore_",
smalltalk.method({
selector: "globalScore:",
fn: function (anInteger){
var self=this;
self["@globalScore"]=anInteger;
return self}
}),
smalltalk.ScoreWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
self["@span"]=smalltalk.send(smalltalk.send(html,"_span",[]),"_class_",["score"]);
smalltalk.send(self,"_updateSpan",[]);
return self}
}),
smalltalk.ScoreWidget);

smalltalk.addMethod(
"_updateSpan",
smalltalk.method({
selector: "updateSpan",
fn: function (){
var self=this;
smalltalk.send(self["@span"],"_contents_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_globalScore",[]),"_asString",[]),"__comma",[" punts"])]);
return self}
}),
smalltalk.ScoreWidget);



smalltalk.addClass('SheetWidget', smalltalk.Widget, ['lines', 'keyImg', 'sheetDiv', 'keyName', 'difficulty', 'noteDiv', 'currentNote', 'game', 'notePositions'], 'Rescorer');
smalltalk.addMethod(
"_currentNote",
smalltalk.method({
selector: "currentNote",
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
}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_game",
smalltalk.method({
selector: "game",
fn: function () {
    var self = this;
    var $1;
    $1 = self['@game'];
    return $1;
}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_game_",
smalltalk.method({
selector: "game:",
fn: function (aGameWidget) {
    var self = this;
    self['@game'] = aGameWidget;
    return self;
}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_keyName",
smalltalk.method({
selector: "keyName",
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
}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_keyName_",
smalltalk.method({
selector: "keyName:",
fn: function (aSymbol){
var self=this;
self["@keyName"]=aSymbol;
return self}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_nextNote",
smalltalk.method({
selector: "nextNote",
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
return self}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_notePositions",
smalltalk.method({
selector: "notePositions",
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
}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderKeyOn_",
smalltalk.method({
selector: "renderKeyOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_img", []);
    smalltalk.send($1, "_class_", [smalltalk.send("image key ", "__comma", [smalltalk.send(smalltalk.send(self, "_keyName", []), "_asString", [])])]);
    $2 = smalltalk.send($1, "_src_", [smalltalk.send(smalltalk.send("images/", "__comma", [smalltalk.send(smalltalk.send(self, "_keyName", []), "_asString", [])]), "__comma", [".svg"])]);
    self['@keyImg'] = $2;
    return self;
}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderLinesOn_",
smalltalk.method({
selector: "renderLinesOn:",
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
return self}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderNoteOn_",
smalltalk.method({
selector: "renderNoteOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_img", []);
    smalltalk.send($1, "_class_", [smalltalk.send(smalltalk.send(self, "_currentNote", []), "_cssClass", [])]);
    smalltalk.send($1, "_src_", [smalltalk.send(smalltalk.send(self, "_currentNote", []), "_imagePath", [])]);
    $2 = smalltalk.send($1, "_style_", [smalltalk.send(smalltalk.send(self, "_currentNote", []), "_cssStyle", [])]);
    return self;
}
}),
smalltalk.SheetWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}
}),
smalltalk.SheetWidget);



smalltalk.addClass('TimerWidget', smalltalk.Widget, ['secondsPerNote', 'currentSecondsPerNote', 'globalSeconds', 'remainingGlobalSeconds', 'currentSecondsPerNoteSpan', 'remainingGlobalSecondsSpan', 'isRunning', 'game'], 'Rescorer');
smalltalk.addMethod(
"_currentSecondsPerNote",
smalltalk.method({
selector: "currentSecondsPerNote",
fn: function (){
var self=this;
var $1;
$1=self["@currentSecondsPerNote"];
return $1;
}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_currentSecondsPerNote_",
smalltalk.method({
selector: "currentSecondsPerNote:",
fn: function (anInteger){
var self=this;
self["@currentSecondsPerNote"]=anInteger;
return self}
}),
smalltalk.TimerWidget);

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
smalltalk.TimerWidget);

smalltalk.addMethod(
"_game_",
smalltalk.method({
selector: "game:",
fn: function (aGameWidget){
var self=this;
self["@game"]=aGameWidget;
return self}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_globalSeconds",
smalltalk.method({
selector: "globalSeconds",
fn: function (){
var self=this;
var $1;
$1=self["@globalSeconds"];
return $1;
}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_globalSeconds_",
smalltalk.method({
selector: "globalSeconds:",
fn: function (anInteger){
var self=this;
self["@globalSeconds"]=anInteger;
smalltalk.send(self,"_remainingGlobalSeconds_",[anInteger]);
return self}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_isRunning",
smalltalk.method({
selector: "isRunning",
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
}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_ranOutOfGlobalTime",
smalltalk.method({
selector: "ranOutOfGlobalTime",
fn: function (){
var self=this;
self["@isRunning"]=false;
smalltalk.send(smalltalk.send(self,"_game",[]),"_end",[]);
return self}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_ranOutOfNoteTime",
smalltalk.method({
selector: "ranOutOfNoteTime",
fn: function (){
var self=this;
smalltalk.send(self,"_reset",[]);
smalltalk.send(smalltalk.send(self,"_game",[]),"_wrongAnswerAction",[]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_game",[]),"_sheetWidget",[]),"_nextNote",[]);
return self}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_remainingGlobalSeconds",
smalltalk.method({
selector: "remainingGlobalSeconds",
fn: function (){
var self=this;
var $1;
$1=self["@remainingGlobalSeconds"];
return $1;
}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_remainingGlobalSeconds_",
smalltalk.method({
selector: "remainingGlobalSeconds:",
fn: function (anInteger){
var self=this;
self["@remainingGlobalSeconds"]=anInteger;
return self}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
self["@currentSecondsPerNoteSpan"]=smalltalk.send(smalltalk.send(html,"_span",[]),"_class_",["remaining-note-seconds"]);
self["@remainingGlobalSecondsSpan"]=smalltalk.send(smalltalk.send(html,"_span",[]),"_class_",["remaining-global-seconds"]);
smalltalk.send(self,"_updateLoop",[]);
return self}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_reset",
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
smalltalk.send(self,"_currentSecondsPerNote_",[smalltalk.send(self,"_secondsPerNote",[])]);
return self}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_secondsPerNote",
smalltalk.method({
selector: "secondsPerNote",
fn: function (){
var self=this;
var $1;
$1=self["@secondsPerNote"];
return $1;
}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_secondsPerNote_",
smalltalk.method({
selector: "secondsPerNote:",
fn: function (anInteger){
var self=this;
self["@secondsPerNote"]=anInteger;
smalltalk.send(self,"_currentSecondsPerNote_",[anInteger]);
return self}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_updateLoop",
smalltalk.method({
selector: "updateLoop",
fn: function (){
var self=this;
var $1,$4,$5,$3,$2;
$1=smalltalk.send(self,"_isRunning",[]);
$2=(function(){
$3=(function(){
smalltalk.send(self,"_updateSpans",[]);
$4=smalltalk.send(smalltalk.send(self,"_currentSecondsPerNote",[]),"__lt_eq",[(0)]);
if(smalltalk.assert($4)){
smalltalk.send(self,"_ranOutOfNoteTime",[]);
} else {
smalltalk.send(self,"_currentSecondsPerNote_",[smalltalk.send(smalltalk.send(self,"_currentSecondsPerNote",[]),"__minus",[(1)])]);
};
$5=smalltalk.send(smalltalk.send(self,"_remainingGlobalSeconds",[]),"__lt_eq",[(0)]);
if(smalltalk.assert($5)){
smalltalk.send(self,"_ranOutOfGlobalTime",[]);
} else {
smalltalk.send(self,"_remainingGlobalSeconds_",[smalltalk.send(smalltalk.send(self,"_remainingGlobalSeconds",[]),"__minus",[(1)])]);
};
return smalltalk.send(self,"_updateLoop",[]);
});
return smalltalk.send($3,"_valueWithTimeout_",[(1000)]);
});
smalltalk.send($1,"_ifTrue_",[$2]);
return self}
}),
smalltalk.TimerWidget);

smalltalk.addMethod(
"_updateSpans",
smalltalk.method({
selector: "updateSpans",
fn: function (){
var self=this;
smalltalk.send(self["@currentSecondsPerNoteSpan"],"_contents_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_currentSecondsPerNote",[]),"_asString",[]),"__comma",[" segons restants"])]);
smalltalk.send(self["@remainingGlobalSecondsSpan"],"_contents_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_remainingGlobalSeconds",[]),"_asString",[]),"__comma",[" / "]),"__comma",[smalltalk.send(self,"_globalSeconds",[])])]);
return self}
}),
smalltalk.TimerWidget);



