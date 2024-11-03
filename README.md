# [make-repeatable](https://github.com/UniBreakfast/make-repeatable)

Write a function that will take any function fn and an interval inter in ms and return two functions: one to (re)start calling fn every inter ms and another to stop doing that.
![image](https://github.com/user-attachments/assets/aa44c242-f493-4154-b15e-7b2a55f960ab)

Write a function that will take any function fn and an interval inter in ms and return a new function. That new function should stop its previous run if was called earlier, run function fn immediately and every next inter ms and return a new function that will stop it.
![image](https://github.com/user-attachments/assets/4be0430a-4a8d-43f9-a702-555443bb17d3)
