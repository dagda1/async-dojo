Asynchronicity
==============
### Setup

1. Install Node.js from http://nodejs.org or your favorite package manager.

2. Install grunt and bower. `npm install -g grunt-cli bower`.  Windows users will need msysgit installed, see https://www.npmjs.org/package/bower.

3. Run `npm install && bower install` inside the project root to install the JS dependencies. 

4. Harmony generators are not turned on by default but the procedure to enable them is easy: open the chrome://flags page then check the "Enable Experimental JavaScript" option and restart Canary. 

5. You will need two terminal processes open to watch for changes in the javascript code and to run the demo express web server.

6. In the first terminal process, `cd` into the install directory and enter ```grunt start```.  Then enter ```http://localhost:3000/``` into a new browser session and you should see the home page.

7. In a new terminal process, `cd` into the install directory and enter ```grunt start```.  This process will compile the javascript into one main file.

### Test 1

1.  Open file ```app/scripts/authenticator.js```.

2.  This file contains an ```Authenticator``` object which has one ```login``` method.

3.  You can test the code works by entering ```007``` into the password field by the Authenticate button and pressing Authenticate.  A success message will be entered

3.  ```login``` makes an asynchronous call via the ```getJSON``` method which is located in ```~/app/scripts/read.js```.

4.  Your mission is to refactor the code in ```~/app/scripts/read.js``` to return a promise instead of directly working with callbacks.

    **hint:** The RSVP promise signature is ``` new RSVP.Promise(function(resolve, reject)```

5.  When ```getJSON``` returns a promise, you will need to refactor the code in ```app/scripts/authenticator.js``` to work with promises.

6.  Test your code works by repeating step 3.

7.  Finally open ```~/app/scripts/handler.js``` and go to line 60 where the click handler for authenticate is defined.

8.  Refactor code in ```app/scripts/authenticator.js``` to return a promise and refactor the click handler detailed above to work with promises.

9.  Test your code works by repeating step 3.
