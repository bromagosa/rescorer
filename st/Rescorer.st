Smalltalk current createPackage: 'Rescorer' properties: #{}!
Widget subclass: #GameWidget
	instanceVariableNames: 'sheetWidget noteButtonsWidget audio'
	package: 'Rescorer'!

!GameWidget methodsFor: 'accessing'!

noteButtonsWidget
	^ noteButtonsWidget ifNil: [ noteButtonsWidget := NoteButtonsWidget new game: self ]
!

sheetWidget
	^ sheetWidget ifNil: [ sheetWidget := SheetWidget new game: self ]
! !

!GameWidget methodsFor: 'actions'!

checkNote: aNoteSymbol
	(self isNoteCorrect: aNoteSymbol) 
    	ifTrue: [ self correctAnswerAction ]
      	ifFalse: [ self wrongAnswerAction ]
!

correctAnswerAction
	self sheetWidget play.
	self sheetWidget nextNote
!

wrongAnswerAction
	window alert: 'Fatal!!'
! !

!GameWidget methodsFor: 'rendering'!

renderOn: html
	html div 
    	class: 'sheet-container';
    	with: self sheetWidget.
	html div 
    	class: 'button-container';
    	with: self noteButtonsWidget.
! !

!GameWidget methodsFor: 'testing'!

isNoteCorrect: aNoteSymbol
	^ self sheetWidget currentNote symbol = aNoteSymbol
! !

Object subclass: #Note
	instanceVariableNames: 'position symbol octave'
	package: 'Rescorer'!

!Note methodsFor: 'accessing'!

audioPath
	^ 'sounds/' , self soundFile
!

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

soundFile
	^ self symbol asString , self octave asString , '.ogg'
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

position: aNumber key: aKeySymbol
	^ self new 
    	symbol: ((self noteDictionary at: aKeySymbol) at: aNumber);
    	position: aNumber;
		octave: ((self octaveDictionary at: aKeySymbol) at: aNumber)
! !

Widget subclass: #NoteButtonsWidget
	instanceVariableNames: 'noteNamesDictionary game'
	package: 'Rescorer'!

!NoteButtonsWidget methodsFor: 'accessing'!

game
	^ game
!

game: aGameWidget
	game := aGameWidget
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

renderOn: html
	self noteNamesDictionary associations
    	do: [:each | 
			html button 
            	with: each key;
                onClick: [ self game checkNote: each value ]]
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
! !

!SheetWidget methodsFor: 'actions'!

nextNote
	| notePositions |
    notePositions := (1 to: 13).
    currentNote ifNotNil: [ notePositions remove: currentNote position ].
	currentNote := Note position: notePositions atRandom key: self keyName.
	noteDiv ifNotNil: [ noteDiv contents: [ :html | self renderNoteOn: html ]]
!

play
	< $("audio")[0].play() >
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
        
	html audio src: self currentNote audioPath.
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

