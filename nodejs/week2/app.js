const http = require('http');
let StudentDB = require('./DB-NavigationModule');
let hyf_students = new StudentDB(
    { "name": "Hakki", "classId": '08', "email": "adahbour54@gmail.com", "phone": "(263) 972-6043" },
    { "name": "Keerthika devi Alampalli", "classId": '08', "email": "keerthi1822@gmail.com", "phone": "(745) 285-6338" },
    { "name": "Rieko", "classId": '08', "email": "adahbour54@gmail.com", "phone": "(971) 436-6442" },
    { "name": "Sheila Qasemi", "classId": '08', "email": "sheilaqasemi2018@gmail.com", "phone": "(457) 527-9154" },
    { "name": "Virgeen", "classId": '08', "email": "virginrashed4@gmail.com", "phone": "(259) 245-5777" },
    { "name": "Abod", "classId": '08', "email": "a-hassam@outlook.com", "phone": "(939) 553-4886" },
    { "name": "Humayun", "classId": '08', "email": "humayun_adil@yahoo.com", "phone": "(767) 5563-8860" },
    { "name": "afshin", "classId": '08', "email": "afshin_rommel@yahoo.com", "phone": "(548) 420-7322" },
    { "name": "Gordon Fields", "classId": '07', "email": "wogzijpeg@jusvijsut.lb", "phone": "(970) 482-1032" },
    { "name": "Mitchell Byrd", "classId": '07', "email": "mucipok@dul.dz", "phone": "(480) 835-5405" },
    { "name": "Agnes Barton", "classId": '07', "email": "udirulu@kimvuzev.mp", "phone": "(781) 210-4210" },
    { "name": "Viola Newman", "classId": '07', "email": "zos@owgi.cr", "phone": "(857) 583-3775" },
    { "name": "Charles Norman", "classId": '07', "email": "lujfi@dodu.lr", "phone": "(380) 305-4996" },
    { "name": "Billy Perry", "classId": '06', "email": "bud@mauj.pl", "phone": "(236) 304-9435" },
    { "name": "Lou Wilkerson", "classId": '06', "email": "isade@wonsup.br", "phone": "(503) 932-2128" },
    { "name": "Bobby Weaver", "classId": '06', "email": "otulean@wole.su", "phone": "(482) 478-5946" },
    { "name": "Carlos Phelps", "classId": '06', "email": "de@mononpin.sj", "phone": "(945) 779-2726" },
    { "name": "Alfred Washington", "classId": '09', "email": "kakdat@pih.gb", "phone": "(746) 843-2346" },
    { "name": "Teresa Fitzgerald", "classId": '09', "email": "vopugaw@gasudnod.cr", "phone": "(288) 240-2845" },
    { "name": "Wayne Long", "classId": '09', "email": "rasvalif@piuwezu.gi", "phone": "(833) 911-1457" },
    { "name": "Luella Hammond", "classId": '09', "email": "nimhi@kagukvaj.bn", "phone": "(455) 680-1114" }
);
const server = http.createServer((req, res) => {

    const url = req.url;



    if (url === '/getList') {
        res.end(JSON.stringify(hyf_students.getStudentsList()));
    }
    else if (url === '/getListByClass') {
        res.end(JSON.stringify(hyf_students.getStudentsFilterByClass('09')));
    }
    else if (url === '/getStudentDetailByName') {
        res.end(JSON.stringify(hyf_students.StudentSearchByName('Humayun Adil')));
    }
    else if (url === '/addNewStudent') {
        const newStudent = {
            'name': 'Humayun Adil',
            'classId': '09',
            'email': 'adil@mail.com',
            'phone': '134-4576-560'
        };

       // hyf_students.addNewStudent(newStudent);
       // res.end('student added');
         res.end(JSON.stringify(hyf_students.addNewStudent(newStudent)));
    }
    else if (url === '/editStudentInfo') {
        const studentInfo = {
            'name': 'Sheila',
            'classId': '07',
            'phone': '11110000'
        };
       // res.end(JSON.stringify(hyf_students.editStudentInfo(studentInfo)));
    }
    else {
        res.end('Not found');
    }

    console.log('send respond to client')
})

server.listen(8080, () => {
    console.log('server is running (8080)...');
})
