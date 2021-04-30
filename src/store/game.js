const game = {
  state: {
    dishs: [],
    ingredients: [
      {
        src: "https://postuj.smak.ua/images/ingredients/apple.png",
        name: "apple"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/beet.png",
        name: "beet"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/blackPepper.png",
        name: "blackPepper"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/cannedCorn.png",
        name: "cannedCorn"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/carrot.png",
        name: "carrot"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/garlic.png",
        name: "garlic"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/greenPeas.png",
        name: "greenPeas"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/marinatedMushrooms.png",
        name: "marinatedMushrooms"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/mead.png",
        name: "mead"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/mustard.png",
        name: "mustard"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/onion.png",
        name: "onion"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/paprika.png",
        name: "paprika"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/parsley.png",
        name: "parsley"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/pickledCucumbers.png",
        name: "pickledCucumbers"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/potato.png",
        name: "potato"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/rice.png",
        name: "rice"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/seaSalt.png",
        name: "seaSalt"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/sunflowerOil.png",
        name: "sunflowerOil"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/tomatoPaste.png",
        name: "tomatoPaste"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/water.png",
        name: "water"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/whiteBeans.png",
        name: "whiteBeans"
      },
      {
        src: "https://postuj.smak.ua/images/ingredients/сannedTomatoes.png",
        name: "сannedTomatoes"
      }
    ],
    leanVinaigrette: [
      {
        img: "https://postuj.smak.ua/images/ingredients/beet.png",
        res: "beet"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/potato.png",
        res: "potato"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/carrot.png",
        res: "carrot"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/greenPeas.png",
        res: "greenPeas"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/pickledCucumbers.png",
        res: "pickledCucumbers"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/apple.png",
        res: "apple"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/onion.png",
        res: "onion"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/seaSalt.png",
        res: "seaSalt"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/blackPepper.png",
        res: "blackPepper"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/sunflowerOil.png",
        res: "sunflowerOil"
      }
    ],
    saladOfBeansAndCorn: [
      {
        img: "https://postuj.smak.ua/images/ingredients/whiteBeans.png",
        res: "whiteBeans"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/cannedCorn.png",
        res: "cannedCorn"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/paprika.png",
        res: "paprika"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/parsley.png",
        res: "parsley"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/mead.png",
        res: "mead"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/mustard.png",
        res: "mustard"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/blackPepper.png",
        res: "blackPepper"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/seaSalt.png",
        res: "seaSalt"
      }
    ],
    saladWithMushroomsAndBeets: [
      {
        img: "https://postuj.smak.ua/images/ingredients/beet.png",
        res: "beet"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/potato.png",
        res: "potato"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/marinatedMushrooms.png",
        res: "marinatedMushrooms"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/pickledCucumbers.png",
        res: "pickledCucumbers"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/onion.png",
        res: "onion"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/greenPeas.png",
        res: "greenPeas"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/sunflowerOil.png",
        res: "sunflowerOil"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/seaSalt.png",
        res: "seaSalt"
      }
    ],
    soupWithCannedBeansAndTomatoes: [
      {
        img: "https://postuj.smak.ua/images/ingredients/whiteBeans.png",
        res: "whiteBeans"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/сannedTomatoes.png",
        res: "сannedTomatoes"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/paprika.png",
        res: "paprika"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/onion.png",
        res: "onion"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/carrot.png",
        res: "carrot"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/garlic.png",
        res: "garlic"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/tomatoPaste.png",
        res: "tomatoPaste"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/water.png",
        res: "water"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/blackPepper.png",
        res: "blackPepper"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/parsley.png",
        res: "parsley"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/sunflowerOil.png",
        res: "sunflowerOil"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/seaSalt.png",
        res: "seaSalt"
      }
    ],
    riceWithCornAndGreenPeas: [
      {
        img: "https://postuj.smak.ua/images/ingredients/rice.png",
        res: "rice"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/water.png",
        res: "water"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/cannedCorn.png",
        res: "cannedCorn"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/carrot.png",
        res: "carrot"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/greenPeas.png",
        res: "greenPeas"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/seaSalt.png",
        res: "seaSalt"
      },
      {
        img: "https://postuj.smak.ua/images/ingredients/blackPepper.png",
        res: "blackPepper"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
};

export default game;
