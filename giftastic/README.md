GIFtastic!

This app hits the GIPHY API and populates topics in the embeded array picked by the author and lets the user add topics to add gifs.

User can use the enter key rather than clicking the button to add a Gif.

Lexical scope is challenging with this program because the ajax call had to be repeated in the addGifButton in order for the Gif to be generated after a new topic was added.

The Bonus Download button was created successfully but is disabled and commented out, because it was interrupting the animation of gifs, 
because if a gif is downloaded the cache expected it to be in local storage
and if it is not because the browswer is not HTML5 compliant or does not download the gif locally with the button, then the animation would show a broken link.  So I disabled 
the bonus gif button feature by commenting it out.   

Also, I left comments in the files which were useful to me in remembering what I was learning at the time.