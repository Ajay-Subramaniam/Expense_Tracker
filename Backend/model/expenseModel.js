const mongoose=require('mongoose');

const expenseSchema=new mongoose.Schema({
    title:String,
    amount:Number,
    date:String
});

const Expense=mongoose.model('expenses',expenseSchema);

module.exports=Expense;