'use strict';

module.exports = function(grunt) {

	// Load all grunt-related tasks
	// require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			// production
			prod : {
				options: {
					sassDir		: '<%= pkg.app.sassDir %>',
			        cssDir		: '<%= pkg.app.cssDir %>',
			        outputStyle	: 'compressed',
			        debugInfo	: false,
			        force		: true,
			        specify 	: [
			        	'<%= pkg.app.sassDir %>/global.scss',
			        	'<%= pkg.app.sassDir %>/ie.scss'
			        ]
			    }
			},

			// watch
			watch : {
				options: {
					sassDir		: '<%= pkg.app.sassDir %>',
					cssDir		: '<%= pkg.app.cssDir %>',
					outputStyle	: 'expanded',
					debugInfo	: true,
					force		: true,
					specify		: [
				    	'<%= pkg.app.sassDir %>/global.scss'
				    ]
				}
			}
	    },

	     bower: {
		    install: {
				options: {
					targetDir : "<%= pkg.app.jsDevLib %>"
				}
			}
		},

		// clean just deletes... with exceptions:
		clean : {
			// on start/setup remove the extra stuff from the lib folder
			setup : {
				files: [
					{
						src: ["<%= pkg.app.jsDevLib %>/modernizr/*" , "!<%= pkg.app.jsDevLib %>/modernizr/modernizr.js"], 
						// remove hidden files:
						dot: true
					},{
						// remove everything that is NOT a js file.
						src: ["<%= pkg.app.jsDevLib %>/*/*" , "!<%= pkg.app.jsDevLib %>/*/*.js"], 
						// remove hidden files:
						dot: true
					}
				]
			}
		},

		watch : {
			// watch all CSS :
			css : {
				files: '<%= pkg.app.sassDir %>/**/*.scss',
				tasks: ['compass:watch']
			}

			// watch all Scripts : 
			// scripts : {
			// 	files: 'public/assets/js-dev/**/*.js',
			// 	tasks: ['scripts']
			// }
		}

		
	});
	
	// on build of js-dev with r.js optimizer we will need to copy the results over to /js
	//grunt.loadNpmTasks('grunt-contrib-copy');
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
		
	grunt.registerTask('setup',['download and add all 3rd party vendor libraries for front end'], function(){
		
		grunt.task.run('bower:install');
		grunt.task.run('clean:setup');

	});
	
	grunt.registerTask('default',['watch']);

	grunt.registerTask('prod',['Run all prod scripts'], function(){
		grunt.task.run( 'compass:prod');
		// tasks are async... this will show up before compass is done.
		grunt.log.writeln(' TODO : add JS script.');

	});

};