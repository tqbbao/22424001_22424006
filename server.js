const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.json({
        msg: '22424001:Tran Quoc Bao -- 22424006:Le Ha Giang     '
    })
})

app.listen( 3000, () => {
    console.log(`22424001:Tran Quoc Bao -- 22424006:Le Ha Giang    `);
})
