window.onbeforeunload = function(){ return 1; };
const keySequence = [
    'a',
    'l',
    'e',
    'r',
    't',
];
let userInput = new Array( keySequence.length );

window.addEventListener( 'keydown', ( { key } ) => {
    userInput = [ ...userInput.slice( 1 ), key ];

    if ( keySequence.every( ( v, k ) => v === userInput[ k ] ) ) {
        window.location.replace("https://classroom.google.com/");
    }
} );
