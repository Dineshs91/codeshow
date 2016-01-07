$(function() {
  var themes = ['ambiance', 'solarized_dark', 'chaos', 'chrome', 'dawn', 'dreamweaver', 'github', 'idle_fingers', 'monokai'];
  var languages = ['java', 'javascript', 'python', 'rust', 'c++'];

  var editor1 = ace.edit("editor1");
  editor1.setTheme("ace/theme/ambiance");
  editor1.getSession().setMode("ace/mode/javascript");

  var editor2 = ace.edit("editor2");
  editor2.setTheme("ace/theme/ambiance");
  editor2.getSession().setMode("ace/mode/java");

  populateLangs(languages);
  populateThemes(themes);

  $('.editor1.languages').change(function() {
    var lang = $(this).val();
    editor1.getSession().setMode("ace/mode/" + lang);
  });

  $('.editor2.languages').change(function() {
    var lang = $(this).val();
    editor2.getSession().setMode("ace/mode/" + lang);
  });

  $('.editor1.themes').change(function() {
    var theme = $(this).val();
    editor1.setTheme("ace/theme/" + theme);
  });

  $('.editor2.themes').change(function() {
    var theme = $(this).val();
    editor2.setTheme("ace/theme/" + theme);
  });
});

function populateLangs(languages) {
  for(var i = 0; i < languages.length; i++) {
    var lang = languages[i];
    if (i == 0) {
      $('.languages').append('<option value=' + lang + ' selected>' + lang + '</option>');
    } else {
      $('.languages').append('<option value=' + lang + '>' + lang + '</option>');
    }
  }
}

function populateThemes(themes) {
  for(var i = 0; i < themes.length; i++) {
    var theme = themes[i];
    if (i == 0) {
      $('.themes').append('<option value=' + theme + ' selected>' + theme + '</option>');
    } else {
      $('.themes').append('<option value=' + theme + '>' + theme + '</option>');
    }
  }
}