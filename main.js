



function result() {

    let BillAmount = parseInt(document.querySelector("#billAmount").value);
    let Percentage = parseInt(document.querySelector("#percentage").value);
    let TipAmount = ((BillAmount*Percentage)/100);
    let answer = (BillAmount+TipAmount);

    document.querySelector("#tipAmount").value=TipAmount;

    document.querySelector("#total").value=answer;

}

