//[{
//     name: ‘Sue’,
//     children: [{
//         name: 'John',
//         children: []
//     }, {
//         name: 'Garth',
//         children: []
//     }]
// }, { < another person >
// }]

var people = [ { name: 'John', parent: 'Sue' },
  { name: 'Jack', parent: 'Steve' },
  { name: 'Jill', parent: 'Sally' },
  { name: 'Wayne', parent: 'Jack' },
  { name: 'Twinkle', parent: 'Jack' },
  { name: 'Garth', parent: 'Sue' },
  { name: 'Steve', parent: 'Alejandro' },
  { name: 'Peter', parent: 'Alejandro' } ];

function sortByParentName(x,y) {
	return ((x.parent == y.parent) ? 0 : ((x.parent > y.parent) ? 1 : -1 ));
}

// Call Sort By Name
people.sort(sortByParentName);
  

var result = people.map(obj =>{ 
   var rObj = {};
   
   rObj.name = obj.parent;
   
   rObj.children = [];
   rObj.children.name = obj.name;

   return rObj;
});

var groups = {};
for (var i = 0; i < result.length; i++) {
  var name = result[i].name;
  if (!groups[name]) {
    groups[name] = [];
  }
  groups[name].push(result[i].children.name);
}
result = [];
for (var name in groups) {
  result.push({name: name, children: groups[name]});
}


console.log(result);

