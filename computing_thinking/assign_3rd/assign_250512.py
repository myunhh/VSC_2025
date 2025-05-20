english = ["지민", "서준", "하은", "민재", "유진", "예린"]
math = ["유진", "서준", "은우", "하린", "지아", "다은"]

set_eng = set(english)
set_math = set(math)

print(f"학원(영어, 수학 상관 없음)에 다니는 학생은?\n{set_eng.union(set_math)}")
print(f"두 학원에 모두 다니는 학생은?\n{set_eng.intersection(set_math)}")
print(f"영어 학원만 다니는 학생은?\n{set_eng.difference(set_math)}")
print(f"수학 학원만 다니는 학생은?\n{set_math.difference(set_eng)}")