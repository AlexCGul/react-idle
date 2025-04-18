"use client"

let money = 0;
let makingMoney = 0;
let moneyUpdated = new Event("moneyUpdated")

function MoneyProcess () 
{
    window.setInterval(() => {
        AddMoney(makingMoney);
    }, 1000); // 1 second
}

function AddMoney (amount: number) 
{
    money += amount;

    if (typeof window !== 'undefined') {
    document?.dispatchEvent(moneyUpdated);
    }
}


function RemoveMoney (amount: number) 
{
    money -= amount;

    if (typeof window !== 'undefined') {
    document?.dispatchEvent(moneyUpdated);
    }
}

function AddIncome (amount: number) 
{
    makingMoney += amount;
}


function GetMoney () 
{
    return money;
}

export default {
    MoneyProcess,
    AddMoney,
    RemoveMoney,
    GetMoney,
    AddIncome,
}