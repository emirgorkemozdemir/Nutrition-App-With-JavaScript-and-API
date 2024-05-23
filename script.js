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
	return value;
} catch (error) {
	console.error(error);
}
}


async function get_send_data()
{
// Yazı yazılan kısmın içeriğini aldık.
let content = await $('#searchbox').val();

// Yazılan içeriği API'nin olduğu fonksiyona gönderdim ve bir cevap aldım.
// Apı'den dönen değer resulta atanmakta.
// Değeri json.stringify ile yazıya dönüştürdüm.
let final_value =JSON.stringify(await get_nutrition_by_name(content));

// localStorage.setItem yaparken önce isim verdim sonra değeri verdim.
localStorage.setItem("sonuc",final_value);

window.open("result.html");
}