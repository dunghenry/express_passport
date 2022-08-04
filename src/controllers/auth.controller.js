class authController {
    static async login(req, res) {
        try {
            return res.status(200).json({
                body: req.body,
            });
        } catch (error) {
            return res.status(500).json(error.json);
        }
    }
    static async status(req, res) {
        try {
            if(req.isAuthenticated()){
                return res.status(200).json({
                    status: 'success',
                    data: {
                        username: "TranDung"
                    }
                })
            }
            return res.status(400).json({
                status: 'failed',
                data: null
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async profile(req, res) {
        try {
            if (req.isAuthenticated()) {
                return res.status(200).json({
                    status: "success",
                    pagename: "home",
                    data: {
                        username: "Tran Van Dung"
                    }
                })
            }
            return res.status(400).json({
                status: "failed",
                pagename: "page not found"
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}


module.exports = authController;