var result = 110;

if (result >= 90 && result <= 100) {
    console.log('Grade:A+');
}
else if (result >= 80 && result < 90) {
    console.log('Grade:A');
}
else if (result >= 70 && result < 80) {
    console.log('Grade:B');
}
else if (result >= 60 && result < 70) {
    console.log('Grade:C');
}
else if (result >= 50 && result < 60) {
    console.log('Grade:D');
}
else {
    console.log('Grade:F');
}

var signal = 'red';
if (signal == 'yellow') {
    console.log('You must stop');
}
else if (signal == 'green') {
    console.log('You can cross the road');
}
else {
    console.log('You fall in denger');
}
