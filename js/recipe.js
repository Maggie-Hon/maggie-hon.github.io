$('.ui.dropdown').dropdown();
$('.right.menu').on("click",function(e){
    e.preventDefault();
    $('.ui.vertical.menu').toggle();
});
let filterSelection = {}

$('.ui.selection.dropdown .item').on('click',function(){
  console.log('1',$(this).data('value'))
  let selectedValue = $(this).data('value')
  let selectedValueArray = selectedValue.split('-')
  let key = selectedValueArray[0]
  let value = selectedValueArray[1]
  filterSelection[key]=value
  console.log('2',filterSelection)
})

$(".card").on("click",function(){
  window.location.href =  window.location.pathname + '/' +$(this).attr('id')
})

$($('.item.active.selected')[1]).data('value')

var categoryContent = [
  { category: 'Main', title: 'Juicy Barbecue Chicken Burger' },
  { category: 'Main', title: 'Jumbo Juicy Hamburger' },
  { category: 'Coffee', title: 'Caramel Latte' },
  { category: 'Coffee', title: 'Cookie Flavoured latte' },
  { category: 'Dessert', title: 'Fudgy Chocolate Cookies' },
  { category: 'Dessert', title: 'Fresh Cherry Popsicles' },
  { category: 'Dessert', title: 'French Almond Macaron' },
  { category: 'Dessert', title: 'Fluffy Fruity Nutty Pancake' },
  { category: 'Dessert', title: 'Creamy Strawberry Crepes' },
  { category: 'Dessert', title: 'Refreshing Lime Shortcake' },
  { category: 'Dessert', title: 'Orange Chocolate Mousse' },
  { category: 'Dessert', title: 'Cinnamon Chocolate Cupcakes' },
  { category: 'Dessert', title: 'Rich Chocolate Truffle Cake' },
  { category: 'Dessert', title: 'Chocolate Cookies' },
  { category: 'Dessert', title: 'Raspberry Macarons' },
  { category: 'Dessert', title: 'Raspberry Brownie' },
  { category: 'Dessert', title: 'Creamy Berries Shortcake' },
  { category: 'Dessert', title: 'Coconut Cookies Popsicles' },
  { category: 'Dessert', title: 'Creamy Strawberry Pastry' },
  { category: 'Dessert', title: 'Strawberry Tart' }
];
$('.ui.search')
  .search({
    type: 'category',
    minCharacters : 3,
    source: categoryContent,
  })
;
