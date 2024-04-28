const express = require('express');
const path = require('path');
const Expense=require('../model/expenseModel.js');

const router = express.Router();

router.post('/create',createExpense);
router.get('/retrieve',retrieveExpense);
router.delete('/delete',deleteExpense);


async function retrieveExpense(req, res) {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteExpense(req,res){
    try {
        // console.log(req)
        const id=req.body._id
        await Expense.deleteOne({_id:id});
        res.json({msg:"Successfully deleted"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createExpense(req,res){
    try {
        let body=req.body;
        let newExpense=new Expense({
            title:body.title,
            amount:body.amount,
            date:body.date
        })
        await newExpense.save();
        return res.status(200).send("created !!!");
        
    } catch (error) {
        console.log(error);
        return res.status(400).send(" CHECK THE INPUT");
    }
}

module.exports=router;