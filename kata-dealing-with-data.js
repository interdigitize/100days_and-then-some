//https://quotesondesign.com/api-v4-0/
//GET: http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=7  (duplicates added for practice)

var designQuotes = [
  {
    "ID": 1644,
    "title": "Pete Episcopo",
    "content": "<p>Observation and imitation are so often the steps to creative maturation. An insightful person can turn these into innovation.</p>\n",
    "link": "https://quotesondesign.com/pete-episcopo/"
  },
  {
    "ID": 2367,
    "title": "John D. Cook",
    "content": "<p>When it comes to writing code, the number one most important skill is how to keep a tangle of features from collapsing under the weight of its own complexity.</p>\n",
    "link": "https://quotesondesign.com/john-d-cook/",
    "custom_meta": {
      "Source": "<a href=\"http://www.johndcook.com/blog/2015/06/18/most-important-skill-in-software/\">article</a>"
    }
  },
  {
    "ID": 198,
    "title": "Isaac Bashevis Singer",
    "content": "<p>Every creator painfully experiences the chasm between his inner vision and its ultimate expression.  </p>\n",
    "link": "https://quotesondesign.com/isaac-bashevis-singer/",
    "custom_meta": {
      "Source": "<a href=\"http://www.brainyquote.com/quotes/quotes/i/isaacbashe104113.html\">website</a>"
    }
  },  
  {
    "ID": 1083,
    "title": "Bruce Tognazzini",
    "content": "<p> If you are demanding registration before checkout, you need to cease this practice immediately. It is costing you a fortune.  </p>\n",
    "link": "https://quotesondesign.com/bruce-tognazzini/",
    "custom_meta": {
      "Source": "<a href=\"http://www.asktog.com/columns/081Registration.html\">article</a>"
    }
  },
  {
    "ID": 1083,
    "title": "Bruce Tognazzini",
    "content": "<p> If you are demanding registration before checkout, you need to cease this practice immediately. It is costing you a fortune.  </p>\n",
    "link": "https://quotesondesign.com/bruce-tognazzini/",
    "custom_meta": {
      "Source": "<a href=\"http://www.asktog.com/columns/081Registration.html\">article</a>"
    }
  },

  {
    "ID": 346,
    "title": "Bertrand Russell",
    "content": "<p>One should respect public opinion in so far as is necessary to avoid starvation and to keep out of prison.  </p>\n",
    "link": "https://quotesondesign.com/bertrand-russell/",
    "custom_meta": {
      "Source": "<a href=\"http://www.scripsit.com/WritingQuotes.html\">website</a>"
    }
  },
  {
    "ID": 2389,
    "title": "Rami Hassan",
    "content": "<p>If you spend an hour now, you can save five later.</p>\n",
    "link": "https://quotesondesign.com/rami-hassan/"
  },
  {
    "ID": 1257,
    "title": "Heather Phillips",
    "content": "<p>Being a graphic designer gets you used to rejection of your brilliance. So it&#8217;s good practice for dating.  </p>\n",
    "link": "https://quotesondesign.com/heather-phillips/"
  },
  {
    "ID": 1257,
    "title": "Heather Phillips",
    "content": "<p>Being a graphic designer gets you used to rejection of your brilliance. So it&#8217;s good practice for dating.  </p>\n",
    "link": "https://quotesondesign.com/heather-phillips/"
  }
];

//Select all objects with the ID 198
  var Ids = designQuotes.filter(function(el){
    return el.ID === 198;
  });
  console.log(Ids);

// return all the objects with IDs between 1000 and 2000
var filteredIDs = designQuotes.filter(function(el){
  return (1000 < el.ID && el.ID < 2000);
});
console.log(filteredIDs);


// return all the titles in a new array of objects
var titles = [];
var quotes = designQuotes.forEach(function(el){
  var obj = {};
  obj.title = el["title"];
  titles.push(obj);
});
console.log(titles)


// filter through the titles and remove duplicates
var noDuplicates = [];
titles.reduce(function(pre, cur){
  if (pre.title === cur.title){
    return cur;
  }
  noDuplicates.push(cur);
  return cur;
}, []);

console.log(noDuplicates);
