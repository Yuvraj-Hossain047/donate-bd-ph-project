// Utilities====================================
function getInnerText(id){
    const x = document.getElementById(id).innerText;
    const y = parseFloat(x);
    return y;
}
function getValue(id){
    const p = document.getElementById(id).value;
    const q = parseFloat(p);
    return q;
}
function donateCalculator (balance, willDonate, donated, fundName){
    const a = getInnerText(balance);
    const b = getValue(willDonate);
    const c = getInnerText(donated);
    if(a>=b){
        let d =a-b;
        let e = c + b;
        document.getElementById(balance).innerText = d;
        document.getElementById(donated).innerText=e;
        const p = document.createElement('p');
        p.innerText = `Donated: ${b}TK. Current Balance: ${d}TK. to ${fundName}.`;
        document.getElementById('history-list').appendChild(p);
    }
    else{
        alert('FAILED')
    }
}
// Navbar BUTTONs===============================
document.getElementById('history-btn')
        .addEventListener('click', function(){
            document.getElementById('history-btn').classList.remove('btn-2');
            document.getElementById('donation-btn').classList.remove('btn-1');
            document.getElementById('history-btn').classList.add('btn-1');
            document.getElementById('donation-btn').classList.add('btn-2');
            document.getElementById('history-section').classList.remove('hidden');
            document.getElementById('donate-section').classList.add('hidden');
        })
document.getElementById('donation-btn')
        .addEventListener('click', function(){
            document.getElementById('donation-btn').classList.remove('btn-2');
            document.getElementById('history-btn').classList.remove('btn-1');
            document.getElementById('donation-btn').classList.add('btn-1');
            document.getElementById('history-btn').classList.add('btn-2');
            document.getElementById('donate-section').classList.remove('hidden');
            document.getElementById('history-section').classList.add('hidden');
        })
// Donate Noakhali Flood=========================
document.getElementById('nflood')
        .addEventListener('click', function(){
            donateCalculator('m-balance','nd-amount','n-taka','Flood at Noakhali');
        })
// Donate Feni Flood==============================
document.getElementById('fflood')
        .addEventListener('click', function(){
            donateCalculator('m-balance','fd-amount','f-taka','Flood at Feni');
        })
// Donate Quota Movement==========================
document.getElementById('qu-pro')
        .addEventListener('click', function(){
            donateCalculator('m-balance','qd-amount','q-taka','Aid for Injured in the Quota Movement');
        })