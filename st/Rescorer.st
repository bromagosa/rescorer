Smalltalk current createPackage: 'Rescorer' properties: #{}!
Widget subclass: #GameWidget
	instanceVariableNames: 'sheetWidget noteButtonsWidget errorAudio mood faceImg'
	package: 'Rescorer'!

!GameWidget methodsFor: 'accessing'!

mood
	^ mood ifNil: [ mood := 'happy' ]
!

mood: aString
	mood := aString
!

noteButtonsWidget
	^ noteButtonsWidget ifNil: [ noteButtonsWidget := NoteButtonsWidget new game: self ]
!

sheetWidget
	^ sheetWidget ifNil: [ sheetWidget := SheetWidget new game: self ]
! !

!GameWidget methodsFor: 'actions'!

beHappy
	self mood: 'happy'.
    self updateFace.
!

beSad
	self mood: 'sad'.
    self updateFace.
!

checkNote: aNoteSymbol
	(self isNoteCorrect: aNoteSymbol) 
    	ifTrue: [ self correctAnswerAction ]
      	ifFalse: [ self wrongAnswerAction ]
!

correctAnswerAction
	self sheetWidget currentNote play.
    self beHappy.
	self sheetWidget nextNote
!

playErrorSound
	< $('audio.error')[0].play() >
!

wrongAnswerAction
	self playErrorSound.
    self beSad.
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

renderErrorAudioOn: html
	html audio 
    	class: 'error';
        src: 'sounds/error.ogg'
!

renderFaceOn: html
	^ html img
    	class: 'image face';
        src: 'images/face-' , self mood , #(1 2 3 4) atRandom asString , '.svg'.
!

renderOn: html
	faceImg := self renderFaceOn: html.
	html div 
    	class: 'sheet-container';
    	with: self sheetWidget.
	html div 
    	class: 'button-container';
    	with: self noteButtonsWidget.
    self renderAudioElementsOn: html.
	errorAudio := html div with: [ self renderErrorAudioOn: html ]
!

updateFace
	faceImg src: 'images/face-' , self mood , #(1 2 3 4) atRandom asString , '.svg'
! !

!GameWidget methodsFor: 'testing'!

isNoteCorrect: aNoteSymbol
	^ self sheetWidget currentNote symbol = aNoteSymbol
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

Widget subclass: #SheetWidget
	instanceVariableNames: 'lines keyImg sheetDiv keyName noteDiv currentNote game'
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

