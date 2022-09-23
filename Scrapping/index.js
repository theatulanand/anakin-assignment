const puppeteer = require("puppeteer")
const fs = require('fs/promises')

async function start() {
    browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage();
    await page.goto("https://food.grab.com/sg/en/restaurants")

    const names = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".name___2epcT")).map(x => x.innerText)
    })

    let data = [];
    for (let i = 0; i < names.length; i++) {
        page = await browser.newPage();
        await page.goto(`https://food.grab.com/v1/autocomplete?component=country:SG&language=en&transportType=0&keyword=${names[i]}&limit=1`)
        const result = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("*")).map(x => x.innerText)
        })

        data.push(JSON.parse(result[0]))
    }

    console.log(data)

    await fs.writeFile("./data.json", JSON.stringify(data, null, 4));

    await browser.close()
}



start()