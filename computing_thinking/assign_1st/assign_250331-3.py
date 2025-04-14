m_or_g = input("성별을 입력하세요.(남/여) : ")
count = int(input("팔굽혀펴기를 몇회하셨나요?"))

if(m_or_g == "남"):
  if(count >= 10):
    print("합격(Pass)입니디.")
  else:
    print("불합격(Fail)입니다.")
else:
  if(count >= 5):
    print("합격(Pass)입니다.")
  else:
    print("불합격(Fail)입니다.")