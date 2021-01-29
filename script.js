const res = document.querySelector('#res');
const msg = document.querySelector('#msg');
const input  = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    let strUp = input.value;
    let result = romanToInt(strUp.toUpperCase());
    
    if(strUp == ''){
        msg.classList.add('text-small');
        input.classList.add('outline-danger');
        msg.textContent = 'O campo não pode estar vazio, por favor, informe um número romano.';
        msg.appendChild(td);
    } else {
        res.innerHTML = `${result}`;
        input.classList.remove('outline-danger');
        msg.textContent = '';
        input.focus();
    }
    
});

function romanToInt(roman){
	let result = 0;

	const numbers = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	};

	for(let i=0;i<roman.length;i++){
		let current = roman[i];
		let next = roman[i+1];

		if(next && numbers[next] > numbers[current]){
			result -= numbers[current];
		} else {
			result += numbers[current];
		}
	}

	return result;
}

function newEl(el){
    return document.createElement(el);
}