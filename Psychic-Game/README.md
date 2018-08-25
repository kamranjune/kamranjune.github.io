This is an Akinator version of the Psychic Game.

The Akinator (mind reader) changes based on if you win or lose.

The javascript was put in an object, but the function and the if statements were outside of the object.

I don't see a reason to put everything and the kitchen sink into 1 object.

I added a feature to start an alert if there is a non letter key pressed 
by translating the key pressed to an ASCII code with the charCodeAt method.
This is basically the inverse of the string.fromCharCode method.

It took a lot of analysis to realize that the math.floor(math.random * 26) should be at 26 and not 25
The key is that floor should be used rather than ceil, because ceil causes 27 slots including 0;
while floor creates 26 slots including zero,  1 for each letter of the alphabet.

Also I must remember that 26 * .9999 is 25.....  and not a concatenation of 26.99999
for some reason I kept forgetting that, and that is why floor of 25..... is 25 and
it is not floor of 26.999999 which I kept thinking of it as.
Math.random does multiplication e.g. 26 * .5  = 13.
Finally it is interesting that the Math in the Math method has an uppercase M.

