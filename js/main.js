const steps = document.querySelectorAll('.step');

const bar = document.querySelector('#bar');

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

var currentValue = 1;

next.addEventListener('click', () => {
	if ( currentValue < steps.length ) {
		currentValue++;
		updateStep();
		bar.style.width = (currentValue-1)*33 + "%";
	}

});

prev.addEventListener('click', () => {
	if ( currentValue > 1 ) {
		currentValue--;
		updateStep();
		bar.style.width = (currentValue-1)*33 + "%";
	}
});


function updateStep() {
	steps.forEach((step,ind)=>{
		if (ind<currentValue) {
			step.classList.add('active');
		}
		else {
			step.classList.remove('active');
		}
	});

	if (currentValue === steps.length) {
		next.disabled = true;
	} else if (currentValue === 1) {
		prev.disabled = true;
	} else {
		next.disabled =	prev.disabled = false;
	}
}