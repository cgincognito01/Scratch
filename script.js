const user = prompt(`hey! what is your User name.`);

var userName =document.getElementById('user_name');

const change = () => {
	user_name.textContent = `Hello ${user}.`;
}

change ();
