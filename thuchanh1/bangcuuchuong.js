let table = "<table border='1' width='1000' cellspacing='0' cellpadding='3'>"
let i = 1;
let sum ;
for (;i <= 10; i ++) {
    table = table + "<tr>" 
    for ( let j = 0; j <= 10 ; j++) {
       table = table + "<td>" + j + " x " + i + " = " + j*i ;
    } table = table + "</td>"
    table = table + "</tr>"
} table = table + "</table>";
document.write(table);
