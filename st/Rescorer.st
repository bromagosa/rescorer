Smalltalk current createPackage: 'Rescorer' properties: #{}!
Widget subclass: #BubbleWidget
	instanceVariableNames: 'bubbleSpan happyTexts sadTexts'
	package: 'Rescorer'!

!BubbleWidget methodsFor: 'accessing'!

happyTexts
	^ happyTexts ifNil: [ happyTexts := #(
    'Molt bé!! Et veig en forma!!'
    'Has estat practicant d''amagat? Ho fas molt bé!!'
    'Estic orgullós de tu!!'
    'Tenim a Beethoven entre nosaltres!!'
    'Disc de platí per a tu!!'
    'Ho portes molt bé!!'
    'Segueix així!!'
    'Endavant!!'
    'Ho fas millor que jo!!'
    'En saps molt!!'
    'No perdis el ritme, que ho estàs fent genial!!'
    'Fantàstic!!'
    'Meravellós!!'
    'Brillant!!'
    'Excel·lent!!'
    'Perfecte!!'
    'Genial!!'
    'Bé!!'
    'Molt bé!!'
    'Quina melodia!!'
    'Ets el Vivaldi del segle XXI!!'
    'Quin domini!!'
    'Quin nivell!!'
    'Així m''agrada!!'
    'Boníssim!!'
    'Es nota que sóc un gran mestre!!'
    'Aquesta no la sabia ni jo!!'
    'Ets una màquina!!'
    'En saps molt més que jo!!'
    'Quan és el teu proper concert?') ]
!

sadTexts
	^ sadTexts ifNil: [ sadTexts := #(
    'T''hi hauràs d''esforçar una mica més si vols arribar a ser tan gran com jo!!'
    'Noooo!!'
    'Aix... malament...'
    'No era aquesta, no...'
    'Torna-ho a provar, vinga!!'
    'Intenta-ho una altra vegada!!'
    'No passa res, tothom s''equivoca!!'
    'Errare humanum est.'
    'Fins i tot jo m''equivoco, de vegades!!'
    'Encara et falta una mica per saber-ne tant com jo!!'
    'Hauràs de practicar una miqueta més...'
    'No et preocupis, un error el té tothom!!'
    'Va, que sé que ho pots fer molt millor!!'
    'Aquesta nota no era...'
    'Vinga, una altra oportunitat!!'
    'Segur?'
    'Doncs no era aquesta!!'
    'Error!!'
    'Em penso que t''has equivocat!!'
    'Esforça-t''hi més...'
    'Aquesta la sabies!! Torna-ho a provar!!'
    'Fixa-t''hi més!!'
    'No és correcte, però no et desesperis. Torna-ho a intentar!!'
    'Mira-t''ho una mica millor...'
    'Has fallat!!'
    'Que no escoltes a classe?'
    'No és correcte...'
    'Va, una altra oportunitat...'
    'Ho pots fer molt millor...'
    'Hauràs de repassar una mica!!'
    'Això no ha sonat bé...'
    ) ]
! !

!BubbleWidget methodsFor: 'actions'!

beHappy
	self text: self happyTexts atRandom.
!

beSad
	self text: self sadTexts atRandom.
! !

!BubbleWidget methodsFor: 'rendering'!

renderOn: html
	html div
    	class: 'bubble';
    	contents: [ :h | 
            h img 
            	class: 'tip';
                src: 'images/bubble-tip.svg'.
			bubbleSpan := h span contents: 'Comencem!!' ]
! !

!BubbleWidget methodsFor: 'updating'!

text: aString
	bubbleSpan contents: aString
! !

Widget subclass: #FaceWidget
	instanceVariableNames: 'mood faceImg'
	package: 'Rescorer'!

!FaceWidget methodsFor: 'accessing'!

