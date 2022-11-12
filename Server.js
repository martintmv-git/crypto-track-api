const PORT = 9999
const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const { response } = require('express')


const app = express()

const sources = [
    {
        name: 'forbes',
        address: 'https://www.forbes.com/markets/?sh=38b457ef1fbf',
        base: ''
    },
    {
        name: 'yahoo',
        address: 'https://www.shorturl.at/swEIV',
        base: ''
    },

]

const prices = [
    {
        name: 'coindesk',
        address: 'https://www.coindesk.com',
        base: 'https://www.coindesk.com'
    },
]



const articles = []
sources.forEach(source => {
    axios.get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("Economy")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("Binance")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("FTX")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("Coinbase")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })

        })
})

const price = []
prices.forEach(source => {
    axios.get(source.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("$")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                price.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
        })
    })

app.get('/', (req, res) => {
    res.json('Welcome to Crypto-Track-API --- V.1.3')
})

app.get('/news', (req, res) => {
    res.json(articles)
})

app.get('/news/:sourceId', (req, res) => {
    const sourceId = req.params.sourceId

    const sourceAddress = sources.filter(sources => source.name == sourceId)[0].address
    const sourceBase = sources.filter(sources => source.name == sourceId)[0].base


    axios.get(sourceAddress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificSource = []

            $('a:contains("crypto")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                specificSource.push({
                    title,
                    url: sourceBase + url,
                    source: sourceId
                })
            })
            res.json(specificSource)
        }).catch(err => console.log(err))
})

/* ------------------ */

app.get('/price', (req, res) => {
    res.json(price)
})

app.get('/price/:sourceId', (req, res) => {

    const sourceId = req.params.sourceId

    const sourceAddress = sources.filter(sources => source.name == sourceId)[0].address
    const sourceBase = sources.filter(sources => source.name == sourceId)[0].base


    axios.get(sourceAddress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificSource = []

            $('a:contains("$")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                specificSource.push({
                    title,
                    url: sourceBase + url,
                    source: sourceId
                })
            })
            res.json(specificSource)
        }).catch(err => console.log(err))
})



app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
