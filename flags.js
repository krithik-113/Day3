var uri = "https://restcountries.com/v3.1/all";

const Data = async () => {
  var data = await fetch(uri);
  var value = await data.json();
  value.map((val) => {
    if (val.coatOfArms.png == undefined && val.coatOfArms.svg == undefined) {
    } else {
      console.log(`png: ${val.coatOfArms.png} `, `svg: ${val.coatOfArms.svg}`);
    }
  });
};

Data();
