Smalltalk current createPackage: 'Rescorer' properties: #{}!
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

!Note class methodsFor: 'instance creation'!

position: aNumber key: aKeySymbol
	^ self new 
    	symbol: ((self noteDictionary at: aKeySymbol) at: aNumber);
    	position: aNumber;
		octave: ((self octaveDictionary at: aKeySymbol) at: aNumber)
! !

!Note class methodsFor: 'not yet classified'!

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

Widget subclass: #SheetWidget
	instanceVariableNames: 'lines key sheet keyName note currentNotePosition'
	package: 'Rescorer'!

!SheetWidget methodsFor: 'accessing'!

currentNotePosition
	^ currentNotePosition ifNil: [ currentNotePosition := 13 atRandom ]
!

keyName
	^ keyName ifNil: [ keyName := #G ]
! !

!SheetWidget methodsFor: 'rendering'!

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
   	 	class: 'image note i' , self currentNotePosition asString; 
        src: 'images/note' , ((#(1 13) includes: self currentNotePosition) ifTrue: ['-slashed'] ifFalse: ['']) , '.svg';
        style: 'bottom: ' , ((self currentNotePosition * 6.25) + 1) asString , '%;'.
	console log: self currentNotePosition asString.
!

renderOn: html
	html a 
    	with: 'update';
        style: 'position:fixed';
    	onClick: [ self updateNote ].
        
	html div 
    	class: 'sheet-container';
    	with: [
			sheet := html div class: 'sheet'.
            sheet
    			with: [
    				self 
            			renderKeyOn: html;
						renderLinesOn: html.
                    note := html div with: [ self renderNoteOn: html ]]]
!

updateNote
	currentNotePosition := ((1 to: 13) remove: currentNotePosition) atRandom.
    console log:(NoteController new noteAtPosition: currentNotePosition key: self keyName).
	note contents: [:html | self renderNoteOn: html]
! !

