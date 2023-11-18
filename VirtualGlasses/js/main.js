let dataGlasses = [
  {
    id: "G1",
    src: "./img/v1.png",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/v2.png",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/v3.png",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/v4.png",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/v5.png",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/v6.png",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/v7.png",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/v8.png",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/v9.png",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

const renderGlass = () => {
  let content = "";
  dataGlasses.forEach((glassItem) => {
    content += `
        <div class=" col-lg-4 mx-auto d-block  list-sunglasses" style="height:150px; padding-top: 50px;">
            <a href="#" onclick="addSunGlasses('${glassItem.id}')"> <img style="width:100%;" src="${glassItem.src}" alt="${glassItem.name}"></a>
            </div>
        `;
  });
  document.getElementById("vglassesList").innerHTML = content;
};
renderGlass();

const addSunGlasses = (id) => {
  let content = "";
  dataGlasses.forEach((glassItem) => {
    if (glassItem.id === id)
      content = `
    <img src="${glassItem.src}" id = "hinh" alt="">
    <div>
    <p>Name: ${glassItem.name}</p>
    <p>Brand: ${glassItem.brand}</p>
    <p>Color: ${glassItem.color}</p>
    <p>Price $${glassItem.price}</p>
    </div>
    `;
  });
  document.getElementById("avatar").innerHTML = content;
};

const removeGlasses = (check) => {
  if (check === false) {
    document.getElementById("hinh").style.display = "none";
  } else {
    document.getElementById("hinh").style.display = "block";
  }
};

window.addSunGlasses = addSunGlasses;
window.removeGlasses = removeGlasses;
