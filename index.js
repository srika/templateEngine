var express = require('express');
var app = express();

app.set("view engine","ejs");
app.set("views",__dirname +"/views");
app.set("view options", {layout:false});

const employees = [
    {
        empId: 100,
        empName:'Srikanth',
        empDesignation:'Software Developer',
        empLocation:'Hyderabad',
        empSalary:60000
    },
    {
        empId: 101,
        empName:'Prashanth',
        empDesignation:'AI Developer',
        empLocation:'Gandhinagar',
        empSalary:50000
    },
    {
        empId: 102,
        empName:'Susmitha',
        empDesignation:'UX Developer',
        empLocation:'Kanpur',
        empSalary:70000
    }
]
app.get('/', function(req, res){
    res.render('index', {
        message: 'Hello World',
        people: ['Srikanth','Susmitha','Prashanth','Dharma','Kalamma'],
        data:[
            {id:100, name:'Srikanth'},
            {id:101, name:'Susmitha'},
            {id:102, name:'Prashanth'}
        ]
    });
})

app.get('/home', function(req, res){
    res.render('pages/home');
})

app.get('/about', function(req, res){
    res.render('pages/about');
})

app.get('/employees', function(req, res){
    res.render('pages/employees',{
        employees:employees
    });
})

app.get('/employee/:id', function(req, res){
    const emp = employees.filter((emp)=>{
        return emp.empId == req.params.id
    })[0]
    res.render('pages/employee',{
        empId: emp.empId,
        empName: emp.empName,
        empDesignation: emp.empDesignation,
        empLocation: emp.empLocation,
        empSalary: emp.empSalary
    });
})

app.listen(5000, function(){
    console.log('Server is running at port 5000');
})