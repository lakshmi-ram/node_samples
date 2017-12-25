require('maven').create({
    cwd: 'C:/Users/Uma Ramanthan/IdeaProjects/demo1'
}).execute(['clean', 'install'], { 'skipTests': true });
//Add then to handle exceptions
//Add start jar in call back