mood
	^ mood ifNil: [ mood := #happy ]
!

mood: aString
	mood := aString
! !

!FaceWidget methodsFor: 'actions'!

beHappy
	self mood: #happy.
    self updateFace.
!

beSad
	self mood: #sad.
    self updateFace.
! !

!FaceWidget methodsFor: 'rendering'!

renderOn: html
	faceImg := html img
    	class: 'image face';
        src: 'images/face-' , self mood asString , #(1 2 3 4) atRandom asString , '.png'.
! !

!FaceWidget methodsFor: 'updating'!

updateFace
	faceImg src: 'images/face-' , self mood asString , #(1 2 3 4) atRandom asString , '.png'
! !

Widget subclass: #GameWidget
	instanceVariableNames: 'wrapper currentStage sheetWidget bubbleWidget noteButtonsWidget faceWidget timerWidget scoreWidget errorAudio difficulty failedFlag'
	package: 'Rescorer'!

!GameWidget methodsFor: 'accessing'!

bubbleWidget
	^ bubbleWidget ifNil: [ bubbleWidget := BubbleWidget new ]
!

currentNoteScore
	^ self timerWidget currentSecondsPerNote * self difficulty * self failedFlag
!

currentStage
	^ currentStage ifNil: [ currentStage := #difficultySelection ]
!

difficulty
	^ difficulty
!

difficulty: anInteger
	difficulty := anInteger
!

faceWidget
	^ faceWidget ifNil: [ faceWidget := FaceWidget new ]
!

failedFlag
	^ failedFlag ifNil: [ failedFlag := 1 ]
!

failedFlag: anInteger
	failedFlag := anInteger
!

globalScore
	^ globalScore ifNil: [ globalScore := 0 ]
!

globalScore: anInteger
	globalScore := anInteger
!

noteButtonsWidget
	^ noteButtonsWidget ifNil: [ noteButtonsWidget := NoteButtonsWidget new game: self ]
!

scoreWidget
	^ scoreWidget ifNil: [ scoreWidget := ScoreWidget new ]
!

sheetWidget
	^ sheetWidget ifNil: [ sheetWidget := SheetWidget new game: self ]
!

stageNames
	^ #(#difficultySelection #speedSelection #timeSelection #keySelection #game #end).
!

timerWidget
	^ timerWidget ifNil: [ timerWidget := TimerWidget new game: self ]
! !

!GameWidget methodsFor: 'actions'!

checkNote: aNoteSymbol
	(self isNoteCorrect: aNoteSymbol) 
    	ifTrue: [ self correctAnswerAction ]
      	ifFalse: [ self wrongAnswerAction ]
!

correctAnswerAction
	self sheetWidget currentNote play.
    self faceWidget beHappy.
    self bubbleWidget beHappy.
	self sheetWidget nextNote.
    self timerWidget reset.
    self scoreWidget addScore: self currentNoteScore.
    self failedFlag: 1
!

end
	self nextStage.
	self faceWidget beHappy.
!

nextStage
	currentStage := self stageNames at: ((self stageNames indexOf: self currentStage) \\ self stageNames size) + 1.
    self update.
!

playErrorSound
	< $('audio.error')[0].play() >
!

resetCurrentNoteScore
	self currentNoteScore: 0
!

resetGame
	sheetWidget := nil.
    timerWidget := nil.
    scoreWidget := nil.
    difficulty := nil.
!

wrongAnswerAction
	self playErrorSound.
    self faceWidget beSad.
    self bubbleWidget beSad.
    errorAudio contents: [ :html | self renderErrorAudioOn: html ].
    self failedFlag: 0
! !

!GameWidget methodsFor: 'rendering'!

renderAudioElementsOn: html
	#('A' 'B' 'C' 'D' 'E' 'F' 'G') do: [ :eachNote | 
    	#('1' '2' '3' '4' '5') do: [ :eachOctave | 
        	html audio
  				class: 'note ' , eachNote , eachOctave;
  				src: 'sounds/' , eachNote , eachOctave , '.ogg' ]].
!

renderContentOn: html
	html 
    	with: self faceWidget; 
    	with: self bubbleWidget.
	self renderCurrentStageOn: html.
