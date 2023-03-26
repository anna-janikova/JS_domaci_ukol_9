// tady je místo pro náš program

const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}
const form = document.querySelector('form')

const signIn = (event) => {
	event.preventDefault()
	const formEmail = document.querySelector('#email')
	const email = formEmail.value
	const formPassword = document.querySelector('#password')
	const password = formPassword.value
	if (email === user.email && password === user.password) {
		form.textContent = `Přihlášený uživatel: ${user.name}.`
	} else {
		document.querySelector("#warning").textContent = "Chybné přihlašovací údaje."
		formPassword.value = ""
	}
}

form.addEventListener('submit', signIn)