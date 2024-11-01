// Utilities====================================
function getValue(id){
    const x = document.getElementById(id).innerText;
    const y = parseFloat(x);
    return y;
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
            const donateBalance = document.getElementById('nd-amount').value;
            const a = getValue('m-balance');
            const b = parseFloat(donateBalance);
            const c = getValue('n-taka');

            if(a>=b){
                let d =a-b;
                let e = c + b;
                document.getElementById('m-balance').innerText = d;
                document.getElementById('n-taka').innerText=e;

                const p = document.createElement('p');
                p.innerText = `Donated: ${b}TK. to Flood at Noakhali. Balance Remains: ${d}`;
                document.getElementById('history-list').appendChild(p);
            }
            else{
                alert('FAILED')
            }
        })
// Donate Feni Flood==============================
document.getElementById('fflood')
        .addEventListener('click', function(){
            const donateBalance = document.getElementById('fd-amount').value;
            const a = getValue('m-balance');
            const b = parseFloat(donateBalance);
            const c = getValue('f-taka');

            if(a>=b){
                let d =a-b;
                let e = c + b;
                document.getElementById('m-balance').innerText = d;
                document.getElementById('f-taka').innerText=e;

                const p = document.createElement('p');
                p.innerText = `Donated: ${b}TK. to Flood at Feni. Balance Remains: ${d}`;
                document.getElementById('history-list').appendChild(p);
            }
            else{
                alert('FAILED')
            }
        })
// Donate Quota Movement==========================
document.getElementById('qu-pro')
        .addEventListener('click', function(){
            const donateBalance = document.getElementById('qd-amount').value;
            const a = getValue('m-balance');
            const b = parseFloat(donateBalance);
            const c = getvalue('q-taka');

            if(a>=b){
                let d =a-b;
                let e = c + b;
                document.getElementById('m-balance').innerText = d;
                document.getElementById('q-taka').innerText=e;

                const p = document.createElement('p');
                p.innerText = `Donated: ${b}TK. to Aid for Injured in the Quota Movement. Balance Remains: ${d}`;
                document.getElementById('history-list').appendChild(p);
            }
            else{
                alert('FAILED')
            }
        })