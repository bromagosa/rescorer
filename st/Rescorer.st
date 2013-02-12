Smalltalk current createPackage: 'Rescorer' properties: #{}!
Widget subclass: #SheetWidget
	instanceVariableNames: 'lines key sheet keyName'
	package: 'Rescorer'!

!SheetWidget methodsFor: 'accessing'!

keyName
	^ keyName ifNil: [ keyName := #G ]
!

sheet
	^ sheet
! !

!SheetWidget methodsFor: 'rendering'!

renderKeyOn: html
key := 
    html img
    	class: 'image key'; 
		src: 'images/' , self keyName asString , '.svg'.
!

renderLinesOn: html
	lines := (1 to: 5) collect: [ :index | 
    	html hr 
        	class: 'line ' , index asString;
        	style: 'top: ' , (index * (100/6)) asString , '%;' ]
!

renderOn: html
	html div 
    	class: 'sheet-container';
    	with: [
			sheet := html div class: 'sheet'.
            sheet
    			with: [
    				self 
            			renderKeyOn: html;
						renderLinesOn: html ]]
! !

