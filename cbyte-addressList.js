var friends = new Object();

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "555-555-5555",
    address: ['One Microsoft Way','Redmond','WA','98052']
    };
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "333-333-3333",
    address: ['Apple Loop','Sunnydale','CA','95425']
    };
friends.ok = {
    firstName: "OK",
    lastName: "GO",
    number: "111-111-1111",
    address: ['Here We Go Again','Glendale','CA','92345']
    };

function list (friend){
    for(var key in friend){
        console.log(key);
    }
}

function search(name){
    for(var key in friends){
        if(friends[key].firstName === name){
          return friends[key];
        }
    }
    return "Sorry, no match";
}

console.log(search("OK"));
