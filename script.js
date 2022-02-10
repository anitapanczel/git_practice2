const sumOnClick = () => {
	
// <input type="number" id="result">
// az eredmény inputnak "result" class-a van. kikeressük
	const resultInputElement = document.getElementById('result');

// <input type="number" class="add"></input>
// az összesítendő inputoknak "add" class-uk van és number type-juk. összeszedjük mindent egy NodeList-be
	const inputElementsToSumNodeList = document.getElementsByClassName('add');

// átkonvertáljuk array-be, hogy lehessen map függvényt használni rajta
	const inputElementsToSumArray = [...inputElementsToSumNodeList];

// készítünk egy másik arrayt az elemek value-jából, ami számokra van konvertálva
	const inputValuesToSumArray = inputElementsToSumArray.map(element => Number(element.value));

// definiálunk egy összeadó függvényt a reduce számára
	const reducerToSum = (partialSumValue, currValue) => partialSumValue + currValue;

// az inputElement array reduce-nek átadjuk az összeadó függvényt, ami végig megy az összes elemen lefuttatva rajta a reducer-t
	const summedValue = inputValuesToSumArray.reduce(reducerToSum);

// az eredmény input value értékét beállítjuk az összegre
	resultInputElement.value = summedValue;

// <input type="number" class="add"></input>
// <input type="number" id="result">
	document.getElementById('result').value = [...document.getElementsByClassName('add')].map(element => Number(element.value)).reduce((summed, current) => summed + current);
}

const init = () => {
	document.querySelector('button').addEventListener('click', sumOnClick);
}

window.addEventListener('load', init);