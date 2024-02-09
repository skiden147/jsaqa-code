const {
	clickElement,
	getText
} = require("./lib/commands.js");
const reservationButtonSel = "body > main > section > button";
const reservationCodeButton = "body > main > section > div > button";
const date = "body > nav > a:nth-child(2)";


let page;

beforeEach(async () => {
	page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
	page.close();
});

describe("Cinema tests", () => {
	beforeEach(async () => {
		await page.goto("http://qamid.tmweb.ru/client/index.php");
		await clickElement(page, date);
	});

	test("First happy path test'", async () => {
		await clickElement(page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
		await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(9) > span:nth-child(5)");
		await clickElement(page, reservationButtonSel);
		const actual = await getText(page, reservationCodeButton);
		expect(actual).toContain("Получить код бронирования")
	});

	test("Second happy path test'", async () => {
		await clickElement(page, "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(2) > a");
		await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(5)");
		await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(4)");
		await clickElement(page, reservationButtonSel);
		const actual = await getText(page, reservationCodeButton);
		expect(actual).toContain("Получить код бронирования")
	});

	test("Sad path test'", async () => {
		await clickElement(page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
		await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span.buying-scheme__chair.buying-scheme__chair_vip.buying-scheme__chair_taken");
		await clickElement(page, reservationButtonSel);
		const actual = await getText(page, "body > main > section > div.buying__info > div > h2");
		expect(actual).toContain("Зверополис")
	});

});
    

  

