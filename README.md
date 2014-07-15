// TODO :

	- generate require config off of the bower.json file.
	- 

// folder structure

| - public/
| -- assets/
| --- assets/css
| --- assets/js
| --- assets/js-dev
| --- assets/imgs
| - db/
| - sass/
| - app.js
| - Gruntfile.js
| - package.json
| - README.md
* - node_modules/


/*
 * Setup Local instance 
 */

Command Line:
- need compass:
	gem install compass 
- need to install node modules required
	npm install

- install bower packages
	grunt setup
		(this will install all packages into the bower_components and then copy them into js-dev/_libs)


/*
 * Running Locally
 */

- Command Line:
	node server.js

- during development to grunt watch :
	grunt 

- to build files via grunt/r.js :
	grunt build

	

/*
 * Adding custom front end libraries with bower
 */

 in bower.json add the dependency needed.
 	to search for a specific dependency in Command Line:
 		bower search name



	