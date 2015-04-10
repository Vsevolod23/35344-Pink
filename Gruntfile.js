module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-lintspaces');

  grunt.registerTask('lint', ['lintspaces']);

require("load-grunt-tasks")(grunt);
grunt.initConfig({

      sass: {
      style: {
        files: {
           "build/css/style.css": "source/scss/style.scss"
        }
      }
    },


    autoprefixer: {
      options: {
        browsers: ["last 2 version", "ie 10"]
      },
      style: {
        src: "build/css/style.css"
      }
    },


  cmq: {
    style: {
      files: {
        "build/css/style.css": ["build/css/style.css"]
      }
    }
  },


  cssmin: {
    style: {
     options: {
      keepSpecialComments: 0,
      report: "gzip"
     },
      files: {
        "build/css/style.min.css": ["build/css/style.css"]
      }
    }
  },

  csscomb: {
    style: {
      expand: true,
      src: ["scss/**/*.scss"]
    }
  },

  imagemin: {
    imagen: {
      options:{
        optimizationLevel: 3
      },
      files: [{
        expand: true,
        src: ["build/img/**/*.{png,jpg,gif,svg}"]
      }]
    }
  },

  htmlmin: {
    options: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      caseSensitive: true,
      keepClosingSlash: false
    },
    html: {
      files: {
        "build/index.min.html": "build/index.html"
      }
    }
  },

  copy: {
    build: {
      files: [{
        expand: true,
        cwd: "source",
        src: [
          "img/**",
          "js/**",
          "index.html"
        ],
        dest: "build"
      }]
    }
  },

  clean: {
    build: ["build"]
  },

  replace: {
    build: {
      options: {
        patterns: [{
          match: /[\"\']img\//g,
          replacement: '"/static/img/'
        }, {
          match: /[\"\']css\//g,
          replacement: '"/static/css/'
        }, {
          match: /[\"\']js\//g,
          replacement: '"/static/js/'
        }]
      },

      files: [{
        expand: true,
        src: [
          "build/css/style*.css",
          "build/index*.html"
        ]
      }]
    }
  }

});

grunt.registerTask("build", [
  "clean",
  "copy",
  "sass",
  "autoprefixer",
  "cmq",
  "cssmin",
  "imagemin",
  "csscomb",
  "htmlmin"

]);


};
