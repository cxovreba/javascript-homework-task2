//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.

//პასუხი:

// function processNumbers(num1, num2, callBack) {
//     return callBack(num1, num2);
// }

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// console.log(processNumbers(10, 15, addNumbers));

// function subtractNumbers(num1, num2) {
//     return num1 - num2;
// }

// console.log(processNumbers(50, 24, subtractNumbers))

//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

//პასუხი:

// const emptyUsername = '';
// const emptyPassword = '';

// function isValidUser(username, password) {
//     if (typeof username === 'string' && typeof password === 'string' && emptyUsername === '' && emptyPassword === '') {
//         return true;
//     } else {
//         return false;
//     }
// }

// const result = isValidUser(emptyUsername, emptyPassword)
// console.log(result);

//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

//პასუხი:

// function recursive(n) {
//     if (n <= 0) {
//         console.log('თუ შეიძლება შეიყვანეთ დადებითი რიცხვი');
//     } else if (n === 1) {
//         return [0];
//     } else if (n === 2) {
//         return [0, 1];
//     } else {
//         const fibbonaci = recursive(n - 1);
//         fibbonaci.push(fibbonaci[fibbonaci.length - 1] + fibbonaci[fibbonaci.length - 2]);
//         return fibbonaci;
//     }
// }

// const result = recursive(3);
// console.log(result);

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

//პასუხი:

// function startTimer(seconds) {
//     const countdown = setInterval(function () {
//         console.log(seconds);

//         if (seconds === 0) {
//             console.log(timedout);
//             clearInterval(countdown);
//         }

//         return startTimer();
//     }, 10000);
// }

// console.log(startTimer(10));

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.

//პასუხი:

// const dates = [
//     { name: 'nika', birthday: '1995-05-22' },
//     { name: 'elene', birthday: '1992-02-12' },
//     {name: 'mari', birthday: '1998-10-05'},
// ]

// function calculateAge(person) {
//     const birthday = new Date(person.birthday);
//     const currentDate = new Date();
//     let age = currentDate.getFullYear() - birthday.getFullYear();

//     if (
//         currentDate.getMonth() < birthday.getMonth()
//         || currentDate.getMonth() === birthday.getMonth()
//         && currentDate.getDay() < birthday.getDay()
//     ) {
//         //console.log(age);
//     }

//     return age;
// }

// dates.forEach(person => {
//     const age = calculateAge(person);
//     console.log(`${person.name}'s age is ${age} `);
// });

//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!

//პასუხი:

// const date = new Date().getDay();
// const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const today = weekDays[date];

// console.log(today);