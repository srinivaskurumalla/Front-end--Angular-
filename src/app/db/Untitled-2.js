
var pipeline=[
    {$sort: {"name":1}},
    {$limit:1}
]

db.Employees.aggregate(pipeline)