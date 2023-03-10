const routesRecord = require('express').Router();
const sql = require('../database/mysql')
routesRecord.get("/record/getAllUserIncomesByID", async(req, res) => {
  try{
    await sql.query("SELECT * FROM `incomes` ", (err, rows) => {
      res.status(201).send(rows);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = routesRecord;