async function get_nutrition_by_name(food_name)
{
const url = 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query='+food_name;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2df2273180msha95b2a2e309084dp1944b8jsnc44917ebd81a',
		'x-rapidapi-host': 'nutrition-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    let value = JSON.parse(result);
	console.log(value);
} catch (error) {
	console.error(error);
}
}