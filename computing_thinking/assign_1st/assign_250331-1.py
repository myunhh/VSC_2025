num = int(input("정수를 입력하시요 : "))

if(num > 0):
  if(num % 2 == 0):
    print(f"{num}은 짝수 입니다.")
  else:
    print(f"{num}은 홀수 입니다.")
elif(num == 0):
  print("0을 입력하셨습니다.")
else:
  print(f"{num}은 음수 입니다.")