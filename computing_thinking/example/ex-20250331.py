score = int(input("점수를 입력 : "))

if(score >= 90):
  print("A 학점")
elif(80 <= score < 90):
  print("B 학점")
elif(70 <= score < 80):
  print("C 학점")
elif(60 <= score < 70):
  print("D 학점")
else:
  print("F 학점")

#! ------------------------------------------------
print("\n")
#! ------------------------------------------------

for i in range (1,6):  
  print("*" * i)

a = 6

for i in range(1,6):
  print("*" * (a-i))

#! ------------------------------------------------
print("\n")
#! ------------------------------------------------

num = int(input("원하는 단은? "))

for i in range(1,10):
  times = i * num
  print(f"{num} x {i} = {times}")

#! ------------------------------------------------
print("\n")
#! ------------------------------------------------

a = 0

while True:
  b = int(input("숫자 입력 : "))
  a = a + b
  y_or_n = input("계속?(y/n) : ")

  if(y_or_n == 'y'):
    continue
  elif(y_or_n == 'n'):
    print(a)
    break
  else:
    print("y 또는 n 을 입력하세요.")
    break

