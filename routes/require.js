module.exports = (app) => {
    app.get('/require', async(req, res) =>{
        res.render('require.ejs')
    })}