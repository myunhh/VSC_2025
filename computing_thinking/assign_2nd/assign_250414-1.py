new = str(input("숫자를 입력 : "))
add = 0

for i in range(len(new)):
  add += int(new[i])

print(add)