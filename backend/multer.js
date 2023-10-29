const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, res, cd) {
        cd(null, "uploads/");
    },
    filename: function (req, file, cd) {
        const uniqueSuffix = Date.now() + "-" + Math.round.apply(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cd(null, filename + "-" + uniqueSuffix + ".png")
    },
})

exports.upload = multer({storage:storage})
