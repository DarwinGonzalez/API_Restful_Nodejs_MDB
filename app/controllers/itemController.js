import Item        from '../models/item.js'


async function main(req, res) {
    let items = await Item.find({})
    res.render('item', { items: items })
}

async function getItem(req, res) {
    const item = new Item({ 'nid': req.body.nid, 'valor': req.body.valor })
    let result = await Item.findOne({'nid':req.body.nid})
    if (result) throw new Error('Item ya existe')
    item.save()

    res.redirect('/item')
}

module.exports = { main, getItem }