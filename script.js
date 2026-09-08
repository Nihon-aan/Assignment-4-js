




let statTotal = document.getElementById('statTotal');
let statInterview = document.getElementById('statInterview');
let statRejected = document.getElementById('statRejected');

// count Update

let totalUpdate =  count('card');
statTotal.innerText = totalUpdate;

let InterviewUpdate =  count('card-interview');
console.log(InterviewUpdate);
statInterview.innerText = InterviewUpdate;

let RejectedUpdate =  count('card-rejected');
console.log(RejectedUpdate);
statRejected.innerText = RejectedUpdate;




// card Status




for(let i=1;i<=totalUpdate;i++){
    updateStatus(i);
}






















// machine

function updateStatus(num){

    let card = document.getElementById('card-' + num);
    let badge = document.getElementById('badge-' + num);
    let interviewBtn = document.getElementById('interview-' + num);
    let rejectedBtn = document.getElementById('rejected-' + num);


interviewBtn.addEventListener('click', function(){
    card.classList.remove('card-rejected');
    card.classList.add('card-interview');

    badge.innerText = 'INTERVIEW';
    badge.classList.remove('bg-[#EEF4FF]', 'border-none', 'text-[#002C5C]');
    badge.classList.remove('text-[#EF4444]', 'bg-[#f36464]', 'border-[#EF4444]');
    badge.classList.add('btn-outline', 'text-white', 'bg-[#7dd698]', 'border-[#10B981]');
});

rejectedBtn.addEventListener('click', function(){
    card.classList.remove('card-interview');
    card.classList.add('card-rejected');

    badge.innerText = 'REJECTED';
    badge.classList.remove('bg-[#EEF4FF]', 'border-none', 'text-[#002C5C]');
    badge.classList.remove('text-[#10B981]', 'bg-[#7dd698]', 'border-[#10B981]');
    badge.classList.add('btn-outline', 'text-white', 'bg-[#f36464]', 'border-[#EF4444]');
});



}












function count(card){
    let cards = document.getElementsByClassName(card);
    let count = 0;
    for(let card of cards){

        count++;

    }
    return count;
}



