
num_1 = int(input("숫자를 입력 : "))

if(num_1 % 2 == 0):
  print(f"{num_1} 은 짝수 입니다.")
else:
  print(f"{num_1} 은 홀수 입니다.")

#! ------------------------------------------------
print("\n\n\n")
#! ------------------------------------------------

id = input("ID를 입력 : ")
pw = input("PW를 입력 : ")

if(id == "admin"):
  if(pw == "1234"):
    print("로그인 성공")
  else:
    print("비밀번호 오류")
else:
  print("ID 오류")

#! ------------------------------------------------
print("\n\n\n")
#! ------------------------------------------------

price = int(input("가격을 입력 : "))

is_member_check = input("회원이십니까(y/n) : ")

if(is_member_check == 'y'):
  is_member = True
elif(is_member_check == 'n'):
  is_member = False

if(price >= 50000):
  if(is_member == True):
    print("할인 적용")
  else:
    print("할인 미적용")
else:
  print("할인 미적용")

#! ------------------------------------------------
print("\n\n\n")
#! ------------------------------------------------

pencil_2000 = int(input("2000원 연필의 개수를 입력 : "))
pencil_3000 = int(input("3000원 연필의 개수를 입력 : "))

total_price = pencil_2000 * 2000 + pencil_3000 * 3000

if(total_price >= 20000):
  print("10% 할인 대상입니다.\n")
  print(f"지불할 금액은 {total_price * 0.9} 원 입니다.")
else:
  print("할인 대상이 아닙니다.")

#! ------------------------------------------------
print("\n\n\n")
#! ------------------------------------------------

score_math = int(input("수학 점수를 입력 : "))
score_eng = int(input("영어 점수를 입력 : "))

if(score_math >= 90):
  if(score_eng >= 80):
    print("합격입니다.")
  else:
    print("불합격 입니다.")
else:
  print("불합격 입니다.")