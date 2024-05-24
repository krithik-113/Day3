var uri = "https://restcountries.com/v3.1/all";

const Data = async () => {
  var data = await fetch(uri);
  var value = await data.json();
  value.map((val) => {
    console.log(
      `Country names: ${val.name.common} , \n` +
        `Regions: ${val.region} , \n` +
        `Sub-regions: ${val.subregion} , \n` +
        `Populations: ${val.population}`
    );
  });
};

Data();
