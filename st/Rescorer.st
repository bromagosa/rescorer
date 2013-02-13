Smalltalk current createPackage: 'Rescorer' properties: #{}!
Widget subclass: #GameWidget
	instanceVariableNames: 'sheetWidget noteButtonsWidget'
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
	^ self symbol asString , self octave asString , '.wav'
!

symbol
	^ symbol
!

symbol: aString
	symbol := aString
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
	instanceVariableNames: 'lines key sheet keyName note currentNotePosition game'
	package: 'Rescorer'!

!SheetWidget methodsFor: 'accessing'!

currentNote
	^ Note position: self currentNotePosition key: self keyName
!

currentNotePosition
	^ currentNotePosition ifNil: [ currentNotePosition := 13 atRandom ]
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

slashedOrReversed
	| string |
    string := ''.
	
    (#(1 13) includes: self currentNotePosition) 
    	ifTrue: [ string := '-slashed' ].
    
    self currentNotePosition > 7 
    	ifTrue: [ string := string , '-reversed' ].

	^ string
! !

!SheetWidget methodsFor: 'actions'!

nextNote
	currentNotePosition := ((1 to: 13) remove: currentNotePosition) atRandom.
	note contents: [ :html | self renderNoteOn: html ]
! !

!SheetWidget methodsFor: 'rendering'!

currentNoteBottom
	^ self currentNotePosition < 8
    	ifTrue: [ (self currentNotePosition * 6.25) + 1 ]
      	ifFalse: [ ((self currentNotePosition - 6) * 6.25) + 1 ]
!

renderKeyOn: html
key := 
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
   		class: 'note i' , self currentNotePosition asString; 
        src: 'images/note' , self slashedOrReversed , '.svg';
    	style: 'bottom: ' , self currentNoteBottom asString , '%;'.
!

renderOn: html
    sheet := html div class: 'sheet'.
		sheet
			with: [
				self 
					renderKeyOn: html;
					renderLinesOn: html.
		note := html div with: [ self renderNoteOn: html ]]
! !

