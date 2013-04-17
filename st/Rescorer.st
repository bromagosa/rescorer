Smalltalk current createPackage: 'Rescorer' properties: #{}!
Widget subclass: #BubbleWidget
	instanceVariableNames: 'bubbleSpan'
	package: 'Rescorer'!

!BubbleWidget methodsFor: 'rendering'!

renderOn: html
	html div
    	class: 'bubble';
    	contents: [ :h | 
            h img 
            	class: 'tip';
                src: 'images/bubble-tip.svg'.
			bubbleSpan := h span ]
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
        src: 'images/face-' , self mood asString , #(1 2 3 4) atRandom asString , '.svg'.
! !

!FaceWidget methodsFor: 'updating'!

updateFace
	faceImg src: 'images/face-' , self mood asString , #(1 2 3 4) atRandom asString , '.svg'
! !

Widget subclass: #GameWidget
	instanceVariableNames: 'wrapper currentStage sheetWidget bubbleWidget noteButtonsWidget errorAudio mood faceWidget'
	package: 'Rescorer'!

!GameWidget methodsFor: 'accessing'!

bubbleWidget
	^ bubbleWidget ifNil: [ bubbleWidget := BubbleWidget new ]
!

currentStage
	^ currentStage ifNil: [ currentStage := #difficultySelection ]
!

faceWidget
	^ faceWidget ifNil: [ faceWidget := FaceWidget new ]
!

noteButtonsWidget
	^ noteButtonsWidget ifNil: [ noteButtonsWidget := NoteButtonsWidget new game: self ]
!

sheetWidget
	^ sheetWidget ifNil: [ sheetWidget := SheetWidget new game: self ]
!

stageNames
	^ #(#difficultySelection #speedSelection #keySelection #game).
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
	self sheetWidget nextNote
!

nextStage
	currentStage := self stageNames at: ((self stageNames indexOf: self currentStage) \\ self stageNames size) + 1.
    self update.
!

playErrorSound
	< $('audio.error')[0].play() >
!

wrongAnswerAction
	self playErrorSound.
    self faceWidget beSad.
    errorAudio contents: [ :html | self renderErrorAudioOn: html ]
! !

!GameWidget methodsFor: 'rendering'!

renderAudioElementsOn: html
	#('A' 'B' 'C' 'D' 'E' 'F' 'G') do: [ :eachNote | 
    	#('1' '2' '3' '4') do: [ :eachOctave | 
        	html audio
  				class: 'note ' , eachNote , eachOctave;
  				src: 'sounds/' , eachNote , eachOctave , '.ogg' ]].
!

renderBubbleOn: html
	html with: self bubbleWidget
!

renderContentOn: html
	self renderFaceOn: html.
	self renderBubbleOn: html.
	self renderCurrentStageOn: html.
!

renderErrorAudioOn: html
	html audio 
    	class: 'error';
        src: 'sounds/error.ogg'
!

renderFaceOn: html
	html with: self faceWidget
!

renderOn: html
	wrapper := html div 
    	class: 'wrapper';
        with: [ self renderContentOn: html ]
! !

!GameWidget methodsFor: 'rendering - stages'!

renderCurrentStageOn: html
	self currentStage = #difficultySelection ifTrue: [ self renderDifficultySelectionStageOn: html ].
	self currentStage = #speedSelection ifTrue: [ self renderSpeedSelectionStageOn: html ].
	self currentStage = #keySelection ifTrue: [ self renderKeySelectionStageOn: html ].
	self currentStage = #game ifTrue: [ self renderGameStageOn: html ].
!

renderDifficultySelectionStageOn: html
	| stage |
	stage := OptionSelectionWidget new.
	stage buttons
        	at: 'Principiant'
            	put: [
                	self sheetWidget difficulty: 1.
            		self nextStage ];
			at: 'Iniciat'
            	put: [
                	self sheetWidget difficulty: 2.
                    self nextStage ];
			at: 'Expert'
            	put: [
                	self sheetWidget difficulty: 3.
                    self nextStage ];
			at: 'Virtuós'
            	put: [
                	self sheetWidget difficulty: 4.
                    self nextStage ].
	self bubbleWidget text: 'A quin nivell de dificultat vols jugar?'.
	html with: stage.
!

renderGameStageOn: html
	html div 
    	class: 'sheet-container';
    	with: self sheetWidget.
	html div 
    	class: 'note-buttons-container';
    	with: self noteButtonsWidget.
    self renderAudioElementsOn: html.
	errorAudio := html div with: [ self renderErrorAudioOn: html ]
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
                	self sheetWidget bpm: 70. 
            		self nextStage ];
			at: 'Andante'
            	put: [ 
                	self sheetWidget bpm: 100.
                    self nextStage ];
			at: 'Allegro'
            	put: [ 
                	self sheetWidget bpm: 130.
                    self nextStage ];
			at: 'Presto'
            	put: [ 
                	self sheetWidget bpm: 170.
                    self nextStage ].
	self bubbleWidget text: 'I a quina velocitat?'.
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

imagePath
	^ 'images/note' , self slashedOrReversedString , '.svg'
!

slashedOrReversedString
	| string |
    string := ''.
	
    (self position = 1 or: [ self position = 13 ])
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
	^ #(#E #F #G #A #B #C #D #E #F #G #A #B #C)
!

fKeyOctaves
	^ #(1 1 1 1 1 2 2 2 2 2 2 2 3)
!

gKeyNotes
	^ #(#C #D #E #F #G #A #B #C #D #E #F #G #A)
!

gKeyOctaves
	^ #(3 3 3 3 3 3 3 4 4 4 4 4 4)
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

Widget subclass: #SheetWidget
	instanceVariableNames: 'lines keyImg sheetDiv keyName bpm difficulty noteDiv currentNote game'
	package: 'Rescorer'!

!SheetWidget methodsFor: 'accessing'!

bpm
	^ bpm
!

bpm: anInteger
	bpm := anInteger
!

currentNote
	^ currentNote ifNil: [ self nextNote. currentNote ]
!

difficulty
	^ difficulty
!

difficulty: anInteger
	difficulty := anInteger
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
!

play
! !

!SheetWidget methodsFor: 'actions'!

nextNote
	| notePositions |
    notePositions := (1 to: 13).
    currentNote ifNotNil: [ notePositions remove: currentNote position ].
	currentNote := Note position: notePositions atRandom key: self keyName.
	noteDiv ifNotNil: [ noteDiv contents: [ :html | self renderNoteOn: html ]]
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
        	style: 'bottom: ' , (index * 12.5) asString , '%;' ]
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
				renderKeyOn: html;
				renderLinesOn: html.
	noteDiv := html div with: [ self renderNoteOn: html ]]
! !

