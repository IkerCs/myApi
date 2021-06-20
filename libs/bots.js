const cheerio = require('cheerio');
const request = require('request-promise');
const { MyBotListProfile } = require('./profile');

async function getBot(id) {
  const req = await request(`http://portalmybot.com/mybotlist/bot/${id}`);
  const $ = cheerio.load(req)
  const isAValidURL = $('.card-title').html();
  if (!isAValidURL) throw new Error('getbot: Invalid ID')
  const bot = {
    id,
    username: $('.card-title').html(),
    shortDescription: $('.card-text').html(),
    description: $('.card-text').next().next().html(),
    avatar: $('img.card-img').attr('src'),
    prefix: $('span.badge-warning').html(),
    category: $('span.badge-info').html(),
    library: $('span.badge-success').html(),
    invite: null,
    discord: null,
    web: null,
    author: await MyBotListProfile($('.card .card-body a').attr('href').substring(8, $('.card .card-body a').attr('href').length))
  };
  $('.card-links a.btn').each((i, el) => {
    switch(i) {
      case 0:
        bot.invite = $(el).attr('href')
        break;

      case 1:
        bot.discord = $(el).attr('href')
        break;

      case 2:
        bot.web = $(el).attr('href')
        break;

      default:
        break;
    }
  })
  return bot;
}

async function searchBot(content) {
  if (typeof content != 'string') throw new TypeError('searchBot content must be string')
  const $ = await request({
    uri: `https://portalmybot.com/mybotlist/buscar.php?op=${encodeURIComponent(content)}`,
    transform: (body) => cheerio.load(body),
  });
  const bots = [];
  $('.row .col-12 .row').each((i, el) => {
    if (i == 0) return;
    const name = $(el).find('.card-body h5.card-title').html();
    const description = $(el).find('.card-body h6.card-subtitle').html();
    const category = $(el).find('.card-body p.card-text small.text-muted span.badge').html();
    let url = $(el).find('.card-body a').attr('href').substring(2, $(el).find('.card-body a').attr('href').length)
    const id = $(el).find('.card-body a').attr('href').substring(6, $(el).find('.card-body a').attr('href').length)

    url = `https://portalmybot.com/mybotlist/${url}`;
    bots.push({
      name,
      description,
      category,
      url,
      id,
    })
  });
  return bots;
}
module.exports = {
    getBot,
    searchBot,
}