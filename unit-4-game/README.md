This is an Kryptonite version of the Crystal Collectors Game.

You must have an internet connection for proper audio/visual.

Also please view it on a standard laptop screen because I don't like using bootstrap grid layouts
and I don't know a better way.

I left some comments in the javascript file to remind me of things I learned.

I tried to put as much as I can in one object for easy reference.

I learned some things the hard way:

1.  Don't name variables with alphanumerically, just numerically.
2.  for the jquery selector you have to include the word function() and then
call the function in the brackets; "function()" is not a placeholder for putting a method in the 
parentheses after "click";
3.  buttons are selected by name and you have to put a certain mixture of quotes and brackets to select them.
4.  the button selector will not accept an inverse of single quotes and double quotes, it has to be how I put it.
5.  I think the setInterval gets cached somehow after the first run, because I tried commenting it out and 
it still worked.
6.  I don't know how setTimeout works, I tried it in a way I thought would make sense, but it did not work,
so I switched back to setInterval and recalled the background image after an interval.
7.  I had to start a new game because playing around with the background image, otherwise the new game 
would not reset while there was an interval function playing aroudn with the background image.

8.  I wish I knew how to use media queries and bootstrap grid layout better, or better yet I wish 
there was a better alternative to bootstrap grid layout because you cannot get precise positioning
and I REALLY DON'T LIKE BOOTSTRAP GRID LAYOUT.  I wish there was a GUI method, 
like the youtube advertisements for wix.com.   There must be a better CSS Layout solution.