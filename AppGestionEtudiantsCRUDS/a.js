const auth  = (req, res, next) => {
    const user = req.query.user
    if (user === 'admin') {
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}
app.use(auth)

app.get('/about', (req, res) => {
    console.log("Admin page")
    return res.send('Admin space')
})