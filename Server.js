const PORT = 9999
const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const { response } = require('express')


const app = express()

const sources = [
    {
        name: 'Forbes',
        address: 'https://www.forbes.com/markets/?sh=38b457ef1fbf',
        base: ''
    },
    {
        name: 'Yahoo Finance',
        address: 'https://finance.yahoo.com/topic/crypto',
        base: 'https://finance.yahoo.com'
    },
    {
        name: 'WSJ',
        address: 'https://www.wsj.com/news/markets/stocks',
        base: ''
    },
    {
        name: 'News Now',
        address: 'https://www.newsnow.com/us/Business/Cryptocurrencies?type=ln',
        base: ''
    },
    {
        name: 'Cointelegraph',
        address: 'https://cointelegraph.com/tags/markets',
        base: 'https://cointelegraph.com'
    },
    {
        name: 'Cryptopotato',
        address: 'https://cryptopotato.com/category/crypto-news/page/5/',
        base: ''
    },
    {
        name: 'Bitcoin magazine Articles',
        address: 'https://bitcoinmagazine.com/articles',
        base: 'https://bitcoinmagazine.com'
    },
    {
        name: 'Bitcoin magazine Markets',
        address: 'https://bitcoinmagazine.com/markets',
        base: 'https://bitcoinmagazine.com'
    },
    {
        name: 'CoinPedia',
        address: 'https://coinpedia.org/recent-posts/',
        base: ''
    },
    {
        name: 'FXEmpire',
        address: 'https://www.fxempire.com/forecasts/cryptocurrencies',
        base: ''
    },
    {
        name: 'ZyCrypto',
        address: 'https://zycrypto.com/category/exchanges/',
        base: ''
    },
    {
        name: 'CryptoTicker',
        address: 'https://cryptoticker.io/en/crypto-news/exchanges/',
        base: ''
    },
    {
        name: 'Daily HODL',
        address: 'https://dailyhodl.com/news/',
        base: ''
    },

]

const prices = [
    {
        name: 'Coindesk',
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

            $('a:contains("crypto")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("news")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("market")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("transactions")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("price")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("prediction")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("highlight")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("blockchain")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("mining")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("staking")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("smart contract")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("Decentralised")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("wallet")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("token")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("gas")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("p2p")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("validator")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: source.base + url,
                    source: source.name
                })
            })
            $('a:contains("hash")', html).each(function () {
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
                const current_price = $(this).text()
                const url = $(this).attr('href')

                price.push({
                    current_price,
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
