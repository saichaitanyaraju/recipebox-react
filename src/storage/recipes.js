var recipes = (typeof localStorage["recipeBox"] !== "undefined") ? JSON.parse(localStorage["recipeBox"]) : [{
  id: 1,
  name: 'Spinach lasagne',
  image: 'http://cdn.jamieoliver.com/recipe-database/430_575/2ipm2HQHql2Azq2dLfiA4k.jpg',
  desc: "Lasagne originated in Italy, traditionally ascribed to the city of Naples (Campania), where the first modern recipe was created in the Middle Ages and published in Liber de Coquina (The Book of Cookery), and became a traditional dish.[2] Traditional lasagne is made by interleaving layers of pasta with layers of sauce, made with ragù, bechamel, Parmigiano-Reggiano, and chopped hard boiled eggs.",
  ingredients: ["70 g unsalted butter", "50 g plain flour", "800 ml milk", "1 fresh bay leaf", "800 g spinach", "200 g ricotta cheese", "1 whole nutmeg, for grating", "300 g fresh lasagne sheets", "100 g Parmesan cheese"]
},{
  id: 2,
  name: 'Lamb & chickpea hand pies',
  image: 'http://cdn.jamieoliver.com/recipe-database/430_575/50242466.jpg',
  desc: "For a light, crumbly pastry, forget using a food processor – go old-school and use your hands. The addition of chickpea flour gives an extra crumbly-ness to this pastry and the turmeric adds a pop of colour and extra spice. You will need to make the filling in advance, so that it's cooled when you make your pies, otherwise the heat will soften the pastry. These pies can also be filled and refrigerated 24 hours before baking.",
  ingredients: ["olive oil", "1 onion", "2 cloves of garlic", "¼ teaspoon ground cinnamon", "½ teaspoon cumin seeds", "½ teaspoon cayenne pepper", "1 pinch of ground allspice", "½ teaspoon dried mint", "½ teaaspoon dried oregano","400 g lamb mince"]
},{
  id: 3,
  name: 'Hot & sour soup',
  image: 'http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/1430_30_1436801649.jpg',
  desc: "With egg ribbons, tofu and shitake mushrooms, this is a deliciously warming veggie soup.",
  ingredients: ['onion', 'lamb', 'chickpea', 'form']
},{
  id: 4,
  name: 'Moorish crunch salad',
  image: 'http://cdn.jamieoliver.com/recipe-database/430_575/8EDENOCEKbAB5AS4UtzHMh.jpg',
  desc: "The bonus of using three lovely oranges here means that this beautifully bright salad provides us with our daily recommended intake of vitamin C, helping to keep our immune systems strong.",
  ingredients: ['onion', 'lamb', 'chickpea', 'form']
},{
  id: 5,
  name: 'Oat, pear & cardamom smoothie',
  image: 'http://cdn.jamieoliver.com/recipe-database/430_575/49213400.jpg',
  desc: "I have a love/hate relationship with smoothies. The idea of people replacing a meal full of different textures and flavours with a drink makes me squirm – yet a cold sweet-and-sour fruit smoothie in the morning can be hard to beat. Frozen fruit gives smoothies a nice coldness without requiring ice and helps make use of over-ripe fruit that’s on the way out. Smoothies are also the perfect vehicle for natural nutrient powders, so feel free to add a teaspoon here if you are so inclined.",
  ingredients: ["2 pears", "6 cardamom pods","500 ml oat milk", "100 g natural yoghurt", "2 teaspoons runny honey","2 teaspoons bee pollen"],
  instruction: "The night before you want to make your smoothie, peel and core the pears. Pop them into the freezer. Open the cardamom pods and extract the seeds, then crush up in a pestle and mortar. Tip the crushed seeds into a blender, then add the frozen pears, oat milk, yoghurt and honey. Blitz until smooth. Divide between two glasses and sprinkle over the bee pollen."
},{
  id: 6,
  name: 'Mushroom & cauliflower penne',
  image: 'http://cdn.jamieoliver.com/recipe-database/430_575/FthNtE88a4S8i7vsZLmzgj.jpg',
  desc: "Creamy and comforting, with a hit of chilli and lots of lovely herbs to liven it up, this pasta dish is super-satisfying. Cauliflower is a great source of vitamin C, which your body needs for lots of things, including keeping your teeth and gums healthy. I’ve cooked it here until tender, before mashing it into a gorgeously silky sauce – teamed with mushrooms, it’s a winner of a dish.",
  ingredients: ["2 cloves of garlic", "1 onion", "1 fresh red chilli", "15 g fresh thyme", "250 g chestnut mushrooms", "320 g cauliflower", "olive oil", "200 g wholewheat penne", "15 g fresh flat-leaf parsley", "100 g ricotta cheese", "1 lemon", "20 g Parmesan cheese"],
  instruction: "Fill a large pan with salted water, place on a high heat and bring to the boil. Meanwhile, peel and finely slice the garlic and onion, then halve, deseed and finely slice the chilli. Pick the thyme leaves. Trim and slice three-quarters of the mushrooms. Trim the cauliflower, remove and discard the leaves, then chop the cauliflower florets and stalk into small chunks. Heat 1 tablespoon of oil in a wide saucepan on a medium heat, add the garlic, onion, chilli and thyme, then cook gently for 10 minutes, or until golden. Add the sliced mushrooms and cauliflower, cover with a lid and cook gently for about 10 minutes, or until softened. Meanwhile, add the pasta to the boiling water and cook for 10 to 12 minutes, or until al dente – this means it’s cooked, but still has a bit of bite. Meanwhile, pick and finely chop the parsley leaves. Trim and very finely slice the remaining mushrooms. Once softened, mash the cauliflower mixture with a fork until broken down, but still with a bit of texture. Stir in the ricotta, then season to taste with sea salt, black pepper and the juice from half the lemon. Reserving a cupful of the cooking water, drain the pasta and return it to the pan, off the heat. Tip in the sauce and stir well, adding splashes of the cooking water to loosen, if needed. Taste and season with salt, pepper and the remaining lemon juice. Stir in the sliced raw mushrooms, most of the Italian hard cheese and half of the parsley leaves. Serve with the remaining chopped parsley and cheese sprinkled on top."
}];

export default recipes;
