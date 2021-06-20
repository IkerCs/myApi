const cheerio = require('cheerio');
const request = require('request-promise');

async function MyBotListProfile(id) {
    const $ = await request({
        uri: `http://portalmybot.com/mybotlist/user/${id}`,
        transform: (body) => cheerio.load(body),
    });
    const isAValidURL = $('.card-text').html();
    if (!isAValidURL) throw new Error('MyBotListProfile: Invalid ID')
    const user = {
        id,
        avatar: $('.card-body .card-title .rounded-circle').attr('src'),
        tag: $('.card-title').next().html(),
        info: $('.card-text').html().substring(6, $('.card-text').html().length),
        bots: []
    }
    $('.row .col-12 .row .col-sm-6').each((i, el) => {
        
        const name = $(el).find('h5.card-title').html();
        const description = $(el).find('h6.card-subtitle').html();
        const tag = $(el).find('p.card-text small.text-muted').html();
        let url = $(el).find('a.btn').attr('href');
        url = url.substring(3, url.length);
        url = `https://portalmybot.com/mybotlist/${url}`;
        user.bots.push({
            name,
            description,
            tag,
            url,
        })
    })
    return user;
}

async function MyBotProfile(id) {
    const $ = await request({
        uri: `http://portalmybot.com/u/${id}`,
        transform: (body) => cheerio.load(body),
    });
    const isAValidURL = $('.intro h1.username').html();
    if (!isAValidURL) throw new Error('MyBotProfile: Unknown user')
    const user = {
        id: $('link').attr('href').substring(35, 53),
        username: $('.intro h1.username').html().split('#')[0].trim(),
        discriminator: $('.intro h1.username').html().split('#')[1].trim(),
        tag: $('.intro h1.username').html().trim(),
        level: $('figure.avatar i.avatar-presence').html().trim(),
        points: $('.stats-content h1.countPoint').text().substring($('.stats-content h1.countPoint').text().length - 6, 0),
        followers: $('.stats-content h1.countFollow').text().substring($('.stats-content h1.countFollow').text().length - 10, 0),
        achievements: [],
        codes: [],
    }
    $('.column.col-12.mt-2 .columns .col-xs-2').each((i, el) => {
        const name = $(el).find('.column.col-xs-2 figure').attr('data-tooltip').substring(6, $(el).find('.column.col-xs-2 figure').attr('data-tooltip').length);
        const id = $(el).find('.column.col-xs-2 a').attr('href').substring(9, $(el).find('.column.col-xs-2 a').attr('href').length);
        const url = `https://portalmybot.com/logro/${id}`;
        const icon = `https://portalmybot.com/assets/badges/v1/badge_${id}.png`
        user.achievements.push({
            name,
            id,
            url,
            icon
        });
    });
    $('.columns .column.col-12.col-md-12').each((i, el) => {
        const name = $(el).find('.card-title a').text().trim();
        const library = $(el).find('span.label').html().trim();
        const category = $(el).find('span.label.text-cat').html().trim();
        const id = $(el).find('.card-title a').attr('href').substring(8, $(el).find('.card-title a').attr('href').length)
        const url = `https://portalmybot.com/code/${id}`;
        const description = $(el).find('.text-cort').text().trim() == '' ? null : $(el).find('.text-cort').text().trim();
        user.codes.push({
            name,
            library,
            category,
            id,
            url,
            description,
        })
    })
    return user;
}

module.exports = {
    MyBotListProfile,
    MyBotProfile,
}