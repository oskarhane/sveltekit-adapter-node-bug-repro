import { assetsMiddleware, prerenderedMiddleware, kitMiddleware } from '../build/middlewares.js';
import polka from 'polka';

const app = polka();

const myMiddleware = function (req, res, next) {
	console.log('Hello world!');
	next();
};

app.use(myMiddleware);

app.get('/no-svelte', (req, res) => {
	res.end('This is not Svelte!');
});

app.use(assetsMiddleware, prerenderedMiddleware, kitMiddleware);

app.listen(3000);
