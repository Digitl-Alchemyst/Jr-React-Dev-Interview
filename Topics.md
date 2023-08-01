# JS Topics 

- JS Hoisting
    - Allows you to call a function or variable before it is declared. 
        - Hoisting parses the function declaration to the top of the scope and the variable to the top of scope as undefined

- JS Closure
    - Variables can belong to either the local or global scope
        -Variables can be made local (private) with closures
        -A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code
        -Global and local variables with the same name are different variables. Modifying one, does not modify the other
        -Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function
        -A closure is a function having access to the parent scope, even after the parent function has closed

- var, let, const Differences & Scoping
    - var & let are variables that can be reasigned
    - const cannot be reassigned
    - const and let are blocked scoped while var can be hoisted

- Data Types: Differences & Explainations
    - String
        - A string of text [''] [""] [``]
    - Object
        - Object properties are written as name:value pairs, separated by commas inside curcly braces
        - Object, Array, Date
        - object = {firstName:"Edward", lastName:"Snowden", age:40, infamy:"legend"};
    - Boolean
        - true or false value
    - Array 
        - An array of items seperated by commas inside square brackets
            - array = [ '1', '2', '3', '4', '5' ]
    - Numbers
        - Stored as Floats double (64-bit floating point)
            Float: 1.25
                - byte (8-bit), short (16-bit), int (32-bit), long (64-bit)
            Interger: 1
                - float (32-bit), double (64-bit)
    - Null 
    - Undefined
        - A variable without a value, has the value undefined. The type is also undefined any variable can be emptied, by setting the value to undefined
    - Symbol
    - BigInt
        - BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number

- JS abortController
    -

- this: Explanation
    -

- Arrow Functions: Explanation & Use Case
    -

- async await
    -

- promise
    -

- High Order Functions
    -

- JS Scope
    -

- class & object: Explainations & Differences
    - class:
    - object:
    - Differences:

- Typescript
    -

- Keywords
    - Variable
    - Function
    - Class