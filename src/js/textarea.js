const textarea = document.querySelector('#textarea');
textarea.value = localStorage.getItem('textarea') ? localStorage.getItem('textarea') : '';

textarea.addEventListener('keydown', function(e) {

  localStorage.setItem('textarea', textarea.value);

  // ctrl + q to indent // hijacking the tab key behavior is not good for accessibility.
  if (e.ctrlKey && e.key == 'q') {

    let start = this.selectionStart;
    let end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) +
      "  " + this.value.substring(end);

    // put caret at right position again
    this.selectionStart =
      this.selectionEnd = start + 2;
  }
})
