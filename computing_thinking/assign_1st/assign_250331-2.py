weight = int(input("수박의 무게를 입력하세요 : "))

if(weight >= 10):
  print("1등급 입니다.")
elif(7 <= weight < 10):
  print("2등급 입니다.")
elif(4 <= weight < 7):
  print("3등급 입니다.")
else:
  print("4등급 입니다.")