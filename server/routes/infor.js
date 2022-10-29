let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let inforController = require('../controllers/infor');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


//connect to info model
let Infor = require('../models/infor');


// get route for info list page - read operation
router.get('/', inforController.displayInforList);

// get route for displaying info add page - create operation
router.get('/add',requireAuth,inforController.displayAddPage);

//get route for displaying info process add page - create operation
router.post('/add',requireAuth,inforController.processAddPage);

// get route for displaying info edit page - create operation
router.get('/edit/:id',requireAuth,inforController.displayEditPage);

// post route for displaying info edit page - create operation
router.post('/edit/:id',requireAuth, inforController.processEditPage);

// get to perform deletion - delete operation
router.get('/delete/:id',requireAuth, inforController.performDelete);
module.exports = router;