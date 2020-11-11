const puppeteer = require('puppeteer');

var endpoint = "https://canadia.ie//graphql/";

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    //TODO: 'Fetch all products on current webpage.'

    browser.close();
}

async function scrapeProductInfo(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);

    //Destructuring
    //Handle on the xPath of the element we want to scrape
    //Pulling out the first item of the array into variable 'element'
    const [element] = await page.$x('//*[@id="app"]/div[4]/div/div/div[1]/table');
    const text = await element.getProperty('textContent');
    const rawText = await text.jsonValue();

    console.log(rawText);

    browser.close();
}

//Scrape products from web page
scrapeProduct('https://canadia.ie/products/laminate-flooring/');

//Scrape product info
scrapeProductInfo('https://canadia.ie/products/laminate-flooring/aberdeen-oak-plank-12mm/');