const source = document.querySelector('[data-id="source"]');
const examples = document.querySelector('[data-id="examples"]');
const examplesToggle = examples.querySelector('.dropdown-toggle');

const onChangeExample = () => {
  const example = examplesToggle.textContent.trim(); 

  (async () => {
    const res = await fetch(`examples/${example}.rb`)
    source.value = await res.text();
  })();
};
onChangeExample();

[...examples.querySelectorAll('.dropdown-item')].forEach((dropdown) => {
  dropdown.addEventListener('click', (e) => {
    e.preventDefault();
    examplesToggle.textContent = e.target.textContent;
    onChangeExample();
  });
});

document.querySelector('[data-id="run"]').addEventListener('click', (e) => {
  e.preventDefault();

  rubyVM.eval(source.value);
});

window.constructors = {
  p5: (...args) => new p5(...args)
};