!

renderErrorAudioOn: html
	html audio 
    	class: 'error';
        src: 'sounds/error.ogg'
!

renderOn: html
    html div 
    	class: 'wrapper';
        with: [ 
        	html div
            	class: 'v-wrapper';
                with: [ wrapper := html div
                    	class: 'content';
                        with: [ self renderContentOn: html ]]]
! !

!GameWidget methodsFor: 'rendering - stages'!

renderCurrentStageOn: html
	self currentStage = #difficultySelection ifTrue: [ self renderDifficultySelectionStageOn: html ].
	self currentStage = #speedSelection ifTrue: [ self renderSpeedSelectionStageOn: html ].
    self currentStage = #timeSelection ifTrue: [ self renderGameTimeSelectionStageOn: html ].
	self currentStage = #keySelection ifTrue: [ self renderKeySelectionStageOn: html ].
	self currentStage = #game ifTrue: [ self renderGameStageOn: html ].
    self currentStage = #end ifTrue: [ self renderEndStageOn: html ].
!

renderDifficultySelectionStageOn: html
	| stage |
	stage := OptionSelectionWidget new.
	stage buttons
        	at: 'Principiant'
            	put: [
                	self difficulty: 1.
            		self nextStage ];
			at: 'Iniciat'
            	put: [
                	self difficulty: 2.
                    self nextStage ];
			at: 'Expert'
            	put: [
                	self difficulty: 3.
                    self nextStage ];
			at: 'Virtuós'
            	put: [
                	self difficulty: 4.
                    self nextStage ].
	self bubbleWidget text: 'A quin nivell de dificultat vols jugar?'.
	html with: stage.
!

renderEndStageOn: html
	| stage |
	stage := OptionSelectionWidget new.
	stage buttons 
        	at: 'Nova partida' 
            	put: [
                	self resetGame. 
            		self nextStage ].
	self bubbleWidget text: 'S''ha acabat el temps!! La teva puntuació final és de ' , self scoreWidget globalScore asString , ' punts.'.
    html with: stage.
!

renderGameStageOn: html
	html div 
    	class: 'sheet-container';
    	with: self sheetWidget.
	html div 
    	class: 'note-buttons-container';
    	with: self noteButtonsWidget.
	html div
    	class: 'score';
        with: self scoreWidget.
	html div
    	class: 'timer';
        with: self timerWidget.
    self renderAudioElementsOn: html.
	errorAudio := html div with: [ self renderErrorAudioOn: html ]
!

renderGameTimeSelectionStageOn: html
	| stage |
	stage := OptionSelectionWidget new.
	stage buttons 
        	at: '10 minuts' 
            	put: [
                	self timerWidget globalSeconds: 10 * 60.
            		self nextStage ];
			at: '5 minuts' 
            	put: [
                	self timerWidget globalSeconds: 5 * 60.
            		self nextStage ]; 
			at: '2 minuts'
            	put: [ 
                	self timerWidget globalSeconds: 2 * 60.
                    self nextStage ];
			at: 'custom' 
            	put: [
                  	| time |
                    time := (window prompt: 'Quants minuts?') asNumber.
                	self timerWidget globalSeconds: (time > 0 ifFalse: [ 5 ] ifTrue: [ time ]) * 60.
            		self nextStage ].
	self bubbleWidget text: 'Quants minuts vols que duri la partida?'.
	html with: stage.
!

renderKeySelectionStageOn: html
	| stage |
	stage := OptionSelectionWidget new.
	stage buttons 
        	at: 'Sol' 
            	put: [
                	self sheetWidget keyName: #G. 
            		self nextStage ]; 
			at: 'Fa' 
            	put: [ 
                	self sheetWidget keyName: #F. 
                    self nextStage ].
	self bubbleWidget text: 'Escull la clau, si us plau.'.
	html with: stage.
!

