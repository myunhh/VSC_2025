num = {'one' : '하나', 'two' : '둘', 'three' : '셋', 'four' : '넷'}

char = input("단어 : ")

if(char in num):
  print(num[char])
else:
  print("없는 단어입니다.")