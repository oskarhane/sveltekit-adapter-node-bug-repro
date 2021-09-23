import jwt from 'jsonwebtoken';

const SECRET = '12345';
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get(req) {
	const token = req.query.get('token');
	try {
		const payload = jwt.verify(token, SECRET);
		return { body: { payload } };
	} catch (e) {
		return { status: 400 };
	}
}