renderSpeedSelectionStageOn: html
	| stage |
	stage := OptionSelectionWidget new.
	stage buttons 
        	at: 'Adagio'
            	put: [
                	self timerWidget secondsPerNote: 10. 
            		self nextStage ];
			at: 'Andante'
            	put: [ 
                	self timerWidget secondsPerNote: 6.
                    self nextStage ];
			at: 'Allegro'
            	put: [ 
                	self timerWidget secondsPerNote: 3.
                    self nextStage ];
			at: 'Presto'
            	put: [ 
                	self timerWidget secondsPerNote: 1.
                    self nextStage ];
			at: 'Custom'
            	put: [
                  	| time |
                    time := (window prompt: 'Segons per nota?') asNumber.
                  	self timerWidget secondsPerNote: (time > 0 ifFalse: [ 70 ] ifTrue: [ time ]).
                    self nextStage ].
	self bubbleWidget text: 'I a quin tempo?'.
	html with: stage.
! !

!GameWidget methodsFor: 'testing'!

isNoteCorrect: aNoteSymbol
	^ self sheetWidget currentNote symbol = aNoteSymbol
! !

!GameWidget methodsFor: 'updating'!

update
	wrapper contents: [ :html | self renderContentOn: html ]
! !

Object subclass: #Note
	instanceVariableNames: 'position symbol octave'
	package: 'Rescorer'!

!Note methodsFor: 'accessing'!

octave
	^ octave
!

octave: aNumber
	octave := aNumber
!

position
	^ position
!

position: aNumber
	position := aNumber
!

symbol
	^ symbol
!

symbol: aString
	symbol := aString
! !

!Note methodsFor: 'accessing - rendering'!

bottom
	^ self position < 8
    	ifTrue: [ (self position * 6.25) + 1 ]
      	ifFalse: [ ((self position - 6) * 6.25) + 1 ]
!

cssClass
	^ 'note i' , self position asString
!

cssStyle
	^ 'bottom: ' , self bottom asString , '%;'
!

extraSlashesString
    ^ self position > 13
    	ifTrue: [ '-extra' ]
        ifFalse: [ '' ]
!

imagePath
	^ 'images/note' , self slashedOrReversedString , self extraSlashesString , '.svg'
!

