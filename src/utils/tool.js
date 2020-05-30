export function src(url){
	let b = url.split('/')
	let src = b[4] + '/' +b[5]
	return src
}