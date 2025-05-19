"use client"

let money = 10000;
let makingMoney = 0;
let moneyProcessStart = false;
let moneyUpdated = new Event("moneyUpdated")

function MoneyProcess () 
{
    if (moneyProcessStart) return;
    moneyProcessStart = true;
    
    window.setInterval(() => {
            console.log("TIMER");
        AddMoney(makingMoney);
    }, 10000); // 1 second
}

function AddMoney (amount: number) 
{
    console.log("Adding money: " + amount);
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