#легкій калькулятор.
w = input("що робимо?(+,-,*,/):")
a =float(input("Ведіть перше число:"))
b =float(input("Ведіть друге число:"))
if w =="+":
    c = a + b
    print("результат:",str(c))
elif w =="-":
    c = a - b
    print("результат:",str(c))
elif w =="*":
    c = a*b
    print("результат:",str(c))
elif w =="/":
    c = a/b
    print("резуьтат:",str(c))
else:
    print("Вибрана операція неправильна!")

