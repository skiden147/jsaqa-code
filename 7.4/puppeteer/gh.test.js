let page;

beforeEach(async () => {
	page = await browser.newPage();
});

afterEach(() => {
	page.close();
});

describe("Github page tests", () => {
	beforeEach(async () => {
		await page.goto("https://github.com/team");
	});

	test("The h1 header content'", async () => {
			const firstLink = await page.$("header div div a");
			await firstLink.click();
			await page.waitForSelector('h1');
			const title2 = await page.title();
			expect(title2).toEqual("GitHub: Let’s build from here · GitHub")
		},
		7000);



	test("The first link attribute", async () => {
			const actual = await page.$eval("a", link => link.getAttribute('href'));
			expect(actual).toEqual("#start-of-content")
		},
		4000);

	test("The page contains Sign in button", async () => {
			const btnSelector = ".btn-large-mktg.btn-muted-mktg";
			//".btn-large-mktg.btn-mktg";
			await page.waitForSelector(btnSelector, {
				visible: true,
			});
			const actual = await page.$eval(btnSelector, link => link.textContent);
			expect(actual).toContain("Sign up for free")
		},
		5000);

});

test("The title on Github Education page", async () => {
		await page.goto("https://education.github.com/");
		const actual = await page.title();
		expect(actual).toEqual("Engaged students are the result of using real-world tools - GitHub Education");
	},
	4000);

test("The title on Github Enterprise page", async () => {
		await page.goto("https://github.com/enterprise");
		const actual = await page.title();
		expect(actual).toEqual("The AI Powered Developer Platform. · GitHub");
	},
	4000);

test("The title on Github Startups page", async () => {
		await page.goto("https://github.com/enterprise/startups");
		const actual = await page.title();
		expect(actual).toEqual("GitHub for Startups: Build your startup on GitHub · GitHub");
	},
	3000);



