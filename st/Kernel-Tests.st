Smalltalk current createPackage: 'Kernel-Tests' properties: #{}!
TestCase subclass: #BlockClosureTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!BlockClosureTest methodsFor: 'tests'!

testCompiledSource
	self assert: ([1+1] compiledSource includesSubString: 'function')
!

testEnsure
	self assert: 3 equals: ([3] ensure: [4])
!

testEnsureRaises
	self should: [[Error new signal] ensure: [true]] raise: Error
!

testNumArgs
	self assert: [] numArgs equals: 0.
	self assert: [:a :b | ] numArgs equals: 2
!

testOnDo
	self assert: ([Error new signal] on: Error do: [:ex | true])
!

testValue
	self assert: ([1+1] value) equals: 2.
	self assert: ([:x | x +1] value: 2) equals: 3.
	self assert: ([:x :y | x*y] value: 2 value: 4) equals: 8. 

	"Arguments are optional in Amber. This isn't ANSI compliant."

	self assert: ([:a :b :c | 1] value) equals: 1
!

testValueWithPossibleArguments
	self assert: ([1] valueWithPossibleArguments: #(3 4)) equals: 1.
	self assert: ([:a | a + 4] valueWithPossibleArguments: #(3 4)) equals: 7.
	self assert: ([:a :b | a + b] valueWithPossibleArguments: #(3 4 5)) equals: 7.
!

testWhileFalse
	| i |
	i := 0.
	[i > 5] whileFalse: [i := i + 1].
	self assert: i equals: 6.

	i := 0.
	[i := i + 1. i > 5] whileFalse.
	self assert: i equals: 6
!

testWhileTrue
	| i |
	i := 0.
	[i < 5] whileTrue: [i := i + 1].
	self assert: i equals: 5.

	i := 0.
	[i := i + 1. i < 5] whileTrue.
	self assert: i equals: 5
! !

TestCase subclass: #BooleanTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!BooleanTest methodsFor: 'tests'!

testEquality
	"We're on top of JS...just be sure to check the basics!!"

	self deny: 0 = false. 
	self deny: false = 0.
	self deny: '' = false.
	self deny: false = ''.

	self assert: true = true.
	self deny: false = true.
	self deny: true = false.
	self assert: false = false.

	"JS may do some type coercing after sending a message"
	self assert: true yourself = true.
	self assert: true yourself = true yourself
!

testIdentity
	"We're on top of JS...just be sure to check the basics!!"

	self deny: 0 == false. 
	self deny: false == 0.
	self deny: '' == false.
	self deny: false == ''.

	self assert: true == true.
	self deny: false == true.
	self deny: true == false.
	self assert: false == false.

	"JS may do some type coercing after sending a message"
	self assert: true yourself == true.
	self assert: true yourself == true yourself
!

testIfTrueIfFalse
 
	self assert: (true ifTrue: ['alternative block']) = 'alternative block'.
	self assert: (true ifFalse: ['alternative block']) = nil.

	self assert: (false ifTrue: ['alternative block']) = nil.
	self assert: (false ifFalse: ['alternative block']) = 'alternative block'.

	self assert: (false ifTrue: ['alternative block'] ifFalse: ['alternative block2']) = 'alternative block2'.
	self assert: (false ifFalse: ['alternative block'] ifTrue: ['alternative block2']) = 'alternative block'.

	self assert: (true ifTrue: ['alternative block'] ifFalse: ['alternative block2']) = 'alternative block'.
	self assert: (true ifFalse: ['alternative block'] ifTrue: ['alternative block2']) = 'alternative block2'.
!

testIfTrueIfFalseWithBoxing
 
	self assert: (true boxed ifTrue: ['alternative block']) = 'alternative block'.
	self assert: (true boxed ifFalse: ['alternative block']) = nil.

	self assert: (false boxed ifTrue: ['alternative block']) = nil.
	self assert: (false boxed ifFalse: ['alternative block']) = 'alternative block'.

	self assert: (false boxed ifTrue: ['alternative block'] ifFalse: ['alternative block2']) = 'alternative block2'.
	self assert: (false boxed ifFalse: ['alternative block'] ifTrue: ['alternative block2']) = 'alternative block'.

	self assert: (true boxed ifTrue: ['alternative block'] ifFalse: ['alternative block2']) = 'alternative block'.
	self assert: (true boxed ifFalse: ['alternative block'] ifTrue: ['alternative block2']) = 'alternative block2'.
!

testLogic
 
	"Trivial logic table"
	self assert: (true & true); deny: (true & false); deny: (false & true); deny: (false & false).
	self assert: (true | true); assert: (true | false); assert: (false | true); deny: (false | false).
        "Checking that expressions work fine too"
	self assert: (true & (1 > 0)); deny: ((1 > 0) & false); deny: ((1 > 0) & (1 > 2)).
        self assert: (false | (1 > 0)); assert: ((1 > 0) | false); assert: ((1 > 0) | (1 > 2))
!

testLogicKeywords
 
	"Trivial logic table"
	self 
		assert: (true and: [ true]); 
		deny: (true and: [ false ]); 
		deny: (false and: [ true ]); 
		deny: (false and: [ false ]).
	self 
		assert: (true or: [ true ]); 
		assert: (true or: [ false ]); 
		assert: (false or: [ true ]); 
		deny: (false or: [ false ]).
        
	"Checking that expressions work fine too"
	self 
		assert: (true and: [ 1 > 0 ]); 
		deny: ((1 > 0) and: [ false ]); 
		deny: ((1 > 0) and: [ 1 > 2 ]).
        self 
		assert: (false or: [ 1 > 0 ]); 
		assert: ((1 > 0) or: [ false ]); 
		assert: ((1 > 0) or: [ 1 > 2 ])
!

testNonBooleanError
	|b|
    b := < '' >.
    self should: [nonBoolean ifTrue: [] ifFalse: []] raise: NonBooleanReceiver
! !

TestCase subclass: #ClassBuilderTest
	instanceVariableNames: 'builder theClass'
	package: 'Kernel-Tests'!

!ClassBuilderTest methodsFor: 'running'!

setUp
	builder := ClassBuilder new
!

tearDown
	theClass ifNotNil: [Smalltalk current removeClass: theClass. theClass := nil]
!

testClassCopy
	theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.
	self assert: theClass superclass == ObjectMock superclass.
	self assert: theClass instanceVariableNames == ObjectMock instanceVariableNames.
	self assert: theClass name equals: 'ObjectMock2'.
	self assert: theClass package == ObjectMock package.
	self assert: theClass methodDictionary keys equals: ObjectMock methodDictionary keys
!

testInstanceVariableNames
	self assert: (builder instanceVariableNamesFor: '  hello   world   ') equals: #('hello' 'world')
! !

TestCase subclass: #CollectionTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!CollectionTest methodsFor: 'accessing'!

collection
	^ self collectionClass withAll: self defaultValues
!

collectionClass
	^ self class collectionClass
!

collectionWithDuplicates
	^ self collectionClass withAll: #('a' 'b' 'c' 1 2 1 'a')
!

defaultValues
	^ #(1 2 3 -4)
! !

!CollectionTest methodsFor: 'convenience'!

assertSameContents: aCollection 	as: anotherCollection
	self assert: aCollection size = anotherCollection size.
	aCollection do: [ :each |
		self assert: (aCollection occurrencesOf: each) = (anotherCollection occurrencesOf: each) ]
! !

!CollectionTest methodsFor: 'testing'!

isCollectionReadOnly
	^ false
! !

!CollectionTest methodsFor: 'tests'!

testAsArray
	self 
		assertSameContents: self collection 
		as: self collection asArray
!

testAsOrderedCollection
	self 
		assertSameContents: self collection 
		as: self collection asOrderedCollection
!

testAsSet
	| c set |
	c := self collectionWithDuplicates.
	set := c asSet.
	self assert: set size = 5.
	c do: [ :each |
		self assert: (set includes: each) ]
!

testCollect
	| newCollection |
	newCollection :=  #(1 2 3 4).
	self 
		assertSameContents: (self collection collect: [ :each |
			each abs ])
		as: newCollection
!

testDetect
	self assert: (self collection detect: [ :each | each < 0 ]) = -4.
	self 
		should: [ self collection detect: [ :each | each = 6 ] ]
		raise: Error
!

testDo
	| newCollection |
	newCollection := OrderedCollection new.
	self collection do: [ :each |
		newCollection add: each ].
	self 
		assertSameContents: self collection 
		as: newCollection
!

testIsEmpty
	self assert: self collectionClass new isEmpty.
	self deny: self collection isEmpty
!

testSelect
	| newCollection |
	newCollection := #(2 -4).
	self 
		assertSameContents: (self collection select: [ :each |
			each even ])
		as: newCollection
!

testSize
	self assert: self collectionClass new size = 0.
	self assert: self collection size = 4
! !

!CollectionTest class methodsFor: 'accessing'!

collectionClass
	^ nil
! !

!CollectionTest class methodsFor: 'testing'!

isAbstract
	^ self collectionClass isNil
! !

CollectionTest subclass: #HashedCollectionTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!HashedCollectionTest methodsFor: 'accessing'!

collection
	^ #{ 'a' -> 1. 'b' -> 2. 'c' -> 3. 'd' -> -4 }
!

collectionWithDuplicates
	^ #{ 'a' -> 1. 'b' -> 2. 'c' -> 3. 'd' -> -4. 'e' -> 1. 'f' -> 2. 'g' -> 10 }
! !

!HashedCollectionTest class methodsFor: 'accessing'!

collectionClass
	^ HashedCollection
! !

HashedCollectionTest subclass: #DictionaryTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!DictionaryTest methodsFor: 'accessing'!

collection
	^ Dictionary new
		at: 1 put: 1;
		at: 'a' put: 2;
		at: true put: 3;
		at: 4 put: -4;
		yourself
!

collectionWithDuplicates
	^ Dictionary new
		at: 1 put: 1;
		at: 'a' put: 2;
		at: true put: 3;
		at: 4 put: -4;
		at: 'b' put: 1;
		at: 3 put: 3;
		at: false put: 12;
		yourself
! !

!DictionaryTest methodsFor: 'tests'!

testAccessing
	| d |

	d := Dictionary new.

	d at: 'hello' put: 'world'.
	self assert: (d at: 'hello') = 'world'.
	self assert: (d at: 'hello' ifAbsent: [nil]) = 'world'.
	self deny: (d at: 'foo' ifAbsent: [nil]) = 'world'.

	d at: 1 put: 2.
	self assert: (d at: 1) = 2.

	d at: 1@3 put: 3.
	self assert: (d at: 1@3) = 3
!

testDynamicDictionaries
	self assert: #{'hello' -> 1} asDictionary = (Dictionary with: 'hello' -> 1)
!

testEquality
	| d1 d2 |

	self assert: Dictionary new = Dictionary new.
		
	d1 := Dictionary new at: 1 put: 2; yourself.
	d2 := Dictionary new at: 1 put: 2; yourself.
	self assert: d1 = d2.

	d2 := Dictionary new at: 1 put: 3; yourself.
	self deny: d1 = d2.

	d2 := Dictionary new at: 2 put: 2; yourself.
	self deny: d1 = d2.

	d2 := Dictionary new at: 1 put: 2; at: 3 put: 4; yourself.
	self deny: d1 = d2.
!

testIfAbsent

	| d visited |
	visited := false.
	d := Dictionary new.

	d at: 'hello' ifAbsent: [ visited := true ].
	self assert: visited.
!

testIfPresent

	| d visited absent |
	visited := false.
	d := Dictionary new.
	d at: 'hello' put: 'world'.

	d at: 'hello' ifPresent: [ :value | visited := value ].
	self assert: visited = 'world'.

	absent := d at: 'bye' ifPresent: [ :value | visited := value ].
	self assert: absent isNil.
!

testIfPresentIfAbsent

	| d visited |
	visited := false.
	d := Dictionary new.
	d at: 'hello' put: 'world'.

	d at: 'hello' ifPresent: [ :value | visited := value ] ifAbsent: [ visited := true ].
	self assert: visited = 'world'.

	d at: 'buy' ifPresent: [ :value | visited := value ] ifAbsent: [ visited := true ].
	self assert: visited.
!

testKeys
	| d |

	d := Dictionary new.
	d at: 1 put: 2.
	d at: 2 put: 3.
	d at: 3 put: 4.

	self assert: d keys = #(1 2 3)
!

testPrintString
	self
		assert: 'a Dictionary(''firstname''->''James'' , ''lastname''->''Bond'')' 
		equals: (Dictionary new 
                         	at:'firstname' put: 'James';
                        	at:'lastname' put: 'Bond';
                        	printString)
!

testRemoveKey
    | d key |

    d := Dictionary new.
    d at: 1 put: 2.
    d at: 2 put: 3.
    d at: 3 put: 4.

    key := 2.

    self assert: d keys = #(1 2 3).

    d removeKey: key.
    self assert: d keys = #(1 3).
    self assert: d values = #(2 4).
    self deny: (d includesKey: 2)
!

testRemoveKeyIfAbsent
    | d key |

    d := Dictionary new.
    d at: 1 put: 2.
    d at: 2 put: 3.
    d at: 3 put: 4.

    key := 2.
    self assert: (d removeKey: key) = 3.

    key := 3.
    self assert: (d removeKey: key ifAbsent: [42]) = 4.

    key := 'why'.
    self assert: (d removeKey: key ifAbsent: [42] ) = 42.
!

testSize
	| d |

	d := Dictionary new.
	self assert: d size = 0.

	d at: 1 put: 2.
	self assert: d size = 1.

	d at: 2 put: 3.
	self assert: d size = 2.
!

testValues
	| d |

	d := Dictionary new.
	d at: 1 put: 2.
	d at: 2 put: 3.
	d at: 3 put: 4.

	self assert: d values = #(2 3 4)
! !

!DictionaryTest class methodsFor: 'accessing'!

collectionClass
	^ Dictionary
! !

CollectionTest subclass: #SequenceableCollectionTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!SequenceableCollectionTest methodsFor: 'tests'!

testAt
	self assert: (self collection at: 4) = -4.
	self should: [ self collection at: 5 ] raise: Error
!

testAtIfAbsent
	self assert: (self collection at: (self collection size + 1) ifAbsent: [ 'none' ]) = 'none'
! !

SequenceableCollectionTest subclass: #ArrayTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!ArrayTest methodsFor: 'testing'!

testAtIfAbsent
	| array |
	array := #('hello' 'world').
	self assert: (array at: 1) equals: 'hello'.
	self assert: (array at: 2) equals: 'world'.
	self assert: (array at: 2 ifAbsent: ['not found']) equals: 'world'.
	self assert: (array at: 0 ifAbsent: ['not found']) equals: 'not found'.
	self assert: (array at: -10 ifAbsent: ['not found']) equals: 'not found'.
	self assert: (array at: 3 ifAbsent: ['not found']) equals: 'not found'.
!

testFirstN
	self assert: {1. 2. 3} equals: ({1. 2. 3. 4. 5} first: 3).
!

testIfEmpty
	self assert: 'zork' equals: ( '' ifEmpty: ['zork'] )
!

testPrintString
	| array |
	array := Array new.
	self assert: 'a Array ()' equals: ( array printString ).
	array add: 1; add: 3.
	self assert: 'a Array (1 3)' equals: ( array printString ).
	array add: 'foo'.
	self assert: 'a Array (1 3 ''foo'')' equals: ( array printString ).
	array remove: 1; remove: 3.
	self assert: 'a Array (''foo'')' equals: ( array printString ).
	array addLast: 3.
	self assert: 'a Array (''foo'' 3)' equals: ( array printString ).
	array addLast: 3.
	self assert: 'a Array (''foo'' 3 3)' equals: ( array printString ).
! !

!ArrayTest class methodsFor: 'accessing'!

collectionClass
	^ Array
! !

SequenceableCollectionTest subclass: #StringTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!StringTest methodsFor: 'accessing'!

collection
	^'hello'
!

collectionWithDuplicates
	^ 'abbaerte'
! !

!StringTest methodsFor: 'tests'!

testAddRemove
	self should: ['hello' add: 'a'] raise: Error.
	self should: ['hello' remove: 'h'] raise: Error
!

testAsArray
	self assert: 'hello' asArray = #('h' 'e' 'l' 'l' 'o').
!

testAt
	self assert: ('hello' at: 1) = 'h'.
	self assert: ('hello' at: 5) = 'o'.
	self assert: ('hello' at: 6 ifAbsent: [nil]) = nil
!

testAtPut
	"String instances are read-only"
	self should: ['hello' at: 1 put: 'a'] raise: Error
!

testCollect
	| newCollection |
	newCollection := 'hheelllloo'.
	self 
		assertSameContents: (self collection collect: [ :each |
			each, each ])
		as: newCollection
!

testCopyWithoutAll
	self 
		assert: 'hello world' 
		equals: ('*hello* *world*' copyWithoutAll: '*')
!

testDetect
	self assert: (self collection detect: [ :each | each = 'h' ]) = 'h'.
	self 
		should: [ self collection detect: [ :each | each = 6 ] ]
		raise: Error
!

testEquality
	self assert: 'hello' = 'hello'.
	self deny: 'hello' = 'world'.

	self assert: 'hello'  = 'hello' yourself.
	self assert: 'hello' yourself = 'hello'.

	"test JS falsy value"
	self deny: '' = 0
!

testIdentity
	self assert: 'hello' == 'hello'.
	self deny: 'hello' == 'world'.

	self assert: 'hello' == 'hello' yourself.
	self assert: 'hello' yourself == 'hello'.

	"test JS falsy value"
	self deny: '' == 0
!

testIncludesSubString
	self assert: ('amber' includesSubString: 'ber').
	self deny: ('amber' includesSubString: 'zork').
!

testJoin
	self assert: 'hello,world' equals: (',' join: #('hello' 'world'))
!

testSelect
	| newCollection |
	newCollection := 'o'.
	self 
		assertSameContents: (self collection select: [ :each |
			each = 'o' ])
		as: newCollection
!

testSize
	self assert: 'smalltalk' size equals: 9.
	self assert: '' size equals: 0
!

testStreamContents
	self 
		assert: 'hello world' 
		equals: (String streamContents: [ :aStream | 
			aStream 
				nextPutAll: 'hello'; space; 
				nextPutAll: 'world' ])
! !

!StringTest class methodsFor: 'accessing'!

collectionClass
	^ String
! !

SequenceableCollectionTest subclass: #SymbolTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!SymbolTest methodsFor: 'accessing'!

collection
	^ #hello
!

collectionWithDuplicates
	^ #phhaaarorra
! !

!SymbolTest methodsFor: 'tests'!

testAsString
	self assert: #hello asString equals: 'hello'
!

testAsSymbol
	self assert: #hello == #hello asSymbol
!

testAt
	self assert: (#hello at: 1) = 'h'.
	self assert: (#hello at: 5) = 'o'.
	self assert: (#hello at: 6 ifAbsent: [nil]) = nil
!

testAtPut
	"Symbol instances are read-only"
	self should: ['hello' at: 1 put: 'a'] raise: Error
!

testCollect
	| newCollection |
	newCollection := #hheelllloo.
	self 
		assertSameContents: (self collection collect: [ :each |
			each, each ])
		as: newCollection
!

testComparing
	self assert: #ab > #aa.
	self deny: #ab > #ba.

	self assert: #ab < #ba.
	self deny: #bb < #ba.

	self assert: #ab >= #aa.
	self deny: #ab >= #ba.

	self assert: #ab <= #ba.
	self deny: #bb <= #ba
!

testCopying
	self assert: #hello copy == #hello.
	self assert: #hello deepCopy == #hello
!

testDetect
	self assert: (self collection detect: [ :each | each = 'h' ]) = 'h'.
	self 
		should: [ self collection detect: [ :each | each = 'z' ] ]
		raise: Error
!

testEquality
	self assert: #hello = #hello.
	self deny: #hello = #world.

	self assert: #hello  = #hello yourself.
	self assert: #hello yourself = #hello.

	self deny: #hello  = 'hello'.
	self deny: 'hello' = #hello.
!

testIdentity
	self assert: #hello == #hello.
	self deny: #hello == #world.

	self assert: #hello  = #hello yourself.
	self assert: #hello yourself = #hello asString asSymbol
!

testIsEmpty
	self deny: self collection isEmpty.
	self assert: '' asSymbol isEmpty
!

testIsSymbolIsString
	self assert: #hello isSymbol.
	self deny: 'hello' isSymbol.
	self deny: #hello isString.
	self assert: 'hello' isString
!

testSelect
	| newCollection |
	newCollection := 'o'.
	self 
		assertSameContents: (self collection select: [ :each |
			each = 'o' ])
		as: newCollection
!

testSize
	self assert: #a size equals: 1.
	self assert: #aaaaa size equals: 5
! !

!SymbolTest class methodsFor: 'accessing'!

collectionClass
	^ Symbol
! !

TestCase subclass: #JSObjectProxyTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!JSObjectProxyTest methodsFor: 'accessing'!

jsObject
	<return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null}>
! !

!JSObjectProxyTest methodsFor: 'tests'!

testDNU
	self should: [self jsObject foo] raise: MessageNotUnderstood
!

testMessageSend

	self assert: self jsObject a equals: 1.
	self assert: self jsObject b equals: 2.
	self assert: (self jsObject c: 3) equals: 3
!

testMethodWithArguments
	self assert: (self jsObject c: 1) equals: 1
!

testPrinting
	self assert: self jsObject printString = '[object Object]'
!

testPropertyThatReturnsEmptyString
	| object |

	object := self jsObject.
	self assert: '' equals: object d.

	object d: 'hello'.
	self assert: 'hello' equals: object d
!

testPropertyThatReturnsUndefined
	| object |

	object := self jsObject.
	self shouldnt: [ object e ]  raise: MessageNotUnderstood.
    self assert: object e isNil
!

testYourself
	| object |
	object := self jsObject
		d: 'test';
		yourself.

	self assert: object d equals: 'test'
! !

TestCase subclass: #NumberTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!NumberTest methodsFor: 'tests'!

testAbs
	self assert: 4 abs = 4.
	self assert: -4 abs = 4
!

testArithmetic
	
	"We rely on JS here, so we won't test complex behavior, just check if 
	message sends are corrects"

	self assert: 1.5 + 1 = 2.5.
	self assert: 2 - 1 = 1.
	self assert: -2 - 1 = -3.
	self assert: 12 / 2 = 6.
	self assert: 3 * 4 = 12.

	"Simple parenthesis and execution order"

	self assert: 1 + 2 * 3 = 9.
	self assert: 1 + (2 * 3) = 7
!

testComparison

	self assert: 3 > 2.
	self assert: 2 < 3.
	
	self deny: 3 < 2.
	self deny: 2 > 3.

	self assert: 3 >= 3.
	self assert: 3.1 >= 3.
	self assert: 3 <= 3.
	self assert: 3 <= 3.1
!

testCopying
	self assert: 1 copy == 1.
	self assert: 1 deepCopy == 1
!

testEquality
	self assert: 1 = 1.
	self assert: 0 = 0.
	self deny: 1 = 0.

	self assert: 1 yourself = 1.
	self assert: 1 = 1 yourself.
	self assert: 1 yourself = 1 yourself.
	
	self deny: 0 = false.
	self deny: false = 0.
	self deny: '' = 0.
	self deny: 0 = ''
!

testHexNumbers

	self assert: 16r9 = 9.
	self assert: 16rA truncated = 10.
	self assert: 16rB truncated = 11.
	self assert: 16rC truncated = 12.
	self assert: 16rD truncated = 13.
	self assert: 16rE truncated = 14.
	self assert: 16rF truncated = 15
!

testIdentity
	self assert: 1 == 1.
	self assert: 0 == 0.
	self deny: 1 == 0.

	self assert: 1 yourself == 1.
	self assert: 1 == 1 yourself.
	self assert: 1 yourself == 1 yourself.
	
	self deny: 1 == 2
!

testInvalidHexNumbers

	self should: [16rG] raise: MessageNotUnderstood.
   	self should: [16rg] raise: MessageNotUnderstood.
	self should: [16rH] raise: MessageNotUnderstood.
   	self should: [16rh] raise: MessageNotUnderstood.
	self should: [16rI] raise: MessageNotUnderstood.
   	self should: [16ri] raise: MessageNotUnderstood.
	self should: [16rJ] raise: MessageNotUnderstood.
   	self should: [16rj] raise: MessageNotUnderstood.
	self should: [16rK] raise: MessageNotUnderstood.
   	self should: [16rk] raise: MessageNotUnderstood.
	self should: [16rL] raise: MessageNotUnderstood.
   	self should: [16rl] raise: MessageNotUnderstood.
	self should: [16rM] raise: MessageNotUnderstood.
   	self should: [16rm] raise: MessageNotUnderstood.
	self should: [16rN] raise: MessageNotUnderstood.
   	self should: [16rn] raise: MessageNotUnderstood.
	self should: [16rO] raise: MessageNotUnderstood.
   	self should: [16ro] raise: MessageNotUnderstood.
	self should: [16rP] raise: MessageNotUnderstood.
   	self should: [16rp] raise: MessageNotUnderstood.
	self should: [16rQ] raise: MessageNotUnderstood.
   	self should: [16rq] raise: MessageNotUnderstood.
	self should: [16rR] raise: MessageNotUnderstood.
   	self should: [16rr] raise: MessageNotUnderstood.
	self should: [16rS] raise: MessageNotUnderstood.
   	self should: [16rs] raise: MessageNotUnderstood.
	self should: [16rT] raise: MessageNotUnderstood.
   	self should: [16rt] raise: MessageNotUnderstood.
	self should: [16rU] raise: MessageNotUnderstood.
   	self should: [16ru] raise: MessageNotUnderstood.
	self should: [16rV] raise: MessageNotUnderstood.
   	self should: [16rv] raise: MessageNotUnderstood.
	self should: [16rW] raise: MessageNotUnderstood.
   	self should: [16rw] raise: MessageNotUnderstood.
	self should: [16rX] raise: MessageNotUnderstood.
   	self should: [16rx] raise: MessageNotUnderstood.
	self should: [16rY] raise: MessageNotUnderstood.
   	self should: [16ry] raise: MessageNotUnderstood.
	self should: [16rZ] raise: MessageNotUnderstood.
   	self should: [16rz] raise: MessageNotUnderstood.
    self should: [16rABcdEfZ] raise: MessageNotUnderstood.
!

testMinMax
	
	self assert: (2 max: 5) equals: 5.
	self assert: (2 min: 5) equals: 2
!

testNegated
	self assert: 3 negated = -3.
	self assert: -3 negated = 3
!

testPrintShowingDecimalPlaces
	self assert: '23.00' equals: (23 printShowingDecimalPlaces: 2).
	self assert: '23.57' equals: (23.5698 printShowingDecimalPlaces: 2).
	self assert: '-234.56700' equals:( 234.567 negated printShowingDecimalPlaces: 5).
	self assert: '23' equals: (23.4567 printShowingDecimalPlaces: 0).
	self assert: '24' equals: (23.5567 printShowingDecimalPlaces: 0).
	self assert: '-23' equals: (23.4567 negated printShowingDecimalPlaces: 0).
	self assert: '-24' equals: (23.5567 negated printShowingDecimalPlaces: 0).
	self assert: '100000000.0' equals: (100000000 printShowingDecimalPlaces: 1).
	self assert: '0.98000' equals: (0.98 printShowingDecimalPlaces: 5).
	self assert: '-0.98' equals: (0.98 negated printShowingDecimalPlaces: 2).
	self assert: '2.57' equals: (2.567 printShowingDecimalPlaces: 2).
	self assert: '-2.57' equals: (-2.567 printShowingDecimalPlaces: 2).
	self assert: '0.00' equals: (0 printShowingDecimalPlaces: 2).
!

testRounded
	
	self assert: 3 rounded = 3.
	self assert: 3.212 rounded = 3.
	self assert: 3.51 rounded = 4
!

testSqrt
	
	self assert: 4 sqrt = 2.
	self assert: 16 sqrt = 4
!

testSquared
	
	self assert: 4 squared = 16
!

testTimesRepeat
	| i |

	i := 0.
	0 timesRepeat: [i := i + 1].
	self assert: i equals: 0.

	5 timesRepeat: [i := i + 1].
	self assert: i equals: 5
!

testTo
	self assert: (1 to: 5) equals: #(1 2 3 4 5)
!

testToBy
	self assert: (0 to: 6 by: 2) equals: #(0 2 4 6).

	self should: [1 to: 4 by: 0] raise: Error
!

testTruncated
	
	self assert: 3 truncated = 3.
	self assert: 3.212 truncated = 3.
	self assert: 3.51 truncated = 3
! !

Object subclass: #ObjectMock
	instanceVariableNames: 'foo bar'
	package: 'Kernel-Tests'!

!ObjectMock methodsFor: 'not yet classified'!

foo
	^foo
!

foo: anObject
	foo := anObject
! !

TestCase subclass: #ObjectTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!ObjectTest methodsFor: 'tests'!

testBasicAccess
	| o |
	o := Object new.
	o basicAt: 'a' put: 1.
	self assert: (o basicAt: 'a') equals: 1.
	self assert: (o basicAt: 'b') equals: nil
!

testBasicPerform
	| o |
	o := Object new.
	o basicAt: 'func' put: ['hello'].	
	o basicAt: 'func2' put: [:a | a + 1].

	self assert: (o basicPerform: 'func')	 equals: 'hello'.
	self assert: (o basicPerform: 'func2' withArguments: #(3)) equals: 4
!

testDNU
	self should: [Object new foo] raise: MessageNotUnderstood
!

testEquality
	| o |
	o := Object new.
	self deny: o = Object new.
	self assert: o = o.
	self assert: o yourself = o.
	self assert: o = o yourself
!

testHalt
	self should: [Object new halt] raise: Error
!

testIdentity
	| o |
	o := Object new.
	self deny: o == Object new.
	self assert: o == o.
	self assert: o yourself == o.
	self assert: o == o yourself
!

testIfNil
	self deny: Object new isNil.
	self deny: (Object new ifNil: [true]) = true.
	self assert: (Object new ifNotNil: [true]) = true.

	self assert: (Object new ifNil: [false] ifNotNil: [true]) = true.
	self assert: (Object new ifNotNil: [true] ifNil: [false]) = true
!

testInstVars
	| o |
	o := ObjectMock new.
	self assert: (o instVarAt: #foo) equals: nil.

	o instVarAt: #foo put: 1.
	self assert: (o instVarAt: #foo) equals: 1.
	self assert: (o instVarAt: 'foo') equals: 1
!

testNilUndefined
	"nil in Smalltalk is the undefined object in JS"

	| notDefined |
    
    <notDefined = undefined>.

	self assert: nil = notDefined
!

testYourself
	| o |
	o := ObjectMock new.
	self assert: o yourself == o
!

testidentityHash
	| o1 o2 |
	
	o1 := Object new.
	o2 := Object new.

	self assert: o1 identityHash == o1 identityHash.
	self deny: o1 identityHash == o2 identityHash
! !

TestCase subclass: #PackageTest
	instanceVariableNames: 'zorkPackage grulPackage backUpCommitPathJs backUpCommitPathSt'
	package: 'Kernel-Tests'!

!PackageTest methodsFor: 'running'!

setUp
	backUpCommitPathJs := Package defaultCommitPathJs.
	backUpCommitPathSt := Package defaultCommitPathSt.

	Package resetCommitPaths.

	zorkPackage := Package new name: 'Zork'.
	grulPackage := Package new 
					name: 'Grul';
					commitPathJs: 'server/grul/js';
					commitPathSt: 'grul/st';
					yourself
!

tearDown
	 Package 
		defaultCommitPathJs: backUpCommitPathJs;
		defaultCommitPathSt: backUpCommitPathSt
! !

!PackageTest methodsFor: 'tests'!

testGrulCommitPathJsShouldBeServerGrulJs
	self assert: 'server/grul/js' equals: grulPackage commitPathJs
!

testGrulCommitPathStShouldBeGrulSt
	self assert: 'grul/st' equals: grulPackage commitPathSt
!

testZorkCommitPathJsShouldBeJs
	self assert: 'js' equals: zorkPackage commitPathJs
!

testZorkCommitPathStShouldBeSt
	self assert: 'st' equals: zorkPackage commitPathSt
! !

PackageTest subclass: #PackageWithDefaultCommitPathChangedTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!PackageWithDefaultCommitPathChangedTest methodsFor: 'running'!

setUp
	super setUp.

	Package
		defaultCommitPathJs: 'javascripts/';
		defaultCommitPathSt: 'smalltalk/'.
! !

!PackageWithDefaultCommitPathChangedTest methodsFor: 'tests'!

testGrulCommitPathJsShouldBeServerGrulJs
	self assert: 'server/grul/js' equals: grulPackage commitPathJs
!

testGrulCommitPathStShouldBeGrulSt
	self assert: 'grul/st' equals: grulPackage commitPathSt
!

testZorkCommitPathJsShouldBeJavascript
	self assert: 'javascripts/' equals: zorkPackage commitPathJs
!

testZorkCommitPathStShouldBeSmalltalk
	self assert: 'smalltalk/' equals: zorkPackage commitPathSt
! !

!PackageWithDefaultCommitPathChangedTest class methodsFor: 'accessing'!

shouldInheritSelectors
	^ false
! !

TestCase subclass: #PointTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!PointTest methodsFor: 'tests'!

testAccessing
	self assert: (Point x: 3 y: 4) x equals: 3.
	self assert: (Point x: 3 y: 4) y equals: 4.
	self assert: (Point new x: 3) x equals: 3.
	self assert: (Point new y: 4) y equals: 4
!

testArithmetic
	self assert: 3@4 * (3@4 ) equals: (Point x: 9 y: 16).
	self assert: 3@4 + (3@4 ) equals: (Point x: 6 y: 8).
	self assert: 3@4 - (3@4 ) equals: (Point x: 0 y: 0).
	self assert: 6@8 / (3@4 ) equals: (Point x: 2 y: 2)
!

testAt
	self assert: 3@4 equals: (Point x: 3 y: 4)
!

testEgality
	self assert: 3@4 = (3@4).
	self deny: 3@5 = (3@6)
!

testTranslateBy
	self assert: 3@4 equals: (3@3 translateBy: 0@1).
	self assert: 3@2 equals: (3@3 translateBy: 0@1 negated).
	self assert: 5@6 equals: (3@3 translateBy: 2@3).
	self assert: 0@3 equals: (3@3 translateBy: 3 negated @0).
! !

TestCase subclass: #RandomTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!RandomTest methodsFor: 'tests'!

textNext

	10000 timesRepeat: [
			| current next | 
			next := Random new next.
			self assert: (next >= 0).
			self assert: (next < 1).
			self deny: current = next.
			next = current]
! !

TestCase subclass: #SetTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!SetTest methodsFor: 'tests'!

testAddRemove
	| set |
	set := Set new.
	
	self assert: set isEmpty.

	set add: 3.
	self assert: (set includes: 3).

	set add: 5.
	self assert: (set includes: 5).

	set remove: 3.
	self deny: (set includes: 3)
!

testAt
	self should: [Set new at: 1 put: 2] raise: Error
!

testPrintString
	| set |
	set := Set new.
	self assert: 'a Set ()' equals: ( set printString ).
	set add: 1; add: 3.
	self assert: 'a Set (1 3)' equals: ( set printString ).
	set add: 'foo'.
	self assert: 'a Set (1 3 ''foo'')' equals: ( set printString ).
	set remove: 1; remove: 3.
	self assert: 'a Set (''foo'')' equals: ( set printString ).
	set add: 3.
	self assert: 'a Set (''foo'' 3)' equals: ( set printString ).
	set add: 3.
	self assert: 'a Set (''foo'' 3)' equals: ( set printString ).
!

testSize
	self assert: Set new size equals: 0.
	self assert: (Set withAll: #(1 2 3 4)) size equals: 4.
	self assert: (Set withAll: #(1 1 1 1)) size equals: 1
!

testUnicity
	| set |
	set := Set new.
	set add: 21.
	set add: 'hello'.

	set add: 21.
	self assert: set size = 2.
	
	set add: 'hello'.
	self assert: set size = 2.

	self assert: set asArray equals: #(21 'hello')
! !

TestCase subclass: #UndefinedTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!UndefinedTest methodsFor: 'tests'!

testCopying
	self assert: nil copy equals: nil
!

testDeepCopy
	self assert: nil deepCopy = nil
!

testIfNil
	self assert: (nil ifNil: [true]) equals: true.
	self deny: (nil ifNotNil: [true]) = true.
	self assert: (nil ifNil: [true] ifNotNil: [false]) equals: true.
	self deny: (nil ifNotNil: [true] ifNil: [false]) = true
!

testIsNil
	self assert: nil isNil.
	self deny: nil notNil.
! !

!Boolean methodsFor: '*Kernel-Tests'!

boxed
	^self
! !
