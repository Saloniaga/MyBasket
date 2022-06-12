html in js - jsx not understood by browser

react components are only functions that return jsx code that tells the browser what appears on the screen

Start custom components with capital char
Our component should be more configurable and accept dif data, we use attributes for this

PROPS ARE IMP FOR REUSING COMPONENTS
PROPS are js objects that accept these attributes in our components in the fn parameter as key value pairs
attribute name-key
att value-value

all basic html elements are basically react components
it follows a declarative approach, not imperative.

STATES ARE USED TO CHANGE WHAT WE SEE ON SCREEN DYNAMICALLY
UseState is a react hook which is directly called inside reacy component fns
Calling this creates a state that react is aware of,
give this state a starting value by passing it as value
Initially modal should be closed, set useState(false);
UseState always returns an array with two elements
first value is the state passed as value
second value is state that you want to change to
