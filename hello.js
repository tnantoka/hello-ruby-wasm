const source = document.querySelector('[data-id="source"]');

(async () => {
  const res = await fetch('example.rb')
  source.value = await res.text();
})();

document.querySelector('[data-id="run"]').addEventListener('click', (e) => {
  e.preventDefault();

  rubyVM.eval(source.value);
});
