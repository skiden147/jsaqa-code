const {
	test,
	expect
} = require('@playwright/test');
const {
	email,
	password
} = require('../user');

test('successful authorization', async ({
	page
}) => {
	await page.goto('https://netology.ru/?modal=sign_in');
	await page.getByPlaceholder('Email').click();
	await page.getByPlaceholder('Email').fill(email);
	await page.getByPlaceholder('Пароль').click();
	await page.getByPlaceholder('Пароль').fill(password);
	await page.getByTestId('login-submit-btn').click();
	await expect(page).toHaveURL("https://netology.ru/profile/8675329");
	await expect(page.getByRole('heading', {
		name: 'Моё обучение'
	})).toHaveText('Моё обучение');
});

test('unsuccessful authorization', async ({
	page
}) => {
	await page.goto('https://netology.ru/?modal=sign_in');
	await page.getByPlaceholder('Email').click();
	await page.getByPlaceholder('Email').fill('trubachev@gmail.com');
	await page.getByPlaceholder('Пароль').click();
	await page.getByPlaceholder('Пароль').fill('12345qwerty');
	await page.getByTestId('login-submit-btn').click();
	await expect(page.getByTestId('login-error-hint')).toHaveText('Вы ввели неправильно логин или пароль')



})