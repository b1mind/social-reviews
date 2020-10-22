import App from './App.svelte'

const app = new App({
	target: document.body,
	props: {
		userName: 'World',
    age: '4.5 billion',
  }
})

export default app