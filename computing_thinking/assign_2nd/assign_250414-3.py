num = int(input("숫자를 입력하세요 : "))
factorial = 1

for i in range(num):
  factorial *= (i+1)

print(f"{num}! = {factorial}")