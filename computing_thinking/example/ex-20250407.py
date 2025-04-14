height = int(input("피라미드의 높이를 입력하세요 : "))

for i in range(1, height + 1):
  print(" " * (height-i), "*" * (i*2-1))
  
#! ------------------------------------------------
print("\n")
#! ------------------------------------------------

import random as r

num = r.randint(1, 100)
attemp = 1

while True:
  expect = int(input("숫자 입력 : "))

  if(expect > num):
    print(f"{expect}보다 작습니다.")
    attemp = attemp + 1
  elif(expect < num):
    print(f"{expect}보다 큽니다.")
    attemp = attemp + 1
  else:
    print("축하합니다.")
    print(f"총 입력 횟수 : {attemp}")
    break

#! ------------------------------------------------
print("\n")
#! ------------------------------------------------

