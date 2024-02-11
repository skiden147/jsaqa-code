const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const {
	Given,
	When,
	Then,
	Before,
	After
} = require("@cucumber/cucumber");
const {
	getText,
	clickElement
} = require("../../lib/commands.js");

Before(async function() {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 50
	});
	const page = await browser.newPage();
	this.browser = browser;
	this.page = page;
});

After(async function() {
	if (this.browser) {
		await this.browser.close();
	}
});

Given("User is on booking page1 {string}", async function(string) {
	return await this.page.goto(`http://qamid.tmweb.ru${string}`, {
		setTimeout: 50000,
	});
});
When("User choses date1", async function() {
	return await clickElement(this.page, "body > nav > a:nth-child(2)");
});
Then("User choses movie and time1", async function() {
	return await clickElement(
		this.page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
});
Then("User chooses seats1", async function() {
	return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(9) > span:nth-child(5)");
});
Then("User booking tickets1", async function() {
	return await clickElement(this.page, ".acceptin-button");
});

Then("User sees booking code button1 {string}", async function(string) {
	const actual = await getText(this.page, ".acceptin-button");
	await expect(actual).contain(string);
});


Given("User is on booking page2 {string}", async function(string) {
	return await this.page.goto(`http://qamid.tmweb.ru${string}`, {
		setTimeout: 30000,
	});
});
When("User choses date2", async function() {
	return await clickElement(this.page, "body > nav > a:nth-child(2)");
});
Then("User choses movie and time2", async function() {
	return await clickElement(
		this.page, "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(2) > a");
});
Then("User chooses first seat2", async function() {
	return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(5)");
});
Then("User chooses second seat2", async function() {
	return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(4)");
});
Then("User booking tickets2", async function() {
	return await clickElement(this.page, ".acceptin-button");
});
Then("User sees booking code button2 {string}", async function(string) {
	const actual = await getText(this.page, ".acceptin-button");
	await expect(actual).contain(string);
});


Given("User is on booking page3 {string}", async function(string) {
	return await this.page.goto(`http://qamid.tmweb.ru${string}`, {
		setTimeout: 30000,
	});
});
When("User choses date3", async function() {
	return await clickElement(this.page, "body > nav > a:nth-child(2)");
});
Then("User choses movie and time3", async function() {
	return await clickElement(
		this.page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
});
Then("User chooses seats3", async function() {
	return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span.buying-scheme__chair.buying-scheme__chair_vip.buying-scheme__chair_taken");
});
Then("User is trying to push booking button", async function() {
	return await clickElement(this.page, ".acceptin-button");
});

Then("User remains on the movie hall page", async function() {
	const actual = await getText(this.page, "h2");
	await expect(actual).contain("Зверополис");
});

