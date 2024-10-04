for REDUX

1. create 3 files named store.js, action.js, reducer.js

2. update store.js file
    2.1 Add a newly defined store using legacy_createstore() //before redux 5, it was create_store()
    Whenever legacy_createstore() is being used, it should be imported from redux package.

3. Update action.js file
    3.1 Add the user events increment and decrement* (in this case only)

4. Update the reducer.js file
    4.1 Include the implementation of user actions inside reducer file.
    [Note: It will access the current state and update the value based on the type of user events]

5. Connect the updated reducer to the store created in the store.js file.
    5.1 Update the reducer and store in store.js file