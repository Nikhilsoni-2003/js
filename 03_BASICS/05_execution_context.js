// How js works behind the scenes :

/*

# the global execution context is executed within a thred.
# js is a single threaded lang. and everything here is a process.
# at 1st the global execution context is created referred as "this" variable and in case of a browser this reffers to the window object.

# execution contexts : global   ,  functional   and   eval .

# 2 phases : memory creation phase (creation phase),
             execution phase.

1st phase me poora code read hoga and sare variables ko memory assign hogi with value undefined, but functions k case me poori defination as it is memory me write hogi.

2nd phase me variables ko values assign hogi and if in case variable ko assign hone vali value function return kr rha hai toh function ko execute krne k liye "new execution context" create hoga, i.e. "New variable environment and execution thred".

the same cycle repeat hogi phase 1 me uss function k sare variable ko memory assign hogi and value as undefined assign hogi, then 2nd phase me vo function k variables ko actual values assign hogi hai execution process hoga.

returned value "parent/global execution context" me return ho jati hai.

As soon as function ka execution khtm hota hai vo execution context delete ho jata hai.

# call stack :

ye basically satck hi hota hai with global execution context and functions in the same order as they are encountered in the program.

when nested functions are encountered then LIFO property is followed. (sabse uppar execution context jiska hoga vahi sabse pahile bahar jayega.)

when a function is invoked a new execution context is created and after execution the function the execution context is deleted and function's execution context is poped out of the call stack and control moves to the next line (where it left).


*/