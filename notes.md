### Why I chose to make this a single page application

1. This is just a learning project, after research i can see that
developing a MPA that uses somthing like shopify seems like the better choice for ecommerce because there would be alot of data, need good SEO, many pages for the different types of shoes.

### How to share state

1. Lifting state up means to find the parent component of the components.
2. Create a local state in the parent component with the items needed and pass those items as props to the child components.
3. When updating the local state of the parent component you need to pass a method that alters the state and takes a parameter as a prop to a child.
4. The child will then use it's own method to call the prop that represents the parent method with whatever as a parameter. Resulting in the parent updating its local state and the child components sharing that parents state.

### What to use for "global state"

1. Redux - [redux tutorial](https://redux.js.org/tutorials/fundamentals/part-1-overview)
2. React context - [react context docs](https://en.reactjs.org/docs/context.html)
3. React composition vs inheritance - [react docs](https://en.reactjs.org/docs/composition-vs-inheritance.html)

#### Ways for productpage to work without backend
1. Assign id to each product and using query parameters with react router

### How to add to cart without a backend
1. When submit button is pressed send to the session storage
	* how do i get the data?
		* using the id in the url and importing products into the cart page
		* send this to the session storage as an array of objects
	* what data?
		1. name (from products)
		2. price (from products)
		3. quantity (from form)
	* can i use a onclick function?
		* yes

### How i'm rendering items in the cart

```js 
function renderItemsInCart() {
	const availableProductsIds = products.map((product, index) => products[index].itemId);
	return items.map((item, index) => {
		if (Number(item.itemId) === availableProductsIds[item.itemId]) {
			return <ShoppingCartItem key={index} itemName={products[item.itemId].itemName} itemQuantity={products[item.itemId].itemQuantity}/>
		} else {
			return <p>Item not avaiable</p>
		}
	})
}
```
Now the problem with this code is that it would
scale terribly in a real platform that generates
product ids in a different manner.
> the question is, how do ecommerce plaforms generate product ids?

My platform ids are manually typed in counting up from 0...

Then when i'm rendering the items from the cart, it's using the itemId as the index of the products array to grab properties from.
If real platforms did use this way of generating ids then this works fine, if they don't welp I would have to create a new way of generating ids as items are put into the "database".  