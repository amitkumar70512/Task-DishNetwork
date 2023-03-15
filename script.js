
let op = '';
let val1 = null ;
let val2 = null ;

function submit_digit(val){
let prev = document.getElementById("input").value;
let curr = prev+''+val;
document.getElementById("input").value=curr;
    if(op == ''){
        if(val1==null)
            val1 = val;
        else
            val1 = val1+''+val;
    }else{
        if(val2==null)
        val2 = val;
    else
        val2 = val2+''+val;
    }
}

function operation(oper){
    if(op==''){
        prev = document.getElementById("input").value;
        op = oper;
        document.getElementById("input").value = prev+' '+oper+' ';
    }else{
        op = oper;
        document.getElementById("input").value = val1+' '+oper+' ';
    }
}

function clean(){
    document.getElementById("input").value='';
    val1= null;
    val1= null;
    op='';
}

function del(){
var s = document.getElementById("input").value;
document.getElementById("input").value = s.substring(0,s.length-1);

}

// mathematical caculations on val1 and val2
function calculate(){
    // if val1 and val2 are not null
    if(val1!=null && val2!=null){
        let result = 0;
        if(op == '+'){
            result = Number(val1) + Number(val2);
        }else if(op == '-'){
            result = Number(val1) - Number(val2);
        }else if(op == '/'){
            result = Number(val1) / Number(val2);
        }else if(op == '%'){
            result = Number(val1) % Number(val2);
        }else if(op == '*'){
            result = Number(val1) * Number(val2);
        }

        let prev = document.getElementById("input").value;
        document.getElementById("input").value=prev + ' = '+ result;
        // update history
        document.getElementById("history").innerHTML += "<p>"+ document.getElementById("input").value+"</p>";
        var objDiv = document.getElementById("history");
        objDiv.scrollTop = objDiv.scrollHeight;
        document.getElementById("input").value=result;
        val1 = result;
        val2 = null;
        op = '';
    }else{
        window.alert("Invalid Input");
        clean();
        document.getElementById("input").value="Re-Enter here...";
    }
   
}