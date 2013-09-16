module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['src/*.js'],//['src/1.js','src/3.js','src/2.js']
                dest: 'build/<%= pkg.name %>.min.js'
            }       
        },        
        compass: {                  // Task
            dist: {                   // Target
              options: {              // Target options
                sassDir: 'sass',
                cssDir: 'build',
                imagesDir:'images',
                environment: 'production',
                httpPath : "/"
              }
            },
            dev: {                    // Another target
              options: {
                sassDir: 'sass',
                cssDir: 'css'
              }
            }
          },
        watch: {
            // watch方法可以监听js和css的改动 然后执行对应的编译方法
         scripts: {
            files: '*src/*.js',
            tasks: ['jshint','uglify'],
            options: {
              interrupt: true,
            },
          },
          css: {
            files: 'sass/*.scss',
            tasks: ['compass'],
            options: {
              livereload: true,
            }
          }
        },
        
        concat: {
            // 合并文件的方法
            options: {
                //定义一个用于插入合并输出文件之间的字符
                separator: ''
            },
            dist: {
                //用于连接的文件
                src: ['src/*.js'],
                //返回的JS文件位置
                dest: 'build/<%= pkg.name %>.js'
            }
        },
        jshint: {
            //定义用于检测的文件
            files: ['src/*.js'],
            //配置JSHint (参考文档:http://www.jshint.com/docs)
            options: {
                //你可以在这里重写jshint的默认配置选项
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
    });

    // 加载任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-compass');
    // 默认任务
    //grunt.registerTask('default', ['uglify','concat','compass','jshint']);
    grunt.registerTask('default', ['uglify','compass']);
};
