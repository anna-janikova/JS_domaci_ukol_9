// tady je místo pro náš program

const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}
const form = document.querySelector('form')

const signIn = (event) => {
	event.preventDefault()
	const input = document.querySelector('input')
	const email = input.value
    const password = input.value
    if (email = "bartolomej.rozumbrada@gmail.com", password= "vimzenicnevim"){
	form.textContent = `Přihlášený uživatel:${user.name}.`} else {form.textContent = "Chybné přihlašovací údaje."}
}



form.addEventListener('submit', signIn)