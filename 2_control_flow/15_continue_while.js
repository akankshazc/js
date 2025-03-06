var num = 1;

while (num <= 10) {

    // skip iteration if num is even
    if (num % 2 === 0) {
        ++num;
        continue;
    }

    console.log(num);
    ++num;
}