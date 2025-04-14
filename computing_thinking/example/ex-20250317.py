print("원본")

name = input("이름")
print("안녕?", name, "만나서 반가워!!")

year = int(input("몇 년도에 태어났나요?"))
age = 2025 - year
print("그럼 올해", age, "살이겠군요.")

a = float(input("첫번째 실수 입력 : "))
b = float(input("두번쨰 실수 입력 : "))
c = a + b
print(a, "더하기", b, "의 값은", c)

#! ------------------------------------------------
print("\n")
#! ------------------------------------------------

print("양식 문자 변환")

name = input("이름")
print("안녕? %s 만나서 반가워!!" %name)

year = int(input("몇 년도에 태어났나요?"))
age = 2025 - year
print("그럼 올해 %d 살이겠군요." %age)

a = float(input("첫번째 실수 입력 : "))
b = float(input("두번쨰 실수 입력 : "))
c = a + b
print("%f 더하기 %f 의 값은 %f" %(a, b, c))

#! ------------------------------------------------
print("\n")
#! ------------------------------------------------

print("f 포멧팅 변환")

name = input("이름")
print(f"안녕?{name}만나서 반가워!!")

year = int(input("몇 년도에 태어났나요?"))
age = 2025 - year
print(f"그럼 올해{age}살이겠군요.")

a = float(input("첫번째 실수 입력 : "))
b = float(input("두번쨰 실수 입력 : "))
c = a + b
print(f"{a}더하기{b}의 값은{c}")

#! ------------------------------------------------
print("\n")
#! ------------------------------------------------

korean = float(input("국어 점수 입력 : "))
english = float(input("영어 점수를 입력 : "))
math = float(input("수학 점수를 입력 : "))

print(f"국어 점수는 %f점\n영어 점수는 %f점\n수학 점수는 %f점"%(korean, english, math))

#! ------------------------------------------------
print("\n")
#! ------------------------------------------------

school = str(input("학교 : "))
lesson = str(input("학과 : "))
grade = int(input("학년 : "))

print(f"저는 {school} {lesson} {grade}학년 입니다.")


'''
다음 예제 추가
'''

print(f"내년에는 {grade + 1}학년이 됩니다.")