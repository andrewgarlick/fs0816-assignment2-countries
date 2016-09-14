const countries = require('world-countries');

module.exports = {

  add(x = 0, y = 0) {
    return x + y;
  },


// all(loadAll = false, index = 0, pageSize = 15) {
//   if(loadAll) return countries;
//
// },

  all(settings = { loadAll: false, index: 0, pageSize: 15 }){
    if(settings.loadAll){
      return countries
    }



    const startingIndex = settings.index * settings.pageSize;
    // slice the countries array using the paging calculation

    return countries.slice(startingIndex, startingIndex + settings.pageSize);
  },
  filter(filterBy){
    if(!filterBy){
      return countries;
    }

    return countries.filter((country) => {
      return (country.name.common.indexOf(filterBy) > 0) || (country.name.official.indexOf(filterBy) > 0)
    })
  }

//get,
// etc

};
