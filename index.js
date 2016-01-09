$(function() {
  var themes = ['ambiance', 'solarized_dark', 'chaos', 'chrome', 'dawn', 'dreamweaver', 'github', 'idle_fingers', 'monokai'];
  var languages = ['java', 'javascript', 'python', 'rust', 'c++'];

  var editor1 = ace.edit("editor-id-1");
  editor1.setTheme("ace/theme/ambiance");
  editor1.getSession().setMode("ace/mode/javascript");

  var editor2 = ace.edit("editor-id-2");
  editor2.setTheme("ace/theme/ambiance");
  editor2.getSession().setMode("ace/mode/java");

  // By default keyboard handler will be emacs.
  editor1.setKeyboardHandler("ace/keyboard/emacs");
  editor2.setKeyboardHandler("ace/keyboard/emacs");

  populateLangs('.editor1', languages, 'javascript');
  populateLangs('.editor2', languages, 'java');

  populateThemes('.editor1', themes, 'ambiance');
  populateThemes('.editor2', themes, 'ambiance');

  $('.languages').change(function() {
    var lang = $(this).val();
    var className = $(this).attr('class');
    if(className.indexOf('editor1') > -1) {
      editor1.getSession().setMode("ace/mode/" + lang);
    } else {
      editor2.getSession().setMode("ace/mode/" + lang);
    }
  });

  $('.themes').change(function() {
    var theme = $(this).val();
    var className = $(this).attr('class');
    if(className.indexOf('editor1') > -1) {
      editor1.setTheme("ace/theme/" + theme);
    } else {
      editor2.setTheme("ace/theme/" + theme);
    }
  });

  $('.keybinding').change(function() {
    var mode = $(this).val();
    editor1.setKeyboardHandler("ace/keyboard/" + mode);
    editor2.setKeyboardHandler("ace/keyboard/" + mode);
  });
});

function populateLangs(editorClass, languages, selected) {
  for(var i = 0; i < languages.length; i++) {
    var lang = languages[i];
    if (lang === selected) {
      $(editorClass + '.languages').append('<option value=' + lang + ' selected>' + lang + '</option>');
    } else {
      $(editorClass + '.languages').append('<option value=' + lang + '>' + lang + '</option>');
    }
  }
}

function populateThemes(editorClass, themes, selected) {
  for(var i = 0; i < themes.length; i++) {
    var theme = themes[i];
    if (theme == selected) {
      $(editorClass + '.themes').append('<option value=' + theme + ' selected>' + theme + '</option>');
    } else {
      $(editorClass + '.themes').append('<option value=' + theme + '>' + theme + '</option>');
    }
  }
}