const labels = document.querySelectorAll('.form-control label');

labels.forEach(label =>{
    label.innerHTML = label.innerText //letters of the words -> email
    .split('') //converted to array of the letters
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) //mapping to the arrays with a span around it
    .join('') //converting back into the string
})