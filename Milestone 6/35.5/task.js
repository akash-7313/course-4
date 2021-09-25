// 1

const akash = {
    id: 703,
    name: 'Akash',
    money:2000,
    education: {
        school: 'A.N.M. High School',
        year: 5,
        memory:true
    },
    course: ['SEO', 'Web Development', 'Front end'],
    treatDey: function (bill,tip,tax) {
        this.money = this.money - bill - tip - tax;
        console.log(this);
        return this.money;
    }
}
const batash = {
    id: 102,
    name: 'Batash',
    money:5000
}

// akash.treatDey(700);
// akash.treatDey(700,300,100);

// const batashTreatDey = akash.treatDey.bind(batash);
// batashTreatDey(1100,400,100);
// batashTreatDey(400);
// batashTreatDey(100);

// akash.treatDey.call(batash, 500, 200,100);
// akash.treatDey.apply(batash, [70, 20, 10]);



// 2

const myIntro = `
My name is ${akash.name}. In my school year, I was admitted to ${akash.education.school}. Those days were memorable to me. Nowadays I am learning ${akash.course[2]} ${akash.course[1]}. I hope Allah might make me successful in both world.
`
// console.log(myIntro);


// 3.1
const num = () => 89;
// console.log(num());

// 3.2
const div = num => num / 7;
// console.log(div(21));

// 3.3
const sumDiv = (x, y) => (x + y) / 2;
// console.log(sumDiv(4, 6));

// 3.4
const sumSum = (x, y) => {
    const sum1 = x + 7;
    const sum2 = y + 7;
    const sum = sum1 + sum2;
    return sum;
}
// console.log(sumSum(2, 3));



// 4

const numbers = [21, 42, 14, 63, 56, 28, 35, 7];
const showAll = numbers.map(number => number);
const division = numbers.map(number => number / 7);
// console.log(showAll, division);


// 5

// numbers.forEach(number => console.log(number));
const over40 = numbers.filter(number => number > 40);
// console.log(over40);
const less10 = numbers.find(number => number < 10);
// console.log(less10);
const less20 = numbers.find(number => number < 20);
// console.log(less20);



// 6   some problem of understanding question

const me = {
    name: 'Batash',
    money: 11,
    job: false,
    character: 'bad',
    skills: ['HTML', 'CSS', 'Js', 'bootstrap', 'Tailwind'],
    tech: {
        design: {
            structure:'html',
            style:'css'
        },
        dynamic:'Js'
    }
}
const { money } = me;
// console.log(money);
const balance = me.skills[1];
// console.log(balance);


// 7


































































































































