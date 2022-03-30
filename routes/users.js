const { Router } = require('express');
const { check } = require('express-validator');

const { roleValidate, emailValidate, userByID } = require('../helpers/dbValidators');
const { validateFields } = require('../middlewares/validateFields');

const { usersGet, usersPut, usersPost, usersPatch, usersDelete } = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.put('/:id', [
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(userByID),
    check('role').custom(roleValidate),
    validateFields
], usersPut);

router.post('/', [
    //Preparing the mistakes
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required and more than 6 characters').isLength({ min: 6 }).not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('email').custom(emailValidate),
    // check('role', 'Invalid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(roleValidate),
    validateFields
],usersPost);

router.patch('/', usersPatch);

router.delete('/', usersDelete);


module.exports = router;