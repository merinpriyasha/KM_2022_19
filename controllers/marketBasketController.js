const QRCode = require('qrcode')

module.exports.generateQRcode = (req, res) => {

    const opts = {
        errorCorrectionLevel: 'H',
        type: 'terminal',
        quality: 0.95,
        margin: 1,
        color: {
            dark: '#208698',
            light: '#FFF',
        },
    }

    QRCode.toFile('coupenQR.png', "https://www.figma.com/file/0Dg10gi2ZxGmNKmluLm85Y/For-PP1?node-id=0%3A1", opts).then(qrImage => {
        console.log("File", qrImage)
    }).catch(err => {
        console.error(err)
    })
}