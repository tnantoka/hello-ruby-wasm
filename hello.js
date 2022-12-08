document.querySelector('[data-id="run"]').addEventListener('click', (e) => {
  e.preventDefault();

  const source = document.querySelector('[data-id="source"]').value;
  rubyVM.eval(source);
});