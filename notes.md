### Why I chose to make this a single page application

1. This is just a learning project, after research i can see that
developing a MPA that uses somthing like shopify seems like the better choice for ecommerce because there would be alot of data, need good SEO, many pages for the different types of shoes.

### How to share state

1. Lifting state up means to find the parent component of the components.
2. create a local state in the parent component with the items needed and pass those items as props to the child components.
3. When updating the local state of the parent component you need to pass a method that alters the state and takes a parameter as a prop to a child.
4. The child will then use it's own method to call the prop that represents the parent method with whatever as a parameter. Resulting in the parent updating its local state and the child components sharing that parents state.

### What to use for "global state"

1. Redux - [redux tutorial](https://redux.js.org/tutorials/fundamentals/part-1-overview)
2. React context - [react context docs](https://en.reactjs.org/docs/context.html)
3. React composition vs inheritance - [react docs](https://en.reactjs.org/docs/composition-vs-inheritance.html)

#### Ways for productpage to work without backend
assign id to each product and using query parameters with react router 