slashedOrReversedString
	| string |
    string := ''.
	
    (#(1 13 15) includes: self position)
    	ifTrue: [ string := '-slashed' ].
    
    self position > 7 
    	ifTrue: [ string := string , '-reversed' ].

	^ string
! !

!Note methodsFor: 'actions'!

play
	self class playNote: self symbol asString octave: self octave asString
! !

Note class instanceVariableNames: 'noteDictionary octaveDictionary'!

!Note class methodsFor: 'accessing'!

fKeyNotes
	^ #(#E #F #G #A #B #C #D #E #F #G #A #B #C #D #E)
!

fKeyOctaves
	^ #(1 1 1 1 1 2 2 2 2 2 2 2 3 3 3)
!

gKeyNotes
	^ #(#C #D #E #F #G #A #B #C #D #E #F #G #A #B #C)
!

gKeyOctaves
	^ #(3 3 3 3 3 3 3 4 4 4 4 4 4 4 5)
!

noteDictionary
	^ noteDictionary 
    		ifNil: [ noteDictionary := 
            	Dictionary new 
                	at: #G put: self gKeyNotes;
                    at: #F put: self fKeyNotes;
                    yourself ]
!

octaveDictionary
	^ octaveDictionary 
    		ifNil: [ octaveDictionary := 
            	Dictionary new 
                	at: #G put: self gKeyOctaves;
                    at: #F put: self fKeyOctaves;
                    yourself ]
! !

!Note class methodsFor: 'instance creation'!

playNote: aNote octave: anOctave
	< $('audio.note.' + aNote + anOctave)[0].src = 'sounds/' + aNote + anOctave + '.ogg';
     $('audio.note.' + aNote + anOctave)[0].play(); >
!

position: aNumber key: aKeySymbol
	^ self new 
    	symbol: ((self noteDictionary at: aKeySymbol) at: aNumber);
    	position: aNumber;
		octave: ((self octaveDictionary at: aKeySymbol) at: aNumber)
! !

Widget subclass: #NoteButtonsWidget
	instanceVariableNames: 'noteNamesDictionary keysDictionary game'
	package: 'Rescorer'!

!NoteButtonsWidget methodsFor: 'accessing'!

game
	^ game
!

game: aGameWidget
	game := aGameWidget
!

keysDictionary
	^ keysDictionary ifNil: 
    	[ keysDictionary := Dictionary new
        	at: 65 put: #C;
            at: 83 put: #D;
            at: 68 put: #E;
            at: 70 put: #F;
            at: 71 put: #G;
            at: 72 put: #A;
            at: 74 put: #B;
            at: 75 put: #C;
            yourself ]
!

noteNamesDictionary
	^ noteNamesDictionary ifNil: 
    	[ noteNamesDictionary := Dictionary new
        	at: 'DO' put: #C;
            at: 'RE' put: #D;
            at: 'MI' put: #E;
            at: 'FA' put: #F;
            at: 'SOL' put: #G;
            at: 'LA' put: #A;
            at: 'SI' put: #B;
            yourself ]
! !

!NoteButtonsWidget methodsFor: 'rendering'!

bindKeyDownActions
	window asJQuery 
    	keydown: [ :event | 
        	(self keysDictionary keys includes: event keyCode) 
            	ifTrue: [ self game checkNote: (self keysDictionary at: event keyCode) ]]
!

renderOn: html
	self bindKeyDownActions.
	self noteNamesDictionary associations
    	do: [:each | 
			html button 
            	with: each key;
                onClick: [ self game checkNote: each value ]].
! !

Widget subclass: #OptionSelectionWidget
	instanceVariableNames: 'buttons'
	package: 'Rescorer'!

!OptionSelectionWidget methodsFor: 'accessing'!

buttons
	^ buttons ifNil: [ buttons := Dictionary new ]
! !

!OptionSelectionWidget methodsFor: 'rendering'!

renderButtonsOn: html
	self buttons 
    	associationsDo: [ :eachButton | 
			html button
            	with: eachButton key;
                onClick: eachButton value ]
!

renderOn: html
	html div
    	class: 'buttons-container';
        with: [ self renderButtonsOn: html ]
! !

Widget subclass: #ScoreWidget
	instanceVariableNames: 'globalScore span'
	package: 'Rescorer'!

!ScoreWidget methodsFor: 'actions'!

addScore: anInteger
	self globalScore: self globalScore + anInteger.
    self updateSpan
! !

!ScoreWidget methodsFor: 'rendering'!

globalScore
	^ globalScore ifNil: [ globalScore := 0 ]
!

globalScore: anInteger
	globalScore := anInteger
!

renderOn: html
	span := 
    	html span 
    		class: 'score'.
	self updateSpan.
! !

!ScoreWidget methodsFor: 'updating'!

updateSpan
	span contents: self globalScore asString , ' punts'
! !

Widget subclass: #SheetWidget
	instanceVariableNames: 'lines keyImg sheetDiv keyName difficulty noteDiv currentNote game notePositions'
	package: 'Rescorer'!

!SheetWidget methodsFor: 'accessing'!

currentNote
	^ currentNote ifNil: [ self nextNote. currentNote ]
!

game
	^ game
!

game: aGameWidget
	game := aGameWidget
!

keyName
	^ keyName ifNil: [ keyName := #G ]
!

keyName: aSymbol
	keyName := aSymbol
! !

!SheetWidget methodsFor: 'actions'!

nextNote
	| positions |
    positions := self notePositions copy.
    currentNote ifNotNil: [ positions remove: currentNote position ].
	currentNote := Note position: positions atRandom key: self keyName.
	noteDiv ifNotNil: [ noteDiv contents: [ :html | self renderNoteOn: html ]]
!

notePositions
   ^ notePositions 
    	ifNil: [ notePositions := 
    		(Dictionary new 
            	at: 1 put: (1 to: 8);
                at: 2 put: (1 to: 13);
                at: 3 put: (1 to: 13);
                at: 4 put: (1 to: 15);
				yourself) at: self game difficulty ]
! !

!SheetWidget methodsFor: 'rendering'!

renderKeyOn: html
	keyImg := 
    	html img
    		class: 'image key ' , self keyName asString; 
			src: 'images/' , self keyName asString , '.svg'.
!

renderLinesOn: html
	lines := (1 to: 7) collect: [ :index | 
    	html hr 
        	class: 'line i' , index asString;
        	style: 'bottom: ' , (index * 12.5) asString , '%;' , ((index = 4 and: [ self game difficulty = 2 ]) ifTrue: [ 'background-color: red;' ] ifFalse: [ '' ]) ]
!

renderNoteOn: html
	html img
   		class: self currentNote cssClass; 
        src: self currentNote imagePath;
    	style: self currentNote cssStyle.
!

renderOn: html
    sheetDiv := html div class: 'sheet'.
	sheetDiv
		with: [
			self 
				renderLinesOn: html;
                renderKeyOn: html.
	noteDiv := html div with: [ self renderNoteOn: html ]]
! !

Widget subclass: #TimerWidget
	instanceVariableNames: 'secondsPerNote currentSecondsPerNote globalSeconds remainingGlobalSeconds currentSecondsPerNoteSpan remainingGlobalSecondsSpan isRunning game'
	package: 'Rescorer'!

!TimerWidget methodsFor: 'accessing'!

currentSecondsPerNote
	^ currentSecondsPerNote
!

currentSecondsPerNote: anInteger
      currentSecondsPerNote := anInteger
!

game
	^ game
!

game: aGameWidget
	game := aGameWidget
!

globalSeconds
      ^ globalSeconds
!

globalSeconds: anInteger
      globalSeconds := anInteger.
      self remainingGlobalSeconds: anInteger
!

isRunning
	^ isRunning ifNil: [ isRunning := true ]
!

remainingGlobalSeconds
	^ remainingGlobalSeconds
!

remainingGlobalSeconds: anInteger
	remainingGlobalSeconds := anInteger
!

secondsPerNote
	^ secondsPerNote
!

secondsPerNote: anInteger
      secondsPerNote := anInteger.
      self currentSecondsPerNote: anInteger
! !

!TimerWidget methodsFor: 'actions'!

ranOutOfGlobalTime
	isRunning := false.
    self game end.
!

ranOutOfNoteTime
	self reset.
    self game wrongAnswerAction.
    self game sheetWidget nextNote.
!

reset
	self currentSecondsPerNote: self secondsPerNote
! !

!TimerWidget methodsFor: 'rendering'!

renderOn: html
    currentSecondsPerNoteSpan := html span
    	class: 'remaining-note-seconds'.
	remainingGlobalSecondsSpan := html span
    	class: 'remaining-global-seconds'.
	self updateLoop.
! !

!TimerWidget methodsFor: 'updating'!

updateLoop
	self isRunning 
    	ifTrue: [
			[ self updateSpans.
            self currentSecondsPerNote <= 0 
        		ifFalse: [ self currentSecondsPerNote: self currentSecondsPerNote - 1 ]
            	ifTrue: [ self ranOutOfNoteTime ].
            self remainingGlobalSeconds <= 0
            	ifFalse: [ self remainingGlobalSeconds: self remainingGlobalSeconds - 1 ]
              	ifTrue: [ self ranOutOfGlobalTime ].
    		self updateLoop ]
    				valueWithTimeout: 1000 ]
!

updateSpans
	currentSecondsPerNoteSpan contents: self currentSecondsPerNote asString, ' segons restants'.
    remainingGlobalSecondsSpan contents: self remainingGlobalSeconds asString , ' / ' , self globalSeconds
! !

