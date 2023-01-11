const codebox = document.querySelector("[name=codebox]")

  codebox.addEventListener("keydown", (e) => {
    let { keyCode } = e;
    let { value, selectionStart, selectionEnd } = codebox;

    if (keyCode === 9) {  // TAB = 9
      e.preventDefault();

      codebox.value = value.slice(0, selectionStart) + "\t" + value.slice(selectionEnd);

      codebox.setSelectionRange(selectionStart+2, selectionStart+2)
    }
  });