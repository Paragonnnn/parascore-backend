import puppeteer from 'puppeteer';
// const path = require('path');

const transfers = async (pag) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.fotmob.com/api/transfers?&page=${pag}`);
    const data = await page.evaluate(() => {
        const pre = JSON.parse(document.querySelector('pre').innerText);
        return pre
    });
    await browser.close();
    return console.log(data);
}

export default transfers;

